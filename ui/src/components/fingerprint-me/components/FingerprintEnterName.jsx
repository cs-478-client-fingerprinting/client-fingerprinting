import React, { useState } from "react";
import { Form, Button, Fade } from "react-bootstrap";
import { connect } from "react-redux";
import { getEnterNameOpen, getShowNameShow } from "../redux/selectors";
import { closeEnterName, setShowName } from "../redux/actions";

const FingerprintEnterName = ({ open, show, closeEnterName }) => {
  const [name, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    unsetShowName();
  };

  return (
    open && (
      <Fade in={show} onExited={() => closeEnterName(name)}>
        <Form className="fingerprint-name" onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="name"
              placeholder="Enter your name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Button type="submit">Remember Me</Button>
        </Form>
      </Fade>
    )
  );
};

export default connect(
  state => ({
    open: getEnterNameOpen(state),
    show: getEnterNameShow(state)
  }),
  { closeEnterName, setShowName }
)(FingerprintEnterName);
