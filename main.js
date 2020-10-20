//Задає жирність тексту
document.querySelector('#bold').addEventListener('click', function (event) {
    if (document.querySelector('.box-p').style.fontWeight != 'bold') {
        document.querySelector('.box-p').style.fontWeight = event.target.value;
    }
    else {
        document.querySelector('.box-p').style.fontWeight = 'normal'
    }
});

//Задає курсив тексту
document.querySelector('#italic').addEventListener('click', function (event) {
    if (document.querySelector('.box-p').style.fontStyle != 'italic') {
        document.querySelector('.box-p').style.fontStyle = event.target.value;
    }
    else {
        document.querySelector('.box-p').style.fontStyle = 'normal'
    };
});

//Задає підкреслення тексту
document.querySelector('#underline').addEventListener('click', function (event) {
    if (document.querySelector('.box-p').style.textDecoration != 'underline') {
        document.querySelector('.box-p').style.textDecoration = event.target.value;
    }
    else {
        document.querySelector('.box-p').style.textDecoration = 'none'
    }
});

//Задає закреслення тексту
document.querySelector('#line-through').addEventListener('click', function (event) {
    if (document.querySelector('.box-p').style.textDecoration != 'line-through') {
        document.querySelector('.box-p').style.textDecoration = event.target.value;
    }
    else {
        document.querySelector('.box-p').style.textDecoration = 'none'
    }
});

//Задає вирівнювання тексту по лівому краю
document.querySelector('#align-left').addEventListener('click', function (event) {
    document.querySelector('.box-p').style.alignItems = 'flex-start';
});

//Задає вирівнювання тексту по центру 
document.querySelector('#align-center').addEventListener('click', function (event) {
    document.querySelector('.box-p').style.alignItems = 'center'

});

//Задає вирівнювання тексту по правому краю
document.querySelector('#align-right').addEventListener('click', function (event) {
    document.querySelector('.box-p').style.alignItems = 'flex-end';

});

//Font family
document.querySelector('.dropdown-menu').addEventListener('click', function (event) {
    event.target.classList.contains('dropdown-item');
    document.querySelector('.box-p').style.fontFamily = event.target.style.fontFamily
});

//Font size
document.querySelector('.fontSize').addEventListener('click', function (event) {
    event.target.classList.contains('size');
    document.querySelector('.box-p').style.fontSize = event.target.style.fontSize
});

//Модальне вікно кольору тексту
document.querySelector('#paletteBtn').addEventListener('click', function () {
    document.querySelector('#myModal').style.display = "block";
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('#myModal').style.display = "none";
});

// Зміна кольору тексту
document.querySelector('.colorBox').addEventListener('click', function (event) {
    event.target.classList.contains('color');
    document.querySelector('.box-p').style.color = event.target.style.backgroundColor;
})

//Зміна background
document.querySelector('#imageBtn').addEventListener('click', function () {
    document.querySelector('#myModalBack').style.display = "block";
});

document.querySelector('.Close').addEventListener('click', function () {
    document.querySelector('#myModalBack').style.display = "none";
});

//Керування кнопками tab (colors, images, files)
function tabLink(event, tabName) {
    let tabcontent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    let tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    event.currentTarget.className += " active";
}

//Зміна кольору фону
document.querySelector('#colors').addEventListener('click', function (event) {
    document.body.style.backgroundColor = event.target.style.backgroundColor;
});

//Зміна зображення фону
document.querySelector('#images').addEventListener('click', function (event) {
    document.body.style.backgroundImage = event.target.style.backgroundImage;
    document.body.style.backgroundSize = 'cover';
})
//Add file
document.querySelector('.addFile').addEventListener('change', function (event) {
    let url = event.target.files[0];
    document.body.style.backgroundImage = `url(${URL.createObjectURL(url)})`;
    document.body.style.backgroundSize = 'cover';
});

//Логінування
document.querySelector('#signInBtn').addEventListener('click', function () {
    document.querySelector('#myModalSign').style.display = "block";
    document.forms.signin.reset();
    document.querySelector('#login').style.border = '1px solid lightgray';
    document.querySelector('#password').style.border = '1px solid lightgray';
});

