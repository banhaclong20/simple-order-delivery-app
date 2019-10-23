import { Component } from "react";
import PropTypes from "prop-types";
import Router from "next/router";

class ErrorPage extends Component {
  static propTypes = {
    statusCode: PropTypes.number
  };

  static defaultProps = {
    statusCode: 200
  };

  render() {
    const { statusCode } = this.props;
    return (
      <div style={{ marginBottom: "-2em" }}>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404"></div>
            <h1>{statusCode}</h1>
            <h2>Oops! Page Not Be Found or something went wrong!</h2>
            <p>
              Let us take you{" "}
              <a onClick={() => Router.push("/")}>back to homepage</a>. Or
              contact us and we'll send the appropriate personel to the scene.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
