import React from 'react';
import './form.scss';
import Footer from '../footer/footer';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            method : '',
            url : ''
        };
    }

    handelMethod = e =>{
        e.preventDefault();
        this.setState({method:e.target.value});
    }
    handelUrl = e =>{
        e.preventDefault();
        this.setState({url:e.target.value});
    }
    handelClick = e =>{
        e.preventDefault();
        this.setState({method:this.state.method,url:this.state.url});
    }
    render(){
        return(
            <main>
                <form onSubmit={this.handelClick}>
                    <div className="inputURL">
                        <label>URL:</label>
                        <input type="text" onChange={this.handelUrl}/>
                        <button type="submit">GO!</button>
                    </div>
                    <div className="methods">
                       <label>GET
                       <input type="radio" name="methods" value="GET" onClick={this.handelMethod}/></label>
                       <label>POST
                       <input type="radio" name="methods" value="POST" onClick={this.handelMethod}/></label>
                       <label>PUT                   
                       <input type="radio" name="methods" value="PUT" onClick={this.handelMethod}/></label>
                       <label>DELETE
                       <input type="radio" name="methods" value="DELETE" onClick={this.handelMethod}/></label>
                    </div>
                </form>
                <div className="resultBox">
                       <pre>{this.state.method}      {this.state.url}</pre>
                </div>
            </main>
  
        )
    }
}


export default Form;

