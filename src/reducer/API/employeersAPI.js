import instance from "./instance";

export const employeersAPI = {
  getAllEmployeers() {
    return instance.get(`employees`).then(response => response.data);
  },

  getEmployee(id) {
    return instance.get(`employee/${id}`).then(response => response.data);
  },

  createEmployee(name, salary, age) {
    return instance
      .post(`create`, {
        name,
        salary,
        age
      })
      .then(response => response.data);
  },

  updateEmployee(id, name, salary, age) {
    return instance
      .put(`update/${id}`, {
        name,
        salary,
        age
      })
      .then(response => response);
  },

  deleteEmployee(id) {
    return instance.delete(`delete/${id}`).then(response => response.data);
  }
};
