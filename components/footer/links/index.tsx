import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import IFooterProps from './interface';

const Links: React.FC<IFooterProps> = ({
	title,
	item1,
	item2,
	item3,
	item4,
	icon1,
	icon2,
	icon3,
	icon4,
	isVisibleIcon,
}) => {
	return (
		<div className={styles.links}>
			<ul>
				<li>
					<Link href='#'>
						<span>{title}</span>
					</Link>
				</li>
				<li>
					<Link href='#'>
						{isVisibleIcon && <Image src={icon1} alt='icon' width={32 / 2} height={32 / 2} />}
						<span>{item1}</span>
					</Link>
				</li>
				<li>
					<Link href='#'>
						{isVisibleIcon && <Image src={icon2} alt='icon' width={32 / 2} height={32 / 2} />}
						<span>{item2}</span>
					</Link>
				</li>
				<li>
					<Link href='#'>
						{isVisibleIcon && <Image src={icon3} alt='icon' width={32 / 2} height={32 / 2} />}
						<span>{item3}</span>
					</Link>
				</li>
				<li>
					<Link href='#'>
						{isVisibleIcon && <Image src={icon4} alt='icon' width={32 / 2} height={32 / 2} />}
						<span>{item4}</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Links;
