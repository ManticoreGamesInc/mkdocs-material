/* eslint-disable no-unused-vars */
/* eslint-disable no-invalid-this */
/* eslint-disable no-shadow */
import { Workbox } from "workbox-window"

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const wb = new Workbox("/sw.js")
    const updateButton = document.querySelector("#app-update-prompt")
    // Fires when the registered service worker has installed but is waiting to activate.
    wb.addEventListener("waiting", event => {
      updateButton.classList.add("show")
      updateButton.addEventListener("click", () => {
        // Set up a listener that will reload the page as soon as the previously waiting service worker has taken control.
        wb.addEventListener("controlling", event => {
          window.location.reload()
        })

        // Send a message telling the service worker to skip waiting.
        // This will trigger the `controlling` event handler above.
        wb.messageSW({ type: "SKIP_WAITING" })
      })
    })
    wb.register()
  })
}

// Detects if device is on iOS
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}

// Detects if device is in standalone mode
const isInStandaloneMode = () =>
  "standalone" in window.navigator && window.navigator.standalone

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  this.setState({ showInstallMessage: true })
}
