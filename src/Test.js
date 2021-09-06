import React from 'react';
import './card.css';
class Test extends React.Component{
    render(){
        return (
            
            <div className="card">
                <img alt ="pic of a Robot" src ={'https://robohash.org/'+this.props.randomname}/>
                <div className="cardText">
                    <p><strong>Name:</strong> {this.props.randomname}</p>
                    <p><strong>Email:</strong> {this.props.randomname}@dog.com</p>
                </div>
            </div>
        );
    };
}

export default Test