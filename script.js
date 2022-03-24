const people = {
  person1: {
    id: 3264,
    firstName: "John",
    lastName: "Doe"
  },
  person2: {
    id: 8694,
    firstName: "Mary",
    lastName: "Smith"
  }
};
const Person = function (data) {
  Object.assign(this, data);
  let values = Object.values(this).join(" ");
  this.displayPerson = function () {
    document.getElementById("root").innerHTML += `
      ${values}<br>
      `;
  };
};
for (let persona in people) {
  persona = new Person(people[persona]);
  persona.displayPerson();
}
