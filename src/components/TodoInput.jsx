import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { add } from '../components/redux/actions/todosActions'
class TodoInput extends Component {

    state = {
        todoInputValue: ''
    }

    addTodo = () => {
        if (this.state.todoInputValue){
            this.props.add(this.state.todoInputValue)
            this.setState({todoInputValue: ''})
        }
    }

    handleChange = e => {
        this.setState({ todoInputValue: e.target.value })
    }

    handleKeyUp = e => {
        if(e.key === 'Enter'){
            this.addTodo()
        }
    }

    render() {
        return (
            <div className="container mb-5" >
                <div className="row">
                    <div className="col-10">
                        <input value={this.state.todoInputValue} onChange={this.handleChange} onKeyUp={this.handleKeyUp} className="form-control mb-3" type="text" placeholder="Digite uma tarefa e clique para adicionar" />
                    </div>
                    <div className="col-2">
                        <button onClick={this.addTodo} className="btn btn-primary text-light"><i className="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    add
}, dispatch)

export default connect(null, mapDispatchToProps)(TodoInput)
