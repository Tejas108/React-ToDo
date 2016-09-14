/**
 * Created by Tejas on 9/7/16.
 */
import React from 'react';

const FilterButtons = (props) => {
  return (
    <div className="secondary small expanded button-group">
      <a className="button" onClick={ props.showCompleted }>Complete { props.countDone }</a>
      <a className="button" onClick={ props.showIncomplete }>Incomplete { props.notDoneCount }</a>
      <a className="button" onClick={ props.showAll }>All&nbsp; { props.count }</a>
    </div>
  )
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