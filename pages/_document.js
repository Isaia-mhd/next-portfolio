// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Ajout du favicon */}
          <link rel="icon" href="/favicon.ico" />
          {/* Vous pouvez aussi ajouter d'autres éléments comme des métadonnées ou des polices ici */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
