class Customer{
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
}
let global_customers_list = new Array();


function find_Customer (name, address) {
    for (let customer of global_customers_list) {
        if (name === customer.name && address === customer.address) { return customer; }
    }
    return -1;

}

function add_Customer (name, address, project) {
    let customer = new Customer(name, address);
    global_customers_list.push(customer);
    return customer;
}

function add_Customer_To_Project(name,address,project){
    let customer = find_Customer(name,address);
    project.customer_list.push(customer);
    return project;
}

function remove_Customer (name, address, project) {

    let customer = find_Customer(name, address);

    if (customer === -1) { return -1; }

    let id = project.customer_list.indexOf(customer);
    project.customer_list.splice(id, 1);

    id = global_customers_list.indexOf(customer);
    global_customers_list.splice(id,1);

    return 1;

}

function edit_Customer (name, address, new_name, new_address, project) {

    let customer = find_Customer(name, address);

    if (customer === -1) { return -1; }

    let id =  project.customer_list.indexOf(customer);
    
    project.customer_list[id].name = new_name;
    project.customer_list[id].address = new_address;

    id = global_customers_list.indexOf(customer);
    global_customers_list[id].name = new_name;
    global_customers_list[id].address = new_address;

    return 1;

}

exports.find_Customer = find_Customer;
exports.add_Customer = add_Customer;
exports.add_Customer_To_Project = add_Customer_To_Project;
exports.remove_Customer = remove_Customer;
exports.edit_Customer = edit_Customer;