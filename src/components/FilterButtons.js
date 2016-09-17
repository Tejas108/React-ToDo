/**
 * Created by Tejas on 9/7/16.
 */
import React from 'react';

const FilterButtons = (props) => {
  return (
    <div className="secondary small expanded button-group">
      <button className="button" onClick={ props.showAll }>All&nbsp; { props.count }</button>
      <button className="button" onClick={ props.showCompleted } disabled={props.countDone == 0 ? true : false}>Completed { props.countDone }</button>
      <button className="button" onClick={ props.showIncomplete } disabled={props.notDoneCount == 0 ? true : false}>Incomplete { props.notDoneCount }</button>
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