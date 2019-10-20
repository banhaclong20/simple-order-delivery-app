import React from 'react';

const getViewPort = WrappedComponent => {
  class HOC extends React.Component {
    state = {
      width: null,
    };

    componentDidMount() {
      this.updateViewPort();
      window.addEventListener('resize', this.updateViewPort);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateViewPort);
    }

    updateViewPort = () => {
      this.setState({
        width: window.innerWidth,
      });
    };

    render() {
      return <WrappedComponent width={this.state.width} {...this.props} />;
    }
  }

  return HOC;
};

export default getViewPort;
