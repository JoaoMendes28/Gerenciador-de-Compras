let fruitList = [];
let laticinioList = [];
let beerList = [];
let meatList = [];
let carboList = [];

function onButton() {
    let newItem = document.getElementById("add-item").value;
    let category = document.getElementById("category").value;
    
    if (category === "Fruta") {
        fruitList.push(newItem);
        document.getElementById("display_1").innerHTML = fruitList;
        document.getElementById("add-item").value = "";
    } else if (category === "Laticinio") {
        laticinioList.push(newItem);
        document.getElementById("display_2").innerHTML = laticinioList;
        document.getElementById("add-item").value = "";
    } else if (category === "Bebida") {
        beerList.push(newItem);
        document.getElementById("display_3").innerHTML = beerList;
        document.getElementById("add-item").value = "";
    } else if (category === "Carne") {
        meatList.push(newItem);
        document.getElementById("display_4").innerHTML = meatList;
        document.getElementById("add-item").value = "";
    } else if (category === "Carboidrato") {
        carboList.push(newItem);
        document.getElementById("display_5").innerHTML = carboList;
        document.getElementById("add-item").value = "";
    }
}

function removeItem () {
    let inputItem1 = document.getElementById("remove-input-1").value;
    
    if (fruitList.includes(inputItem1)) {
        fruitList.splice(fruitList.indexOf(inputItem1), 1);
        document.getElementById("display_1").innerHTML = fruitList;
        document.getElementById("remove-input-1").value = "";
    } else if (laticinioList.includes(inputItem1)) {
        laticinioList.splice(laticinioList.indexOf(inputItem1), 1);
        document.getElementById("display_2").innerHTML = laticinioList;
        document.getElementById("remove-input-1").value = "";
    } else if (beerList.includes(inputItem1)) {
        beerList.splice(beerList.indexOf(inputItem1), 1);
        document.getElementById("display_3").innerHTML = beerList;
        document.getElementById("remove-input-1").value = "";
    } else if (meatList.includes(inputItem1)) {
        meatList.splice(meatList.indexOf(inputItem1), 1);
        document.getElementById("display_4").innerHTML = meatList;
        document.getElementById("remove-input-1").value = "";
    } else if(carboList.includes(inputItem1)) {
        carboList.splice(carboList.indexOf(inputItem1), 1);
        document.getElementById("display_5").innerHTML = carboList;
        document.getElementById("remove-input-1").value = "";
    } else {
        alert("Não existe nenhum item com este nome");
    }
}


