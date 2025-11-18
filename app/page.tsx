'use client'

import { useState } from 'react'

import HamburgerMenuButton from '@/components/UI/HamburgerMenuButton/HamburgerMenuButton'

import styles from './app.module.css'

export default function Home() {
	const [isSideBarOpen, setIsSideBarOpen] = useState<boolean | undefined>(undefined)

	const toggleSideBar = () => {
		setIsSideBarOpen((currentValue) => !currentValue)
	}

	return (
		<div className={'w-screen h-screen flex transition-none'}>
			{/*Left side*/}
			<div
				className={`bg-pink-400 flex items-center justify-center p-8 shadow-2xl ${styles.sideBar} ${isSideBarOpen !== undefined && (isSideBarOpen ? styles.showSideBar : styles.hideSideBar)}`}>
				<p>Left side</p>
			</div>

			{/*Right side*/}
			<div className={'w-full h-full flex flex-col'}>
				{/*	Header*/}
				<div className="w-full h-10 md:h-14 flex justify-start items-center px-2 bg-amber-900 relative" aria-expanded={isSideBarOpen}>
					<HamburgerMenuButton onClick={toggleSideBar} className="z-[60] absolute" />
				</div>

				{/*	Content section*/}
				<div className={'flex-grow bg-white flex justify-center items-center'}></div>
			</div>
		</div>
	)
}
