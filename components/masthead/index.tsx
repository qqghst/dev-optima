import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Input from './input';
import Title from './title';
import Subtitle from './subtitle';

const Masthead: React.FC = () => {
	return (
		<section className={styles.masthead}>
			<div className={styles.masthead__container}>
				<div className={styles.leftSide}>
					<Title />
					<Subtitle />
					<Input />
				</div>
				<div className={styles.rightSide}>
					<Image src='/masthead/illustration.png' alt='illustration' width={589} height={415} />
				</div>
			</div>
			{/* это круглые прозрачные элипсы */}
			<div className='absolute top-0 left-0 -z-0'>
				<Image src='/masthead/ellipse-left-corner.png' alt='ellipse' width={1600 / 2} height={1600 / 2} />
			</div>
			<div className='absolute top-[13vw] left-[54vw] -z-0'>
				<Image src='/masthead/ellipse-illustration.png' alt='ellipse' width={1600 / 2} height={1600 / 2} />
			</div>
		</section>
	);
};

export default Masthead;
