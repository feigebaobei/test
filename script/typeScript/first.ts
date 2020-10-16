interface Person {
	firstName: string
	lastName: string
}
function greeter (person: Person) {
	// return 'hello, ' + person
	return `hello ${person.firstName} ${person.lastName}`
}
class Student {
	fullName: string
	constructor (public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = `${firstName} ${middleInitial} ${lastName}`
	}
}
let user = 'top'
let users = ['top']
let userOther = {
	firstName: 'top',
	lastName: 'flando'
}
let userSecond = new Student('top', 'm`', 'helle')
// document.body.textContent = greeter(user)
// document.body.textContent = greeter(users)
// document.body.textContent = greeter(userOther)
document.body.textContent = greeter(userSecond)
// document.body.textContent = 'greeter(userSecond)'
// document.body.textContent = 'sdfsdf'