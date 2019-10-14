import React ,{Component} from 'react'
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        //render函数返回一个jsx
        return <li onClick={this.handleClick} >{this.props.content}</li>
    }
    handleClick(){
        console.log(this.props.index);
        //当子组件被点击的时候
        this.props.deleteItem(this.props.index);
    }
}
export default TodoItem;
//如何进行组件的拆分，父子组件的传参，