import { postType } from "@/types/postsType"
import Link from "next/link"
import Image from 'next/image'

type catPostType = {
    post: postType
}

export const CategoryPost = (props: catPostType) => {

    return (
        <div className="item">
            <div className="row">
                <div className="col-lg-5">
                    <div className="img img-cover th-250 radius-5 overflow-hidden">
                        <Image width={2000} height={2000} src={props.post?.imageSmall ? props.post.imageSmall : '/'} alt="" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="content mt-4 mt-lg-0">
                        <h2 className="title fsz-28px mb-20"> <Link href={`post/${props.post?.url ? props.post.url : ""}?id=${props.post?.id}`}>{props.post?.title}</Link> </h2>
                        <div className="text fsz-14px"> {props.post?.description}
                        </div>
                        <div className="meta-bot">
                            <small className="fsz-12px"> {props.post?.author} </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}