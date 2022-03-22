const mod = require('custom_module');

let project1 = mod.add_Project("project1");
let project2 = mod.add_Project("project2");

console.log("Видалення : project2");
mod.remove_Project("project2");

console.log("Зміна проекту: project1");
mod.edit_Project("project1","first",false);
console.log(mod.find_Project("first"));