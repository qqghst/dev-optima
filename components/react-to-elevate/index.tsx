import React from 'react';
import styles from './styles.module.scss';
import ButtonFill from '@/ui/button-fill';
import ButtonBorder from '@/ui/button-border';
import Image from 'next/image';

const ReadyToElevate: React.FC = () => {
	return (
		<section className={styles.readyToElevate}>
			<div className={styles.readyToElevate__container}>
				<div>
					<h2>Ready to elevate your DevOps strategy?</h2>
					<h5>
						Join the multitude of companies benefiting from optimized DevOps practices. Contact us to
						discover how DevOptima can help your business.
					</h5>
				</div>
				<div>
					<ButtonFill>Contact us</ButtonFill>
					<ButtonBorder>Try for free</ButtonBorder>
				</div>
			</div>

			{/* элипсы */}
			<div className='absolute top-0 left-0'>
				<Image src='/ready-to-elevate/ellipse-left.png' alt='ellipse-left' width={1600 / 2} height={1600 / 2} />
			</div>
			<div className='absolute top-0 right-0'>
				<Image
					src='/ready-to-elevate/ellipse-right.png'
					alt='ellipse-left'
					width={1600 / 2}
					height={1600 / 2}
				/>
			</div>
		</section>
	);
};

export default ReadyToElevate;
