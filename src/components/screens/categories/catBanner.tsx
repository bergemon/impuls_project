import Link from "next/link"

type catBannerType = {
    pictureSrc: string
}

const CatBanner = (props: catBannerType) => {
    return (
        <div className="brd-gray pt-40 pb-10">
            <div className="content">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <Link href="/" className="d-block img-cover">
                            <img src={props.pictureSrc} alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatBanner