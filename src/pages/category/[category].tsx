import { socialsData } from "@/components/data/socialsData"
import { CategoryPage } from "@/components/screens/categories"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryLangUrl, categoryType } from "@/types/categoriesType"
import { instaImg, postType, postsByCategory, topPostType } from "@/types/postsType"
import { NextPageContext } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"
import { getCookie, setCookie } from 'cookies-next'
import { localEnvData } from "@/types/layout"

type categoriesType = {
    catPosts: postsByCategory
    randomPosts: postType[]
    categories: categoryType[]
    instaImgs: instaImg[]
    categoryId: number
    lang: string
    categoryUrl: string
    currentPage: number
    topPosts: topPostType[]
    localEnvData: localEnvData
    catUrl?: categoryLangUrl[]
}

export default function Categories(props: categoriesType) {
    const [isNavBarOpen, openNavBar] = useState<Boolean>(false)
    const { t, i18n } = useTranslation('locale')
    
    const isCategory = true

    let description
    switch(props.catPosts?.category?.name) {
        case(t('head.categoryMeta.gastronomy.title')):
            description = t('head.categoryMeta.gastronomy.description')
            break;
        case(t('head.categoryMeta.tourism.title')):
            description = t('head.categoryMeta.tourism.description')
            break;
        case(t('head.categoryMeta.trend.title')):
            description = t('head.categoryMeta.trend.description')
            break;
        case(t('head.categoryMeta.health.title')):
            description = t('head.categoryMeta.health.description')
            break;
        case(t('head.categoryMeta.finance.title')):
            description = t('head.categoryMeta.finance.description')
            break;
        case(t('head.categoryMeta.education.title')):
            description = t('head.categoryMeta.education.description')
            break;
        case(t('head.categoryMeta.sport.title')):
            description = t('head.categoryMeta.sport.description')
            break;
        case(t('head.categoryMeta.investments.title')):
            description = t('head.categoryMeta.investments.description')
            break;
        case(t('head.categoryMeta.culture.title')):
            description = t('head.categoryMeta.culture.description')
            break;
        case(t('head.categoryMeta.businessCulture.title')):
            description = t('head.categoryMeta.businessCulture.description')
            break;
        case(t('head.categoryMeta.networking.title')):
            description = t('head.categoryMeta.networking.description')
            break;
        case(t('head.categoryMeta.impulsTV.title')):
            description = t('head.categoryMeta.impulsTV.description')
            break;
        default:
            description = t('head.categoryMeta.gastronomy.description')
            break;
    }

    return (
        <HeadLayout
            title={`${props.catPosts?.category?.name}`}
            description={description}
            author={t('head.categoryMeta.author')}
            lang={props.lang}
            catUrl={props.catUrl}
            localEnvData={props.localEnvData}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isCat={isCategory}
                thisCategory={props.catPosts?.category}
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
            >
                <CategoryPage
                    catPosts={props.catPosts}
                    categoryUrl={props.categoryUrl}
                    categoryId={props.categoryId}
                    lang={props.lang}
                    currentPage={props.currentPage}
                    topPosts={props.topPosts}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async ({req, res, locale, query}: NextPageContext) => {
    // Определяем локализацию
    const lang = locale

    // Получаем запрашиваемую категорию
    const categoryUrl: any = query["category"]
    let currentPage: any = query["page"] ? query["page"] : 1
    
    // Вытягиваем категории
    const categories_ = await fetch(`${process.env.API}/categories/${lang}`)
    const categories = await categories_.json()

    // Пробрасываем клиенту данные переменных локальной среды
    const localEnvData = { website: process.env.WEBSITE }

    // Вытягиваем избранные посты данной категории
    let topPosts_, topPosts

    let catPosts_
    // Вытягиваем посты данной категории в первый раз
    catPosts_ = await fetch(`${process.env.API}/posts/${lang}/${categoryUrl}?page=${currentPage ? currentPage - 1 : "0"}&size=20`)
    currentPage -= 1

    let catPosts, categoryId, lastLocale, catUrl_, catUrl
    try {
        catPosts = await catPosts_.json()
        categoryId = catPosts.category.id

        try {
            // Вытягиваем ссылки на текующую категорию
            catUrl_ = await fetch(`${process.env.API}/category/${categoryId}`)
            catUrl = await catUrl_.json()
        }
        catch {
            const err = {
                id: categoryId,
                name: "error",
                url: "error",
                count: 0
            }
            catUrl = [ err, err, err]
        }

        topPosts_ = await fetch(`${process.env.API}/posts/top/${lang}?id=${categoryId}`)
        topPosts = await topPosts_.json()

        setCookie('locale', locale, { req, res })

        if(catPosts.posts.totalPages < currentPage) {
            return {
                redirect: {
                    permanent: false,
                    destination: `/${locale}/category/${categories[categoryId - 1].url}`
                }
            }
        }
    }
    catch {
        lastLocale = getCookie('locale', { req, res })

        // Вытягиваем посты данной категории если в первый раз не получилось
        catPosts_ = await fetch(`${process.env.API}/posts/${lastLocale}/${categoryUrl}?page=${currentPage ? currentPage : "0"}&size=20`)

        try {
            catPosts = await catPosts_.json()
            categoryId = catPosts.category.id

            topPosts_ = await fetch(`${process.env.API}/posts/top/${lang}?id=${categoryId}`)
            topPosts = await topPosts_.json()

            if((catPosts.category?.count / 20) + 1 < currentPage) {
                return {
                    redirect: {
                        permanent: false,
                        destination: `/${locale}/category/${categories[categoryId - 1].url}`
                    }
                }
            }

            return {
                redirect: {
                    permanent: false,
                    destination: `${locale === 'es' ? '' : '/' + locale}/category/${categories[categoryId - 1].url}${currentPage > 0 ? "?page=" : ""}${currentPage > 0 ? currentPage + 1 : ""}`
                }
            }
        }
        catch {
            return {
                redirect: {
                    permanent: false,
                    destination: `${lang === 'es' ? "" : "/" + lang}/404`
                }
            }
        }
    }

    return {
        props: {
            ...(await serverSideTranslations(lang!, [
                'common',
                'locale'
            ])),
            categories, categoryId, lang, catPosts,
            categoryUrl, currentPage, topPosts, catUrl,
            localEnvData
        }
    }
}