import { postType } from "@/types/postsType"
import Link from "next/link"

type catPostType = {
    post: postType
}

export const CategoryPost = (props: catPostType) => {

    return (
        <div className="item">
            <div className="row">
                <div className="col-lg-5">
                    <Link
                        className="img img-cover th-250 radius-5 overflow-hidden"
                        href={`post/${props.post?.url ? props.post.url : ""}`}
                    >
                        {
                            props.post?.imageSmall
                            ? <img src={props.post.imageSmall} alt="" />
                            : null
                        }
                    </Link>
                </div>
                <div className="col-lg-7">
                    <div className="content mt-4 mt-lg-0">
                        <h2 className="title fsz-28px mb-20"> <Link href={`post/${props.post?.url ? props.post.url : ""}`}>{props.post?.title}</Link> </h2>
                        <div className="mb-20 text fsz-14px"> {props.post?.description} </div>
                        <ul className="fsz-12px">
                            <li>
                                {
                                    props.post?.publicationDate
                                    ? <span className="me-3"><i className="la la-calendar me-2"></i>{props.post.publicationDate}</span>
                                    : null
                                }
                                {
                                    props.post?.author
                                    ? <span className="me-3"><i className="la la-user me-2"></i>{props.post.author}</span>
                                    : null
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}