let old_Model = {
    name: "Tata NEXON",
    wheels: 4,
    seats: 5,
    type: "Diesel",
    companyName: "Tata",

}

let new_Model_using_create = Object.create(old_Model);
new_Model_using_create.name = "TATA NEXON EV"
new_Model_using_create.wheels = 4
new_Model_using_create.seats = 6
new_Model_using_create.type = "Electric"
new_Model_using_create.companyName = "Tata"

console.log(new_Model_using_create);

function Construct(name,wheels,seats,type,companyName){
    this.name = name,
    this.wheels = wheels,
    this.seats = seats,
    this.type = type,
    this.companyName = companyName
}


let new_Model_using_construct_function = new Construct("Tata NEXON EV" , 4 , 6 , "Electric" , "Tata");

console.log(new_Model_using_construct_function);