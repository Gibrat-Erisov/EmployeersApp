let initialState = {
  employeers: [],
  name: "",
  age: "",
  salary: "",
  isFetching: false
};

const employeers = (state = initialState, aciton) => {
  switch (aciton.type) {
    case "SET_EMPLOYEERS":
      return {
        ...state,
        employeers: [...aciton.employeers]
      };

    case "SET_EMPLOYEE":
      return {
        ...state,
        name: aciton.employee.employee_name,
        age: aciton.employee.employee_age,
        salary: aciton.employee.employee_salary
      };

    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: aciton.isFetching
      };
    case "UPDATE_TEXT_NAME":
      return {
        ...state,
        name: aciton.newText
      };
    case "UPDATE_TEXT_AGE":
      return {
        ...state,
        age: aciton.newText
      };
    case "UPDATE_TEXT_SALARY":
      return {
        ...state,
        salary: aciton.newText
      };

    default:
      return state;
  }
};

export default employeers;
