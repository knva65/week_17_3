
let now = new Date();
let date = new Date(2022, 3, 23, 19, 50);
let diff = Date.now() - date;
let sec = Math.floor(diff / 1000);
let min = Math.floor(diff / 60000);
document.getElementById('tittle').innerHTML += `${'от ' + date.getDate()}.${'0' + (date.getMonth() + 1)}.${date.getFullYear()}.${' в ' + date.getHours()}.${date.getMinutes()}`;
document.getElementById('text_date').innerHTML += 'Сегодня:  ' + now;

document.getElementById('text_date_2').innerHTML = "";

let arr = ['0' + date.getDate(),
'0' + (date.getMonth() + 1),
'' + date.getFullYear(),
'0' + date.getHours(),
'0' + date.getMinutes()
].map(component => component.slice(-2));



if(diff < 1000){document.getElementById('text_date_2').innerHTML +='прямо сейчас'}
if(sec < 60){document.getElementById('text_date_2').innerHTML += sec + ' секунд назад'}
if(min < 60){document.getElementById('text_date_2').innerHTML += min + '  минут назад'}
else {document.getElementById('text_date_2').innerHTML += arr.slice(0, 3).join('.') + ' ' + arr.slice(3).join(':');
}


