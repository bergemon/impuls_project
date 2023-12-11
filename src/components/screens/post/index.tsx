import { directionPost, postType, singlePost } from "@/types/postsType"
import { socialsType } from "@/types/socials"
import dynamic from "next/dynamic"


const EditorsChoice = dynamic(
    () => import('./editorsChoice'),
    { loading: () => <p>Loading...</p>, }
)
const PostSection = dynamic(
    () => import('./postSection'),
    { loading: () => <p>Loading...</p>, }
)
const DirectionPostsSlider = dynamic(
    () => import('./directionPosts'),
    { loading: () => <p>Loading...</p>, }
)

export const SinglePost: React.FC<{
    post: singlePost
    socials: socialsType
    rPosts: postType[]
    prevPosts: directionPost[]
    nextPosts: directionPost[]
}> = (props) => {

    return (
        <main className="home-style10 tc-single-post-creative-page">
            <PostSection post={props.post} socials={props.socials} />
            <DirectionPostsSlider
                prevPosts={props.prevPosts}
                nextPosts={props.nextPosts}
            />
            <EditorsChoice rPosts={props.rPosts} />
        </main>
    )
}