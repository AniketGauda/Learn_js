const person = {
    firstName: "John",
    lastName: "Doe",
    outerObj1: {
        country : "USA",
        innerObj: {
            province:"Chicago",
            area : 'pensylvenia'
        }
    }
};
  
// Destructuring

let {firstName:Username, lastName, outerObj:{country="India"}={}, outerObj:{innerObj:{area}={}}={}} = person;

console.log(Username+" "+lastName + " " + country+" "+area);
