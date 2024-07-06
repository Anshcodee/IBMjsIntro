const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
]

function displayEmployees(){
    const employeeList = employees.map((emp, index) => `<p>ID ${emp.id}: ${emp.name}: ${emp.age}: ${emp.department} - ${emp.specialization}: ${emp.salary}</p>`).join('\n');
    document.getElementById('employeeDetails').innerHTML = employeeList;
}

function calculateTotalSalaries(){
    const totSalary = employees.reduce((total,employee) => total+employee.salary,0);
    document.getElementById('employeeDetails').innerHTML = totSalary;
}

function displayHREmployees(){
    hrEmployeeList = '';
    hrEmployees = employees.filter((e) => e.department === 'HR')
    hrEmployees.forEach(e => {
        hrEmployeeList += `<p>${e.id}: ${e.name}: ${e.department}</p>`;
    });
    document.getElementById('employeeDetails').innerHTML = hrEmployeeList;
}

function findEmployeeById(eid){
    const reqdEmployee = employees.find((empl) => empl.id === eid);
    if (reqdEmployee){
        document.getElementById('employeeDetails').innerHTML = `<p>${employees.id}: ${employees.name}: ${employees.department}: ${employees.specialization}</p>`;
    } else{
        document.getElementById('employeeDetails').innerHTML = `Required employee wasn't found`;
    }
}

function findEmployeeBySpecialization(){
    const reqdEmployee = employees.find((em) => em.specialization === 'Javascript');
    if (reqdEmployee){
        document.getElementById('employeeDetails').innerHTML = `<p>${employees.id}: ${employees.name}: ${employees.department}: ${employees.specialization}</p>`;
    } else{
        document.getElementById('employeeDetails').innerHTML = `Required employee wasn't found`;
    }
}
