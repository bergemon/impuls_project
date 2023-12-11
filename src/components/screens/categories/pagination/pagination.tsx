import { postsByCategory } from "@/types/postsType"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import styles from './pagination.module.css'

const PagBtn: React.FC<{
    count: number,
    categoryUrl: string,
    lang: string,
    currentPage: number
    categoryId: number
}> = ({count, categoryUrl, lang, currentPage, categoryId}) => {

    return (
        <Link
            className={`${Number(count) == Number(currentPage) ? "active" : ""}`}
            href={`/${lang}/category/${categoryUrl}?page=${Number(count)}&id=${Number(categoryId)}`}
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
    categoryId: number
}> = ({catPosts, categoryUrl, lang, currentPage, categoryId}) => {
    const { t, i18n } = useTranslation('locale')
    
    let pages = catPosts.posts?.totalPages

    let currentPages: number[] = []
    let maxPage: number = 1
    if(currentPage == 1) { maxPage = Number(currentPage) + Number(4)}
    else { maxPage = Number(currentPage) + Number(3) }

    let currentBtnPage = 1
    if (currentPage == 1) { currentBtnPage = currentPage }
    else { currentBtnPage = (currentPage - 2) }

    for (let i = currentBtnPage; i < maxPage; i++) {
        currentPages.push(i)
    }

    return (
        <div className="pagination style-1 color-main justify-content-center mt-60">
            {
                currentPage > 1
                ? <Link
                    href={`/${lang}/category/${categoryUrl}?page=${Number(currentPage) - 1}&id=${categoryId}`}
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
                        categoryId={categoryId}
                    /> : null
                ))
            }
            {
                currentPage < pages - 3
                ? <a style={{cursor: "pointer"}}>
                    <span>...</span>
                </a> : null
            }
            {
                currentPage < pages - 2
                ? <PagBtn
                    count={pages - 1}
                    categoryUrl={categoryUrl}
                    lang={lang}
                    currentPage={currentPage}
                    categoryId={categoryId}
                /> : null
            }
            {
                currentPage < pages - 1
                ? <Link
                    href={`/${lang}/category/${categoryUrl}?page=${Number(currentPage) + 1}&id=${Number(categoryId)}`}
                >
                    <span className="text text-uppercase">{t('cat_sPage.pagination.next')} <i className="la la-angle-right"></i> </span>
                </Link> : null
            }
            
        </div>
    )
}

export default CatPagination