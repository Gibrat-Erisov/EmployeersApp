import React, { Component } from "react";
import ListEmployeers from "./ListEmployeers";
import { connect } from "react-redux";
import { getAllEmployeersAction } from "../../reducer/action/action-employeers";
import Loading from "../Loading";

class containerListEmployeers extends Component {
  componentDidMount() {
    this.props.getAllEmployeersAction();
  }
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Loading />
        ) : (
          <ListEmployeers
            employeers={this.props.employeers}
            navigation={this.props.navigation}
            detail={this.props.detail}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  employeers: state.listEmployeers.employeers,
  isFetching: state.listEmployeers.isFetching
});

export default connect(mapStateToProps, { getAllEmployeersAction })(
  containerListEmployeers
);
