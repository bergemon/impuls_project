import Link from "next/link"
import Image from 'next/image'

const CatBanner = () => {
    return (
        <div className="brd-gray pt-40 pb-10">
            <div className="content">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <Link href="/" className="d-block img-cover">
                            <Image width={500} height={500} src="/assets/img/banner2.png" alt=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatBanner