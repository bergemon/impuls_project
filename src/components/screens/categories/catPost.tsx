import { postType } from "@/types/postsType"
import Link from "next/link"

const CatPost: React.FC<{
    post: postType
}> = (props) => {
    return (
        <div className={`item ${props.post?.isPrime ? "mt-30 p-30 bg-gray1 radius-6 border-bottom-0" : ""}`}>
            <div className="row">
                <div className={`col-lg-5 ${props.post?.isPrime ? "order-1-2" : ""}`}>
                    <Link
                        className="img th-230 img-cover overflow-hidden radius-6"
                        href={`/post/${props.post?.url ? props.post.url : ""}`}
                    >
                        {
                            props.post?.imageSmall
                            ? <img src={props.post.imageSmall} alt=""/>
                            : null
                        }
                    </Link>
                </div>
                <div className="col-lg-7">
                    <div className="content mt-20 mt-lg-0">
                        <h2 className="title mb-15"> <Link href={`/post/${props.post?.url ? props.post.url : ""}`}>{props.post?.title}</Link> </h2>
                        <p className="text color-666 mb-20">
                            {props.post?.description}
                        </p>
                        <div className="meta-bot fsz-13px color-666">
                            <ul className="d-flex">
                                <li className="date">
                                    {
                                        props.post?.publicationDate
                                        ? <span className="me-3"><i className="la la-calendar me-2"></i> {props.post.publicationDate}</span>
                                        : null
                                    }
                                    {
                                        props.post?.author
                                        ? <span className="me-3"><i className="la la-user me-2"></i> {props.post.author}</span>
                                        : null
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatPost