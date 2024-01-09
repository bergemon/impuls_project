import { socialsData } from "@/components/data/socialsData"
import { SinglePost } from "@/components/screens/post"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { directionPost, postType, singlePost } from "@/types/postsType"
import { socialsType } from "@/types/socials"
import { NextPageContext } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"
import { getCookie, setCookie } from 'cookies-next'
import { localEnvData } from "@/types/layout"

type postLayout = {
    categories: categoryType[]
    socials: socialsType
    lang: string
    post: singlePost
    rPosts: postType[]
    isExist: boolean
    prevPosts: directionPost[]
    nextPosts: directionPost[]
    postName: string
    postId: number
    translations: boolean[]
    localEnvData: localEnvData
}

export default function Post(props: postLayout) {
    const [isNavBarOpen, openNavBar] = useState<Boolean>(false)
    const { t, i18n } = useTranslation('locale')

    return (
        <HeadLayout
            title={props.post.title || ""}
            description={props.post.seoDescription || ""}
            author={props.post.author || ""}
            post={props.post}
            lang={props.lang}
            localEnvData={props.localEnvData}
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
                translations={props.translations}
            >
                <SinglePost
                    post={props.post}
                    rPosts={props.rPosts}
                    socials={socialsData}
                    prevPosts={props.prevPosts}
                    nextPosts={props.nextPosts}
                    postName={props.postName}
                    postId={props.postId}
                    lang={props.lang}
                    localEnvData={props.localEnvData}
                />
            </PageLayout>
        </HeadLayout>
    )
}

export const getServerSideProps = async ({req, res, locale, query}: NextPageContext) => {
    // Определяем локализацию
    const lang = locale

    // Пробрасываем клиенту данные переменных локальной среды
    const localEnvData = { website: process.env.WEBSITE }

    // Id of the targeted post
    const postName: any = query["name"]

    let post_, post
    
    // Available translartions
    let translations: boolean[] = []

    try {
        // Вытягиваем пост
        post_ = await fetch(`${process.env.API}/post-url/${lang}/${postName}`)
        // To JSON
        post = await post_.json()
    }
    catch {
        return {
            redirect: {
                permanent: false,
                destination: `${lang === 'es' ? "" : "/" + lang}/404`
            }
        }
    }

    if(
        post["status"] === 404
        || post["message"]?.search("Post with this URL was not found!") === 0
    ) {
        try {
            // Берём айди поста на прошлом языке
            const lastPostLang = getCookie('lastPostLang', { req, res })
            post_ = await fetch(`${process.env.API}/post-url/${lastPostLang}/${postName}`)
            post = await post_.json()
            const lastPostId = post.id

            // Вытягиваем урл поста для языка, на который переключились
            post_ = await fetch(`${process.env.API}/post/${lang}/${lastPostId}`)
            post = await post_.json()

            if (post["message"] && post["message"].Search("For input string:") === 0) {
                return {
                    redirect: {
                        permanent: false,
                        destination: `${lang === 'es' ? "" : "/" + lang}/404`
                    }
                }
            }

            return {
                redirect: {
                    permanent: false,
                    destination: `${lang === 'es' ? "" : "/" + lang}/post/${post.url}`
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

    let postId
    try { postId = post.id }
    catch {
        return {
            redirect: {
                permanent: false,
                destination: `${lang === 'es' ? "" : "/" + lang}/404`
            }
        }
    }
    setCookie('lastPostLang', lang, { req, res })

    // Fetch
    let rPosts_, categories_, prev_, next_
    // Serializing
    let categories, rPosts, prevPosts, nextPosts

    try {
        // Рекомендуемые посты
        rPosts_ = await fetch(`${process.env.API}/posts/recommended/${lang}/${postId}?limit=8`)
        // Вытягиваем категории
        categories_ = await fetch(`${process.env.API}/categories/${lang}`)
        // Getting prev post
        prev_ = await fetch(`${process.env.API}/post/${lang}/${postId}/prev`)
        // Getting next post
        next_ = await fetch(`${process.env.API}/post/${lang}/${postId}/next`)

        // Сериализуем в джейсона
        categories = await categories_.json()
        rPosts = await rPosts_.json()
        prevPosts = await prev_.json()
        nextPosts = await next_.json()
    }
    catch {
        return {
            redirect: {
                permanent: false,
                destination: `${lang === 'es' ? "" : "/" + lang}/404`
            }
        }
    }

    // Spanish translation
    post.availableTranslations["ES"] !== undefined
    ? translations.push(true) : translations.push(false)

    // English translation
    post.availableTranslations["EN"] !== undefined
    ? translations.push(true) : translations.push(false)

    // Russian translation
    post.availableTranslations["RU"] !== undefined
    ? translations.push(true) : translations.push(false)

    return {
        props: {
            ...(await serverSideTranslations(lang!, [
                'common',
                'locale'
            ])),
            categories, lang, rPosts, prevPosts, nextPosts,
            postName, postId, post, translations, localEnvData
        }
    }
}