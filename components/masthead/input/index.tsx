import React from 'react';
import styles from './styles.module.scss'
import ButtonFill from '@/ui/button-fill';

const Input: React.FC = () => {
	return (
		<form action='#' method='post'>
			<div className={styles.inputContainer}>
				<input type='text' placeholder='Your business email...' />
                <ButtonFill>Free trial</ButtonFill>
			</div>
		</form>
	);
};

export default Input;
