import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";
import {DateXAxis,DateVerticalGridLines} from "./lib";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// CSS
import "./index.css";

class DateXAxisBundle extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 1000,
                  height: 50,
                  minX: 0,
                  maxX: 100000000000,
                  tickPosition: "top"
                  };
  }

  render() {
    let {width,height,minX,maxX,tickPosition} = this.state;
    return (
      <Fragment>
        <div>
          width:
          <input  type="range" min={800} max={1600} step={1}
                  value={width}
                  onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          height:
          <input  type="range" min={50} max={100} step={1}
                  value={height}
                  onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          minX:
          <input  type="range" min={-100000000000} max={maxX} step={1}
                  value={minX}
                  onChange={(ev)=>this.setState({minX:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          maxX:
          <input  type="range" min={minX} max={100000000000} step={1}
                  value={maxX}
                  onChange={(ev)=>this.setState({maxX:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          tickPosition:
          <select value={tickPosition}
                  onChange={(ev)=>this.setState({tickPosition:ev.target.value})}>
            <option value="top">top</option>
            <option value="bottom">bottom</option>
          </select>
        </div>
        <DateXAxis  width={width} height={height}
                    minX={minX} maxX={maxX}
                    tickPosition={tickPosition}
                    />
      </Fragment>
    );
  }
}

class DateVerticalGridLinesBundle extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 1000,
                  height: 50,
                  minX: 0,
                  maxX: 100000000000,
                  tickPosition: "top"
                  };
  }

  render() {
    let {width,height,minX,maxX,tickPosition} = this.state;
    return (
      <Fragment>
        <div>
          width:
          <input  type="range" min={800} max={1600} step={1}
                  value={width}
                  onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          height:
          <input  type="range" min={100} max={500} step={1}
                  value={height}
                  onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          minX:
          <input  type="range" min={-100000000000} max={maxX} step={1}
                  value={minX}
                  onChange={(ev)=>this.setState({minX:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          maxX:
          <input  type="range" min={minX} max={100000000000} step={1}
                  value={maxX}
                  onChange={(ev)=>this.setState({maxX:Number.parseInt(ev.target.value)})}/>
        </div>
        <DateVerticalGridLines  width={width} height={height}
                                minX={minX} maxX={maxX}
                                />
        <DateXAxis  width={width} height={50}
                    minX={minX} maxX={maxX}
                    tickPosition="top"
                    />
      </Fragment>
    );
  }
}

class YAxisBundle extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 1000,
                  height: 50,
                  minX: 0,
                  maxX: 100000000000,
                  tickPosition: "top"
                  };
  }

  render() {
    let {width,height,minX,maxX,tickPosition} = this.state;
    return (
      <Fragment>
        <div>
          width:
          <input  type="range" min={800} max={1600} step={1}
                  value={width}
                  onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          height:
          <input  type="range" min={100} max={500} step={1}
                  value={height}
                  onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          minX:
          <input  type="range" min={-100000000000} max={maxX} step={1}
                  value={minX}
                  onChange={(ev)=>this.setState({minX:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          maxX:
          <input  type="range" min={minX} max={100000000000} step={1}
                  value={maxX}
                  onChange={(ev)=>this.setState({maxX:Number.parseInt(ev.target.value)})}/>
        </div>
        <DateVerticalGridLines  width={width} height={height}
                                minX={minX} maxX={maxX}
                                />
        <DateXAxis  width={width} height={50}
                    minX={minX} maxX={maxX}
                    tickPosition="top"
                    />
      </Fragment>
    );
  }
}

class YAxisSlabGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 1000,
                  height: 50,
                  minX: 0,
                  maxX: 100000000000,
                  tickPosition: "top"
                  };
  }

  render() {
    let {width,height,minX,maxX,tickPosition} = this.state;
    return (
      <Fragment>
        <div>
          width:
          <input  type="range" min={800} max={1600} step={1}
                  value={width}
                  onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          height:
          <input  type="range" min={100} max={500} step={1}
                  value={height}
                  onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          minX:
          <input  type="range" min={-100000000000} max={maxX} step={1}
                  value={minX}
                  onChange={(ev)=>this.setState({minX:Number.parseInt(ev.target.value)})}/>
        </div>
        <div>
          maxX:
          <input  type="range" min={minX} max={100000000000} step={1}
                  value={maxX}
                  onChange={(ev)=>this.setState({maxX:Number.parseInt(ev.target.value)})}/>
        </div>
        <DateVerticalGridLines  width={width} height={height}
                                minX={minX} maxX={maxX}
                                />
        <DateXAxis  width={width} height={50}
                    minX={minX} maxX={maxX}
                    tickPosition="top"
                    />
      </Fragment>
    );
  }
}

const App = (props)=>{
  return (
    <Router>
      <nav className="app">
        <Link to="/DateXAxis">DateXAxis</Link>
        <Link to="/DateVerticalGridLines">DateVerticalGridLines</Link>
        <Link to="/DateXAxis">DateXAxis</Link>
        <Link to="/DateXAxis">DateXAxis</Link>
        <Link to="/DateXAxis">DateXAxis</Link>
      </nav>
      <Route path="/DateXAxis" exact component={DateXAxisBundle}/>
      <Route path="/DateVerticalGridLines" exact component={DateVerticalGridLinesBundle}/>
    </Router>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));