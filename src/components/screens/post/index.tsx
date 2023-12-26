import { directionPost, postType, singlePost } from "@/types/postsType"
import { socialsType } from "@/types/socials"
import DirectionPostsSlider from "./directionPosts"
import EditorsChoice from "./editorsChoice"
import PostSection from "./postSection"

export const SinglePost: React.FC<{
    post: singlePost
    socials: socialsType
    rPosts: postType[]
    lang: string
    prevPosts: directionPost[]
    nextPosts: directionPost[]
    postName: string
    postId: number
}> = (props) => {

    return (
        <main className="home-style10 tc-single-post-creative-page">
            <PostSection
                post={props.post}
                socials={props.socials}
                postName={props.postName}
                postId={props.postId}
                lang={props.lang}
            />
            <DirectionPostsSlider
                prevPosts={props.prevPosts}
                nextPosts={props.nextPosts}
            />
            <EditorsChoice
                rPosts={props.rPosts}
                lang={props.lang}
            />
        </main>
    )
}