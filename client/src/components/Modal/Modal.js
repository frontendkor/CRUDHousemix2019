import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Portal from "../Portal/Portal";
import ModalCloseBtn from "./ModalCloseBtn/ModalCloseBtn";
import ModalContent from "./ModalContent/ModalContent";

import openModal from "../../actions/Modal/openModal";
import mod from "./Modal.module.sass";

class Modal extends Component {
  renderModal() {
    const { openModal, isOpen, massage } = this.props;
    return (
      <Portal>
        {isOpen && (
          <div className={mod.Modal}>
            <ModalCloseBtn openModal={openModal} />
            <ModalContent massage={massage} />
          </div>
        )}
      </Portal>
    );
  }
  componentWillUnmount() {}
  render() {
    return <>{this.renderModal()}</>;
  }
}

const mapStateToProps = store => {
  return {
    isOpen: store.modal.isOpen,
    massage: store.modal.massage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: isOpen => dispatch(openModal(isOpen))
  };
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
