import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from 'root'
import configureStore from 'configureStore'

const store = configureStore()

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<Component store={store} />
		</AppContainer>,
		document.getElementById('root'))
}

render(Root)

// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept()
}