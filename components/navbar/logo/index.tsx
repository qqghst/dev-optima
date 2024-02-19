import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

const Logo: React.FC = () => {
	return (
		<>
			<Image className={styles.logo} src='/navbar/logo.svg' alt='logo' width={346 / 2} height={96 / 2} />
		</>
	);
};

export default Logo;
