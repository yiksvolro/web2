class Project{
    constructor(name,isArchive){
        this.name = name;
        this.isArchive = isArchive;
        this.developer_list = [];
        this.customer_list = [];
    }
}

let global_project_list = new Array();

function find_Project (name) {
    for (let project of global_project_list) {
        if (name === project.name) { return project; }
    }
    return -1;

}

function add_Project (name,isArchive) {

    let project = new Project(name,isArchive);
    global_project_list.push(project);

    return project;

}

function remove_Project(name){
    let project = find_Project(name);
    if (project === -1) return -1;
    let id = global_project_list.indexOf(project);
    global_project_list[id].isArchive = true;
    return global_project_list[id];
}

function edit_Project(name,new_name,new_is_Archive){
    let project = find_Project(name);
    if (project === -1) return -1;
    let id = global_project_list.indexOf(project);
    global_project_list[id].name = new_name;
    global_project_list[id].isArchive = new_is_Archive;
    return global_project_list[id];
}

function find_Projects_By_Customer(customer){
    let projects = new Array();
    for(let project of global_project_list){
        if(project.customer_list.includes(customer) && project.isArchive === false){
            projects.push(project);
        }
    }
    return projects;
}

function find_Projects_By_Dev(dev){
    let projects = new Array();
    for(let project of global_project_list){
        if(project.developer_list.includes(dev) && project.isArchive === false){
            projects.push(project);
        }
    }
    return projects;
}

exports.find_Project = find_Project;
exports.add_Project = add_Project;
exports.remove_Project = remove_Project;
exports.edit_Project = edit_Project;
exports.find_Projects_By_Customer = find_Projects_By_Customer;
exports.find_Projects_By_Dev = find_Projects_By_Dev;