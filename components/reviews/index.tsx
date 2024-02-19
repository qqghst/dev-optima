import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Review from './review';

const Reviews: React.FC = () => {
	return (
		<section className={styles.reviews}>
			<div className={styles.reviews__container}>
				<Review
					img='/reviews/icon-1.svg'
					text='Thanks to DevOptima, our team can focus more on innovation and less on operational challenges. Their
				cloud management solutions are top-notch.'
					imgHuman='/reviews/human-1.png'
					name='John Smith'
					jobTitle='IT Director at Reflex'
				/>

				<Review
					img='/reviews/icon-2.svg'
					text='DevOptima has been a game-changer for us. With their support, weve shifted our focus from operational hurdles to pushing boundaries in innovation.'
					imgHuman='/reviews/human-2.png'
					name='Jane Doe'
					jobTitle='Tech Lead at Dribble'
				/>
			</div>
		</section>
	);
};

export default Reviews;
