import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/Card/index';
import Grid from 'components/Grid/index';
import Loader from 'components/Loader/index';
import { Link } from 'react-router-dom';
import Wrapper from '../hoc/index';
import { pokedexAction } from '../../state/index';

class PokedexContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(pokedexAction.getPokedexAction());
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = async () => {
    const { dispatch, totalPokedex, offset } = this.props;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (offset < totalPokedex) {
        await dispatch(pokedexAction.getPokedexAction(true));
      }
    }
  };

  renderMain = (data, loadingPokedex) => {
    return !loadingPokedex ? (
      <>
        <h3 style={{ textAlign: 'center' }}>Pokedex</h3>
        <Grid justifyCenter split={5}>
          {data.map((result, index) => {
            const { name, url } = result;
            const urlAsArray = url.split('/');
            const id = urlAsArray[6];
            return (
              <Link to={`/detail/${id}`} key={index}>
                <Card alignCenter justifyCenter>
                  <Card.Body>
                    <h5>{`${index + 1}-${name}`}</h5>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </Grid>
      </>
    ) : (
      <Loader />
    );
  };

  render() {
    const { Pokedex, loadingPokedex } = this.props;
    return this.renderMain(Pokedex, loadingPokedex);
  }
}

const mapStateToProps = store => {
  return {
    Pokedex: store.pokedexReducer.pokedex,
    loadingPokedex: store.pokedexReducer.loadingPokedex,
    totalPokedex: store.pokedexReducer.totalPokedex,
    offset: store.pokedexReducer.offset,
  };
};

PokedexContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  Pokedex: PropTypes.oneOfType([PropTypes.array]),
  loadingPokedex: PropTypes.bool.isRequired,
  totalPokedex: PropTypes.number,
  offset: PropTypes.number,
};

PokedexContainer.defaultProps = {
  Pokedex: [],
  totalPokedex: 0,
  offset: 0,
};

export default connect(mapStateToProps)(Wrapper(PokedexContainer));
