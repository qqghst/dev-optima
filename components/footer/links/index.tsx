import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import IFooterProps from './interface';

const Links: React.FC<IFooterProps> = ({title, item1, item2, item3, item4}) => {
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
						<span>{item1}</span>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<span>{item2}</span>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<span>{item3}</span>
					</Link>
				</li>
                <li>
					<Link href='#'>
						<span>{item4}</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Links;
