import { useTranslation } from 'next-i18next'
import styles from './styles/cookies.module.css'

export const CookiesScreen = () => {
    // "cookies" is the name of the json file
    const { t, i18n } = useTranslation('cookies')

    // Example of using css modules is below. Also see cookies.module.css file.
    return (
        <main className={styles.Main}>
            <h1 className={styles.Heading}>
                {/* As you can see, here we can use nested scructure of the json file.*/}
                {/* There are no limits of nestings */}
                {t('cookies.example')}
            </h1>
            <p className={styles.Paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum aperiam est accusantium nostrum soluta mollitia esse
                laborum exercitationem accusamus ullam? Sint quam molestias quibusdam aliquam culpa
                officiis aliquid deserunt assumenda.
            </p>
            {/* One more translation example */}
            <p className={styles.SecondExample}>
                {t('cookies.secondsExample.title')}
            </p>
        </main>
    )
}