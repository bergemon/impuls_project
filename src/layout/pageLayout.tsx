import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Navbar } from '@/components/navbar'
import { categoryType } from '@/types/categoriesType'
import { SideBar } from '@/components/sideBar/sideBar'
import { socialsType } from '@/types/socials'
import React from 'react'
import { useState } from 'react'
import { Montserrat } from 'next/font/google'
import { useDarkMode } from '@/utils/useDarkMode'
import { categoryData } from '@/types/postsType'

const font = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    fallback: ['Arial', 'sans-serif']
})

type LayoutProps = {
    children: React.ReactNode
    categories: categoryType[]
    socials: socialsType
    lang: string
    isCat?: boolean
    thisCategory?: categoryData
}

export default function PageLayout(props: LayoutProps) {
    const [isOpenedSlideBar, setIsOpenedSlideBar] = useState<boolean>(false)
    const [isNavBarOpen, openNavBar] = useState<Boolean>(false)

    const [show, setShow] = useState<boolean>(false)
    const handleClose = () => setShow(false)

    const [ theme, setTheme ] = useDarkMode()

    let isDark
    theme === 'dark' ? isDark = true : isDark = false

    console.log(isNavBarOpen)

    return (
        <div
            className={`${isDark ? "dark-theme" : ""} ${font.className}`}
        >
            <Navbar
                isNavBarOpen={isNavBarOpen}
            />
            <Header
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
                categories={props.categories}
                setShow={setShow}
                lang={props.lang}
                isDark={isDark}
                setDark={setTheme}
                isCat={props.isCat}
                thisCategory={props.thisCategory}
            />
                {/* Page aka screen body */}
                {props.children}
            <Footer
                socials={props.socials}
            />
            <SideBar
                show={show}
                handleClose={handleClose}
                categories={props.categories}
                isOpenedSlideBar={isOpenedSlideBar}
                setIsOpenedSlideBar={setIsOpenedSlideBar}
                socials={props.socials}
            />
        </div>
    )
}