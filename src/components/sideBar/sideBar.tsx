import { Dispatch, SetStateAction } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import styles from "./sideBar.module.css"
import { categoryType } from '@/types/categoriesType'
import { socialsType } from '@/types/socials'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useDarkMode } from '@/utils/useDarkMode'

const SlideBarCatCards: React.FC<{
    category: categoryType
}> = (props) => {

    return (
        props.category
        ? <Link href={`/category/${props.category?.url}`} className="cat-card">
            <div className="img img-cover">
                <img
                    src={`/assets/img/categories/category_${props.category.id}.png`}
                    alt=""
                />
            </div>
            <div className="info">
                <h5>{props.category?.name}</h5>
                <span className="num">{props.category?.count}</span>
            </div>
        </Link> : null
    )
}

type sideBarType = {
    show: boolean
    handleClose: Dispatch<SetStateAction<boolean>>
    isOpenedSlideBar: boolean
    setIsOpenedSlideBar: Dispatch<SetStateAction<boolean>>
    categories: categoryType[]
    socials: socialsType
    isDark: boolean
}

export const SideBar = (props: sideBarType) => {
    const { t, i18n } = useTranslation('locale')
    
    const options = {
        scroll: false,
        backdrop: true,
        backdropClassName: styles.backDrop
    }

    return (
        <Offcanvas
            className={`${props.isDark ? "dark-theme" : ""} sidebar-popup-style1`}
            show={props.show}
            onHide={props.handleClose}
            onEntered={() =>
                props.setIsOpenedSlideBar(prev => !prev)
            }
            onExited={() =>
                props.setIsOpenedSlideBar(prev => !prev)
            }
            {...options}
        >
            <Offcanvas.Header className="offcanvas-header" closeButton>
                <div
                    className="logo"
                    style={{opacity: props.isOpenedSlideBar ? 1 : 0}}
                >
                    <img src="/assets/img/logo_home_bl.svg" alt="" className="dark-none"/>
                    <img src="/assets/img/logo_home_lt.svg" alt="" className="light-none"/>
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body className="mt-4">
                <Offcanvas.Title>
                    <h6 className="text-uppercase mb-15 ltspc-1"> {t('sidebar.about')} <i className="la la-angle-right ms-1"></i> </h6>
                </Offcanvas.Title>
                <div className="text">
                    {t('sidebar.description')}
                </div>
                {
                    props.categories
                    ? <div 
                        className="sidebar-categories mt-40"
                        style={{opacity: props.isOpenedSlideBar ? 1 : 0}}
                    >
                        <h6 className="ctext-uppercase mb-30 ltspc-1"> {t('sidebar.categories')} <i className="la la-angle-right ms-1"></i> </h6>
                        {
                            props.categories[0]
                            ? <>
                                <SlideBarCatCards
                                    category={props.categories[0]}
                                />
                                <SlideBarCatCards
                                    category={props.categories[1]}
                                />
                                <SlideBarCatCards
                                    category={props.categories[2]}
                                />
                                <SlideBarCatCards
                                    category={props.categories[3]}
                                />
                            </> : null
                        }
                    </div> : null
                }
                    
                <div className="sidebar-contact-info mt-50">
                    <h6 className="text-uppercase mb-20 ltspc-1"> {t('sidebar.contactNfollow')} <i className="la la-angle-right ms-1"></i> </h6>
                    <ul className="m-0">
                        <li className="mb-3">
                            <Link
                                href={`http://maps.google.com/?q=${t('sidebar.contact.address1')},%20${t('sidebar.contact.address2')}`}
                                target={"_blank"}
                            >
                                <i className="las la-map-marker me-2 color-main fs-5" />
                                {t('sidebar.contact.address1')}
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                {t('sidebar.contact.address2')}
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link href={`mailto:${t('sidebar.contact.email')}`}>
                            <i className="las la-envelope me-2 color-main fs-5" />
                                {t('sidebar.contact.email')}
                            </Link>
                        </li>
                        <li className="mb-3">
                            <Link href={`tel:${t('sidebar.contact.phone').split(' ').join('')}`}>
                                <i className="las la-phone-volume me-2 color-main fs-5" />
                                {t('sidebar.contact.phone')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}