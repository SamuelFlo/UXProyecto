import React, { Component } from "react";

class Foother extends Component {
    render() {
        return (
            <div className="ui stackable four column grid">
                <a className="column">
                    <i className="facebook f icon" />
                </a>

                <a className="column">
                    <i className="twitter icon" />
                </a>

                <a
                    className="column"
                >
                    <i className="youtube icon" />
                </a>
                <a
                    className="column"
                >
                    <i className="github icon" />
                </a>
            </div>
        );
    }
}

export default Foother;
