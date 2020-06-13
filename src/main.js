var createSelect = require("./select.js");

// esses são os dados do select
let datas = [
    { value: "123", label: "label 123" },
    { value: "456", label: "label 456" }
]

let divContent = document.getElementById('content');
divContent.appendChild(createSelect(datas));

