import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Message,
  Segment,
  Header,
  Grid,
  Image
} from "semantic-ui-react";
import Link from "next/link";
import axios from "axios";
import AuthActions from "../redux/actions/authActions";
import catchErrors from "../utils/catchErrors";
import baseUrl from "../utils/baseUrl";
import { handleLogin } from "../utils/auth";
import ContainerLayout from "../components/_App/ContainerLayout";

const INITIAL_USER = {
  email: "",
  password: ""
};

function SignIn(props) {
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
    const { reauthenticate } = props;
    event.preventDefault();

    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/api/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data);
      reauthenticate(response.data);
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
        content="Sign In To Your Account"
        subheader="Log in with email and password"
      />
      <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
        <Message error header="Oops!" content={error} />

        <Segment vertical>
          <Grid container stackable verticalAlign="top">
            <Grid.Row className="container-text-content">
              <Grid.Column floated="left" width={10}>
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
                <Button
                  disabled={disabled || loading}
                  icon="sign in"
                  type="submit"
                  color="orange"
                  content="Login"
                />

                <Header
                  as="h4"
                  content="New user? "
                  subheader={
                    <Link href="/signup">
                      <a>Sign up here</a>
                    </Link>
                  }
                />
              </Grid.Column>
              <Grid.Column floated="left" width={6}>
                <div>
                  <Image
                    src="../static/assets/vietnamese-sandwich-banh-mi.jpg"
                    bordered
                  />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Form>
    </ContainerLayout>
  );
}

const mapDispatchToProps = {
  reauthenticate: AuthActions.reauthenticate
};

export default connect(
  state => state,
  mapDispatchToProps
)(SignIn);
