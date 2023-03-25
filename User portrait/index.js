let yearOfBirth = prompt('Введіть рік свого народження:');
let city = prompt('В якому місті Ви живете?');
let favoriteSport = prompt('Який Ваш улюблений вид спорту?');

let missingInfo = 'Шкода, що ви не захотіли ввести свій(ю)';

let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;

let message;

switch(yearOfBirth){
    case null:
        message = `${missingInfo} рік свого народження`;
        break;
    default:
        message = `Вам ${age} років.`;
}

if (city === null) {
message += "\n" + missingInfo + " місто";
} else {
let capital;
switch (city) {
case "Київ":
capital = "України";
break;
case "Вашингтон":
capital = "США";
break;
case "Лондон":
capital = "Великобританії";
break;
default:
capital = "";
}
if (capital === "") {
message += "\nТи живеш у місті " + city + ".";
} else {
message += "\nТи живеш у столиці " + capital + ".";
}
}

if (favoriteSport === null) {
message += "\n" + missingInfo + " улюблений вид спорту";
} else {
switch (favoriteSport) {
case "футбол":
message += "\nКруто! Хочеш стати Ліонелем Мессі?";
break;
case "теніс":
message += "\nКруто! Хочеш стати Рафаелем Надалем?";
break;
case "баскетбол":
message += "\nКруто! Хочеш стати Леброном Джеймсом?";
break;
default:
message += "\nТвій улюблений вид спорту - " + favoriteSport + ".";
}
}

alert(message);





