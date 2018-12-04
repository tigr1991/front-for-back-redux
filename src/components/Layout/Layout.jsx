import React from 'react'
import styles from './Layout.styl'

const Layout = ({ children }) => (
	<div className={`${styles.wrapper} p-x-2 p-b-2`}>
		{children}
	</div>
)


export default Layout