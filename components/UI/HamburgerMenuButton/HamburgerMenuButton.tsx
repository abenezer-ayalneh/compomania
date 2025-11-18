import React, { ComponentProps, useState } from 'react'

import styles from './HamburgerMenuButton.module.css'

export default function HamburgerMenuButton({ className, onClick, ...props }: ComponentProps<'button'>) {
	const [isExpanded, setIsExpanded] = useState(false)

	const toggleMenuButton = (event: React.MouseEvent<HTMLButtonElement>) => {
		setIsExpanded((currentValue) => {
			return !currentValue
		})
		if (onClick) {
			onClick(event)
		}
	}

	return (
		<button
			onClick={toggleMenuButton}
			className={`h-8 md:h-10 lg:h-12 aspect-square cursor-pointer ${styles.buttonOne} ${className}`}
			aria-expanded={isExpanded}
			{...props}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 10 10"
				strokeWidth="1px"
				stroke="#333"
				strokeLinecap="round"
				className="stroke-black stroke-1 fill-none transition-all duration-1000 ease-in-out">
				<path d="M2 3H5" stroke="black" strokeLinecap="round" className={styles.line} />
				<path d="M5 3H8" stroke="black" strokeLinecap="round" className={styles.line} />
				<path d="M2 5H8" stroke="black" strokeLinecap="round" className={styles.line} />
				<path d="M2 7H5" stroke="black" strokeLinecap="round" className={styles.line} />
				<path d="M5 7H8" stroke="black" strokeLinecap="round" className={styles.line} />
			</svg>
		</button>
	)
}
