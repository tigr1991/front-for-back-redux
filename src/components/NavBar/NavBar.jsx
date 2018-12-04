import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.styl';

const NavBar = ({ links, children }) => (
	<nav className="row">
		{links.map(item => (
			<NavLink
				exact
				activeClassName={styles.active}
				className={styles.link}
				to={item.to}
				key={item.label}
			>
				<div className="m-x-sm">
					{item.label && (
						<span className={`${styles.text} m-x-sm`}>{item.label}</span>
					)}
				</div>
			</NavLink>
		))}
		{children}
	</nav>
)

NavBar.propsTypes = {
	children: null
}

NavBar.defaultProps = {
	links: PropTypes.array.isRequired,
	children: null
}

export default NavBar
