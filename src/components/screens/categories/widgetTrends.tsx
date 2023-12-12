import { favPostType } from "@/types/postsType"
import Link from "next/link"
import { NumberedTrendsWidget } from "./widgetTrendsSmall"
import { getFullCategory } from "../../../utils/getCategory"
import Image from 'next/image'
import { useTranslation } from "next-i18next"

type widgetTrends = {
    favoritePosts: favPostType[]
    categoryId: number
    categoryUrl: string
}

const WidgetTrends = (props: widgetTrends) => {
    const { t, i18n } = useTranslation('locale')

    return (
        <div className="tc-trending-news-style5 border border-1 brd-gray mb-40">
            <p className="color-000 text-uppercase p-15">{t('cat_sPage.trendingPosts')}</p>
            <div className="tc-post-list-style1">
                <div className="tc-post-overlay-default">
                    <div className="img th-200 img-cover">
                        <Image width={500} height={500} 
                            src={props.favoritePosts[0]?.image ? props.favoritePosts[0].image : '/'}
                            alt=""
                        />
                    </div>
                    <div className="content ps-20 pe-20 pb-20 text-white">
                        <Link
                            href={`${props.categoryUrl}`}
                            className="text-uppercase fsz-13px mb-1"
                        >
                            {getFullCategory(props.categoryId)}
                        </Link>
                        <h4 className="title">
                            <Link href={`/post/${props.favoritePosts[0]?.url}?id=${props.favoritePosts[0].id}`}>
                                {props.favoritePosts[0]?.title}
                            </Link>
                        </h4>
                    </div>
                </div>
                <div className="items px-4 py-2">
                    {
                        props.favoritePosts.length > 0
                        ? props.favoritePosts.map((item, id) => {
                            return id < 4 && id > 0
                            ? <NumberedTrendsWidget
                                key={item.id}
                                favoritePost={item}
                                num={id + 1}
                                categoryId={props.categoryId}
                                categoryUrl={props.categoryUrl}
                            /> : null
                        }) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default WidgetTrends