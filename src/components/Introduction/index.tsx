import { Container, ImgLogo, ImgWelcome } from "./styles";

import projetor from '../../assets/projetor.png'

import astronault from '../../assets/astronault.png'

import { WelcomeRadioBox } from "../WelcomeRadioBox";

export function Introduction() {
  return (
    <Container>
      <ImgLogo>
        <img src={projetor} alt="" />
      </ImgLogo>
      <ImgWelcome>
        <img src={astronault} alt="" />
      </ImgWelcome>
      <h3>Welcome aboard my friend</h3>
      <h5>just a couple of clicks and we start</h5>
      <WelcomeRadioBox />
    </Container>
  );
}