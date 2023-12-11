import { directionPost } from "@/types/postsType"
import { useTranslation } from "next-i18next"
import Link from "next/link"

export const NextPost: React.FC<{
    post: directionPost
}> = ({post}) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <Link href={`${post?.url}?id=${post?.id}`} className="item">
            <p className="color-666 fsz-12px text-uppercase">{t('postPage.directions.next')}</p>
            <h6 className="title">{post?.title}</h6>
        </Link>
    )
}