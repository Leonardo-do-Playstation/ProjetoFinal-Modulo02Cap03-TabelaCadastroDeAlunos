var students = [
    { id: 1, name: "Pedro Antonio", email: "pedro@abutua.com", phone: "(15) 9999-9999", curse: 2, turn: 2 },
];

var curses = [
    { id: 1, name: "Java" },
    { id: 2, name: "Angular" },
    { id: 3, name: "C#" },
    { id: 4, name: "Python" },
    { id: 5, name: "JavaScript" },
];

var turns = [
    { id: 1, name: "Manhã" },
    { id: 2, name: "Tarde" },
    { id: 3, name: "Noite" },
];

loadStudents();

function loadStudents() {
    for (let stud of students) {
        addNewRow(stud);
    }
}


function save() {
    var stud = {
        id: students.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById("inputPhone").value,
        curse: document.getElementById("inputCurse").value,
        turn: document.querySelector('input[name="gridRadios"]:checked').value
    };

    addNewRow(stud);
    students.push(stud);
    document.getElementById("studentForm").reset();
}


function addNewRow(stud) {
    var table = document.getElementById("studentsTable");
    var newRow = table.insertRow();

    var idNode = document.createTextNode(stud.id);
    newRow.insertCell().appendChild(idNode);

    var nameNode = document.createTextNode(stud.name);
    newRow.insertCell().appendChild(nameNode);

    var emailNode = document.createTextNode(stud.email);
    newRow.insertCell().appendChild(emailNode);

    var phoneNode = document.createTextNode(stud.phone);
    newRow.insertCell().appendChild(phoneNode);

    var curseNode = document.createTextNode(curses[stud.curse - 1].name);
    newRow.insertCell().appendChild(curseNode);

    var turnNode = document.createTextNode(turns[stud.turn - 1].name);
    newRow.insertCell().appendChild(turnNode);

}
