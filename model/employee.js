const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        id: { type: Number },
        salary: { type: Number },
        department: { type: String },
        email: { type: String}
    }
);

module.exports = mongoose.model('employee', EmployeeSchema);