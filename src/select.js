//
// criar o campo select
//
function createSelect(_datas) {
    let filedSelect = document.createElement("select");
    filedSelect.insertAdjacentHTML("beforeend", createOptionsString(_datas));
    return filedSelect;
}

// input: [
//  {value: "123", label:"label 123"},
//   {value: "456", label:"label 456"}
// ]
//
// output: 
//   <option value="123">label 123</option>
//   <option value="456">label 456</option>
function createOptionsString(arrOptions) {
    // primeiro campo vazio
    let optionsString = '<option value=""></option>';

    // call back
    function logArrayElements(e) {
        optionsString += `<option value="${e.value}">${e.label}</option>`;
    }
    arrOptions.forEach(logArrayElements);
    return optionsString;
}

// debug
// let datas = [
//     { value: "123", label: "label 123" },
//     { value: "456", label: "label 456" }
// ]
// console.log(createOptionsString(datas));

export default createSelect;