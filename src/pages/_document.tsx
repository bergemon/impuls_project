import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/prod.css" />
        <link rel="stylesheet" href="/assets/css/custom_home.css" />
        <link rel="stylesheet" href="/assets/css/custom_single.css" />
        <link rel="stylesheet" href="/assets/css/lib/ionicons.css" />
        <link rel="stylesheet" href="/assets/css/lib/line-awesome.css" />
        <link rel="stylesheet" href="/assets/css/lib/animate.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
