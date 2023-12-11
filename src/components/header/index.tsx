import { Dispatch, SetStateAction, useState } from 'react'
import { DropDownCategory } from './dropDownCategory'
import { HeaderLogo } from './headerLogo'
import { ChoiseTheme } from './choiseTheme'
import { LangBar } from './langBar'
import { categoryType } from '@/types/categoriesType'
import { categoryData } from '@/types/postsType'
import { useTranslation } from 'next-i18next'

export const Header: React.FC<{
    isNavBarOpen: Boolean
    openNavBar: Dispatch<SetStateAction<Boolean>>
    categories: categoryType[]
    setShow: Dispatch<SetStateAction<boolean>>
    lang: string
    isDark: boolean
    setDark: Dispatch<SetStateAction<string>>
    isCat?: boolean
    thisCategory?: categoryData
}> = ({...props}) => {
    const { t, i18n } = useTranslation('locale')
    const [isOpenedMobNavbar, openMobNavbar] = useState<boolean>(false)
    
    return (
        <header className={'tc-header-style10 home-style10'}>
            <nav className={"navbar navbar-expand-lg navbar-dark style-10 px-lg-5"}>
                <div className="container-fluid p-0">
                    <HeaderLogo
                        openMobNavbar={openMobNavbar}
                    />
                    <div className={`collapse navbar-collapse custom-height ${isOpenedMobNavbar ? "show" : ""}`} id="navbarSupportedContent">
                        <DropDownCategory categories={props.categories} lang={props.lang} />
                        <div className="nav-side">
                            <LangBar />
                            <ChoiseTheme
                                isDark={props.isDark}
                                setDark={props.setDark}
                            />

                            {/* Кнопка поиска */}
                            <a style={{ cursor: 'pointer' }}
                                className={props.isNavBarOpen ? "icon-link search-btn-style1"
                                    : "icon-link search-btn-style1"}
                                onClick={() => { props.openNavBar( prev => !prev) }}
                            >
                                <i style={{
                                    opacity: !props.isNavBarOpen ? 1 : 0,
                                    display: 'inline-block',
                                    transition: 'opacity .2s linear'
                                }}
                                    className="la la-search sOpen-btn"
                                />
                                <i style={{
                                    opacity: props.isNavBarOpen ? 1 : 0,
                                    display: 'inline-block',
                                    transition: 'opacity .2s linear'
                                }}
                                    className="la la-close sClose-btn"
                                />
                            </a>
                            {/* Кнопка поиска сверху */}

                            {/* Бургер кнопка */}
                            <button
                                className="navbarList-icon"
                                onClick={() => props.setShow(true)}
                            >
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {
                props.isCat && 
                <div
                    className="tc-categories pt-50 pb-50"
                    style={{backgroundImage: `url(/assets/img/category.png)`}}
                >
                    <div className="container">
                        <div className="content text-center">
                            <h2 className="main-title">{props.thisCategory?.name}</h2>
                            <p className="fsz-16px">{t('cat_sPage.hatText')}.</p>
                        </div>
                    </div>
                </div>
            }
        </header>
    )
}