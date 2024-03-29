import { swiperPostData } from "@/types/postsType"
import Link from "next/link"

export const TopSwiperSlideContent = (props: swiperPostData) => {
    return (
        <div className={`card-slide`}>
            <div className="img img-cover">
                <img
                    src={props.image ? props.image : '/'}
                    alt=""
                />
            </div>
            <div className={`info item-750`}>
                <div className="date mb-30 fsz-12px">
                    {
                        props.publicationDate
                        ? <span className="me-3"><i className="la la-calendar me-2"></i> {props.publicationDate}</span>
                        : null
                    }
                    {
                        props?.author
                        ? <span><i className="la la-user me-2"></i> {props.author}</span>
                        : null
                    }
                </div>
                <h2 style={{ overflowWrap: "anywhere" }} className="mb-20">
                    <Link href={`post/${props.url ? props.url : ""}`}>
                    {props?.title}
                    </Link>
                </h2>
                <p className="text">{props?.description}</p>
            </div>
        </div>
    )
}