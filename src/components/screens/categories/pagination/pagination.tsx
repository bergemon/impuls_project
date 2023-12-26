import { postsByCategory } from "@/types/postsType"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import styles from './pagination.module.css'

const PagBtn: React.FC<{
    count: number,
    categoryUrl: string,
    lang: string,
    currentPage: number
}> = ({count, categoryUrl, lang, currentPage}) => {

    return (
        <Link
            className={`${Number(count - 1) == Number(currentPage) ? "active" : ""}`}
            href={`${lang === 'es' ? "" : "/" + lang}/category/${categoryUrl}${Number(count > 1) ? "?page=" : ""}${Number(count) > 1 ? Number(count) : ""}`}
        >
            <span>{count}</span>
        </Link>
    )
}

const CatPagination: React.FC<{
    catPosts: postsByCategory
    categoryUrl: string
    lang: string,
    currentPage: number
}> = ({catPosts, categoryUrl, lang, currentPage}) => {
    const { t, i18n } = useTranslation('locale')
    
    let pages = catPosts.posts?.totalPages + 1

    let currentPages: number[] = []
    let maxPage: number = 1
    if(currentPage == 1) { maxPage = Number(currentPage) + Number(5)}
    else { maxPage = Number(currentPage) + Number(4) }

    let currentBtnPage = 1
    if (currentPage == 1) { currentBtnPage = currentPage }
    else { currentBtnPage = (currentPage - 1) }

    for (let i = currentBtnPage; i < maxPage; i++) {
        currentPages.push(i)
    }

    return (
        <div className="pagination style-1 color-main justify-content-center mt-60">
            {
                currentPage > 0
                ? <Link
                    href={`${lang === 'es' ? "" : "/" + lang}/category/${categoryUrl}${Number(currentPage) > 1 ? "?page=" : ""}${Number(currentPage) > 1 ? Number(currentPage) : ""}`}
                >
                    <span className="text text-uppercase"><i className={`${styles.arrowPrev} la la-angle-right`}/> {t('cat_sPage.pagination.prev')} </span>
                </Link> : null
            }
            {
                currentPages.map((item, id) => (
                    item > 0 && item < pages
                    ? <PagBtn
                        key={id}
                        count={item}
                        categoryUrl={categoryUrl}
                        lang={lang}
                        currentPage={currentPage}
                    /> : null
                ))
            }
            {
                currentPage < pages - 5
                ? <a style={{cursor: "pointer"}}>
                    <span>...</span>
                </a> : null
            }
            {
                currentPage < pages - 4
                ? <PagBtn
                    count={pages - 1}
                    categoryUrl={categoryUrl}
                    lang={lang}
                    currentPage={currentPage}
                /> : null
            }
            {
                currentPage < pages - 2
                ? <Link
                    href={`${lang === 'es' ? "" : "/" + lang}/category/${categoryUrl}?page=${Number(currentPage) + 2}`}
                >
                    <span className="text text-uppercase">{t('cat_sPage.pagination.next')} <i className="la la-angle-right"></i> </span>
                </Link> : null
            }
            
        </div>
    )
}

export default CatPagination