import {Component} from 'react'
import './index.css'

import WatchCollections from '../WatchCollections'

class AppleWatch extends Component {
  state = {
    isClicked: false,
  }

  onClickGetStarted = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state
    return (
      <div>
        {' '}
        {isClicked ? (
          <WatchCollections />
        ) : (
          <div>
            <div className="icon-container">
              <i className="fa-brands fa-apple icon" />
              <h5> WATCH </h5>
            </div>
            <div className="watch-container">
              <div className="container">
                <p> Apple Watch Studio </p>
                <h1 className="heading-1"> Choose a case. </h1>
                <h1 className="heading-1"> Pick a band. </h1>
                <h1 className="heading-1"> Create your own style. </h1>
                <button
                  type="button"
                  className="get-started-button"
                  onClick={this.onClickGetStarted}
                >
                  Get Started
                </button>
              </div>
              <div className="image-container">
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYA33ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=czdWc1FNWHZRRGZrVTlpcjVQTEJxVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM"
                  alt="band"
                  className="base-image"
                />
                <img
                  src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
                  alt="die"
                  className="overlay-image"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default AppleWatch
