import { singlePost } from "@/types/postsType"
import Head from "next/head"
import { useRouter } from "next/router"
import { categoriesStatic } from '@/utils/categories'

type headMainProps = {
    title: string
    description: string
    author: string
    lang: string
    post?: singlePost
    categoryId?: number
}

export const HeadMain = (props: headMainProps) => {
    const router = useRouter()

    let catId
    if (props.categoryId) {
        catId = props.categoryId - 1
    }

    return (
        <Head>
            <title>{props.title}</title>
            <meta charSet="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, maximum-scale=1" />
            <meta name="title" content={`${props.title}`} />
            <meta name="description" content={`${props.description}`} />
            <meta name="author" content={`${props.author}`} />
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <meta name="referrer" content="unsafe-url" />
            <meta property="article:author" content={`${props.author}`} />
            <meta property="og:site_name" content="Impuls PLUS" />
            <meta property="og:type" content="article" />
            {
                props.post &&
                props.post.publicationTime &&
                <meta property="article:published_time" content={`${props.post.publicationTime}`} />
            }
            <meta property="og:title" content={`${props.title}`} />
            <meta property="og:description" content={`${props.description}`} />
            <meta property="og:url" content={`/${props.lang}${router.asPath.length > 1 ? router.asPath : ''}`} />
            {
                props.post &&
                <meta property="og:image" content={`${props.post.mainImageLink}`} />
            }
            <meta property="twitter:title" content={`${props.title}`} />
            <meta name="twitter:site" content="Impuls PLUS" />
            <meta property="twitter:description" content={`${props.description}`} />
            {
                props.post &&
                <meta name="twitter:image:src" content={`${props.post.mainImageLink}`} />
            }
            <meta name="twitter:card" content="summary_large_image" />
            {
                props.post &&
                props.post.author &&
                <meta name="twitter:creator" content={`${props.post.author}`} />
            }
            {
                !props.post &&
                !props.categoryId &&
                <>
                    <link rel="alternate" hrefLang="es" href={`${process.env.WEBSITE}${router.asPath}`} />
                    <link rel="alternate" hrefLang="en" href={`${process.env.WEBSITE}/en${router.asPath.length > 1 ? router.asPath : ''}`} />
                    <link rel="alternate" hrefLang="ru" href={`${process.env.WEBSITE}/ru${router.asPath.length > 1 ? router.asPath : ''}`} />
                    <link rel="alternate" hrefLang="x-default" href={`${process.env.WEBSITE}${router.asPath}`} />
                    <link rel="canonical" href={`${process.env.WEBSITE}${router.asPath}`} key="canonical" />
                </>
            }
            {
                props.post && props.post.availableTranslations["ES"] !== undefined
                ? <link rel="canonical" href={`${process.env.WEBSITE}/post/${props.post.availableTranslations["ES"]}`} key="canonical" />
                : props.post && props.post.availableTranslations["EN"] !== undefined
                ? <link rel="canonical" href={`${process.env.WEBSITE}/en/post/${props.post.availableTranslations["EN"]}`} key="canonical" />
                : props.post && props.post.availableTranslations["RU"] !== undefined
                ? <link rel="canonical" href={`${process.env.WEBSITE}/ru/post/${props.post.availableTranslations["RU"]}`} key="canonical" />
                : null
            }
            {
                props.categoryId &&
                <link rel="canonical" href={`${process.env.WEBSITE}/category/${categoriesStatic["es"][catId].url}`} key="canonical" />
            }
            {
                props.post &&
                <>
                    {
                        props.post.availableTranslations["ES"] !== undefined
                        ? <link rel="alternate" hrefLang="es" href={`${process.env.WEBSITE}/post/${props.post.availableTranslations["ES"]}`} />
                        : null
                    }
                    {
                        props.post.availableTranslations["EN"] !== undefined
                        ? <link rel="alternate" hrefLang="en" href={`${process.env.WEBSITE}/en/post/${props.post.availableTranslations["EN"]}`} />
                        : null
                    }
                    {
                        props.post.availableTranslations["RU"] !== undefined
                        ? <link rel="alternate" hrefLang="ru" href={`${process.env.WEBSITE}/ru/post/${props.post.availableTranslations["RU"]}`} />
                        : null
                    }
                </>
            }
            {
                props.categoryId &&
                <>
                    {
                        <link rel="alternate" hrefLang="es" href={`${process.env.WEBSITE}/category/${categoriesStatic["es"][catId].url}`} />
                    }
                    {
                        <link rel="alternate" hrefLang="en" href={`${process.env.WEBSITE}/en/category/${categoriesStatic["en"][catId].url}`} />
                    }
                    {
                        <link rel="alternate" hrefLang="ru" href={`${process.env.WEBSITE}/ru/category/${categoriesStatic["ru"][catId].url}`} />
                    }
                </>
            }
            <link rel="icon" href="/assets/img/favicon.ico" />
            <link rel="shortcut icon" href="/assets/img/favicon.ico" title="Favicon" sizes="32x32" />
        </Head>
    )
}