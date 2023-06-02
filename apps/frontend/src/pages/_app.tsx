import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { ShadowBlurTop } from "../styles/pages/app";
import { MainContainer } from "../styles/MainContainer";

globalStyles();

export default function App({ Component, pageProps }: any) {
  return (
    <MainContainer>
      <ShadowBlurTop />
      <Component {...pageProps} />
    </MainContainer>
  );
}
