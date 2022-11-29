import styled from "styled-components";

export const Container = styled.div`
  border-radius: 24px 0 0 24px;
  background: var(--azul-escuro);
  max-width: 500px;
  width: 100%;
  @media (max-width: 630px) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h3 {
    color: var(--white);
    font-weight: 600;
    font-size: 17px;
  }

  h5 {
    font-size: 12px;
    font-weight: 100;
    color: var(--white);
  }
`

export const ImgLogo = styled.div`
  margin-left: -225px;
  img {
    width: 150px;
  }
  margin-bottom: 40px;
  @media (max-width: 740px) {
    display: none;
  }
`

export const ImgWelcome = styled.div`
  img {
    width: 150px;
  }
  margin-bottom: 30px;
`