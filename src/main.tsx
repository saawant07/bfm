import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PricingDemo from './components/PricingDemo'
import './index.css'

// Mount the Process scroll component
const reactRoot = document.getElementById('react-root')
if (reactRoot) {
  ReactDOM.createRoot(reactRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

// Mount the Pricing cards component
const pricingRoot = document.getElementById('pricing-root')
if (pricingRoot) {
  ReactDOM.createRoot(pricingRoot).render(
    <React.StrictMode>
      <PricingDemo />
    </React.StrictMode>,
  )
}
