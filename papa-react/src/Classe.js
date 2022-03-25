import React, {Component} from "react";

export default class Classe  extends Component{
    
constructor(props){
    super(props);

    this.state = {
        count: 0,
    };
}

     increment = () =>{
        this.setState ({
            count: this.state.count + 1,
        })
      
    };


     decrement = () => {
        this.setState({
            count: this.state.count - 1,
        })
    };

    
    
    render(){
        return(
            <div>
                <h1>Incrementar</h1>
                <h2>Decrementar</h2>
                <p>Conta: {this.state.count}</p>
                <button onClick={this.increment} >Incrementar</button>
                <button onClick={this.decrement}>Decrementar</button>
            </div>
        );
    }
}
 