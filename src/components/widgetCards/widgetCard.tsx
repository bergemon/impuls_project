import { topPostType } from "@/types/postsType"
import Link from "next/link"
import Image from 'next/image'

type card = {
    post: topPostType;
    type: "main" | "numCard"
    numCardId?: number
}

export const WidgetCard = (props: card) => {
    
    return (
        // Widget top post (card)
        props.type == "main"
        ? <div className="img-card">
            <div className="img img-cover">
                <Image width={2000} height={2000} src={props.post?.imageSmall ? props.post.imageSmall : '/'} alt="" />
            </div>
            <div className="content">
                <h3 className="title title-white">
                    <Link href={`post/${props.post?.url ? props.post?.url : ""}?id=${props.post?.id}`}>{props.post?.title}</Link>
                </h3>
                <div className="meta-bot mt-15 fsz-12px">
                    {
                        props.post?.author
                        ? <span> {props.post.author} </span>
                        : null
                    }
                </div>
            </div>
        </div>
        : <Link href={`post/${props.post?.url ? props.post?.url : ""}?id=${props.post?.id}`} className="number-card">
            <span className="number">
                {props.numCardId}
            </span>
            <div className="info">
                <h3 style={{overflowWrap: "anywhere"}} className="title fsz-28px">{props.post?.title}</h3>
                <div className="meta-bot fsz-12px">
                    {
                        props.post?.author
                        ? <span> {props.post.author} </span>
                        : null
                    }
                </div>
            </div>
        </Link>
    )
}
