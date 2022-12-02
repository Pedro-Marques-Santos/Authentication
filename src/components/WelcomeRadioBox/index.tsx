import { Dispatch, SetStateAction } from "react";

import { Container, RadioBox } from "./styles";

import radiostart from '../../assets/selector.png'

interface WelcomeRadioBoxProps {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
}

export function WelcomeRadioBox({ type, setType }: WelcomeRadioBoxProps) {

  return (
    <Container>
      <RadioBox onClick={() => setType('ABOUT')}>
        {
          type === 'ABOUT' && <img src={radiostart} alt="" />
        }
      </RadioBox>
      <RadioBox onClick={() => setType('HEROES')}>
        {
          type === 'HEROES' && <img src={radiostart} alt="" />
        }
      </RadioBox>
      <RadioBox onClick={() => setType('DREAM')}>
        {
          type === 'DREAM' && <img src={radiostart} alt="" />
        }
      </RadioBox>
    </Container>
  );
}