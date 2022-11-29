import { Container, IconLogin, LegendLogin, TagLogin } from "./styles";

export function OutherLogin() {
  return (
    <Container>
      <TagLogin>
        <IconLogin><i className="fa-brands fa-google"></i></IconLogin>
        <LegendLogin>GOOGLE</LegendLogin>
      </TagLogin>
      <TagLogin>
        <IconLogin><i className="fa-brands fa-facebook"></i></IconLogin>
        <LegendLogin>FACEBOOK</LegendLogin>
      </TagLogin>
    </Container>
  );
}