import Document, {
    Html,
    Head,
    Main,
    NextScript
} from "next/document";

import Script from "next/script";

class MyDocument extends Document {

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <Script 
                        src="https://www.googletagmanager.com/gtag/js?id=UA-146649922-1" 
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {   
                            `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'UA-146649922-1');
                            `
                        }
                    </Script>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        );
    }
}

export default MyDocument;