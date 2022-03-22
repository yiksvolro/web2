const mod = require('./custom_module');

//додавання проекту в колецію
let project1 = mod.add_Project("project1",false);
console.log(mod.find_Project("project1"));
let project2 = mod.add_Project("project2",false);
console.log(mod.find_Project("project2"));

//видалення проекту з колекції
console.log("Видалення : project2");
mod.remove_Project("project2");
console.log(mod.find_Project("project2"));

//редагування проекту
console.log("Зміна проекту: project1");
mod.edit_Project("project1","first",false);
console.log(mod.find_Project("first"));

//додавання нового замовника в колекцію
let customer1 = mod.add_Customer("customer1","address1",project1);
//пошук одного замовника
console.log(mod.find_Customer("customer1","address1"));

let customer2 = mod.add_Customer("customer2","address2",project1);
console.log(mod.find_Customer("customer2","address2"));

//редагування замовника
console.log("Зміна замовника: customer1");
mod.edit_Customer("customer1","address1","customer","address",project1);
console.log(mod.find_Customer("customer","address"));

//видалення замовника
console.log("Видалення: customer2");
mod.remove_Customer("customer2","address2",project1);
console.log(mod.find_Customer("customer2","address2"));

//додавання виконавця
let dev1 = mod.add_Dev("dev1","address1",project1);
console.log(mod.find_Dev("dev1","address1"));
//додавання виконавця на проект
console.log(mod.add_Dev_To_Project("dev1","address1",project1));
