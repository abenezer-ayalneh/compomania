import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { stagger, Variants } from 'motion'

const raysVariants: Variants = {
	hidden: {
		strokeOpacity: 0,
		transition: {
			delayChildren: stagger(0.04),
		},
	},
	visible: {
		strokeOpacity: 1,
		transition: {
			delayChildren: stagger(0.04, { from: 'last' }),
		},
	},
}

const rayVariant: Variants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		scale: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
			pathLength: { duration: 0.3 },
			opacity: { duration: 0.3 },
			scale: { duration: 0.4 },
		},
	},
}

export default function ThemeButton() {
	const { theme, setTheme } = useTheme()

	const sunPath =
		'M42.6667 59.3333C51.8714 59.3333 59.3333 51.8714 59.3333 42.6667C59.3333 33.4619 51.8714 26 42.6667 26C33.4619 26 26 33.4619 26 42.6667C26 51.8714 33.4619 59.3333 42.6667 59.3333Z'

	const moonPath =
		'M42.6667 59.3333C51.8714 59.3333 59.3333 51.8714 59.3333 42.6667C45.5523 47.7521 38.9069 39.4435 42.6667 26C33.4619 26 26 33.4619 26 42.6667C26 51.8714 33.4619 59.3333 42.6667 59.3333Z'

	return (
		<button
			onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
			className="w-14 h-14 shadow-2xl border border-gray-100 rounded-xl p-2 cursor-pointer">
			<motion.svg viewBox="-2 -2 90 90" fill="none" preserveAspectRatio="xMidYMid meet" className="w-full h-full block">
				<motion.path
					initial={{ fillOpacity: 0, strokeOpacity: 0 }}
					animate={
						theme === 'dark'
							? {
									fillOpacity: 0.35,
									strokeOpacity: 1,
									// rotate: 360,
									stroke: 'var(--color-blue-100)',
									fill: 'var(--color-blue-400)',
									strokeWidth: 2,
									d: moonPath,
									scale: 1.75,
								}
							: {
									fillOpacity: 0.35,
									strokeOpacity: 1,
									rotate: 0,
									stroke: 'var(--color-yellow-600)',
									fill: 'var(--color-yellow-600)',
									strokeWidth: 2,
									d: sunPath,
									scale: 1,
								}
					}
					d={sunPath}
				/>

				<motion.g
					variants={raysVariants}
					initial="hidden"
					animate={theme === 'dark' ? 'hidden' : 'visible'}
					stroke-linecap="round"
					stroke-linejoin="round"
					className="stroke-6 stroke-yellow-600">
					<motion.path variants={rayVariant} d="M13.2083 13.208L19.0833 19.083" />
					<motion.path variants={rayVariant} d="M1 42.6665H9.33333" />
					<motion.path variants={rayVariant} d="M19.0833 66.25L13.2083 72.125" />
					<motion.path variants={rayVariant} d="M42.6667 76V84.3333" />
					<motion.path variants={rayVariant} d="M66.25 66.25L72.125 72.125" />
					<motion.path variants={rayVariant} d="M76 42.6665H84.3333" />
					<motion.path variants={rayVariant} d="M72.125 13.208L66.25 19.083" />
					<motion.path variants={rayVariant} d="M42.6667 1V9.33333" />
				</motion.g>
			</motion.svg>
		</button>
	)
}
