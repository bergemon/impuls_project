import Link from "next/link"
import { topPostType } from "@/types/postsType"

export const NumberedTrendsWidget: React.FC<{
    num: number,
    topPost: topPostType,
    categoryId: number,
    categoryUrl: string
}> = (props) => {
    return (
        <div className="item">
            <h2 className="num">
                {props.num}
            </h2>
            <div className="content">
                <h6 className="title fsz-16px fw-bold ltspc--1 hover-main">
                    <Link
                        href={`/post/${props.topPost?.url ? props.topPost.url : ""}`}
                    >
                        {props.topPost?.title}
                    </Link>
                </h6>
            </div>
        </div>
    )
}