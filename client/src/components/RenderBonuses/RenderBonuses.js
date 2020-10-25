import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { Col, Collection, Preloader } from "react-materialize";

import fetchBonuses from "../../actions/Bonuses/fetchBonuses";

import BonusesCard from "./BonusesCard/BonusesCard";
import "./RenderBonuses.sass";

class RenderBonuses extends Component {
  renderCard() {
    let { bonuses } = this.props.bonuses;
    return bonuses.map(({ id, title, text, date }) => {
      return (
        <BonusesCard
          key={id}
          id={id}
          title={<span>{title}&nbsp;!</span>}
          text={text}
          date={date}
        />
      );
    });
  }
  Request() {
    const { fetchBonuses } = this.props;
    fetchBonuses();
  }
  componentDidMount() {
    this.Request();
  }
  render() {
    const { wait } = this.props.bonuses;
    return (
      <>
        {wait ? (
          <Col s={12} className="bonusesSpiner">
            <Preloader size="big" />
          </Col>
        ) : (
          <Col s={12}>
            <Collection className="avatar bonuses">
              {this.renderCard()}
            </Collection>
          </Col>
        )}
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    bonuses: store.bonuses
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBonuses: () => dispatch(fetchBonuses())
  };
};

RenderBonuses.propTypes = {
  bonuses: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderBonuses);
