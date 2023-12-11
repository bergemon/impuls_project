import { socialsData } from "@/components/data/socialsData"
import { CategoryPage } from "@/components/screens/categories"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { instaImg, postType, postsByCategory, favPostType } from "@/types/postsType"
import { isServer } from "@/utils/server"
import { NextPageContext } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

type categoriesType = {
    catPosts: postsByCategory
    randomPosts: postType[]
    categories: categoryType[]
    instaImgs: instaImg[]
    categoryId: number
    lang: string
    categoryUrl: string
    currentPage: number
    favoritePosts: favPostType[]
}

export default function Categories(props: categoriesType) {

    const isCategory = true

    return (
        <HeadLayout
            title={props.catPosts?.category?.name || "Impuls TV category"}
            description={props.catPosts?.posts?.message || "description"}
            author={""}
            keywords={""}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isCat={isCategory}
                thisCategory={props.catPosts?.category}
            >
                <CategoryPage
                    catPosts={props.catPosts}
                    categoryUrl={props.categoryUrl}
                    categoryId={props.categoryId}
                    lang={props.lang}
                    currentPage={props.currentPage}
                    favoritePosts={props.favoritePosts}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale

    // Получаем запрашиваемую категорию
    const categoryUrl = ctx.query["category"]
    const currentPage = ctx.query["page"] ? ctx.query["page"] : 1
    const categoryId = ctx.query["id"]
    
    // Вытягиваем категории
    const categories_ = await fetch(`${isServer}/categories/${lang}`)
    const categories = await categories_.json()

    // Вытягиваем посты данной категории
    const catPosts_ = await fetch(`${isServer}/posts/${lang}?page=${currentPage ? currentPage : "1"}&size=20&categoryId=${categoryId}`)
    // Вытягиваем избранные посты данной категории
    const favoritePosts_ = await fetch(`${isServer}/posts/favorite/${lang}`)

    // Сериализуем в джейсона
    const catPosts = await catPosts_.json()
    const favoritePosts = await favoritePosts_.json()

    return {
        props: {
            ...(await serverSideTranslations(lang!, [
                'common',
                'locale'
            ])),
            categories, categoryId, lang, catPosts,
            categoryUrl, currentPage, favoritePosts
        }
    }
}