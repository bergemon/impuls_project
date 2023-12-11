import Link from "next/link"
import { getFullCategory } from "../../../utils/getCategory"
import { favPostType } from "@/types/postsType"

export const NumberedTrendsWidget: React.FC<{
    num: number,
    favoritePost: favPostType,
    categoryId: number,
    categoryUrl: string
}> = (props) => {
    return (
        <div className="item">
            <h2 className="num">
                {props.num}
            </h2>
            <div className="content">
                <Link
                    href={`${props.categoryUrl}`}
                    className="color-999 fsz-12px text-uppercase mb-1"
                >
                    {getFullCategory(props.categoryId)}
                </Link>
                <h6 className="title fsz-16px fw-bold ltspc--1 hover-main">
                    <Link
                        href={`/post/${props.favoritePost?.url ? props.favoritePost.url : "/"}?id=${props.favoritePost.id}`}
                    >
                        {props.favoritePost?.title}
                    </Link>
                </h6>
            </div>
        </div>
    )
}