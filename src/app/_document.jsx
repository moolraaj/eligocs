import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var onloadCallback = function() {
                  grecaptcha.render('html_element', {
                    'sitekey' : ${NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  });
                };
              `,
            }}
          />
          <script
            src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
            strategy="lazyOnload"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
