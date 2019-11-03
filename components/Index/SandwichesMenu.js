import React from "react";
import {
  Card,
  Image,
  Label,
  Message,
  Divider,
  Header,
  Icon,
  Modal,
  Form,
  Checkbox
} from "semantic-ui-react";
import AddProductToCart from "./../Product/AddProductToCart";
import truncateString from "../../utils/truncateStr";
import { extraItems } from "../../utils/staticContent";
import { formatPrice } from "../../utils/formatNumber";

function SandwichesMenu({ sandwiches }) {
  const [showModalItem, setShowModalItem] = React.useState(false);
  const [menuData, setMenuData] = React.useState({});

  function handleSetMenuItem(item) {
    setShowModalItem(true);
    setMenuData(item);
  }

  function handleConfirmBtn() {
    setShowModalItem(false);
  }

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
            <Card
              style={{ borderRadius: 0 }}
              key={product.sku}
              onClick={() => handleSetMenuItem(product)}
            >
              <Card.Content className="menu-card-content">
                <div className="menu-card-content-info">
                  <Card.Header>
                    {product.menuNumber}. {product.name} / {product.nameVN}
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

      {/* Modal popup content */}
      <Modal
        closeIcon
        open={showModalItem}
        onClose={() => setShowModalItem(false)}
        className="orderItemModal"
        size="small"
      >
        <Header
          content={`${menuData.menuNumber}. ${menuData.name} / ${menuData.nameVN}`}
          subheader={menuData.description}
        />

        <Modal.Content>
          <Form>
            <Header
              as="h4"
              content="Would you like to add extra option?"
              subheader="Optional - Choose up to 1 option."
            />
            {extraItems.map(item => (
              <Checkbox label={`${item.name} - ${formatPrice(item.price)}`} />
            ))}

            <Header
              as="h4"
              content="Special Instructions"
              subheader="Leave a note for us"
            />
            <Form.TextArea
              label=""
              placeholder="Tell us to customize your item..."
            />
          </Form>
        </Modal.Content>
        <Modal.Actions className="order-actions">
          <AddProductToCart productId={menuData._id} price={menuData.price} />
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default SandwichesMenu;
