import { socialsType } from "@/types/socials"
import Link from "next/link"
import ScrollToTop from "react-scroll-to-top"
import { ArrowUp } from "./arrowUp"
import { Trans, useTranslation } from "next-i18next"

type footerType = {
    socials: socialsType
    locale: string
}

export const Footer = (props: footerType) => {
    const { t, i18n } = useTranslation('locale')

    return (
        <footer className="footer">
            <div className="container">
                <div className="content pt-40 pb-40 border-1 border-top brd-gray text-center">
                    <div className="foot-links mt-80">
                        <Link href="/about">{t('footer.about')}</Link>&nbsp;
                        <Trans i18nKey="test">
                            <Link href="/contact">{t('footer.contact')}</Link>&nbsp;
                        </Trans>
                        <Link href="/policy">{t('footer.policy')}</Link>
                    </div>
                    <div className="foot-social mt-40">
                        <Link href={props.socials ? props.socials.instagram : "/"}>
                            <i className="la la-instagram"></i>
                        </Link>&nbsp;
                        <Link href={props.socials ? props.socials.facebook : "/"}>
                            <i className="la la-facebook-f"></i>
                        </Link>&nbsp;
                        <Link href={props.socials ? props.socials.telegram : "/"}>
                            <i className="la la-telegram"></i>
                        </Link>&nbsp;
                        <Link href={props.socials ? props.socials.whatsapp : "/"}>
                            <i className="la la-whatsapp"></i>
                        </Link>&nbsp;
                        <Link href={props.socials ? props.socials.youtube : "/"}>
                            <i className="la la-youtube"></i>
                        </Link>&nbsp;
                        <Link href={props.socials ? props.socials.tiktok : "/"}>
                            <img src={"/assets/img/tiktok.svg"} />
                        </Link>&nbsp;
                        <Link href={props.socials ? props.socials.linkedin : "/"}>
                            <i className="la la-linkedin"></i>
                        </Link>
                    </div>

                    <p className="fsz-14px color-666 mt-40">
                        {
                            props.locale === 'en'
                            ? <>
                                © 2024&nbsp;
                                {t('footer.copyright')}
                                &nbsp;
                                <Link href="/" className="color-000 fw-bold">
                                    Impuls PLUS
                                </Link>.
                            </>
                            : <>
                                © 2024&nbsp;
                                <Link href="/" className="color-000 fw-bold">
                                    Impuls PLUS
                                </Link>
                                &nbsp;
                                {t('footer.copyright')}.
                            </>
                        }
                        &nbsp;
                        {t('footer.rights')}.
                    </p>
                </div>
            </div>
            <ScrollToTop
                smooth
                className={""}
                color="white"
                viewBox={"0 0 256 256"}
                style={{
                    width: 46,
                    height: 46,
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    display: "relative",
                    zIndex: 9999
                }}
                component={<ArrowUp/>}
            />

        </footer>
    );
};