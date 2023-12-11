import { socialsData } from "@/components/data/socialsData"
import { SearchResultsScreen } from "@/components/screens/searchResults"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { foundPostType, postsType } from "@/types/postsType"
import { socialsType } from "@/types/socials"
import { isServer } from "@/utils/server"
import { NextPageContext } from "next"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type searchLayout = {
    posts: postsType;
    categories: categoryType[];
    socials: socialsType;
    foundPosts: foundPostType[];
    lang: string;
}

export default function SearchResults(props: searchLayout) {

    return (
        <HeadLayout
            title={"Impuls PLUS"}
            description={"Portal en español, inglés y ruso sobre la actualidad en los ámbitos de turismo, cultura, moda, tendencias, finanzas, salud, deportes, educación, inversiones"}
            author={"Impuls PLUS"}
            keywords={""}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
            >
                <SearchResultsScreen
                    foundPosts={props.foundPosts}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async (ctx: NextPageContext) => {

    try {
        // Определяем локализацию
        const lang = ctx.locale

        // Вытягиваем категории
        const categories_ = await fetch(`${isServer}/categories/${lang}`)
        // Ищем посты
        const foundPosts_ = await fetch(`${isServer}/posts/search/${lang}?query=` + ctx.query["query"])

        // Сериализуем в джейсона
        const categories = await categories_.json()
        const foundPosts = await foundPosts_.json()

        return {
            props: {
                ...(await serverSideTranslations(lang!, [
                    'common',
                    'locale'
                ])),
                categories, foundPosts, lang
            }
        }
    } 
    catch(e) {
        // Определяем локализацию
        const lang = ctx.locale

        // Вытягиваем категории
        const categories_ = await fetch(`${isServer}/categories/${lang}`)

        // Сериализуем в джейсона
        const categories = await categories_.json()

        return {
            props: {
                ...(await serverSideTranslations(lang!, [
                    'common',
                    'locale'
                ])),
                lang, categories
            }
        }
    }
}