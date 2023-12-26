import GoogleAnalytics from '@/components/googleAnalytics'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/custom_category.css" />
                <link rel="stylesheet" href="/assets/css/custom_home.css" />
                <link rel="stylesheet" href="/assets/css/custom_single.css" />
                <link rel="stylesheet" href="/assets/css/lib/ionicons.css" />
                <link rel="stylesheet" href="/assets/css/lib/line-awesome.css" />
                <link rel="stylesheet" href="/assets/css/lib/animate.css" />
                {
                    process.env.NEXT_PUBLIC_GA_ID &&
                    <GoogleAnalytics
                        ga_id={process.env.NEXT_PUBLIC_GA_ID}
                    />
                }
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
