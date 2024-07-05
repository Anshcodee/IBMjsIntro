/* In this lab, you will create an employee management system. You will employ buttons to trigger functions such as 
displaying all employees, calculating total salaries, filtering and displaying HR department employees, and finding employees by their IDs. 
You will use JavaScript functions to generate dynamic lists of employees utilizimg array methods like 
forEach, filter, reduce, and find to manage and present data interactively.*/

const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

 // Function to display all employees
 // Make a function with same name as in html file to detect this
function displayEmployees(){
    const totalEmployees = employees.map((record, index) => `<p>${record.id}: ${record.name}: ${record.age}: ${record.department}: ${record.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = totalEmployees;}
// The above is stored in the variable totalEmployees


//Calculating total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((total, employee) => total + employee.salary, 0);
    alert(`Total Salary: ${totalSalaries}`);
}
// What will be the difference in using $ or $$????

// Creating list of HR Employees 
function displayHREmployees(){
    const hrEmployees = employees.filter(e => e.department === "HR");
    const hrEmployeesDisplay = hrEmployees.map((worker, index) => `<p>${worker.id}: ${worker.name}: ${worker.name} - ${worker.department} - ${worker.salary}</p>`).join('');
    // check what happens on replacing $ with $$ for {worker.salary}
    document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay;
}

//Need a func to find employee by ID

function findEmployeeById(empID){
    const requiredEmployee = employees.find(e => e.id === empID);
    if (requiredEmployee){
        document.getElementById('employeeDetails').innerHTML = `<p>${requiredEmployee.id}: ${requiredEmployee.name}: ${requiredEmployee.name} - ${requiredEmployee.department} - $${requiredEmployee.salary}</p>`;
    } else{// Check the above salary with $$ instead of $
        document.getElementById('employeeDetails').innerHTML = 'No employee was found with given ID';
    }
}

// The double $$ is just to indicate dollars and no programming change