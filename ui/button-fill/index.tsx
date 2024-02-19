import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import IButtonFillProps from './interface';

const ButtonFill: React.FC<IButtonFillProps> = ({ children }) => {
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

export default ButtonFill;
