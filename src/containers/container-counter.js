import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addCount, subCount, changeCount} from '../actions/index';

class Counter extends Component{
  constructor(){
    super();
    this.state={
      input: ''
    };
  }

  render(){
    return(
      <div>
        <h1>Counter: {this.props.count.value}</h1>
        <button onClick={() => this.props.addCount()}>+</button>
        <button onClick={() => this.props.subCount()}>-</button>
        <input value={this.state.input} onChange={(e) => this.setState({input: e.target.value})} />
        <button onClick={() => this.props.changeCount(this.state.input)}>GO</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addCount, subCount, changeCount}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
