let people = [
    {
        id: 1,
        name: "John",
        online: false
    },
    {
        id: 2,
        name: "Michael",
        online: true
    },
    {
        id: 3,
        name: "Mary",
        online: false
    }
]

function Person(data){
    Object.assign(this, data)
    const {id, name, online} = this
    this.personInfo = function(){
        document.getElementById("root").innerHTML += `
        ${id} ${name} ${online}<br />
        `;
    }
}
const john = new Person(people[0])
john.personInfo()

const michael = new Person(people[1])
michael.personInfo()

const mary = new Person(people[2])
mary.personInfo()
