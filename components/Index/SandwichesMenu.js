import {
  Card,
  Image,
  Label,
  Message,
  Divider,
  Header,
  Icon
} from "semantic-ui-react";
import truncateString from "../../utils/truncateStr";
import "./style.css";

function SandwichesMenu({ sandwiches }) {
  return (
    <>
      <Divider horizontal style={{ marginBottom: 20 }}>
        <Header as="h2">
          <Icon name="list alternate outline" />
          Vietnamese Sandwiches
        </Header>
      </Divider>
      <Card.Group stackable itemsPerRow="2">
        {sandwiches.map(product => {
          return (
            <Card style={{ borderRadius: 0 }}>
              <Card.Content className="menu-card-content">
                <div className="menu-card-content-info">
                  <Card.Header>
                    {product.name} / {product.nameVN}
                  </Card.Header>
                  <Card.Meta>
                    {truncateString(product.description, 80)}
                  </Card.Meta>
                  <Card.Meta style={{ marginTop: "1em" }}>
                    <Label>${product.price}</Label>
                  </Card.Meta>
                </div>
                <div className="menu-card-content-img">
                  <Image
                    bordered
                    floated="right"
                    verticalAlign="middle"
                    className="menu-item-img"
                    src={product.mediaUrl}
                  />
                </div>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
      <br />
      <Message
        header="All Sandwiches include:"
        content="Vietnamese Mayo (Bơ) / Pork Liver Paste (PâTê) / Jalapeno (Ớt) / Cucumber (Dưa Leo) / Cilantro (Ngò) / Pickled Vegetables (Đồ chua)"
        className="menu-info"
      />
    </>
  );
}

export default SandwichesMenu;
