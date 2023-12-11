import { isServer } from "@/utils/server"
import { useTranslation } from "next-i18next"
import { useRef } from "react"

export const Form = () => {
    const { t, i18n } = useTranslation('locale')
    
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const checkBoxRef = useRef<HTMLInputElement>(null)

    return (
        <div className="col-lg-12 custom-col-half custom-col-small tc-subscribe-style3 mt-30 custom-mt-70 custom-col-margin">
            <div className="sub-form radius-7">
                <p className="text-uppercase fsz-14px mb-30"> {t('home.whatIsNewBlock.form.title')} </p>
                <div className="text fsz-14px mb-15">
                    {t('home.whatIsNewBlock.form.desciption')}
                </div>
                <div className="form-group">
                    <span className="icon">
                        <i className="la la-user"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={t('home.whatIsNewBlock.form.nameIn')}
                        ref={nameRef}
                    />
                </div>
                <div className="form-group">
                    <span className="icon">
                        <i className="la la-envelope"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder={t('home.whatIsNewBlock.form.mailIn')}
                        ref={emailRef}
                    />
                </div>
                <div className="form-check mt-2">
                    <input ref={checkBoxRef} className="form-check-input" type="checkbox" name="subCheck" id="subCheck1" />
                    <label className="form-check-label fsz-14px lh-5" htmlFor="subCheck1">
                        {t('home.whatIsNewBlock.form.policy')}&nbsp;
                        <a className="text-decoration-underline color-000">{t('home.whatIsNewBlock.form.policyLink')}</a>
                    </label>
                </div>
                <a
                    className="btn w-100 bg-main mt-30 rounded-pill"
                    onClick={async () => {
                        const formData = {
                            firstName: nameRef.current?.value,
                            email: emailRef.current?.value,
                            tags: [],
                            gdpr: true
                        }
                        checkBoxRef.current?.checked ? fetch(`${isServer}/subscribe/add`, {
                            method: "POST",
                            headers: {
                                "Content-Type": 'application/json',
                                "Access-Control-Allow-Origin": "*"
                            },
                            body: JSON.stringify(formData)
                        }) : null
                    }}
                >
                    <span className="text-white">{t('home.whatIsNewBlock.form.button')}</span>
                </a>
            </div>
        </div>
    )
}