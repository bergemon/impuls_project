import { postType } from "@/types/postsType"
import Link from "next/link"
import Image from 'next/image'

type heroPostType = {
    post: postType
}

export const HeroPost = (props: heroPostType) => {
    return (
        <>
            <Link className="img img-cover th-550 radius-6 overflow-hidden" href={`post/${props.post?.url ? props.post?.url : ""}`}>
                <img src={props.post?.imageSmall ? props.post.imageSmall : '/'} alt="" />
            </Link>
            <div className="content pt-30">
                <h2 className="title mb-20 fsz-28px">
                    <Link
                        style={{maxWidth: "100%", hyphens: "auto", overflowWrap: "anywhere"}}
                        href={`post/${props.post?.url ? props.post?.url : ""}`}
                    >
                            {props.post?.title}
                    </Link>
                </h2>
                <p className="text mt-15 mb-20">
                    {props.post?.description}
                </p>
                <ul className="d-flex fsz-12px">
                    <li>
                        {
                            props.post?.publicationDate
                            ? <span className="me-3"><i className="la la-calendar me-2"></i>{props.post.publicationDate}</span>
                            : null
                        }
                        {
                            props.post.author
                            ? <span className="me-3"><i className="la la-user me-2"></i>{props.post.author}</span>
                            : null
                        }
                    </li>
                </ul>
            </div>
        </>
    )
}