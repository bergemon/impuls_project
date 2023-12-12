import { postType } from "@/types/postsType"
import { useTranslation } from "next-i18next"
import Image from 'next/image'

export const EditorsChoiceSlide: React.FC<{
    post: postType
}> = (props) => {
    const { t, i18n } = useTranslation('locale')

    return (
        <div className="swiper-slide">
            <div className="item">
                <div className="img img-cover">
                    <Image width={2000} height={2000} src={props.post?.imageSmall} alt="" className="main-img" />
                    {
                        props.post?.videoUrl
                        ? <a href={props.post.videoUrl} data-lity="" className="video_icon icon-60">
                            <i className="ion-play"></i>
                        </a> : null
                    }
                    {/* What is it? Is there some kind of category must be?
                    But there is no category key in recommended post object that comes from the server */}
                    <div className="tags">
                        {
                            props.post.videoUrl
                            ? <a href="/" className="bg-000 text-white py-1 px-3 rounded-pill fsz-12px text-uppercase me-2">{t('postPage.editorsChoice.sliderBarVideo')}</a>
                            : null
                        }
                        {
                            props.post?.categories
                            ? props.post.categories.map((item, id) => (
                                <a href="/" className="bg-000 text-white py-1 px-3 rounded-pill fsz-12px text-uppercase me-2">{item.name ? item.name : "empty"}</a>
                            )) : null
                        }
                    </div>
                </div>
                <div className="content">
                    <h4 className="title mt-20">
                        <a href={`${props.post?.url ? props.post.url : ""}?id=${props.post?.id}`}>{props.post?.title}</a>
                    </h4>
                </div>
            </div>
        </div>
    )
}