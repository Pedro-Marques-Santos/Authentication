import { Container, ImgLogo, ImgWelcome } from "./styles";

import projetor from '../../assets/projetor.png'

import astronault from '../../assets/astronault.png'
import hero from '../../assets/awd.png'
import dream from '../../assets/dream.png'

import { WelcomeRadioBox } from "../WelcomeRadioBox";
import { useState } from "react";

export function Introduction() {

  const [type, setType] = useState('ABOUT');

  return (
    <Container>
      <ImgLogo>
        <img src={projetor} alt="" />
      </ImgLogo>
      <ImgWelcome>
        {
          type === 'ABOUT' && <img src={astronault} alt="" />
        }
        {
          type === 'HEROES' && <img src={hero} alt="" />
        }
        {
          type === 'DREAM' && <img src={dream} alt="" />
        }
      </ImgWelcome>
      {
        type === 'ABOUT' && <h3>Welcome aboard my friend.</h3>
      }
      {
        type === 'HEROES' && <h3>Be heroes of your own stories.</h3>
      }
      {
        type === 'DREAM' && <h3>Do not stop dreaming.</h3>
      }
      <h5>just a couple of clicks and we start</h5>
      <WelcomeRadioBox type={type} setType={setType} />
    </Container>
  );
}