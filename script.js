import people from './data.js'

const Persona = function(data){
    Object.assign(this, data)
    const {name, age, city} = this
    this.info = function(){
        document.getElementById("root").innerHTML += 
        `${name} ${age} ${city}<br />`
    }
}

for(let person in people){
    let data = people[person]
    person = new Persona(data)
    person.info()
}
