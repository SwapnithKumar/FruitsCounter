import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoCount = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaCount = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">
            Bob ate <span className="eat-count">{mango}</span> mangoes{' '}
            <span className="eat-count">{banana}</span> bananas
          </h1>
          <div className="fruits-container">
            <li className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit"
              />
              <button className="button" onClick={this.mangoCount}>
                Eat Mango
              </button>
            </li>
            <li className="fruit-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit"
              />
              <button className="button" onClick={this.bananaCount}>
                Eat Banana
              </button>
            </li>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
