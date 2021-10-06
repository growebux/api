let techbag = {
    id: 1,
    name: "Asus",
    content: ["intel Pentium Silver", "1TB HDD", "8GB RAM", "Windows 10"],
};

let eletronics = [techbag]

function create(newTechbag) {
    eletronics.push(newTechbag);
}

function read(){
    return eletronics;
}

function update(techBagId, newTechbag){

const foundNewTechbag = eletronics.find((techBag) => techbag.id === techBagId);

if(!foundNewTechbag){
    return;
}


const updatedTechbag = {
    ...foundNewTechbag,
    ...newTechbag,
};

const filteredEletronic = eletronics.filter((techBag) => techBag.id !== techBagId);

eletronics = [
    ...filteredEletronic,
    updatedTechbag];
}   

function remove(techBagId){
    const removedTechBagList = eletronics.filter((techBag) => techBag.id !== techBagId);

    eletronics = removedTechBagList;
}

let result1 = read();
console.log('old configuration', result1);

let clothesBag = {
    id:2,
    name: "Clothes Bag",
    content: ['T-shirt', 'Hat', 'Pants'],
}

create(clothesBag);

let result2 = read();
console.log("after create", result2);

update(1,{name: "Desktop Tech Bag"});

let result3 = read();
console.log("after update", result3);

remove(2);

let result4 = read();
console.log("after remove", result4);