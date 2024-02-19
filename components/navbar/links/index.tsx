import React from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

const Links: React.FC = () => {
	return (
		<>
			<ul className={styles.links}>
				<li>
					<Link href='#'>
						<h6>About us</h6>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<h6>Services</h6>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<h6>Why DevOptima</h6>
					</Link>
				</li>
			</ul>
		</>
	);
};

export default Links;
