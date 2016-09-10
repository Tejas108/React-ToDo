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
        <a className="button" onClick={ this.props.showCompleted }>Completed&nbsp; ({ this.props.countDone })</a>
        <a className="button" onClick={ this.props.showIncomplete }>Incomplete&nbsp; ({ this.props.notDoneCount })</a>
        <a className="button" onClick={ this.props.showAll }>All&nbsp; ({ this.props.count })</a>
      </div>
    )
  }
}

FilterButtons.propTypes = {
  showCompleted: React.PropTypes.func,
  showIncomplete: React.PropTypes.func,
  showAll: React.PropTypes.func,
  countDone: React.PropTypes.number,
  notDoneCount: React.PropTypes.number,
  count: React.PropTypes.number
}

export default FilterButtons;