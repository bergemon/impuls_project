import { postType } from "@/types/postsType"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

export const EditorsChoiceSlide: React.FC<{
    post: postType
    lang: string
}> = (props) => {
    const { t, i18n } = useTranslation('locale')

    return (
        <div className="swiper-slide">
            <div className="item">
                {
                    props.post?.videoUrl
                    ? <div
                        className="img img-cover"
                    >
                        <img src={props.post?.imageSmall} alt="" className="main-img" />
                            <a href={`https://youtu.be/${props.post.videoUrl}`} data-fancybox="" className="video_icon icon-60">
                                <i className="ion-play"></i>
                            </a> 
                        <div className="tags">
                            <a href="/" className="bg-000 text-white py-1 px-3 rounded-pill fsz-12px text-uppercase me-2">{t('postPage.editorsChoice.sliderBarVideo')}</a>
                            {
                                props.post?.categories
                                ? props.post.categories.map((item, id) => (
                                    <a href="/" className="bg-000 text-white py-1 px-3 rounded-pill fsz-12px text-uppercase me-2">{item.name ? item.name : "empty"}</a>
                                )) : null
                            }
                        </div>
                    </div>
                    : <Link
                        className="img img-cover"
                        href={`/${props.lang}/post/${props.post?.url ? props.post.url : ""}`}
                    >
                        <img src={props.post?.imageSmall} alt="" className="main-img" />
                        <div className="tags">
                            {
                                props.post?.categories
                                ? props.post.categories.map((item, id) => (
                                    <a className="bg-000 text-white py-1 px-3 rounded-pill fsz-12px text-uppercase me-2">{item.name ? item.name : "empty"}</a>
                                )) : null
                            }
                        </div>
                    </Link>
                }
                <div className="content">
                    <h4 className="title mt-20">
                        <Link href={`/${props.lang}/post/${props.post?.url ? props.post.url : ""}`}>{props.post?.title}</Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}