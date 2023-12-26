import { useTranslation } from 'next-i18next'
import styles from './styles/contact.module.css'

export const ContactScreen = () => {
    // "contact" is the name of the json file
    const { t, i18n } = useTranslation('contact')

    // Example of using css modules is below. Also see contact.module.css file.
    return (
        <main className={styles.Main}>
            <h1 className={styles.Heading}>
                {/* As you can see, here we can use nested scructure of the json file.*/}
                {/* There are no limits of nestings */}
                {t('contact.example')}
            </h1>
            <p className={styles.Paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsum aperiam est accusantium nostrum soluta mollitia esse
                laborum exercitationem accusamus ullam? Sint quam molestias quibusdam aliquam culpa
                officiis aliquid deserunt assumenda.
            </p>
            {/* One more translation example */}
            <p className={styles.SecondExample}>
                {t('contact.secondsExample.title')}
            </p>
        </main>
    )
}