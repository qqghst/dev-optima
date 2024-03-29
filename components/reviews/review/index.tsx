import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import IReviewProps from './interface';

const Review: React.FC<IReviewProps> = ({ img, text, imgHuman, name, jobTitle }) => {
	return (
		<div className={styles.review}>
			<Image className={styles.icon} src={img} alt='icon' width={128 / 2} height={128 / 2} />
			<div className={styles.textContainer}>
				<h4>{text}</h4>

				<div className='flex flex-row items-center gap-[12px]'>
					<Image src={imgHuman} alt='human-1' width={88 / 2} height={88 / 2} />
					<div className='flex flex-col'>
						<span className='text-[18px] text-white'>{name}</span>
						<span className='text-[15px] text-white'>{jobTitle}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Review;
