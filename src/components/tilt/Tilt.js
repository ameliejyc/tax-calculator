import React, { Component } from 'react';
import VanillaTilt from 'vanilla-tilt';

class Tilt extends Component {
  componentDidMount() {
    VanillaTilt.init(this.node, {
      max: 50,
      speed: 400,
      perspective: 500,
      scale: 1.2,
    });
  }
  render() {
    return (
      <div ref={node => (this.node = node)}>
        <div {...this.props} />
      </div>
    );
  }
}

export default Tilt;
