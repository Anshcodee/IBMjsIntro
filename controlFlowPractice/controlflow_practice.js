// We know person's role.
let personRole = "Employee";
let authorisedTo;

switch(personRole){
    case "Employee":
        authorisedTo = "Eligible to avail Dietary Services";
        break;
    case "Enrolled Member":
        authorisedTo = "Eligible to avail Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        authorisedTo = "Eligible to avail Dietary Services only.";
        break;
    default:
        authorisedTo = "You need to enroll or at least subscribe to avail this facility.";
}

console.log("Eligibility status: ", authorisedTo);
