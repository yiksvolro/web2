const project = require("./project");
const customer = require("./customer");
const dev = require("./developer");

exports.find_Customer = customer.find_Customer;
exports.add_Customer = customer.add_Customer;
exports.remove_Customer = customer.remove_Customer;
exports.edit_Customer = customer.edit_Customer;

exports.find_Project = project.find_Project;
exports.add_Project = project.add_Project;
exports.remove_Project = project.remove_Project;
exports.edit_Project = project.edit_Project;
exports.find_Projects_By_Customer = project.find_Projects_By_Customer;

exports.find_Dev = dev.find_Dev;
exports.add_Dev = dev.add_Dev;
exports.add_Dev_To_Project = dev.add_Dev_To_Project;
exports.edit_Dev = dev.edit_Dev;
exports.remove_Dev = dev.remove_Dev;