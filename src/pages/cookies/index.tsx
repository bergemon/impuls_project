import { socialsData } from "@/components/data/socialsData"
import { CookiesScreen } from "@/components/screens/staticPages/cookies"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { localEnvData } from "@/types/layout"
import { NextPageContext } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"

type aboutPage = {
    categories: categoryType[]
    lang: string
    localEnvData: localEnvData
}

export default function Contact(props: aboutPage) {

    const [isNavBarOpen, openNavBar] = useState<Boolean>(false)
    const { t, i18n } = useTranslation('locale')
    
    return (
        <HeadLayout
            title={t('head.contact.title')}
            description={t('head.contact.description')}
            author={t('head.contact.author')}
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
                <CookiesScreen />
            </PageLayout>
        </HeadLayout>
    )
}

export const getStaticProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale

    // Пробрасываем клиенту данные переменных локальной среды
    const localEnvData = { website: process.env.WEBSITE }

    // Вытягиваем категории
    const categories_ = await fetch(`${process.env.API}/categories/${lang}`)

    // Сериализуем в джейсона
    const categories = await categories_.json()

    return {
        props: {
            ...(await serverSideTranslations(lang ?? 'es', [
                'common',
                'locale',
                'contact'
            ])),
            categories, lang, localEnvData
        },
        revalidate: 60
    }
}