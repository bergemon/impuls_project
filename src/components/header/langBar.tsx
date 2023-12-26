import { HeaderLang } from "@/components/data/headerLang"
import Link from "next/link"
import { useRouter } from "next/router"

type langBarType = {
    translations?: boolean[]
    notFoundPage?: boolean
    lang: string
}

export const LangBar = (props: langBarType) => {
    const router = useRouter()

    // получение текущей локализации
    const currentLang = HeaderLang.find(item => item.locale === router.locale)

    return (
        <div className="header-lang">
            <div className="another-lang-links">
                {
                    HeaderLang.map((item, id) => {
                        return (props.translations !== undefined
                        && props.translations[id] === true
                        && !props.notFoundPage
                        || props.translations === undefined
                        && !props.notFoundPage)
                        && item.locale !== props.lang
                        ? <Link
                            key={item.id} href={router.asPath}
                            locale={item.locale}
                            className="lang-link text-white"
                            rel={"canonical"}
                        >
                            <span className="flag icon-20 rounded-circle overflow-hidden img-cover me-3">
                                <img src={item.icon ? item.icon : '/'} alt="" />
                            </span>
                            <span> {item.title} </span>
                        </Link> : null
                    })
                }
            </div>
            <div className="lang-link">
                <span className="flag icon-30 rounded-circle overflow-hidden img-cover me-3">
                    <img src={currentLang?.icon ? currentLang.icon : "/"} alt="" />
                </span>
                <span> {currentLang?.title} <i className="la la-angle-down"></i> </span>
            </div>
        </div>
    );
};