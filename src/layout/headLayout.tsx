import { singlePost } from "@/types/postsType"
import { HeadMain } from "../components/head/headMain"

type LayoutProps = {
    title: string
    description: string
    author: string
    children: React.ReactNode
    lang: string
    post?: singlePost
    categoryId?: number
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
                categoryId={props.categoryId}
            />
            {props.children}
        </>
    )
}