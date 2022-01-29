import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    person: {
      fullName: "Salma Charfi",
      bio: "Electrical Engineer and Web developer",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDBbKbOznWlZlfp2uNoo3RqPb_MmZKGuk8A&usqp=CAU",
      profession: "Engineer",
    },
    shows: true,
    count:0,
  };

  componentDidMount=()=>{
    setInterval(()=>{
      this.setState({count:this.state.count+1}) 
    }, 1000);//run this thang every 2 seconds

  }


  Handleshows = () => {
    this.setState({ shows: !this.state.shows });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
        <button className={this.state.shows?"buttonHide":"buttonShow"} onClick={this.Handleshows}> {this.state.shows?'Hide':"Show"} </button>
        </div>
        {this.state.shows ? (
          <div >
            <div className='counter'>
            <h2> COUNTER </h2>
            <div>
            <button >{this.state.count}</button>
            </div>
            </div>
            <h1> {this.state.person.fullName}</h1>
            <h1> {this.state.person.bio} </h1>
            <img src={this.state.person.imgSrc} alt="" />
            <h1> {this.state.person.profession} </h1>
          </div>
        ) : null}
      </div>
    );
  }
}
