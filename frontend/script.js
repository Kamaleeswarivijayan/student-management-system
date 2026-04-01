const api = "http://localhost:3000/api/students";

const form = document.getElementById("form");
const list = document.getElementById("list");

// Load students on page load
window.onload = loadStudents;

// =======================
// LOAD STUDENTS
// =======================
function loadStudents(data = null) {
  if (data) {
    displayStudents(data);
    return;
  }

  fetch(api)
    .then(res => res.json())
    .then(data => displayStudents(data))
    .catch(err => console.error("Error loading students:", err));
}

// =======================
// DISPLAY STUDENTS
// =======================
function displayStudents(data) {
  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = "<li>No students found</li>";
    return;
  }

  data.forEach(s => {
    list.innerHTML += `
      <li>
        <strong>${s.name}</strong> | ${s.email} | ${s.department} | Year: ${s.year}
        <br>
        <button onclick="editStudent(${s.id}, '${s.name}', '${s.email}', '${s.department}', ${s.year})">Edit</button>
        <button onclick="deleteStudent(${s.id})">Delete</button>
      </li>
    `;
  });
}

// =======================
// ADD / UPDATE STUDENT
// =======================
form.addEventListener("submit", async (e) => {
  e.preventDefault();
const student = {
  name: document.getElementById("name").value,
  father_name: document.getElementById("father_name").value,
  mother_name: document.getElementById("mother_name").value,
  percentage: document.getElementById("percentage").value,
  department_id: document.getElementById("department").value,
  course_id: document.getElementById("course").value
};

  try {
    if (window.currentId) {
      // UPDATE
      await fetch(`${api}/${window.currentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
      });
      window.currentId = null;
    } else {
      // CREATE
      await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
      });
    }

    form.reset();
    loadStudents();

  } catch (error) {
    console.error("Error:", error);
  }
});

// =======================
// EDIT STUDENT
// =======================
function editStudent(id, name, email, department, year) {
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
  document.getElementById("department").value = department;
  document.getElementById("year").value = year;

  window.currentId = id;
}

// =======================
// DELETE STUDENT
// =======================
async function deleteStudent(id) {
  if (!confirm("Are you sure you want to delete?")) return;

  try {
    await fetch(`${api}/${id}`, {
      method: "DELETE"
    });

    loadStudents();

  } catch (error) {
    console.error("Delete error:", error);
  }
}
async function loadDepartments() {
  const res = await fetch("http://localhost:3000/api/departments");
  const data = await res.json();

  const select = document.getElementById("department");

  data.forEach(d => {
    select.innerHTML += `<option value="${d.id}">${d.dept_name}</option>`;
  });
}

async function loadCourses() {
  const res = await fetch("http://localhost:3000/api/courses");
  const data = await res.json();

  const select = document.getElementById("course");

  data.forEach(c => {
    select.innerHTML += `<option value="${c.id}">${c.course_name}</option>`;
  });
}

window.onload = () => {
  loadStudents();
  loadDepartments();
  loadCourses();
};

// =======================
// SEARCH STUDENT
// =======================
function searchStudent() {
  const value = document.getElementById("search").value;

  fetch(`${api}?search=${value}`)
    .then(res => res.json())
    .then(data => displayStudents(data))
    .catch(err => console.error("Search error:", err));
}