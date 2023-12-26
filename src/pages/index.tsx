import { socialsData } from '@/components/data/socialsData'
import { HomeScreen } from '@/components/screens/homeScreen'
import { HeadLayout } from '@/layout/headLayout'
import PageLayout from '@/layout/pageLayout'
import { categoryType } from '@/types/categoriesType'
import { favPostType, instaImg, postsType, topPostType } from '@/types/postsType'
import { HomeParams } from '@/utils/headerParams'
import { NextPageContext } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

type IPosts = {
    posts: postsType
    favoritePosts: favPostType[]
    categories: categoryType[]
    instaImgs: instaImg[]
    lang: string
    topPosts: topPostType[]
}

export default function Home(props: IPosts) {
    const [isNavBarOpen, openNavBar] = useState<Boolean>(false)
    const { t, i18n } = useTranslation('locale')

    return (
        <HeadLayout
            title={t('head.home.title')}
            description={t('head.home.description')}
            author={t('head.home.author')}
            lang={props.lang}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
            >
                <HomeScreen
                    instaImgs={props.instaImgs}
                    posts={props.posts.categorizedPosts}
                    favoritePosts={props.favoritePosts}
                    categories={props.categories}
                    socials={socialsData}
                    sliderPosts={props.posts.sliderPosts}
                    topPosts={props.topPosts}
                    lang={props.lang}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getStaticProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale

    // Вытягиваем посты
    const posts_ = await fetch(`${process.env.API}/posts/home/${lang}?categoryIds=${HomeParams.categoryId}&postsSize=${HomeParams.postsSize}&sliderSize=${HomeParams.sliderSize}&categoryPostsSizes=11:20`)
    // Вытягиваем избранные посты
    const favoritePosts_ = await fetch(`${process.env.API}/posts/favorite/${lang}`)
    // Вытягиваем категории
    const categories_ = await fetch(`${process.env.API}/categories/${lang}`)
    // Вытягиваем картинки из инстаграмма
    const instaImgs_ = await fetch(`${process.env.INSTA}/instagram/photos?count=6`)
    // Топ посты
    const topPosts_ = await fetch(`${process.env.API}/posts/top/${lang}`)

    // Сериализуем в джейсона
    const posts = await posts_.json()
    const favoritePosts = await favoritePosts_.json()
    const categories = await categories_.json()
    const instaImgs = await instaImgs_.json()
    const topPosts = await topPosts_.json()

    return {
        props: {
            ...(await serverSideTranslations(lang ?? 'es', [
                'common',
                'locale'
            ])),
            posts, favoritePosts, categories, instaImgs, lang, topPosts
        },
        revalidate: 60
    }
}