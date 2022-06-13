import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "../test.css";

const Result = () => {
  return <p>Thank You, your message has been successfully sent.</p>;
};

const ContactMe = () => {
  const form = useRef();

  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mgp4nb",
        "template_tqs8eq6",
        form.current,
        "user_XHF86IxgqPH6n4BmCRK2m"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <Body>
      <Form ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <Input type="text" name="name" required />
        <Label>Email</Label>
        <Input type="email" name="email" required />
        <Label>Message</Label>
        <Textarea name="message" required />
        <button
          style={{ marginTop: "30px" }}
          className="btn"
          type="submit"
          value="Send"
        >
          Send
        </button>

        <div>{result ? <Result /> : null}</div>
      </Form>
    </Body>
  );
};

const Body = styled.div`
  height: 60vh;
  width: 50%;
  margin: auto;
  margin-top: 40px;
  background: (255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  @media (min-width: 500px) and (max-width: 800px) {
    display: grid;
    justify-content: center;
    justify-items: center;
    height: 70vh;
    margin-top: 40px;
    width: 80%;
  }
  @media (max-width: 500px) {
    display: grid;
    justify-content: center;
    justify-items: center;
    height: 50vh;
    margin-top: 90px;
    width: 80%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
`;

const Input = styled.input`
  margin-top: 5px;
  height: 40px;
  width: 40vw;
  border: 1px solid black;
  border-radius: 4px;
  padding-left: 10px;
  outline: none;
  &:focus {
    border: 1.3px solid #3b82f6;
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 600px) {
    height: 50px;
    width: 70vw;
  }
`;

const Label = styled.label`
  position: relative;
  margin-top: 15px;
  font-weight: bold;
`;

const Textarea = styled.textarea`
  margin-top: 5px;
  height: 80px;
  width: 40vw;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  outline: none;
  &:focus {
    border: 1.3px solid #3b82f6;
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 600px) {
    height: 90px;
    width: 70vw;
  }
`;

export default ContactMe;
