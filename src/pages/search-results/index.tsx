import { socialsData } from "@/components/data/socialsData"
import { SearchResultsScreen } from "@/components/screens/searchResults"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { localEnvData } from "@/types/layout"
import { foundPostType, postsType } from "@/types/postsType"
import { socialsType } from "@/types/socials"
import { NextPageContext } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from "react"

type searchLayout = {
    posts: postsType
    categories: categoryType[]
    socials: socialsType
    foundPosts: foundPostType[]
    lang: string
    localEnvData: localEnvData
}

export default function SearchResults(props: searchLayout) {
    const [isNavBarOpen, openNavBar] = useState<Boolean>(false)
    const { t, i18n } = useTranslation('locale')

    return (
        <HeadLayout
            title={t('head.searchedPosts.title')}
            description={t('head.searchedPosts.description')}
            author={t('head.searchedPosts.author')}
            lang={props.lang}
            localEnvData={props.localEnvData}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
            >
                <SearchResultsScreen
                    foundPosts={props.foundPosts}
                    lang={props.lang}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale

    // Пробрасываем клиенту данные переменных локальной среды
    const localEnvData = { website: process.env.WEBSITE }

    try {
        // Вытягиваем категории
        const categories_ = await fetch(`${process.env.API}/categories/${lang}`)
        // Ищем посты
        const foundPosts_ = await fetch(`${process.env.API}/posts/search/${lang}?query=` + ctx.query["query"])

        // Сериализуем в джейсона
        const categories = await categories_.json()
        const foundPosts = await foundPosts_.json()

        return {
            props: {
                ...(await serverSideTranslations(lang!, [
                    'common',
                    'locale'
                ])),
                categories, foundPosts, lang, localEnvData
            }
        }
    } 
    catch(e) {
        let categories_, categories
        try {
            // Вытягиваем категории
            categories_ = await fetch(`${process.env.API}/categories/${lang}`)
    
            // Сериализуем в джейсона
            categories = await categories_.json()
        }
        catch {
            return {
                redirect: {
                    permanent: false,
                    destination: `${lang === 'es' ? "" : "/" + lang}/404`
                }
            }
        }

        return {
            props: {
                ...(await serverSideTranslations(lang!, [
                    'common',
                    'locale'
                ])),
                lang, categories, localEnvData
            }
        }
    }
}