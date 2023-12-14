import { Button, Card, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Form as AntForm, Input } from "antd";
import styled from "styled-components";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../../redux/reducers/user.reducer";
import { useAppDispatch } from "../../../redux/store";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();

  const loginFormSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(loginFormSchema),
  });

  //   const router = useRouter();
  const onSubmit = handleSubmit(async (data: any) => {
    try {
      //   if (router && router.query && router.query.from === "wishlist") {
      //   dispatch(login({ payload: data, from: "wishlist" }));
      //   } else {
      await dispatch(login({ payload: data }));
      //   }
    } catch (error) {
      console.log("error====", error);
    }
  });

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center">
        <CardComponent className="text-center ">
          <Card.Body>
            <CardTitle>Login</CardTitle>
            <Text>Please login using account details below.</Text>
            <LoginForm
              className="row"
              onFinish={() => onSubmit()}
              layout="vertical"
            >
              <FormGroup className="col-12 mb-2">
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <AntForm.Item
                      className="col-12 mb-0"
                      name="username"
                      label={
                        <>
                          <Label className="mb-0">
                            Username <RequiredText>*</RequiredText>
                          </Label>
                        </>
                      }
                    >
                      <EmailInput
                        size="large"
                        placeholder="Enter User Name"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    </AntForm.Item>
                  )}
                />
                {errors.username && (
                  <ErrorMessage>{errors.username.message}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup className="col-12 mb-2">
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <AntForm.Item
                      className="col-12 mb-0"
                      name="password"
                      label={
                        <>
                          <Label className="mb-0">
                            Password <RequiredText>*</RequiredText>
                          </Label>
                        </>
                      }
                    >
                      <PasswordInput
                        size="large"
                        placeholder="Enter Password"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    </AntForm.Item>
                  )}
                />
                {errors?.password?.type && (
                  <ErrorMessage>{errors.password.message}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup className="col-12 mb-3">
                <LoginButton type="submit">Login</LoginButton>
              </FormGroup>
              <FormGroup className="col-12 d-flex align-items-center justify-content-center mb-3">
                <Text>
                  Don't have an account?
                  <Link to={"/adminForm"}>
                    <StyledLink className="text-decoration-none mx-2">
                      Sign Up
                    </StyledLink>
                  </Link>
                </Text>
              </FormGroup>
            </LoginForm>
          </Card.Body>
        </CardComponent>
      </div>
      <div className="mt-4"></div>
    </Container>
  );
};

const Header = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: inline-grid;
`;

const CardComponent = styled(Card)`
  background: #fff;
  border-radius: 13px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.25);
  width: 37%;
  @media (min-width: 768px) and (max-width: 1025px) {
    width: 40%;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 90%;
  }
`;

const RequiredText = styled.span`
  color: red;
  font-size: 16px;
`;

const AnchorWrapper = styled.a`
  text-decoration: none;
  color: inherit;
`;

const LoginForm = styled(AntForm)`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const CardTitle = styled(Card.Title)`
  /* font-family: Josefin Sans; */
  color: #103e59;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Text = styled(Card.Text)`
  color: #9096b2;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  color: #103e59;
  margin-bottom: 5px;
`;

const EmailInput = styled(Input)`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const PasswordInput = styled(Input.Password)`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Checkbox = styled(Form.Check)`
  font-size: 14px;
  color: #103e59;

  .form-check-input:checked {
    background-color: #4ca8e0;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
`;

const LoginButton: any = styled(Button)`
  border-radius: 6px;
  background: #26719e;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 12px;
  width: 100%;
  &:hover {
    background: #26719e;
  }
  &:focus {
    background: #26719e;
    box-shadow: none;
  }
`;

/* const GoogleButton = styled(Button)`
    border: 1px solid #E9E9E9;
    border-radius: 6px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 12px;
    width: 100%;
    color:#797979;
    background: #fff;
    &:hover{    
        color:#797979;
        background: #fff;
        border: 1px solid #E9E9E9;
    }
    &:focus{        
        color:#797979;
        background: #fff;
        border: 1px solid #E9E9E9;
        box-shadow: none;
    }
`; */

const StyledLink = styled.a`
  font-size: 14px;
  color: #103e59;
  cursor: pointer;
`;

const FooterText = styled(Card.Footer)`
  color: #9096b2;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1rem 1rem;
`;

/* const OrText = styled.div`
    color: #103E59;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`; */

export default Login;
