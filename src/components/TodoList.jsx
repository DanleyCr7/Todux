import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteTodo, resetTodo,markTodoAsDone } from '../components/redux/actions/todosActions'
class TodoList extends Component {

    toggleDone = (todo, isItemDone) => {
        if(isItemDone){
            this.props.resetTodo(todo)
            
        }else{
            this.props.markTodoAsDone(todo)
        }
    } 

    renderItems = items => items.map((item, i) => (
        <li key={`${item}--${i}`} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{!item.done ? item.name : <del className="text-muted">{item.name}</del>}</span>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={() => this.toggleDone(item, item.done)}
                    className={`btn btn-link edit-item ${item.done ? 'text-warning' : 'text-success'}`} >
                    <i className={`fas fa-${item.done ? 'times' : 'check'}`}></i>
                </button>
            <button onClick={() => this.props.deleteTodo(item.name)}
                className="btn btn-link text-danger edit-item">
                <i className="fas fa-trash"></i>
            </button>
            </div>
        </li >
    ))

    render() {
        return (
            <ul className="list-group drop-shadow">
                {this.renderItems(this.props.todos)}
            </ul>
        )
    }
}

const mapStateToProps = state =>({
    todos : state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteTodo, resetTodo,markTodoAsDone
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)