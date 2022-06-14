import React from "react";
import { Form, Input, Button } from "antd";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = React.memo(({})=>{
  const onFinish = (value) => {
    console.log("Success:", value);
  };
  const FormRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ufn6oid",
        "template_w3ltw8c",
        FormRef.current,
        "SvY0ljhrUdniscdjC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <form
      name="review"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onSubmit={handleSubmit}
      ref={FormRef}
      className="footer-subcribe__form"
      >
        <Form.Item
          noStyle={true}
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input type="email"
              placeholder="Email"
              name="user_email"  />
        </Form.Item>
        <Form.Item noStyle={true}>
          <Button type="link" htmlType="submit">
            SUBSCRIBE
          </Button>{done && "Thanks"}
        </Form.Item>
      </form>
    </>
  );
});

export default function FooterSubcribeInput({ url }) {
  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <CustomForm
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}
