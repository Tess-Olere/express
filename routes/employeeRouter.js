const express = require('express');
const router = express.Router();
const {getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} = require('../controller/employeeController')

// router.get('/employees', getEmployees)
// router.post('/employees', createEmployee)
router.route('/employees').get(getEmployees).post(createEmployee)
// router.get('/employees/:id', getEmployee)
// router.delete('/employees/:id', deleteEmployee)
// router.patch('/employees/:id', updateEmployee)
router.route('/employees/:id').get(getEmployee).delete(deleteEmployee).patch(updateEmployee)

module.exports = router