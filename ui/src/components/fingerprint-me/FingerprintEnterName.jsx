import React, { useState } from "react";
import { Form, Button, Input, Card } from "antd";
import { connect } from "react-redux";
import { getEnterNameOpen } from "../../redux/fingerprint-me/selectors";
import { handleNameFormSubmit } from "../../redux/fingerprint-me/actions";
import { useReveal } from "../../utils";
import { Fade } from "../fade";

const FingerprintEnterName = ({ open, handleNameFormSubmit }) => {
  const [name, setName] = useState("");
  const [reveal, close] = useReveal(open);

  return (
    open && (
      <Fade when={reveal}>
        <Card className="enter-name">
          <h4>Enter a name to go with your fingerprint</h4>
          <Form
            className="fingerprint-name"
            onSubmit={close(handleNameFormSubmit(name))}
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
      </Fade>
    )
  );
};

export default connect(
  state => ({
    open: getEnterNameOpen(state)
  }),
  { handleNameFormSubmit }
)(FingerprintEnterName);
