import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import styles from './notFound.module.css'
import { useTranslation } from "next-i18next"

type not_found_screen = {
    openNavBar: Dispatch<SetStateAction<Boolean>>
}

export const NotFound = (props: not_found_screen) => {
    const { t, i18n } = useTranslation('locale')
    
    return (
        <main className={styles.Page}>
            <section className={`${styles.Content} tc-404-info text-center`}>
                <div className={`container`}>
                    <h1> {t('notFound_404.title')} </h1>
                    <h3> {t('notFound_404.description')} </h3>
                    <p className="color-777"> {t('notFound_404.sorry')}&nbsp;
                        <a
                            href="#"
                            onClick={() => props.openNavBar(prev => true)}
                            className={`fw-bold color-000 ${styles.SearchBtn404}`}> {t('notFound_404.searchBtn')}
                        </a>
                    </p>
                    <Link
                        href="/"
                        className="butn bg-main text-white hover-shadow mt-50"
                    >
                        <span> {t('notFound_404.goBack')} </span>
                    </Link>
                </div>
            </section>
        </main>
    )
}