// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onClickedContent = event => {
        onToggleShowContent(event)
      }
      const onClickedLeftNavbar = event => {
        onToggleShowLeftNavbar(event)
      }
      const onClickedRightNavbar = event => {
        onToggleShowRightNavbar(event)
      }
      return (
        <div className="conf-cont-container">
          <h1 className="layout-heading">Layout</h1>
          <div className="checkboxes-container">
            <div className="check-box-element">
              <input
                type="checkbox"
                id="content"
                onChange={onClickedContent}
                value={showContent}
                checked={showContent}
              />
              <label htmlFor="content" className="label-style">
                Content
              </label>
            </div>
            <div className="check-box-element">
              <input
                type="checkbox"
                id="content"
                onChange={onClickedLeftNavbar}
                value={showLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="content" className="label-style">
                Left Navbar
              </label>
            </div>
            <div className="check-box-element">
              <input
                type="checkbox"
                id="content"
                onChange={onClickedRightNavbar}
                value={showRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="content" className="label-style">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
