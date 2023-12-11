import Link from "next/link"
import Image from 'next/image'

const FeaturedAuthors = () => {
    return (
        <div className="p-30 radius-7 bg-white mb-30">
            <p className="fsz-14px text-uppercase mb-20"> featured authors </p>

            <Link href="/" className="columnist-card d-flex align-items-center pb-20 border-bottom border-1 brd-gray">
                <div className="img img-cover icon-70 rounded-circle overflow-hidden flex-lg-shrink-0 me-4">
                    <Image width={2000} height={2000} src="/assets/img/author.png" alt="" />
                </div>
                <div className="info">
                    <h4 className="name fsz-14px mb-10 fw-bold hover-main">
                        David K.
                    </h4>
                    <div className="jop-title">
                        <p className="fsz-12px">Jefe de revista</p>
                    </div>
                </div>
            </Link>
            <Link href="/" className="columnist-card d-flex align-items-center pb-20 pt-20 border-bottom border-1 brd-gray">
                <div className="img img-cover icon-70 rounded-circle overflow-hidden flex-lg-shrink-0 me-4">
                    <Image width={2000} height={2000} src="/assets/img/author.png" alt="" />
                </div>
                <div className="info">
                    <h4 className="name fsz-14px mb-10 fw-bold hover-main">
                        Antonio M.
                    </h4>
                    <div className="jop-title">
                        <p className="fsz-12px">Critico gastronomy</p>
                    </div>
                </div>
            </Link>
            <Link href="/" className="columnist-card d-flex align-items-center pb-20 pt-20 border-bottom border-1 brd-gray">
                <div className="img img-cover icon-70 rounded-circle overflow-hidden flex-lg-shrink-0 me-4">
                    <Image width={2000} height={2000} src="/assets/img/author.png" alt="" />
                </div>
                <div className="info">
                    <h4 className="name fsz-14px mb-10 fw-bold hover-main">
                        Elena S.
                    </h4>
                    <div className="jop-title">
                        <p className="fsz-12px">Author, traductora</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FeaturedAuthors