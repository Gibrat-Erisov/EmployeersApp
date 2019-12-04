import React, { Component } from "react";
import Details from "./Details";
import { connect } from "react-redux";
import { getEmployeeAction } from "../../reducer/action/action-employeers";
import Loading from "../Loading";

class containerDitail extends Component {
  componentDidMount() {
    this.props.getEmployeeAction(this.props.id);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Loading />
        ) : (
          <Details
            navigation={this.props.navigation}
            name={this.props.name}
            age={this.props.age}
            salary={this.props.salary}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  name: state.listEmployeers.name,
  age: state.listEmployeers.age,
  salary: state.listEmployeers.salary,
  isFetching: state.listEmployeers.isFetching
});

export default connect(mapStateToProps, { getEmployeeAction })(containerDitail);