//Перевірка валідації форми SignIn
document.querySelector('#signBtn').addEventListener('click', function () {
    let regExpLog = (/^[a-zA-Z]{1,20}\D$/);
    let regExpPas = (/^[a-zA-Z\d]{5,15}$/);
    let login = document.querySelector('#login');
    let password = document.querySelector('#password');
    if (regExpLog.test(login.value) && regExpPas.test(password.value)) {
        login.style.border = '1px solid green';
        password.style.border = '1px solid green';
        document.querySelector('#myModalSign').style.display = "none";
        document.querySelector('.editBtn').disabled = false;
        document.querySelector('#signInBtn').style.display = 'none';
        document.querySelector('#unlockBtn').style.display = 'block';
        document.querySelector('.message').innerHTML = ``;

    }
    else if (login.value == '' && password.value == '') {
        document.querySelector('.message').innerHTML = `Value is empty`;
        login.style.border = '1px solid red';
        password.style.border = '1px solid red';
    }
    else {
        login.style.border = '1px solid red';
        password.style.border = '1px solid red';
        document.querySelector('.message').innerHTML = `Please check your login or password.`
    }
});
//Відкриває блок редагування
document.querySelector('.editBtn').addEventListener('click', function () {
    document.querySelector('.box-p').style.display = 'none';
    document.querySelector('#textarea').style.display = 'block';
    document.querySelector('#textarea').value = document.querySelector('.box-p').innerHTML;
    document.querySelector('.btn-wrap').style.display = 'none';
    document.querySelector('.editBlock').style.display = 'flex';
});

//Створення таблиці
document.querySelector('.createTable').addEventListener('click', function () {
    document.querySelector('#myModalTable').style.display = "block";
});

function tblCreate() {
    let tr = document.querySelector('#countTR');
    let td = document.querySelector('#countTD')
    let tbl = document.createElement('table');
    for (let i = 0; i < tr.value; i++) {
        let tagTr = document.createElement('tr');
        for (let a = 0; a < td.value; a++) {
            let tagTd = document.createElement('td');
            tagTd.textContent = 'TD';
            tagTd.style.width = document.querySelector('#widthTR').value + 'px';
            tagTd.style.height = document.querySelector('#heightTD').value + 'px';
            tagTd.style.borderWidth = document.querySelector('#widthBorder').value + 'px';
            tagTd.style.borderStyle = `${document.querySelector('#styleBorder').value}`;
            tagTd.style.borderColor = `${document.querySelector('#colorBorder').value}`;
            tagTr.appendChild(tagTd);
        }
        tbl.appendChild(tagTr);
    }
    textarea.value += tbl.outerHTML;
};

document.querySelector('#createBtn').addEventListener('click', function () {
    let countTR = document.querySelector('#countTR');
    let countTD = document.querySelector('#countTD');
    let widthTR = document.querySelector('#widthTR');
    let heightTD = document.querySelector('#heightTD');
    let widthBorder = document.querySelector('#widthBorder');
    let styleBorder = document.querySelector('#styleBorder');
    let colorBorder = document.querySelector('#colorBorder');

    if (countTR.value) {
        countTR.style.border = '1px solid lightgray';
    }
    if (countTD.value) {
        countTD.style.border = '1px solid lightgray';
    }
    if (widthTR.value) {
        widthTR.style.border = '1px solid lightgray';
    }
    if (heightTD.value) {
        heightTD.style.border = '1px solid lightgray';
    }
    if (widthBorder.value) {
        widthBorder.style.border = '1px solid lightgray';
    }
    if (styleBorder.value != 'choose style') {
        styleBorder.style.border = '1px solid lightgray';
    }
    if (colorBorder.value != 'choose color') {
        colorBorder.style.border = '1px solid lightgray';
    }
    if (countTR.value == '' && countTD.value == '' && widthTR.value == '' && heightTD.value == '' && colorBorder.value == 'choose color' && styleBorder.value == 'choose style') {
        document.querySelector('.error').innerHTML = `Value is empty`;
        countTR.style.border = '1px solid red';
        countTD.style.border = '1px solid red';
        widthTR.style.border = '1px solid red';
        heightTD.style.border = '1px solid red';
        widthBorder.style.border = '1px solid red';
        styleBorder.style.border = '1px solid red';
        colorBorder.style.border = '1px solid red';
    }
    else if (countTR.value && countTD.value && widthTR.value && heightTD.value && colorBorder.value != 'choose color' && styleBorder.value != 'choose style') {
        document.querySelector('.error').innerHTML = '';
        countTR.style.border = '1px solid lightgray';
        countTD.style.border = '1px solid lightgray';
        widthTR.style.border = '1px solid lightgray';
        heightTD.style.border = '1px solid lightgray';
        widthBorder.style.border = '1px solid lightgray';
        styleBorder.style.border = '1px solid lightgray';
        colorBorder.style.border = '1px solid lightgray';
        tblCreate()
    }

});

