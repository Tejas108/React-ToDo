/**
 * Created by Tejas on 8/25/16.
 */
import React from 'react';
import Styles from './styles';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  handleRemoveItem = (e, index) => {
    console.log("clicked index: "+index);
    let updatedArray = this.props.list.splice(index, 1);
    this.setState({data: updatedArray});
  }
  handleToggleComplete = (index) => {
    let item = this.props.list;
    item[index].isDone = !item[index].isDone;
    this.setState({data: item});
  }
  render() {
    let items = this.props.list;
    let listItems = items.map(function (item,index) {
      return (
        <li style={Styles.list.item} className={items[index].isDone == true ? "isDone" : 'notDone'}  key={index}>
        <form style={Styles.list.form}>
          <input type="checkbox" onChange={e=>this.handleToggleComplete(index)}/>
        </form>
        <span className="float-left">{item.value}</span>
        <button className="button alert float-right" onClick={e=>this.handleRemoveItem(e,index)}>X</button>
      </li>
      )},this);
    return (
      <ul style={Styles.list.parent}>
        {listItems}
      </ul>
    )
  }

}

// List.propTypes = {
//   list: React.PropTypes.array.isRequired
// }

export default List;