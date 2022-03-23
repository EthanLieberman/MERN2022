import React, {Component} from 'react';

class MyNewComponent extends Component{
    render(){
        return(
            <div>
                {this.props.sometext}
            </div>
        );
    }
}

export default MyNewComponent;