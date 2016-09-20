/**
 * Created by Tejas on 8/25/16.
 */
import React from 'react';
import EmptyFilter from './EmptyFilter';
import Styles from '../styles';
import FlipMove from 'react-flip-move';
import FilterButtons from './FilterButtons';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {status: ''}
  }

  handleToggleComplete = (index) => {
    let items = this.props.list;
    items[index].isDone = !items[index].isDone;
    this.setState({status: 'all'});
  }

  handleShowCompleted = () => {
    this.setState({status: true});
  }

  handleShowAll = () => {
    this.setState({status: 'all'});
  }

  handleShowIncomplete = () => {
    this.setState({status: false});
  }

  handleDelete = (id) => {
    this.props.delete(id);
  }

  render() {
    let items = this.props.list;
    let status = this.state.status;
    let itemCount = this.props.list.length;
    let doneCount = this.props.list.filter(item => item.isDone).length;
    let notDoneCount = this.props.list.filter(item => !item.isDone).length;

    switch (status) {
      case false:
        items = items.filter(el => !el.isDone);
        notDoneCount = items.length;
        break;
      case true:
        items = items.filter(el => el.isDone);
        break;
      case 'all':
        items = items.filter(el => el);
        itemCount = items.length;
        break;
    }

    let listItems = items.map((item, index) => {
      return (
        <li style={ Styles.list.item} className={ items[index].isDone ? "isDone" : "notDone" } key={ item.id }>
          <form style={ Styles.list.form }>
            <input type="checkbox" onChange={ e=>this.handleToggleComplete(index) }
                   checked={items[index].isDone ? "checked" : ""}/>
          </form>
          <span className="float-left">{item.value}</span>
          <button className="button alert float-right" onClick={e=>this.handleDelete(item.id)}>X</button>
        </li>
      )
    }, this);
    return (
      <div className="row">
        <FilterButtons
          showCompleted={ this.handleShowCompleted }
          showIncomplete={ this.handleShowIncomplete }
          showAll={ this.handleShowAll }
          count={ itemCount }
          notDoneCount={ notDoneCount }
          countDone={ doneCount }
        />
        <ul style={ Styles.list.parent }>
          <FlipMove enterAnimation="fade" leaveAnimation="fade">{ listItems }</FlipMove>
        </ul>
      </div>
    )
  }

}
List.propTypes = {
  list: React.PropTypes.array
}

export default List;