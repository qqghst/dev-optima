import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import ButtonBorder from '@/ui/button-border';
import Logo from './logo';
import Links from './links';

const Navbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__container}>
				<Logo />
				<Links />
				<ButtonBorder>Get started</ButtonBorder>
			</div>
		</nav>
	);
};

export default Navbar;
