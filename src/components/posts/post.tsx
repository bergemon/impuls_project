import Link from "next/link"
import { postType } from "../../types/postsType"
import Image from 'next/image'

type Type = {
    postType: "imgLeftTop" | "imgLeftBottom" | "imgTop" | "imgRight"
    post: postType
    first?: boolean
    extra?: boolean
}

export const Post = (props: Type) => {

    let titleClassName

    switch(props.postType) {
        // Image on the left but post is first
        case "imgLeftTop":
            titleClassName = "item pb-15 pt-0"
            break
        // Image still one the left side, but post is last (second)
        case "imgLeftBottom":
            titleClassName = "item pt-15 pb-15"
            break
        case "imgTop":
            return (
                // Post with image on the top
                <div className={`${props.extra ? "py-4" : ""} tc-post-grid-default mt-30 mt-lg-0`}>
                    <div className="item">
                        <div className="img img-cover th-200 radius-6 overflow-hidden">
                            <Image width={2000} height={2000} src={props.post?.imageSmall ? props.post.imageSmall : '/'} alt=""/>
                        </div>
                        <div style={{overflowWrap: "anywhere"}} className="content pt-20">
                            <h2 className="title mb-10">
                                <Link
                                    style={{maxWidth: "100%", hyphens: "auto", overflowWrap: "anywhere"}}
                                    href={`post/${props.post?.url ? props.post?.url : ""}?id=${props.post?.id}`}
                                    className="hover-underline fsz-28px"
                                >
                                    {" "}{props.post?.title}{" "}
                                </Link>
                            </h2>
                            <p className="text mt-15 mb-20">{props.post?.description}</p>
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
            )
        case "imgRight":
            return (
                // Post with image on right side
                <div className={props.first ? "item pb-4" : "item py-4"}>
                    <div className="row gx-3">
                        <div className="col-8">
                        <div style={{overflowWrap: "anywhere"}} className="content">
                            <h2 className="title mb-10">
                                <Link href={`post/${props.post?.url ? props.post?.url : ""}?id=${props.post?.id}`} className="hover-underline fsz-28px">
                                    {props.post?.title}
                                </Link>
                            </h2>
                            <p className="text mt-15 mb-20">{props.post?.description}</p>
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
                        <div className="col-4">
                            <div className="img th-120 img-cover radius-4 overflow-hidden">
                                <Image width={2000} height={2000} src={props.post?.imageSmall ? props.post.imageSmall : '/'} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
    
    return (
        // Post with image on left side
        <div className={titleClassName}>
            <div className="row gx-3">
                <div className="col-4">
                    <div className="img th-140 img-cover radius-4 overflow-hidden">
                        <Image width={2000} height={2000} src={props.post?.imageSmall ? props.post.imageSmall : '/'} alt="" />
                        {
                            props.post?.videoUrl
                            ? <a href={props.post.videoUrl} data-lity="" className="video_icon icon-60">
                                <i className="ion-play"></i>
                            </a> : null
                        }
                    </div>
                </div>
                <div className="col-8">
                <div style={{overflowWrap: "anywhere"}} className="content">
                    <h2 className="title">
                        <Link href={`post/${props.post?.url ? props.post?.url : ""}?id=${props.post?.id}`}>{props.post?.title}</Link>
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