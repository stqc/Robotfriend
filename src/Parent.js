import React from 'react';
import Test from './Test';
import './grid.css';
import './parent.css';
import Search from './Search';
import Scroll from './Scroll';

const robots=[
    "ABC",
    "DEF",
    "GHI",
    "JKL",
    "MNO",
    "PQR",
    "STU",
    "VWX",
    "YZ",
    "1A",
    "1B",
    "1C",
    "1D",
    "1E",
    "1F",
];

const arr1=[];

for (var i=0; i <robots.length; i++){
    arr1.push(<Test key={i} randomname ={robots[i]}/>);
}

class Parent extends React.Component{
    constructor(){
        super()
        this.filteredBots=[];
    }
        state ={
            robos: arr1
        }
        
    onSearchChange = (event)=>{
        console.log(event.target.value);
        if (event.target.value!==''){
         this.filteredBots = this.state.robos.filter((robot)=>{
            return robot.props.randomname.toLowerCase().includes(event.target.value.toLowerCase());
        });}
        else{
            this.filteredBots=arr1;
        }
        this.setState(
            {
                robos:this.filteredBots
            }
        )
        console.log(this.filteredBots);
    }
    render(){
        return (
            <div className="parent">
                <h1> Robot Roster</h1>
                <Search search= {this.onSearchChange}/>
                <div style={{padding:'20px 20px 20px 30px'}}>
                <Scroll > 
                <div className="card-grid">
                
                    {this.state.robos}
                    
                </div>
                </Scroll>
                </div>
                <footer>Made for the love of making by <a href='https://github.com/stqc' target="_blank" rel="noreferrer">@stqc</a>.</footer>
            </div>
        );
    };

}
export default Parent;