import { globalStyles } from "../styles/global";

import { ShadowBlurTop } from "../styles/pages/app";
import { MainContainer } from "../styles/containers";
import NavbarComponent from "../styles/Navbar";

globalStyles();

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <NavbarComponent />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
      <ShadowBlurTop />
    </>
  );
}
