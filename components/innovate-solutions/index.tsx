import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

const InnovateSolutions: React.FC = () => {
	return (
		<section className={styles.innovateSolutions}>
			<div className={styles.innovateSolutions__container}>
				<div className={styles.textContainer}>
					<h2>Innovative solutions for operational excellence</h2>
					<h5>
						Tailored DevOps expertise driving your business momentum. Personalized solutions for growth and
						evolution.
					</h5>
				</div>
				<div className='flex flex-row'>
					<Image
						src='/innovate-solutions/1.webp'
						alt='Continuous Integration & Deployment'
						width={380}
						height={459}
					/>
					<Image
						src='/innovate-solutions/2.webp'
						alt='Cloud Solutions & Infrastructure Management'
						width={380}
						height={459}
					/>
					<Image
						src='/innovate-solutions/3.webp'
						alt='Automated Testing & Quality Assurance'
						width={380}
						height={459}
					/>
				</div>
			</div>
		</section>
	);
};

export default InnovateSolutions;
