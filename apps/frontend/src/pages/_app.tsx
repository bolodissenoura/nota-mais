import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import {
  Container,
  ShadowBlurBottom,
  ShadowBlurTop,
} from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: any) {
  return (
    <Container>
      <ShadowBlurTop />
      <Component {...pageProps} />
      <ShadowBlurBottom />
    </Container>
  );
}
