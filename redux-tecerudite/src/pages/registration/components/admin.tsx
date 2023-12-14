import { Button, Card } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { Form as AntForm, Input } from "antd";
import styled from "styled-components";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "../../../redux/reducers/user.reducer";
import { useAppDispatch } from "../../../redux/store";
import { Link, useNavigate } from "react-router-dom";

const AdminRegistrationForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const registerFormSchema = Yup.object().shape({
    firstName: Yup.string().required("firstName is required"),
    lastName: Yup.string().required("lastName is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password length should be at least 8 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "password must be strong"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Password does not match"),
  });

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(registerFormSchema),
  });
  const path = window.location.pathname;
  console.log("path=====", path);
  const onSubmit = handleSubmit((data: any) => {
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      status: true,
      role: path === "/adminForm" ? "admin" : "user",
    };

    try {
      dispatch(registerUser(newUser));
      reset();
      navigate(path === "/adminForm" ? "/login" : "/");
    } catch (error) {
      console.log("error----", error);
    }
  });

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center">
        <CardComponent className="text-center">
          <Card.Body>
            <CardTitle>Admin Registration Form</CardTitle>
            <Text>Please enter your details below to create an account.</Text>
            <RegisterForm
              className="row"
              onFinish={() => onSubmit()}
              layout="vertical"
            >
              <FormGroup className="col-lg-12 mb-2">
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <AntForm.Item
                      className="col-12 mb-0"
                      name="firstName"
                      label={
                        <>
                          <Label className="mb-0">
                            First Name <RequiredText>*</RequiredText>
                          </Label>
                        </>
                      }
                    >
                      <TextInput
                        size="large"
                        placeholder="Enter First Name"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    </AntForm.Item>
                  )}
                />
                {errors.firstName && (
                  <ErrorMessage>{errors.firstName.message}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <AntForm.Item
                      className="col-12 mb-0"
                      name="LastName"
                      label={
                        <>
                          <Label className="mb-0">
                            Last Name <RequiredText>*</RequiredText>
                          </Label>
                        </>
                      }
                    >
                      <TextInput
                        size="large"
                        placeholder="Enter Last Name"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    </AntForm.Item>
                  )}
                />
                {errors.lastName && (
                  <ErrorMessage>{errors.lastName.message}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup className="col-lg-12 mb-2">
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <AntForm.Item
                      className="col-12 mb-0"
                      name="email"
                      label={
                        <>
                          <Label className="mb-0">
                            Email <RequiredText>*</RequiredText>
                          </Label>
                        </>
                      }
                    >
                      <TextInput
                        size="large"
                        placeholder="Enter Email"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    </AntForm.Item>
                  )}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
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
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <AntForm.Item
                      className="col-12 mb-0"
                      name="confirmPassword"
                      label={
                        <>
                          <Label className="mb-0">
                            Confirm Password <RequiredText>*</RequiredText>
                          </Label>
                        </>
                      }
                    >
                      <PasswordInput
                        size="large"
                        placeholder="Confirm Password"
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    </AntForm.Item>
                  )}
                />
                {errors?.confirmPassword?.type && (
                  <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
                )}
              </FormGroup>
              <FormGroup className="col-12 mb-3">
                <LoginButton type="submit">Sign Up</LoginButton>
              </FormGroup>
              <FormGroup className="col-12 d-flex align-items-center justify-content-center mb-3">
                <Text>
                  Already have an Account?
                  {/* <Link href={"/login"}> */}
                  <Link to={"/login"}>
                    <StyledLink className="text-decoration-none mx-2">
                      Login
                    </StyledLink>
                  </Link>
                </Text>
              </FormGroup>
              <Link to={"/"}>
                <FormGroup className="col-12 d-flex align-items-center justify-content-center mb-3">
                  <Text style={{ color: "red" }}>
                    Go to Customer Register From
                  </Text>
                </FormGroup>
              </Link>
            </RegisterForm>
          </Card.Body>
        </CardComponent>
      </div>
    </Container>
  );
};

export default AdminRegistrationForm;

const Container = styled.div`
  // width: 100%;
  // height: 100vh;
  // display: inline-grid;
`;

const RequiredText = styled.span`
  color: red;
  font-size: 16px;
`;

const CardComponent = styled(Card)`
  background: #fff;
  border-radius: 13px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.25);
  width: 37%;
  @media (min-width: 768px) and (max-width: 1025px) {
    width: 50%;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    width: 90%;
  }
`;

const RegisterForm = styled(AntForm)`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const CardTitle = styled(Card.Title)`
  color: #103e59;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Text = styled(Card.Text)`
  color: #9096b2;
  font-size: 14px;
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
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const TextInput = styled(Input)`
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
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
  padding: 8px;
  width: 100%;
  &:hover {
    background: #26719e;
  }
  &:focus {
    background: #26719e;
    box-shadow: none;
  }
`;

const StyledLink = styled.a`
  color: #103e59;
  font-size: 13px;
`;

const FooterText = styled(Card.Footer)`
  color: #9096b2;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 1rem 1rem;
`;
