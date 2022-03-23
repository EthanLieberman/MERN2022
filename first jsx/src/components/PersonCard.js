import React, {Component} from 'react';


class Person extends Component{


    constructor(props){
        super(props)

        this.state = {
            age: this.props.person.age
        }
    }


    clickAge = () => {
        this.setState({age: this.state.age + 1})
    }

    render(){
        return(
            <div>
                <h1>{ this.props.person.lastName }, {this.props.person.lastName}</h1>
                <p>{ this.state.age }</p>
                <p>{ this.props.person.hairColor }</p>
                <button onClick={ () => this.clickAge() }>Birthday</button>
            </div>
        );
    }
}

export default Person;