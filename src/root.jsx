import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'components/Home'
import About from 'components/About'
import TopBar from 'components/TopBar'
import Layout from 'components/Layout'
import links from 'constants/navigation'

const App = () => (
  <Router>
    <Layout>
      <TopBar links={links} />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Layout>
  </Router>
)

const Root = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Root
