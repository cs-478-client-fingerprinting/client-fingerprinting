import React, { useState } from "react";
import { Form, Button, Input, Card } from "antd";
import { connect } from "react-redux";
import { getEnterNameOpen } from "../redux/selectors";
import { handleNameFormSubmit } from "../redux/actions";

const FingerprintEnterName = ({ open, handleNameFormSubmit }) => {
  const [name, setName] = useState("");

  return (
    open && (
      <Card className="enter-name">
        <h4>Enter a name to go with your fingerprint</h4>
        <Form
          className="fingerprint-name"
          onSubmit={handleNameFormSubmit(name)}
        >
          <Form.Item controlId="formBasicEmail">
            <Input
              type="name"
              placeholder="Enter your name"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Remember Me
            </Button>
          </Form.Item>
        </Form>
      </Card>
    )
  );
};

export default connect(
  state => ({
    open: getEnterNameOpen(state)
  }),
  { handleNameFormSubmit }
)(FingerprintEnterName);
