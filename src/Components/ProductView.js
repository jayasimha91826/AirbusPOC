import React from "react";
import { Modal } from "@mui/material";

const ProductView = ({ open }) => {
  return (
    <Modal
      open={open}
      // onClose={handleClose}
      closeAfterTransition
    >
      <h2 id="spring-modal-title" className="modal-title">
        Text in a modal
      </h2>
      <span id="spring-modal-description" className="modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </span>
    </Modal>
  );
};

export default ProductView;
