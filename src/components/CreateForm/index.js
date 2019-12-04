import React, { Component } from "react";
import CreateForm from "./CreateForm";
import { connect } from "react-redux";
import Loading from "../Loading";
import {
  updateTextName,
  updateTextAge,
  updateTextSalary,
  createEmployeeAction
} from "../../reducer/action/action-employeers";

class containerDitail extends Component {
  state = {
    errorName: "",
    errorAge: "",
    errorSalary: ""
  };

  validate = () => {
    let valid = true;

    if (!this.props.name) {
      this.setState({ errorName: "Заполните Name" });
      valid = false;
    } else this.setState({ errorName: "" });

    if (!this.props.age) {
      this.setState({ errorAge: "Заполните Age" });
      valid = false;
    } else this.setState({ errorAge: "" });

    if (!this.props.salary) {
      this.setState({ errorSalary: "Заполните Salary" });
      valid = false;
    } else this.setState({ errorSalary: "" });
    return valid;
  };

  handleSubmit = () => {
    if (this.validate()) {
      this.props.createEmployeeAction(
        this.props.name,
        this.props.salary,
        this.props.age
      );
    }
  };

  InputChange = (text, type) => {
    switch (type) {
      case "name":
        this.props.updateTextName(text);
        break;
      case "age":
        this.props.updateTextAge(text);
        break;
      case "salary":
        this.props.updateTextSalary(text);
        break;

      default:
        break;
    }
  };

  componentWillMount() {
    this.props.updateTextName("");
    this.props.updateTextAge("");
    this.props.updateTextSalary("");
  }
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Loading />
        ) : (
          <CreateForm
            name={this.props.name}
            age={this.props.age}
            salary={this.props.salary}
            InputChange={this.InputChange}
            errors={this.state}
            handleSubmit={this.handleSubmit}
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

export default connect(mapStateToProps, {
  updateTextName,
  updateTextAge,
  updateTextSalary,
  createEmployeeAction
})(containerDitail);
