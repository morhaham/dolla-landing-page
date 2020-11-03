import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  FormWrap,
  FormH1,
  Text,
  Icon,
} from "./SigninElements";

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">dolla</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel>Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel>Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
