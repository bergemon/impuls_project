import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Navbar } from '@/components/navbar'
import { categoryLangUrl, categoryType } from '@/types/categoriesType'
import { SideBar } from '@/components/sideBar/sideBar'
import { socialsType } from '@/types/socials'
import React, { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import { useDarkMode } from '@/utils/useDarkMode'
import { categoryData } from '@/types/postsType'
import { Montserrat } from 'next/font/google'

const font = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--font-montserrat',
    fallback: ['Arial', 'sans-serif']
})

type LayoutProps = {
    children: React.ReactNode
    categories: categoryType[]
    isNavBarOpen: Boolean
    openNavBar: Dispatch<SetStateAction<Boolean>>
    socials: socialsType
    lang: string
    isCat?: boolean
    thisCategory?: categoryData
    translations?: boolean[]
    notFoundPage?: boolean
}

export default function PageLayout(props: LayoutProps) {
    const [isOpenedSlideBar, setIsOpenedSlideBar] = useState<boolean>(false)

    const [show, setShow] = useState<boolean>(false)
    const handleClose = () => setShow(false)

    const [ theme, setTheme ] = useDarkMode()

    let isDark
    theme === 'dark' ? isDark = true : isDark = false

    return (
        <div
            className={`${isDark ? "dark-theme" : ""} ${font.variable}`}
        >
            <Navbar
                isNavBarOpen={props.isNavBarOpen}
            />
            <Header
                isNavBarOpen={props.isNavBarOpen}
                openNavBar={props.openNavBar}
                categories={props.categories}
                setShow={setShow}
                lang={props.lang}
                isDark={isDark}
                setDark={setTheme}
                isCat={props.isCat}
                thisCategory={props.thisCategory}
                translations={props.translations}
                notFoundPage={props.notFoundPage}
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
                isDark={isDark}
            />
        </div>
    )
}