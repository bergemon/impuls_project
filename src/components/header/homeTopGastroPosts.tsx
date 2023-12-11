// правый пост в хедере
import { postType } from "@/types/postsType"
import { getCatUrl, getFullCategory } from "@/utils/getCategory"
import Link from "next/link"
import Image from 'next/image'
import { useTranslation } from "next-i18next"

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
 ? Acc[number] : Enumerate<N, [...Acc, Acc['length']]>

 type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export const TopHomePostsBlock: React.FC<{
    posts: postType[]
    category: IntRange<1, 13>
}> = (props) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <div className="col">
            <div className="tc-breaking-style10 px-lg-5">
                <p className="text-uppercase fsz-14px mb-40">{ t('home.gastroBlock.title') }</p>
                <div className="img img-cover">
                    <Image width={2000} height={2000} src={props.posts[0]?.imageSmall ? props.posts[0]?.imageSmall : '/'} alt="" />
                </div>
                {
                    props.posts
                    ? <div className="info">
                        <h2 className="fsz-32px mb-20">
                            <Link
                                href={`post/${props.posts[0]?.url ? props.posts[0]?.url : ""}?id=${props.posts[0]?.id}`}> {props.posts[0].title}
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
                                                href={`post/${item.url ? item.url : ""}?id=${item.id}`}
                                                key={id}
                                            >
                                                {item.title}
                                            </a>
                                        </h2>
                                    </li> : null
                                )) : null
                            }
                        </ul>
                        <Link href={`category/${getCatUrl(props.category)}`} className="fsz-14px text-capitalize mt-15">
                            { t('home.gastroBlock.viewAll') }<i className="la la-angle-right ms-1"></i>
                        </Link>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default TopHomePostsBlock