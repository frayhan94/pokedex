import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/Card/index';
import Grid from 'components/Grid/index';
import List from 'components/List/index';
import Wrapper from 'container/hoc/index';
import Loader from 'components/Loader/index';
import { pokedexAction } from 'state/index';

class PokedexDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const { dispatch } = this.props;

    // eslint-disable-next-line react/prop-types
    const { match } = this.props;

    // eslint-disable-next-line react/prop-types
    const { params } = match;

    // eslint-disable-next-line react/prop-types
    const { id } = params;
    dispatch(pokedexAction.getPokedexDetailAction(id));
  }

  renderDetail = (data, loadingPokedexDetail) => {
    const { base_experience: baseExperience, weight, height, name, sprites } = data;
    return !loadingPokedexDetail ? (
      <Grid justifyCenter split={2}>
        <Card alignCenter justifyCenter>
          <Card.Media>
            <img src={sprites.front_default} alt={name} />
          </Card.Media>
          <Card.Body>
            <List left="Name" right={name} />
            <List left="Experience" right={baseExperience} />
            <List left="Weight" right={weight} />
            <List left="Height" right={height} />
          </Card.Body>
        </Card>
      </Grid>
    ) : (
      <Loader />
    );
  };

  render() {
    const { PokedexDetail, loadingPokedexDetail } = this.props;
    return this.renderDetail(PokedexDetail, loadingPokedexDetail);
  }
}

const mapStateToProps = store => {
  return {
    PokedexDetail: store.pokedexReducer.pokedexdetail,
    loadingPokedexDetail: store.pokedexReducer.loadingPokedexDetail,
  };
};

PokedexDetailContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  PokedexDetail: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loadingPokedexDetail: PropTypes.bool.isRequired,
};

PokedexDetailContainer.defaultProps = {
  PokedexDetail: [],
};

export default connect(mapStateToProps)(Wrapper(PokedexDetailContainer));
