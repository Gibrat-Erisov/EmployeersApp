import { employeersAPI } from "../API/employeersAPI";
import { Alert } from "react-native";
//

export const updateTextName = newText => ({
  type: "UPDATE_TEXT_NAME",
  newText
});
export const updateTextAge = newText => ({ type: "UPDATE_TEXT_AGE", newText });
export const updateTextSalary = newText => ({
  type: "UPDATE_TEXT_SALARY",
  newText
});

// Загрузка
const toggleIsFetching = isFetching => ({
  type: "TOGGLE_IS_FETCHING",
  isFetching
});

// Вызов всех сотрудников
const setEmployeers = employeers => ({ type: "SET_EMPLOYEERS", employeers });
export const getAllEmployeersAction = () => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    employeersAPI.getAllEmployeers().then(employeers => {
      dispatch(toggleIsFetching(false));
      dispatch(setEmployeers(employeers));
    });
  };
};

// Вызов одного сотрудника
const setEmployee = employee => ({ type: "SET_EMPLOYEE", employee });
export const getEmployeeAction = id => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    employeersAPI.getEmployee(id).then(employee => {
      dispatch(toggleIsFetching(false));
      dispatch(setEmployee(employee));
    });
  };
};

// Обновить запись сотрудника
export const updateEmployeeAction = (id, name, salary, age) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    employeersAPI.updateEmployee(id, name, salary, age).then(employee => {
      dispatch(toggleIsFetching(false));
      Alert.alert("Success");
    });
  };
};

// Создать сотрудника
export const createEmployeeAction = (name, salary, age) => {
  return dispatch => {
    dispatch(toggleIsFetching(true));
    employeersAPI.createEmployee(name, salary, age).then(employee => {
      console.log(employee);
      dispatch(toggleIsFetching(false));
      Alert.alert("Success");
    });
  };
};
