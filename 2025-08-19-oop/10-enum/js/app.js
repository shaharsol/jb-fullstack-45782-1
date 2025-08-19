var Countries;
(function (Countries) {
    Countries["Israel"] = "Israel";
    Countries["USA"] = "USA";
    Countries["Portugal"] = "Portugal";
})(Countries || (Countries = {}));
const ido = {
    name: 'ido',
    age: 22.234,
    eyeColor: 'black',
    country: Countries.Israel
};
const dean = {
    name: 'dean',
    age: 23,
    eyeColor: 'brown',
    country: Countries.Portugal
};
console.log(dean);
// document.getElementById('countries').innerHTML = 
console.log(Object.keys(Countries));
