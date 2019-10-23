import { Header, Icon, Segment, Label } from "semantic-ui-react";
import formatDate from "../../utils/formatDate";

function AccountHeader({ role, email, name, createdAt }) {
  return (
    <Segment placeholder>
      <Header textAlign="center" as="h4" icon>
        <Icon name="user" />
        {name}
        <Header.Subheader>{email}</Header.Subheader>
        <Header.Subheader>Joined {formatDate(createdAt)}</Header.Subheader>
        <br />
        <Label style={{ textTransform: "capitalize" }} content={role} />
      </Header>
    </Segment>
  );
}

export default AccountHeader;
