import { postType } from "@/types/postsType"
import { Post } from "../../../posts/post"
import { HeroPost } from "../../../posts/heroPost"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { categoryType } from "@/types/categoriesType"

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
 ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>

 type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export const TopCatLeftBlock: React.FC<{
    posts: postType[]
    category: IntRange<1, 13>
    categories: categoryType[]
}> = (props) => {
    const { t, i18n } = useTranslation('locale')
    
    let postsCount = 0

    return (
        <div className="col-lg-8 border-1 border-end brd-gray">
            <div className="row text-uppercase fsz-14px">
                <div className="col-lg-6">
                    <p className="text-uppercase"> { t('home.whatIsNewBlock.tourismBlock.title') } </p>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <Link
                        href={`/category/${props.categories[props.category-1].url}`} className="text-capitalize hover-main"
                    > { t('home.whatIsNewBlock.tourismBlock.viewAll') } <i className="la la-angle-right ms-1"></i> </Link>
                </div>
            </div>
            <div className="tc-post-grid-default pt-30">
                <div className="item">
                    {
                        props.posts ? <HeroPost post={props.posts[postsCount++]}/> : null
                    }
                    <div className="sub-content pt-60">
                        {
                            props.posts ? <div className="row gx-5">
                                <div className="col-lg-7 border-1 border-end brd-gray">
                                    <div className="tc-post-list-style2">
                                        <div className="items">
                                            <Post
                                                postType={"imgLeftTop"}
                                                post={props.posts[postsCount++]}
                                            />
                                            <Post
                                                postType={"imgLeftBottom"}
                                                post={props.posts[postsCount++]}
                                            />
                                            <Post
                                                postType={"imgLeftBottom"}
                                                post={props.posts[postsCount++]}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <Post
                                        postType={"imgTop"}
                                        post={props.posts[postsCount++]}
                                    />
                                    <Post
                                        postType={"imgTop"}
                                        post={props.posts[postsCount++]}
                                        extra={true}
                                    />
                                </div>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}