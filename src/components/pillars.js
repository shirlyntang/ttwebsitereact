import React from "react";
import "../css/pillars.css";

export default class Pillars extends React.Component {
  render() {
    return (
      <div>
        <section className="three-pillars">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 pillars">
                <img
                  id="pillar-image"
                  src={require(`../images/Home/${this.props.picture}`)}
                  alt=""
                />
                <h1 id="which-pillar">{this.props.name}</h1>
                <p id="description">{this.props.description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
