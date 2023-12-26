import { postType } from "@/types/postsType"
import Link from "next/link"
import { categoryType } from "@/types/categoriesType"

const CatMinBlockPostTitle: React.FC<{post: postType}> = (props) => {
    return (
        <li className="mb-20 fsz-28px d-flex">
            <span className="icon-10 bg-dark1 rounded-circle me-3 flex-shrink-0 mt-2"></span>
            <h2 className="fsz-20px">
                <Link href={`post/${props.post?.url ? props.post.url : ""}`}>{props.post?.title}</Link>
            </h2>
        </li>
    )
}

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
 ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

type catLargeBlockType = {
    category: IntRange<1, 13>
    posts: postType[]
    withoutImage?: boolean
    catTitle: string
    catViewAll: string
    categories: categoryType[]
}

const CatMinBlock = (props: catLargeBlockType) => {

    return (
        props.category ? <div className="item p-30 bg-white radius-7 border-0 mb-30">
            <p className="text-uppercase mb-20"> { props.catTitle } </p>
                {
                    !props.withoutImage && props.posts[0] ?
                    <Link
                        className="img img-cover th-250 radius-7 overflow-hidden"
                        href={`post/${props.posts[0]?.url ? props.posts[0].url : ""}`}
                    >
                        {
                            props.posts[0]?.imageSmall
                            ? <img src={props.posts[0].imageSmall} alt="" />
                            : null
                        }
                    </Link> : null
                }
            <div className="content pt-30">
                <h2 className="title fsz-28px pb-30 mb-30 border-1 border-bottom brd-gray">
                    {
                        props.posts
                        ? <Link href={`post/${props.posts[0]?.url ? props.posts[0].url : ""}`}>
                            {props.posts[0]?.title}
                        </Link> : null
                    }
                </h2>
                {
                    props.posts[1] ? <ul className="fw-bold f-fm-neco">
                        <CatMinBlockPostTitle post={props.posts[1]}/>
                        <CatMinBlockPostTitle post={props.posts[2]}/>
                        <CatMinBlockPostTitle post={props.posts[3]}/>
                        <CatMinBlockPostTitle post={props.posts[4]}/>
                    </ul> : null
                }
                <Link href={`/category/${props.categories[props.category-1].url}`} className="mt-20 hover-main"> {props.catViewAll} <i className="la la-angle-right ms-3"></i> </Link>
            </div>
        </div> : null
    )
}

export default CatMinBlock