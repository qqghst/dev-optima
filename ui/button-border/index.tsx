import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import IButtonBorderProps from './interface';

const ButtonBorder: React.FC<IButtonBorderProps> = ({ children }) => {
	return (
		<>
			<button className={styles.buttonBorder}>
				<Link href='#'>
					<h6>{children}</h6>
				</Link>
			</button>
		</>
	);
};

export default ButtonBorder;
