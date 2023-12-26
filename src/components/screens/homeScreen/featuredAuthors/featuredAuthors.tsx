import Link from "next/link"
import { useTranslation } from "next-i18next"

const FeaturedAuthors = () => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <div className="p-30 radius-7 bg-white mb-30">
            <p className="fsz-14px text-uppercase mb-20"> {t('home.featAuthors.title')} </p>

            <Link href="/" className="columnist-card d-flex align-items-center pb-20 border-bottom border-1 brd-gray">
                <div className="img img-cover icon-70 rounded-circle overflow-hidden flex-lg-shrink-0 me-4">

                    {/* First author image */}
                    <img src={`/assets/img/authors/author_1.png`} alt="" />
                </div>
                <div className="info">
                    <h4 className="name fsz-14px mb-10 fw-bold hover-main">
                    {t('home.featAuthors.firstAuthor')}
                    </h4>
                    <div className="jop-title">
                        <p className="fsz-12px">{t('home.featAuthors.firstAuthorDesc')}</p>
                    </div>
                </div>
            </Link>
            <Link href="/" className="columnist-card d-flex align-items-center pb-20 pt-20 border-bottom border-1 brd-gray">
                <div className="img img-cover icon-70 rounded-circle overflow-hidden flex-lg-shrink-0 me-4">

                    {/* Second author image */}
                    <img src={`/assets/img/authors/author_2.png`} alt="" />
                </div>
                <div className="info">
                    <h4 className="name fsz-14px mb-10 fw-bold hover-main">
                    {t('home.featAuthors.secondAuthor')}
                    </h4>
                    <div className="jop-title">
                        <p className="fsz-12px">{t('home.featAuthors.secondAuthorDesc')}</p>
                    </div>
                </div>
            </Link>
            <Link href="/" className="columnist-card d-flex align-items-center pb-20 pt-20 border-bottom border-1 brd-gray">
                <div className="img img-cover icon-70 rounded-circle overflow-hidden flex-lg-shrink-0 me-4">

                    {/* Third author image */}
                    <img src={`/assets/img/authors/author_3.png`} alt="" />
                </div>
                <div className="info">
                    <h4 className="name fsz-14px mb-10 fw-bold hover-main">
                    {t('home.featAuthors.thirdAuthor')}
                    </h4>
                    <div className="jop-title">
                        <p className="fsz-12px">{t('home.featAuthors.thirdAuthorDesc')}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FeaturedAuthors