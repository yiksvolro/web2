class Developer{
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
}
let global_dev_list = new Array();

function find_Dev (name, address) {
    for (let dev of global_dev_list) {
        if (name === dev.name && address === dev.address) { return dev; }
    }
    return -1;

}

function add_Dev (name, address) {
    let dev = new Developer(name, address);
    global_dev_list.push(dev);
    return dev;
}

function add_Dev_To_Project(name,address,project){
    let dev = find_Dev(name,address);
    project.developer_list.push(dev);
    return project;
}

function remove_Dev (name, address, project) {

    let dev = find_Dev(name, address);

    if (dev === -1) { return -1; }

    let id = project.developer_list.indexOf(dev);
    project.developer_list.splice(id, 1);

    id = global_dev_list.indexOf(dev);
    global_dev_list.splice(id,1);

    return 1;

}

function edit_Dev (name, address, new_name, new_address, project) {

    let dev = find_Dev(name, address);

    if (dev === -1) { return -1; }

    let id =  project.developer_list.indexOf(dev);
    
    project.developer_list[id].name = new_name;
    project.developer_list[id].address = new_address;

    id = global_dev_list.indexOf(dev);
    global_dev_list[id].name = new_name;
    global_dev_list[id].address = new_address;

    return 1;

}

exports.find_Dev = find_Dev;
exports.add_Dev = add_Dev;
exports.add_Dev_To_Project = add_Dev_To_Project;
exports.edit_Dev = edit_Dev;
exports.remove_Dev = remove_Dev;