/*In this lab, you will delve into the fundamental concept of control flow and conditional statements in JavaScript. Through hands-on implementation, you will grasp the essence of if…else statements, nested statements, and switch statements, understanding how these structures enable code execution based on specific conditions. You will gain insight into how altering these elements impacts the program's flow and output.

*/
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole == "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
}
    else{
            userMessage = "Please log in to access the system.";
    }

console.log("User Message:", userMessage);

let userType ="subscriber";
let userCategory;

switch(userType) {
    case "admin":
        userCategory="Admin";
        break;
    case "manager":
        userCategory="Manager";
        break
    case "subscriber":
        userCategory="Subscriber";
        break
    default:
        userCategory="Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
// Ternary Operator format is xyz ? (true condition) : (false condition)

console.log("Authentication Status:", authenticationStatus)
