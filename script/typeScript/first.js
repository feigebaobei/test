function greeter(person) {
    // return 'hello, ' + person
    return "hello " + person.firstName + " " + person.lastName;
}
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var user = 'top';
var users = ['top'];
var userOther = {
    firstName: 'top',
    lastName: 'flando'
};
var userSecond = new Student('top', 'm`', 'helle');
// document.body.textContent = greeter(user)
// document.body.textContent = greeter(users)
// document.body.textContent = greeter(userOther)
document.body.textContent = greeter(userSecond);
// document.body.textContent = 'greeter(userSecond)'
// document.body.textContent = 'sdfsdf'
