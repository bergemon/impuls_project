import { postType } from "@/types/postsType"
import { CategoryPost } from "../../../posts/categoryPost"
import Link from "next/link"
import { categoryType } from "@/types/categoriesType"

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
 ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>

 type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

type catLargeBlockType = {
    category: IntRange<1, 13>
    categories: categoryType[]
    posts: postType[]
    catTitle: string
    catViewAll: string
}

const CatLargeBlock = (props: catLargeBlockType) => {

    return (
        <div className="p-30 bg-white radius-7 border-0 mb-30">
            <div className="row fsz-14px ">
                <div className="col-lg-6">
                    <p className="mb-20"> {props.catTitle} </p>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <Link href={`/category/${props.categories[props.category-1].url}`} className="hover-main"> {props.catViewAll} <i className="la la-angle-right ms-1"></i> </Link>
                </div>
            </div>
            <div className="tc-post-list-style3">
                {
                    props.posts ? <div className="items">
                        <CategoryPost post={props?.posts[0]} />
                        <CategoryPost post={props?.posts[1]} />
                        <CategoryPost post={props?.posts[2]} />
                    </div> : null
                }
            </div>
        </div>
    )
}

export default CatLargeBlock