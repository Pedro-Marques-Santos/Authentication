import styled from "styled-components";

export const Container = styled.div`
  width: 93%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const TagLogin = styled.div`
  cursor: pointer;
  border: 1px solid var(--azul-escuro);
  height: 40px;
  width: 175px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const IconLogin = styled.div`
  margin-right: 8px;
`

export const LegendLogin = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  color: var(--azul-escuro);
`