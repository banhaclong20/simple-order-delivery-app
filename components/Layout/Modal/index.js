import React from "react";
import { Button, Modal, Icon } from "semantic-ui-react";

const ItemOrderModal = (trigger, showModal, setShowModal, product) => (
  <Modal
    trigger={trigger}
    closeIcon
    dimmer="blurring"
    size="small"
    open={showModal}
    onClose={() => setShowModal(false)}
  >
    <Modal.Header>{product && product.name}</Modal.Header>
    <Modal.Content>
      <p>{product && product.description}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green">
        <Icon name="checkmark" /> Add to Order
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ItemOrderModal;
