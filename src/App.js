import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController/index'

import Layout from './components/Layout/index'
import ConfigurationContext from './context/ConfigurationContext'
import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  onToggleShowContent = event => {
    // console.log(event.target.checked)
    this.setState({
      showContent: event.target.checked,
    })
  }

  onToggleShowLeftNavbar = event => {
    console.log(event.target.checked)
    this.setState({
      showLeftNavbar: event.target.checked,
    })
  }

  onToggleShowRightNavbar = event => {
    // console.log(event.target.checked)
    this.setState({
      showRightNavbar: event.target.checked,
    })
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="main-container">
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
