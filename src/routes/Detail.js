import React from "react";
import "./detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const detail = this.props.location.state;
    if (detail) {
      return (
        <div className="detail__contents">
          <div className="contents-poster">
            <img src={detail.poster} alt={detail.id} />
          </div>
          <div className="contents-config">
            <h1>{detail.title}</h1>
            <h2>Summary</h2>
            <p>{detail.sum}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
