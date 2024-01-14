import { socialsData } from '@/components/data/socialsData'
import { HomeScreen } from '@/components/screens/homeScreen'
import { HeadLayout } from '@/layout/headLayout'
import PageLayout from '@/layout/pageLayout'
import { categoryType } from '@/types/categoriesType'
import { localEnvData } from '@/types/layout'
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
    localEnvData: localEnvData
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
            localEnvData={props.localEnvData}
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

    // Пробрасываем клиенту данные переменных локальной среды
    const localEnvData = { website: process.env.WEBSITE }
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
    let posts, favoritePosts, categories, instaImgs, topPosts
    try {
        posts = await posts_.json()
        favoritePosts = await favoritePosts_.json()
        categories = await categories_.json()
        instaImgs = await instaImgs_.json()
        topPosts = await topPosts_.json()
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
            ...(await serverSideTranslations(lang ?? 'es', [
                'common',
                'locale'
            ])),
            posts, favoritePosts, categories, instaImgs, lang, topPosts, localEnvData
        },
        revalidate: 60
    }
}