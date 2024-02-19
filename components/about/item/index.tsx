import React from 'react';
import styles from './styles.module.scss';
import IItemProps from './interface';
import Image from 'next/image';

const Item: React.FC<IItemProps> = ({ img, title, subtitle }) => {
	return (
		<div className={styles.item}>
			<Image src={img} alt='icon-1' width={96} height={96} />
			<div>
				<h5>{title}</h5>
				<h6 className='w-[242px]'>{subtitle}</h6>
			</div>
		</div>
	);
};

export default Item;
