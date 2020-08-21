import React from 'react';
import PropTypes from 'prop-types';
import styles from './list.module.scss';

const List = ({ left, right }) => {
  return (
    <div className={styles.List}>
      <div className={styles.ListLeft}>{left}</div>
      <div>{right}</div>
    </div>
  );
};

List.propTypes = {
  left: PropTypes.string,
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

List.defaultProps = {
  left: '',
  right: '',
};

export default List;
