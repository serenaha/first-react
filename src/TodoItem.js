import React ,{Component} from 'react'
import PropTypes from 'prop-types';
class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        const { content ,test}= this.props;
        //render函数返回一个jsx
        //jsx ->createElement -> 虚拟DOM（JS对象） -> 真实DOM
        return <li onClick={this.handleClick} >{test}-{content}</li>
        // return React.createElement('div',{},'item')
    }
    handleClick(){
        console.log(this.props.index);
        //当子组件被点击的时候
        const {index,deleteItem} = this.props;
        deleteItem(index);
    }
}
//对父组件传的参数进行校验
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,//表示父组件必须要向子组件传递isRequired;
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
//默认值设定
TodoItem.defaultProps = {
    test:'hello world'
}
export default TodoItem;
//如何进行组件的拆分，父子组件的传参，
/*
    1.什么是分布式
        为了解决单个物理服务器容量和性能瓶颈问题而采用的优化手段
        该领域需要解决的问题鸡多，在不同的技术层面上，又包括：分布式文件系统、分布式缓存、分布式数据库、分布事计算
      a.分布式的实现有两种
         1.水平扩容：当一台机器扛不住流量时，就通过添加机器的方式，将流量平分到所有服务器上，所有机器都可以提供给想当的服务；
         2.垂直拆分:前端有多种查询需求时，一天机器扛不住，可以将不同的需求分发到不同的机器上，比如A机器处理余票查询的请求，B机器处理支付的请求
    2.什么是高并发
            相对于分布式来讲，高并发在解决的问题上会集中一些，其反应的是同时有多少量：比如在线直播服务，同时有上万人观看。
            高并发可以通过分布式技术去解决，将并发流量分到不同的物理服务器上
            但除此之外，还可以有很多其他优化手段：比如使用缓存系统，将所有的，静态内容放到CDN等，还可以使用多线程技术将一台服务器能力最大化
    3.什么是多线程
            多线程是指从软件或者硬件上实现多个线程并发执行的技术，他更多的是解决CPU调度多个进程的问题，从而让这些进程看上去是同事执行（实际是交替与逆行的）
            多线程解决的问题是最明确的，手段也是比较单一的，基本上遇到的最大问题就是线程安全

*/
/*
    普通对象都是值传递，而对象则是引用传递；
*/