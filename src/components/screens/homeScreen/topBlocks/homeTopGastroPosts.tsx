// правый пост в хедере
import { postType } from "@/types/postsType"
import Link from "next/link"
import { useTranslation } from "next-i18next"
import { categoryType } from "@/types/categoriesType"

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
 ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>

 type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export const HomeTopGastroPosts: React.FC<{
    posts: postType[]
    category: IntRange<1, 13>
    categories: categoryType[]
}> = (props) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <div className="col">
            <div className="tc-breaking-style10 px-lg-5">
                {
                    props.posts
                    ? 
                    <>
                    <p className="text-uppercase fsz-14px mb-40">{ t('home.gastroBlock.title') }</p>
                    <Link className="img img-cover" href={`post/${props.posts[0]?.url ? props.posts[0]?.url : ""}`}>
                        {
                            props.posts[0]?.imageSmall
                            ? <img src={props.posts[0].imageSmall} alt="" />
                            : null
                        }
                    </Link>
                    <div className="info">
                        <h2 className="fsz-32px mb-20">
                            <Link
                                href={`post/${props.posts[0]?.url ? props.posts[0]?.url : ""}`}> {props.posts[0].title}
                            </Link>
                        </h2>
                        {
                            props.posts[0]?.publicationDate
                            ? <span className="fsz-12px me-3"><i className="la la-calendar me-2"></i>{props.posts[0].publicationDate}</span>
                            : null
                        }
                        {
                            props.posts[0]?.author
                            ? <span className="fsz-12px me-3"><i className="la la-user me-2"></i>{props.posts[0].author}</span>
                            : null
                        }
                        <ul className="fsz-20px">
                            {
                                props.posts
                                ? props.posts.map((item, id) => (
                                    id < 5 && id > 0
                                    ? <li key={id}>
                                        <h2 className="fsz-20px" key={id}>
                                            <a
                                                href={`post/${item.url ? item.url : ""}`}
                                                key={id}
                                            >
                                                {item.title}
                                            </a>
                                        </h2>
                                    </li> : null
                                )) : null
                            }
                        </ul>
                        <Link href={`category/${props.categories[props.category-1].url}`} className="fsz-14px text-capitalize mt-15">
                            { t('home.gastroBlock.viewAll') }<i className="la la-angle-right ms-1"></i>
                        </Link>
                    </div>
                    </> : null
                }
            </div>
        </div>
    )
}

export default HomeTopGastroPosts