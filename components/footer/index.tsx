import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Links from './links';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<div className='flex flex-col gap-[136px]'>
					<Image src='/footer/logo.png' alt='logo' width={288 / 2} height={80 / 2} />
					<p className='text-[14px] text-white'>Devoptima 2023 © All rights reserved</p>
				</div>
				<div className='flex flex-row gap-[176px] items-start'>
					<Links title='Resources' item1='Docs' item2='Release notes' item3='Security' isVisibleIcon={false}  />
					<Links title='Community' item1='Twitter' icon1='/footer/twitter.svg' item2='Linkedin' icon2='/footer/linkedin.svg' item3='Github' icon3='/footer/github.svg' item4='Discource' icon4='/footer/discourse.svg' isVisibleIcon={true}/>
					<Links title='Legal' item1='Privacy policy' item2='Terms of services' isVisibleIcon={false} />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
