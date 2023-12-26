import { topPostType } from "@/types/postsType"
import Link from "next/link"
import { NumberedTrendsWidget } from "./widgetTrendsSmall"
import { useTranslation } from "next-i18next"

type widgetTrends = {
    topPosts: topPostType[]
    categoryId: number
    categoryUrl: string
}

const WidgetTrends = (props: widgetTrends) => {
    const { t, i18n } = useTranslation('locale')

    return (
        <div className="tc-trending-news-style5 border border-1 brd-gray mb-40">
            <p className="color-000 text-uppercase p-15">{t('cat_sPage.trendingPosts')}</p>
            <div className="tc-post-list-style1">
                <Link
                    className="tc-post-overlay-default"
                    style={{display: 'block'}}
                    href={`/post/${props.topPosts[0]?.url}`}
                >
                    <div className="img th-200 img-cover">
                        <img 
                            src={props.topPosts[0]?.imageSmall ? props.topPosts[0].imageSmall : '/'}
                            alt=""
                        />
                    </div>
                    <div className="content ps-20 pe-20 pb-20 text-white">
                        <h4 className="title">
                            {props.topPosts[0]?.title}
                        </h4>
                    </div>
                </Link>
                <div className="items px-4 py-2">
                    {
                        props.topPosts.length > 0
                        ? props.topPosts.map((item, id) => {
                            return id < 4 && id > 0
                            ? <NumberedTrendsWidget
                                key={item.id}
                                topPost={item}
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