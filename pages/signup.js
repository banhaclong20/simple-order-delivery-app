import React from "react";
import {
  Button,
  Form,
  Message,
  Segment,
  Header,
  Grid,
  Image,
  Checkbox
} from "semantic-ui-react";
import Link from "next/link";
import axios from "axios";
import catchErrors from "../utils/catchErrors";
import baseUrl from "../utils/baseUrl";
import { handleLogin } from "../utils/auth";
import ContainerLayout from "../components/_App/ContainerLayout";

const INITIAL_USER = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  zipCode: ""
};

function Signup() {
  const [user, setUser] = React.useState(INITIAL_USER);
  const [disabled, setDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/api/signup`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ContainerLayout text>
      <Header
        as="h2"
        content="Create Your Account"
        subheader="Your account information is used to login to the site."
      />
      <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
        <Message error header="Oops!" content={error} />

        <Segment vertical>
          <Grid container stackable verticalAlign="top">
            <Grid.Row className="container-text-content">
              <Grid.Column floated="left" width={10}>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  label="First Name"
                  placeholder="First Name"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  label="Last Name"
                  placeholder="Last Name"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  icon="envelope"
                  iconPosition="left"
                  label="Email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={user.confirmPassword}
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  icon="phone"
                  iconPosition="left"
                  label="Phone"
                  placeholder="(XXX)-XXX-XXXX"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  icon="map"
                  iconPosition="left"
                  label="Zip Code"
                  placeholder="Zip Code"
                  name="zipCode"
                  value={user.zipCode}
                  onChange={handleChange}
                />
                <div>
                  <Checkbox label="Yes, I agree to the Terms of use (required)" />
                </div>
                <div>
                  <Checkbox label="Yes, I agree to the Privacy Policy (required)" />
                </div>
                <br />
                <Button
                  disabled={disabled || loading}
                  icon="signup"
                  type="submit"
                  color="orange"
                  content="Signup"
                />

                <Header
                  as="h4"
                  content=" Existing user? "
                  subheader={
                    <Link href="/login">
                      <a>Log in here</a>
                    </Link>
                  }
                />
              </Grid.Column>
              <Grid.Column floated="left" width={6}>
                <Image src="../static/menu/Banh-Mi-Sandwich.jpg" bordered />
                <Image src="../static/menu/banh-mi.jpg" bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Form>
    </ContainerLayout>
  );
}

export default Signup;
