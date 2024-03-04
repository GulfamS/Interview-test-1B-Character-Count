import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {searchInput: '', wordsList: []}

  one = event => {
    this.setState({searchInput: event.target.value})
  }

  add = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const addedItems = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, addedItems],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, wordsList} = this.state

    return (
      <div className="main-container">
        <div className="first-cart">
          <h1 className="first-cart-heading">
            Count the characters like a Boss...
          </h1>
          <div className="container">
            {wordsList.length > 0 ? (
              <ul className="list-container">
                {wordsList.map(eachItem => (
                  <li key={eachItem.id}>
                    <p className="list-item" key={eachItem.id}>
                      {eachItem.item} : {eachItem.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="input-img"
              />
            )}
          </div>
        </div>
        <div className="second-cart">
          <h1 className="second-cart-heading">Character Counter</h1>
          <form onSubmit={this.add}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter the Characters here"
                className="input"
                value={searchInput}
                onChange={this.one}
              />
              <button type="submit" className="add-btn" onClick={this.add}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default App
