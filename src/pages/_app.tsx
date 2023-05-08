import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import {
  Container,
  ShadowBlurBottom,
  ShadowBlurTop,
} from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ShadowBlurTop />
      <Component {...pageProps} />
      <ShadowBlurBottom />
    </Container>
  );
}
