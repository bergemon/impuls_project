import { useRef, useState } from "react"
import { animated, useSpring } from "react-spring"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

export const Navbar: React.FC<{
    isNavBarOpen: Boolean
}> = ({isNavBarOpen}) => {
    const { t, i18n } = useTranslation('locale')

    const [hidden, hide] = useState<Boolean>(false)

    const props = useSpring({
        height: isNavBarOpen? 120 : 0,
        paddingTop: isNavBarOpen ? 20 : 0,
        paddingBottom: isNavBarOpen ? 20 : 0,
        display: isNavBarOpen ? "block" : hidden ? "none" : "block",
        config: { duration: 400 },
        onRest: () => {
            if(!isNavBarOpen) { hide((prev) => true) }
            else { hide((prev) => false) }
        }
    });

    const router = useRouter()
    const inputRef = useRef<any>(null)

    const getUrl = () => {
        return "/search-results?query=" + inputRef.current?.value
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            router.push(getUrl())
        }
    }

    return (
        <animated.div
            className="home-style10 navbar navbar-expand-lg navbar-dark nav-search-style1"
            style={{overflow: 'hidden', paddingLeft: 20, paddingRight: 20, ...props }}
        >
            <div className="row justify-content-center align-items-center gx-lg-5">
                <div className="col-lg-4">
                    <div className="info">
                        <h6> {t('navbar.title')} </h6>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form">
                        <div className="form-group">
                            <span className="icon">
                                <i className="la la-search"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder={t('navbar.enter')}
                                ref={inputRef}
                                onKeyPress={handleKeyPress}
                            />
                            <button
                                onClick={() => {
                                    if(inputRef.current?.value) {
                                        router.push(getUrl())
                                    }}
                                }
                            >
                                {t('navbar.btn')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
        )
}