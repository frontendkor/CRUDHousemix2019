import React, { Component } from "react";
import mod from "./Preloader.module.sass";

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opasity: false,
      active: true
    };
  }
  componentDidMount() {
    const remuvePreloader = async () => {
      const opasityBg = async () => this.setState({ opasity: true });
      await opasityBg();
      setTimeout(() => {
        this.setState({ active: false });
      }, 900);
    };
    window.onload = () => {
      document.readyState === "complete" && remuvePreloader();
    };
  }
  render() {
    const { opasity, active } = this.state;
    return (
      <section
        className={`${mod.Preloader} ${opasity ? mod.PreloaderOpasity : null} ${
          !active ? mod.PreloaderNo : null
        }`}
      >
        <div className={mod.skChasingDots}>
          <div className={`${mod.skChild} ${mod.skDot1}`} />
          <div className={`${mod.skChild} ${mod.skDot2}`} />
        </div>
      </section>
    );
  }
}

export default Preloader;
