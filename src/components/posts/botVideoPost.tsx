import { postType } from "@/types/postsType"
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import Link from "next/link"

type videoPostType = {
    post: postType
    isLast?: boolean
}

export const BotVideoPost = (props: videoPostType) => {

    return (
        <div className={`col-lg-4 custom-top-0 border-1 ${props.isLast ? '' : 'border-end'} brd-gray mt-50`}>
            <div className="item border-0">
                <div className="custom_sub-video row gx-3 align-items-center">
                    <div className="col-12 custom__sub-video--order custom__sub-video--width">
                        {
                            props.post
                            ? <div className="content">
                                <div className="sub-videos-flex">
                                    <div
                                        className="col-8"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <div>
                                            <h2 className="title fsz-28px">
                                                <Link
                                                    href={`post/${props.post?.url ? props.post?.url : ""}`}
                                                    className="hover-underline"
                                                >
                                                    {props.post?.title}
                                                </Link>
                                            </h2>
                                            <p className="text mt-15"> {props.post?.description} </p>
                                        </div>
                                        <div style={{marginTop: 20, marginBottom: 40}} className="col-8 date fsz-12px">
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
                                    <div className="col-4 custom__sub-video--width">
                                        <div className="img th-200 img-cover radius-4 overflow-hidden">
                                            <img src={props.post?.imageSmall ? props.post?.imageSmall : '/'} alt="" />
                                            {
                                                props.post?.videoUrl
                                                ? <a href={`https://youtu.be/${props.post.videoUrl}`} data-fancybox="" className="video_icon icon-60">
                                                    <i className="ion-play"></i>
                                                </a> : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}