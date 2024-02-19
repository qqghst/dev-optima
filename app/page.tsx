import React from 'react';
import styles from './page.module.scss';
import Masthead from '@/components/masthead';
import About from '@/components/about';
import InnovateSolutions from '@/components/innovate-solutions';
import Reviews from '@/components/reviews';
import ReadyToElevate from '@/components/react-to-elevate';

const Home = () => {
	return (
		<main className={styles.main}>
			<Masthead />
			{/* <About /> */}
			{/* <InnovateSolutions /> */}
			{/* <Reviews />  */}
			{/* <ReadyToElevate /> */}
		</main>
	);
};

export default Home;
