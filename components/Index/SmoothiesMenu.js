import { Card, Label, Message, Divider, Header, Icon } from "semantic-ui-react";
import "./style.css";

function SmoothiesMenu({ drinks }) {
  return (
    <>
      <Divider horizontal style={{ marginBottom: 20 }}>
        <Header as="h2">
          <Icon name="coffee" />
          Smoothies
        </Header>
      </Divider>
      <Card.Group stackable itemsPerRow="2">
        {drinks.map(drink => {
          return (
            <Card style={{ borderRadius: 0 }} key={drink.sku}>
              <Card.Content className="menu-card-content">
                <div className="menu-card-content-info">
                  <Card.Header>{drink.name}</Card.Header>

                  <Card.Meta style={{ marginTop: "1em" }}>
                    <Label>${drink.price}</Label>
                  </Card.Meta>
                </div>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
      <br />
      <Message
        header="Made with Real Fruits"
        content="FREE TOPPINGS: Boba, Lychee Jelly, Mixed Fruit Jelly, Coffee Jelly"
      />
    </>
  );
}

export default SmoothiesMenu;
