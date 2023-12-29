import { postType } from "@/types/postsType"
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { useTranslation } from "next-i18next"
import Link from "next/link"

type videoCardType = {
    post: postType
}

export const VideoCard = (props: videoCardType) => {
    const { t, i18n } = useTranslation('locale')
    
    Fancybox.bind("[data-fancybox]", {
        hideScrollbar: true,
        closeButton: true
    })

    return (
        <div className="video-card">
            <div className="img img-cover">
                <img src={props.post?.image ? props.post.image : "/"} alt="" />
                <div className="info">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="date mb-20 fsz-12px">
                                <span>{props.post?.author}</span>
                            </div>
                            <h2 className="title fsz-40px"> <Link href={`post/${props.post?.url ? props.post?.url : ""}`}>
                                {props.post?.title}
                            </Link> </h2>
                            <p className="fsz-14px"> {props.post?.description} </p>
                            <a
                                href={`https://youtu.be/${props.post?.videoUrl}`}
                                data-fancybox=""
                                className="play-cont mt-90"
                            >
                                <i className="ion-play me-3"></i>
                                <span className="fsz-14px">&nbsp;{t('home.hotvideosBlock.playVideo')}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}