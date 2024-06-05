// Write your code here
import ConfigurationController from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationController.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          <ul className="un-order-boxes">
            {showLeftNavbar && (
              <ul className="left-box">
                <h1 className="boxes-heading">Left Navbar Menu</h1>
                <ul className="left-box-lists">
                  <li className="list-items">Item 1</li>
                  <li className="list-items">Item 2</li>
                  <li className="list-items">Item 3</li>
                  <li className="list-items">Item 4</li>
                  <li className="list-items">Item 5</li>
                </ul>
              </ul>
            )}
            {showContent && (
              <li className="middle-box">
                <h1 className="boxes-heading">Content</h1>
                <p className="list-items">
                  Lorem Ipsum dolor sit amet, consectetar adipiscing elit, sed
                  do elusmod tempor incididunt ut labore et dolare magna aliqua.
                  Ut enim and minim veniam.
                </p>
              </li>
            )}
            {showRightNavbar && (
              <li className="left-box">
                <h1 className="boxes-heading">Right Navbar Menu</h1>
                <ul className="left-box-lists">
                  <li className="right-list-items">Ad 1</li>
                  <li className="right-list-items">Ad 2</li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      )
    }}
  </ConfigurationController.Consumer>
)
export default Body
