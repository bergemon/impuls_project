import { postType } from "@/types/postsType"
import Link from "next/link"

type bottomSwiperSlide = {
    post: postType;
    slideId: number;
}

export const BottomSwiperSlideContent = (props: bottomSwiperSlide) => {

    let id = props?.slideId + 1
    let imgContainerClassName, itemClassName, imgHeight, imgWidth

    switch(id) {
        case 1:
            itemClassName = "item-550"
            imgContainerClassName = "th-350"
            break
        case 2:
            itemClassName = "item-550"
            imgContainerClassName = "th-350"
            break
        case 3:
            itemClassName = "item-750"
            imgContainerClassName = "th-250"
            break
        case 4:
            itemClassName = "item-550"
            imgContainerClassName = "th-550"
            break
        case 5:
            itemClassName = "item-550"
            imgContainerClassName = "th-350"
            break
        case 6:
            itemClassName = "item-550"
            imgContainerClassName = "th-250"
            break
        default:
            itemClassName = "item-750"
            imgContainerClassName = "th-550"
            break
    }

    return (
        <div className={"tc-post-grid-default"}>
            <div className={"item " + itemClassName}>
                <Link
                    className={"img img-cover " + imgContainerClassName + " radius-6 overflow-hidden"}
                    href={`post/${props.post?.url ? props.post?.url : ""}`}
                >
                    {
                        props.post?.imageSmall
                        ? <img src={props.post.imageSmall} alt=""/>
                        : null
                    }
                </Link>
                <div className="content pt-30">
                    <h2 className="title mb-20 fsz-28px">
                        <Link href={`post/${props.post?.url ? props.post?.url : ""}`}>{props.post?.title} </Link>
                    </h2>
                    <p className="text mb-20 fsz-14px">
                        {props.post?.description}
                    </p>
                    <ul className="fsz-12px">
                        <li>
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
                    <span className="numb mt-40 color-main"> {props?.slideId < 10 ? `0${props?.slideId + 1}` : props?.slideId} </span>
                </div>
            </div>
        </div>
    )
}