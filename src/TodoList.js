import React,{ Component,Fragment}from 'react'
class TodoList extends Component{
    constructor(props){
        //构造函数,最优先执行的函数
        super(props);//super调用父类的构造函数
        this.state = {
            inputValue:'',
            list:[],
        }
    }
    render(){
        return (
            <Fragment>
                <div>
                    <input 
                      value={this.state.inputValue} 
                      onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return <li 
                                key={index} 
                                onClick={this.handleDelete.bind(this,index)}
                            >{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(event){
        //react中改变state中的值用setState这个方法,
        //用bind（this）对函数的作用域进行变更
        this.setState({
            inputValue:event.target.value
        })
    }
    handleBtnClick(){
        //展开运算符
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleDelete(index){
        // console.log(index);
        //immutable
        //state不允许我们做任何的改变
        const list = [...this.state.list];//展开运算符
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
}
export default TodoList;