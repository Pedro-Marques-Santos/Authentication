import { User } from "../User";
import { Container, ContainerContent, Icon, Tag, UserData } from "./styles";

export function Profile() {
  return (
    <ContainerContent>
      <Container>
        <User />
        <UserData>
          <Tag>
            <Icon><i className="fa-solid fa-envelope"></i></Icon>
            <div>pedromarquesnoot@outlook.com</div>
          </Tag>
          <Tag>
            <Icon><i className="fa-solid fa-graduation-cap"></i></Icon>
            <div>Lenguages</div>
          </Tag>
          <Tag>
            <Icon><i className="fa-solid fa-user-graduate"></i></Icon>
            <div>Courses</div>
          </Tag>
          <Tag>
            <Icon><i className="fa-solid fa-user-plus"></i></Icon>
            <div>Friends</div>
          </Tag>
        </UserData>
      </Container>
    </ContainerContent>
  );
}