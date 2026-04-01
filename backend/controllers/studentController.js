const db = require("../config/db");
const Student = require("../models/studentModel");

exports.getStudents = (req, res) => {
  db.query(`
    SELECT students.*, 
           departments.dept_name, 
           courses.course_name
    FROM students
    LEFT JOIN departments 
      ON students.department_id = departments.id
    LEFT JOIN courses 
      ON students.course_id = courses.id
  `, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.addStudent = (req, res) => {
  const data = req.body;

  if (!data.name || !data.email) {
    return res.status(400).send("Validation failed");
  }

  Student.create(data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Student added");
  });
};

exports.updateStudent = (req, res) => {
  Student.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.send("Updated");
  });
};

exports.deleteStudent = (req, res) => {
  Student.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.send("Deleted");
  });
};