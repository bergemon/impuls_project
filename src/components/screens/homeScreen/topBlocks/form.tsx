import { handleFormErrors } from "@/utils/formErrHandler"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import { useRef, useState } from "react"

type formType = {
    lang: string
}

export interface msg {
    msg: string
    msgIndex: number
    status: boolean
}

export const Form = (props: formType) => {
    const { t, i18n } = useTranslation('locale')
    
    const [message, setMessage] = useState<msg>({msg: "", msgIndex: -1, status: false})
    const nameRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLParagraphElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const checkBoxRef = useRef<HTMLInputElement>(null)

    const errorsTranslation = t('home.whatIsNewBlock.form.errorHandler', {returnObjects: true})
    if(message.msgIndex !== -1) {
        Object.values(errorsTranslation).map((item, id) => {
            if (id === message.msgIndex) {
                message.msg !== item
                ? setMessage({msg: item, msgIndex: message.msgIndex, status: message.status})
                : null
            }
        })
    }

    const subscribe = async (checked: boolean) => {
        const handlerResult = handleFormErrors(nameRef, emailRef, setMessage, checked, errorsTranslation)
        if(handlerResult === true) { return }
        
        const formData = {
            firstName: nameRef.current?.value,
            email: emailRef.current?.value,
            tags: [
                props.lang === 'es'
                ? "impuls_web_es"
                : props.lang === 'en'
                ? "impuls_web_en"
                : "impuls_web_ru"
            ],
            gdpr: true
        }
        const result = await fetch('/api/email-send', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        let resMessage = await result.json()

        if (resMessage.message === "Subscriber added successfully") {
            const resMsg: msg =
                { msg: t('home.whatIsNewBlock.form.errorHandler.success'), msgIndex: 7, status: true }
            setMessage(prev => resMsg)
            return
        }
        else {
            const resMsg: msg = { msg: resMessage.message, msgIndex: -1, status: false }
            setMessage(prev => resMsg)
            return
        }
    }

    return (
        <div className="col-lg-12 custom-col-half custom-col-small tc-subscribe-style3 mt-30 custom-mt-70 custom-col-margin">
            <div style={{color: "#212529"}} className="sub-form radius-7">
                <p className="text-uppercase fsz-14px mb-30"> {t('home.whatIsNewBlock.form.title')} </p>
                <div className="text fsz-14px mb-15">
                    {t('home.whatIsNewBlock.form.description')}
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
                        <Link
                            href={`/${props.lang}/policy`}
                            className="text-decoration-underline color-111"
                        >
                            {t('home.whatIsNewBlock.form.policyLink')}
                        </Link>
                    </label>
                </div>
                <p
                    style={{
                        marginTop: 20,
                        fontSize: 16,
                        color: message.status === false ? "red" : "green",
                        display: message.msg.length > 0 ? "block" : "none"
                    }}
                    ref={messageRef}
                >
                        {message.msg}
                </p>
                <a
                    className="btn w-100 bg-main mt-30 rounded-pill"
                    onClick={() => {
                        checkBoxRef.current?.checked
                        ? subscribe(true)
                        : subscribe(false)
                    }}
                >
                    <span className="text-white">{t('home.whatIsNewBlock.form.button')}</span>
                </a>
            </div>
        </div>
    )
}