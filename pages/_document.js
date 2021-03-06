import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description"
                        content="London based Front End Engineer and designer Niall McKenna - This is my personal website. I design and build websites and web applications using the Javascript, ReactJS, HTML CSS/SaSS stack." />
                    <meta name="Keywords"
                        content="front end, engineer, developer, designer, web designer, web developer, javascript, reactJS, html, css, SaSS, coder, Wordpress" />
                    <meta name="author" content="Niall McKenna" />
                    <meta name="GOOGLEBOT" content="ALL, NOARCHIVE" />
                    <meta name="SLURP" content="NOARCHIVE" />
                    <meta name="MSNBOT" content="NOARCHIVE" />
                    <meta name="robots" content="index, follow" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
                    <link rel="manifest" href="/images/favicon_io/site.webmanifest" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script defer src="https://use.fontawesome.com/releases/v5.13.0/js/all.js" crossOrigin="anonymous"></script>
                    <script defer src="https://code.responsivevoice.org/responsivevoice.js?key=j9X4oczw"></script>
                    <link defer href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
                    <link defer href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
                    <link defer href="https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap" rel="stylesheet" type="text/css" />
                </body>
            </Html>
        )
    }
}

export default MyDocument