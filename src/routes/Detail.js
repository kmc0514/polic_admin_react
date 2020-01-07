import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const {
      location: {
        state: { title }
      }
    } = this.props;
    return <div>{title}</div>;
  }
}

export default Detail;
