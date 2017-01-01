import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term : ''};

    // bind this context
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value); // vallia js style
    // 이곳에서의 this는 어디를 가리키는지 알 수 없기 때문에 undefined에러가 발생하게 된다. 그래서 bind 해주게 된다.
    this.setState({term : event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
    // we need to go and fetch weather data.
    this.props.fetchWeather(this.state.term);
    this.setState({term : ''});

  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          required
          autoFocus
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}

// null부분은 state을 유지할 필요가 없기 때문이다.
export default connect (null, mapDispatchToProps)(SearchBar);
