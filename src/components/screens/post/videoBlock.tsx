import { singlePost } from "@/types/postsType"
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { useTranslation } from "next-i18next"


export const PostVideoBlock: React.FC<{
    post: singlePost
}> = (props) => {
    const { t, i18n } = useTranslation('locale')
    
    Fancybox.bind("[data-fancybox]", {
        hideScrollbar: true,
        closeButton: true
    })

    return (
        <div className="tc-video-content text-white mb-50"
                style={{backgroundImage: `url(${props.post?.mainImageLink})`}
        }>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-10">
                        <div className="play-btn-content">
                            <a href={`https://youtu.be/${props.post.videoUrl}`} data-fancybox="" className="play-cont">
                                <i className="ion-play me-3"></i>
                                <span>
                                    {t('postPage.playVideo.firstRow')}
                                    <br />
                                    {t('postPage.playVideo.secondRow')}
                                </span>
                            </a>
                        </div>
                        <div className="info-content">
                            <p className="sub-title">
                                {
                                    props.post?.categories?.map((item, id) => {
                                        return id < 1 ? `${item.name}` : `, ${item.name}`
                                    })
                                }
                            </p>
                            <h3 className="title"> {props.post?.title} </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}