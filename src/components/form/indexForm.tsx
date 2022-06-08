import React from "react";
import Button from "../button/indexButton";
import style from "./form.module.scss";


class Form extends React.Component {
    //classComponents são statefull 
    state ={
        task:"",
        time:"00:00"
    }

    addTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        console.log('state', this.state);
        
    }

    render() {
        return (
            <form className={style["newTask"]} onSubmit={(event)=>this.addTask(event)}>
                <div className={style["inputContainer"]}>
                    <label htmlFor="task">
                    Tarefa
                    </label>
                    <input type="text" name="task" id="task" placeholder="O que você quer estudar?" 
                    value={this.state.task}
                    onChange ={event => this.setState({...this.state, task: event.target.value})} 
                     required />
                </div>
                <div className={style["inputContainer"]}>
                    <label htmlFor="">
                    Tempo
                    </label>
                    <input type="time" name="time" id="time" step="1" min="00:00:00" max="01:30:00" 
                    value={this.state.time}
                    onChange ={event => this.setState({...this.state, time: event.target.value})} 
                    required  />
                </div>
                <Button type="submit" >
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;