import { directionPost } from "@/types/postsType"
import { useTranslation } from "next-i18next"
import Link from "next/link"

export const PrevPost: React.FC<{
    post: directionPost
}> = ({post}) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <Link href={`/post/${post?.url}`} className="item">
            <p className="color-666 fsz-12px text-uppercase">{t('postPage.directions.prev')}</p>
            <h6 className="title">{post?.title}</h6>
        </Link>
    )
}