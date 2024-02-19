import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Item from './item';

const About: React.FC = () => {
	return (
		<section className={styles.about}>
			<div className={styles.about__container}>
				<Image src='/about/panel2.webp' alt='panel' width={1000 / 2} height={638 / 2} />
				<div>
					<div className={styles.titleContainer}>
						<h2>What is DevOptima?</h2>
						<h5 className='w-[630px]'>
							At DevOptima, we are a team of passionate DevOps experts committed to transforming the way
							businesses approach software development and operations.
						</h5>
					</div>
					<div className={styles.itemContainer}>
						<Item
							img='/about/icon-1.png'
							title='DevOps transformation'
							subtitle='Reshaping businesses with DevOps expertise.'
						/>
						<Item
							img='/about/icon-2.png'
							title='Efficient operations'
							subtitle='Streamline processes for productivity gains.'
						/>
						<Item
							img='/about/icon-3.png'
							title='CI/CD implementation'
							subtitle='Seamless software delivery pipeline.'
						/>
						<Item
							img='/about/icon-4.png'
							title='Automation mastery'
							subtitle='Unlock full automation potential.'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
