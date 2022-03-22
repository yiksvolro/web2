const project = require("./project");
const customer = require("./customer");

exports.find_Customer = find_Customer;
exports.add_Customer = add_Customer;
exports.remove_Customer = remove_Customer;
exports.edit_Customer = edit_Customer;

exports.find_Project = find_Project;
exports.add_Project = add_Project;
exports.remove_Project = remove_Project;
exports.edit_Project = edit_Project;
exports.find_Projects_By_Customer = find_Projects_By_Customer;