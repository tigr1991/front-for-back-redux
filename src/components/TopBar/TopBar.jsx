import React from 'react'
import styles from './TopBar.styl'
import NavBar from 'components/NavBar'
import links from 'constants/navigation'

const TopBar = () => (
	<header className={`${styles.wrapper} row p-a shadow-lg`} >
		<NavBar className={styles.navbar} links={links} />
	</header>
)

export default TopBar