import { topPostType } from "@/types/postsType"
import { WidgetCard } from "../../../widgetCards/widgetCard"
import { useTranslation } from "next-i18next"

export const TopPosts: React.FC<{
    topPosts: topPostType[]
}> = (props) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <div className="col-lg-12 custom-col-half custom-col-small tc-widget-top-games-style3">
            <div className="widget-title mb-30">
                <h3 className="lh-1 fsz-32px">{t('home.whatIsNewBlock.topPosts')}</h3>
            </div>
            <div className="widget-content">
                {
                    props.topPosts ?
                    <WidgetCard
                        type={"main"}
                        post={props.topPosts[0]}
                    /> : null
                }
                {
                    <div className="number-cards">
                        {
                            props.topPosts
                            ? props.topPosts.map((item, id) => {
                                return id > 0 && id < 5
                                ? <WidgetCard
                                    key={id}
                                    type={"numCard"}
                                    post={item}
                                    numCardId={++id}
                                />
                                : null
                            }) : null
                        }
                    </div>
                }
            </div>
        </div>
    )
}