// Очистка полів
document.querySelector('#resetBtn').addEventListener('click', function () {
    document.forms.createTableForm.reset()
});

//Закриття форми таблиці
document.querySelector('.closeTable').addEventListener('click', function () {
    document.querySelector('#myModalTable').style.display = "none";
});

//Збереження змін в блоці редагування
document.querySelector('.save').addEventListener('click', function () {
    document.querySelector('.editBlock').style.display = 'none';
    document.querySelector('#textarea').style.display = 'none';
    document.querySelector('.btn-wrap').style.display = 'flex';
    document.querySelector('.box-p').style.display = 'flex';
    document.querySelector('.box-p').innerHTML = textarea.value;
});

//Створення нумерованого списку

let list = document.querySelector('#countOl');
let marks = document.querySelector('#typeMark')

function createList() {
    let li = document.createElement('ol')
    for (var i = 1; i <= list.value; i++) {
        let listItem = document.createElement('li');
        listItem.appendChild(document.createTextNode(`item ${i}`));
        li.appendChild(listItem);
        listItem.style.listStyleType = `${marks.value}`;
    }
    textarea.value += li.outerHTML;
};

document.querySelector('.listOl').addEventListener('click', function () {
    document.querySelector('#myModalListOl').style.display = "block";
});

document.querySelector('#createOl').addEventListener('click', function () {
    if (list.value){
        list.style.border = '1px solid lightgray';
    }
    if(marks.value != 'choose ol mark'){
        marks.style.border = '1px solid lightgray';
    }
    if(list.value == '' && marks.value == 'choose ol mark'){
        document.querySelector('.invalidValue').innerHTML = `Invalid value`;
        list.style.border = '1px solid red';
        marks.style.border = '1px solid red';
    }
    else if(list.value && marks.value != 'choose ol mark'){
        document.querySelector('.invalidValue').innerHTML = '';
        list.style.border = '1px solid lightgray';
        marks.style.border = '1px solid lightgray';
        createList();
    }

});

document.querySelector('.closeOl').addEventListener('click', function () {
    document.querySelector('#myModalListOl').style.display = "none";
});

document.querySelector('#resetOl').addEventListener('click', function () {
    document.forms.listOlForm.reset()
});

//Створення маркованого списку

let listul = document.querySelector('#countUl');
let markul = document.querySelector('#typeMarkUl');

function createListUl() {
    let lI = document.createElement('ul')
    for (var i = 1; i <= listul.value; i++) {
        let listItemUl = document.createElement('li');
        listItemUl.appendChild(document.createTextNode(`item ${i}`));
        lI.appendChild(listItemUl);
        listItemUl.style.listStyleType = `${markul.value}`;
    }
    textarea.value += lI.outerHTML;
};

document.querySelector('.listUl').addEventListener('click', function () {
    document.querySelector('#myModalListUl').style.display = "block";
});

document.querySelector('#createUl').addEventListener('click', function () {
    if (listul.value){
        listul.style.border = '1px solid lightgray';
    }
    if(markul.value != 'choose ul mark'){
        markul.style.border = '1px solid lightgray';
    }
    if(listul.value == '' && markul.value == 'choose ul mark'){
        document.querySelector('.invalidVal').innerHTML = `Invalid value`;
        listul.style.border = '1px solid red';
        markul.style.border = '1px solid red';
    }
    else if(listul.value && markul.value != 'choose ul mark'){
        document.querySelector('.invalidVal').innerHTML = '';
        listul.style.border = '1px solid lightgray';
        markul.style.border = '1px solid lightgray';
        createListUl();
    }
    
});

document.querySelector('.closeUl').addEventListener('click', function () {
    document.querySelector('#myModalListUl').style.display = "none";
});

document.querySelector('#resetUl').addEventListener('click', function () {
    document.forms.listUlForm.reset()
});

//Sign Out
document.querySelector('#unlockBtn').addEventListener('click', function () {
    document.querySelector('#myModalSignOut').style.display = "block";
});

document.querySelector('#cancel').addEventListener('click', function () {
    document.querySelector('#myModalSignOut').style.display = "none";
});

document.querySelector('#signOutBtn').addEventListener('click', function () {
    document.querySelector('#myModalSignOut').style.display = "none";
    document.querySelector('.editBtn').disabled = true;
    document.querySelector('#signInBtn').style.display = 'block';
    document.querySelector('#unlockBtn').style.display = 'none';
});