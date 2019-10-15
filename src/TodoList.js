import React,{ Component,Fragment}from 'react'
import './style.css';
import TodoItem from './TodoItem';
class TodoList extends Component{
    constructor(props){
        //构造函数,最优先执行的函数
        super(props);//super调用父类的构造函数
        this.state = {
            inputValue:'',
            list:[],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    render(){
        return (
            <Fragment>
             {/*这是JSX语法的注释*/}
                <div>
                <label htmlFor="insertArea">输入内容</label>
                    <input className="input"
                       id="insertArea"
                      value={this.state.inputValue} 
                      onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                   {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem(){
        return this.state.list.map((item,index)=>{
                return (
                    <Fragment key={index}>
                        <TodoItem 
                        content={item} 
                        index={index}
                        deleteItem={this.handleDelete}
                        />
                    </Fragment>
                )
            })
    }
    handleInputChange(event){
        const value = event.target.value;
        this.setState(()=>({
                inputValue:value
        }))
        //react中改变state中的值用setState这个方法,
        //用bind（this）对函数的作用域进行变更
        // this.setState({
        //     inputValue:event.target.value
        // })
    }
    handleBtnClick(){
        //展开运算符
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }))
        // this.setState({
        //     list:[...this.state.list,this.state.inputValue],
        //     inputValue:''
        // })
    }
    handleDelete(index){
        // console.log(index);
        //immutable
        //state不允许我们做任何的改变
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1)
           return  {list}
        })
        // this.setState({
        //     list:list
        // })
    }
}
export default TodoList;


/*
    React衍生出得思考
        声明式开发
        可以与其他框架共存
        组件化
        单项数据流
        视图层框架
        函数式编程

*/