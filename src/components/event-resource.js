import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px white;
  flex-grow: 1;
  width: 12em;
  margin: 1em;
  padding: 1em;
  transition: background-color 0.5s ease;

  :hover {
    :hover {
      background: white;
      color: #1b1754;
    }
  }
`;

const ModalContainer = styled.div`
  opacity: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 10;
`;
const Modal = styled.div`
  background-color: white;
`;
const Resource = ({ title, subtitle }) => {
  const [modalVisible, toggleVisiblity] = useState(false);

  const toggleModal = () => {
    toggleVisiblity(!modalVisible);
  };

  return (
    <Container onClick={toggleModal}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {modalVisible && (
        <ModalContainer>
          <Modal>Modals</Modal>
        </ModalContainer>
      )}
    </Container>
  );
};

Resource.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

Resource.defaultProps = {
  title: "",
  subtitle: "",
};

export default Resource;
