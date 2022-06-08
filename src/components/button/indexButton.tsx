import React from 'react'; 
import style from './button.module.scss';

class Button extends React.Component<{children:string,
     type?: "button" | "submit" | "reset" | undefined}>{

    render(){
        const type = this.props.type
        return(
        <button type={type} className={style["button"]}>
            {this.props.children}
        </button>
    )
}
}

export default Button