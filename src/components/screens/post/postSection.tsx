import { singlePost } from "@/types/postsType"
import Link from "next/link"
import { socialsType } from "@/types/socials"
import parse from 'html-react-parser'
import { PostVideoBlock } from "./videoBlock"
import Image from 'next/image'
import { useTranslation } from "next-i18next"

type postSection = {
    post: singlePost
    socials: socialsType
}

const PostSection = (props: postSection) => {
    const { t, i18n } = useTranslation('locale')
    return (
        
        <>
        {
            props.post.videoUrl
            ? <PostVideoBlock post={props.post} />: null
        }
        <section className="tc-main-post-style1 pb-60">
            <article className="container">
                {
                    !props.post.videoUrl
                    ? <div className="tc-main-post-img img-cover pt-40 mb-50">
                        <Image width={2000} height={2000} src={props.post?.mainImageLink} alt=""/>
                    </div> : null
                }
                <div className="tc-main-post-content color-000">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="sharing">
                                <p className="text-uppercase mb-20">{t('postPage.share')}</p>
                                <div className="share-icons">
                                    <Link href={props.socials?.facebook}> <i className="la la-facebook-f"></i> </Link>
                                    <Link href={props.socials?.instagram}> <i className="la la-instagram"></i> </Link>
                                    <Link href={props.socials?.youtube}> <i className="la la-youtube"></i> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="tc-main-post-titlepb-40">
                                <div className="row">
                                    {
                                        !props.post.videoUrl && props.post?.categories[0]
                                        ? <div className="col-lg-8">
                                            <p className="text-uppercase mb-15">{props.post?.categories[0]?.name}</p>
                                            <h1 className="title">{props.post?.title}</h1>
                                        </div> : null
                                    }
                                    <div className="col-lg-8 mt-20 mb-40">
                                        <div className="author-side color-666 fsz-13px">
                                            {
                                                props.post?.author
                                                ? <span className="me-40"> <i className="la la-user me-1"></i> {props.post?.author}</span>
                                                : null
                                            }
                                            {
                                                props.post?.publicationTime
                                                ? <span className="me-40"> <i className="la la-calendar me-1"></i> {props.post.publicationTime}</span>
                                                : null
                                            }
                                            {
                                                props.post?.viewCounter
                                                ? <span className=""> <i className="la la-eye me-1"></i> {props.post.viewCounter}</span>
                                                : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single_content">
                                { parse(props.post?.description) }
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        </>
    )
}

export default PostSection