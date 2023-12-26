import { socialsData } from "@/components/data/socialsData"
import { ContactScreen } from "@/components/screens/staticPages/contact"
import { HeadLayout } from "@/layout/headLayout"
import PageLayout from "@/layout/pageLayout"
import { categoryType } from "@/types/categoriesType"
import { NextPageContext } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useState } from "react"

type aboutPage = {
    categories: categoryType[]
    lang: string
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
        >
            <PageLayout
                categories={props.categories}
                socials={socialsData}
                lang={props.lang}
                isNavBarOpen={isNavBarOpen}
                openNavBar={openNavBar}
            >
                <ContactScreen />
            </PageLayout>
        </HeadLayout>
    )
}

export const getStaticProps = async (ctx: NextPageContext) => {
    // Определяем локализацию
    const lang = ctx.locale

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
            categories, lang
        },
        revalidate: 60
    }
}