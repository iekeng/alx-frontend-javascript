export default function createIteratorObject(report) {
    let allEmployees = [];
    allEmployees = Object.values(report.allEmployees).flatMap(item => item);
    return allEmployees;
  }