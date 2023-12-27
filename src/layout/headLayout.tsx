import { singlePost } from "@/types/postsType"
import { HeadMain } from "../components/head/headMain"
import { categoryLangUrl } from "@/types/categoriesType"
import { localEnvData } from "@/types/layout"

type LayoutProps = {
    title: string
    description: string
    author: string
    children: React.ReactNode
    lang: string
    localEnvData: localEnvData
    post?: singlePost
    catUrl?: categoryLangUrl[]
}

export const HeadLayout = (props: LayoutProps) => {
    return (
        <>
            <HeadMain
                title={props.title}
                description={props.description}
                author={props.author}
                post={props.post}
                lang={props.lang}
                catUrl={props.catUrl}
                localEnvData={props.localEnvData}
            />
            {props.children}
        </>
    )
}