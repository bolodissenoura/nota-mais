import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../../stitches.config";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitche"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body className="background">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
