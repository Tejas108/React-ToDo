/**
 * Created by Tejas on 9/7/16.
 */
import React from 'react';

class FilterButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="secondary small expanded button-group">
        <a className="button" onClick={this.props.showCompleted}>Completed</a>
        <a className="button" onClick={this.props.showIncomplete}>Incomplete</a>
        <a className="button" onClick={this.props.showAll}>All</a>
      </div>
    )
  }
}

FilterButtons.propTypes = {
  showCompleted: React.PropTypes.func,
  showIncomplete: React.PropTypes.func,
  showAll: React.PropTypes.func,
}

export default FilterButtons;