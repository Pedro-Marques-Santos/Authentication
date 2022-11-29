import { Container } from "./styles";

import radiostart from '../../assets/selector.png'

export function WelcomeRadioBox() {
  return (
    <Container>
      <div>
        <img src={radiostart} alt="" />
      </div>
      <div></div>
      <div></div>
    </Container>
  );
}