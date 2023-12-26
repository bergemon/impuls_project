import { favPostType } from "@/types/postsType"
import Link from "next/link"
import Image from 'next/image'

export const MiddleSwiperSlideContent = (props: favPostType) => {
    return (
        <div className="story-card">
            <div className="img img-cover">
                <img src={props?.image ? props?.image : '/'} alt="" className="main-img" />
            </div>
            <div className="info">
                <h2 className="fsz-28px mb-20"> <Link href={`post/${props?.url ? props.url : ""}`} className="hover-main">
                    {props?.title}
                </Link></h2>
                <li className="fsz-12px">
                    { props.publicationDate ? <span className="me-3"><i className="la la-calendar me-2"></i> {props.publicationDate} </span> : null }
                    { props.author ? <span className="me-3"><i className="la la-user me-2"></i> {props.author} </span> : null }
                </li>
            </div>
        </div>
    )
}