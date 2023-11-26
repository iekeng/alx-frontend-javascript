export default function createReportObject(employeesList) {
  return {
    allEmployees: {
        ...employeesList
    },

    getNumberOfDepartments: (employees) => {
      let count = 0;
      for (let item in employees) {
          count++;
      }
      return count;
    }
  }
}