import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
	return (
		<>
			<Link href='#' className={styles.link}>
				<Image className={styles.logo} src='/navbar/logo.svg' alt='logo' width={346 / 2} height={96 / 2} />
			</Link>
		</>
	);
};

export default Logo;
