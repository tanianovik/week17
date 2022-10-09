let inputData = document.querySelector('input');
let click = document.getElementById('button')

function processing() {
    let splitName = inputData.value.split(" ");
    let firstName = splitName[0].toLowerCase();
    const firstNameResult = firstName.charAt(0).toUpperCase() + firstName.slice(1)

    let secondName = splitName[1].toLowerCase();
    const secondNameResult = secondName.charAt(0).toUpperCase() + secondName.slice(1)

    let thirdName = splitName[2].toLowerCase();
    const thirdNameResult = thirdName.charAt(0).toUpperCase() + thirdName.slice(1)

    let outputName = `Ваше ФИО:
Фамилия: ${firstNameResult}
Имя: ${secondNameResult}
Отчество: ${thirdNameResult}
`;

    alert (outputName);
}



document.querySelector("#button").addEventListener('click', processing);


