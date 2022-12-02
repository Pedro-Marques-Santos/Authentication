import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 740px) {
    margin: 0 auto;
    width: 100%;
  }
  width: 400px;
  min-width: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  h3 {
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    color: var(--black-light);
    margin-bottom: 30px;
  }

  input {
    width: 92%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #D0D0D0;
    background: white;
    outline: 0;
    padding-left: 50px;
    z-index: 1;
  }
`;

export const IconeInput = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 15px;
  position: relative;
  background: red;
  bottom: -30px;
  width: 92%;
  i {
    font-size: 20px;
    z-index: 2;
  }
`;

export const ButtonRegister = styled.div`
  margin-top: 48px;
  cursor: pointer;
  color: var(--white);
  width: 92%;
  height: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--azul-escuro);

  font-size: 14px;
  font-weight: 400;
  line-height: 19px;

  margin-bottom: 8px;
`

export const ButtonLogin = styled.div`
  cursor: pointer;
  color: var(--white);
  width: 92%;
  height: 40px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--black);

  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
`