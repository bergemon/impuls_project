import { postType } from "@/types/postsType"
import { Post } from "../../../posts/post"
import Link from "next/link"
import { getCatUrl, getFullCategory } from "@/utils/getCategory"
import { useTranslation } from "next-i18next"

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
 ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>

 type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export const TopCatRightBlock: React.FC<{
    posts: postType[]
    category: IntRange<1, 13>
}> = (props) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
       <div className="col-lg-4">
            <p className="text-uppercase"> { t('home.whatIsNewBlock.educationBlock.title') } </p>
            <div className="tc-post-list-style2 pt-30">
                <div className="items">
                    {
                        props.posts
                        ? props.posts.map((item, id) => {
                            return id < 4
                                ? <Post
                                    key={id}
                                    postType={"imgRight"}
                                    post={item}
                                    first={id == 0 ? true : false}
                                /> : null
                        }) : null
                    }
                </div>
            </div>
            <Link href={`/category/${getCatUrl(props.category)}?id=${props.category}`} className="mt-20 hover-main"> { t('home.whatIsNewBlock.educationBlock.viewAll') } <i className="la la-angle-right ms-3"></i> </Link>
        </div>
    )
}