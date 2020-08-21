import React from 'react';

const Wrapper = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.props = props;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default Wrapper;
