let yearOfBirth = prompt('Введіть рік свого народження:');
let city = prompt('В якому місті ви живете?');
let favoriteSport = prompt('Який Ваш улюблений вид спорту?');

let missingInfo = 'Шкода, що ви не захотіли ввести свій(ю)';
let infoSport = 'Круто! Хочеш стати';
let didNotSay = 'Ви забули вказати';

let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;

let message;

switch(yearOfBirth){
    case null:
        message = `${missingInfo} рік свого народження`;
    break;
    case '':
        message = `${didNotSay} рік свого народження`;
    break;
    default:
        message = `Вам ${age} років.`;
    break 
}

if (city === null) {
    message += '\n' + `${missingInfo} місто.`;
} else {
    getCity(city);
}

if (favoriteSport === null) {
    message += '\n' + `${missingInfo} улюблений вид спорту`;
} else {
    getfavoriteSport(favoriteSport);

}

alert(message);

function getCity(city){
    switch (city) {
        case 'Київ':
        case 'Вашингтон':
        case 'Лондон':
            return message += '\n' + `Ти живеш у столиці  ${getCountryCapital(city)}.`;
        case '':
            return message += '\n' + `${didNotSay} в якому місті ви живете`; 
        default:
            return message += '\n' + `Ти живеш у місті ${city}.`;
    }
}

function getCountryCapital(city) {
    switch (city) {
        case 'Київ':
            return 'України';
        case 'Вашингтон':
            return 'США';
        case 'Лондон':
            return 'Великобританії';
    }
}

function getfavoriteSport(favoriteSport){
    switch (favoriteSport) {
        case 'футбол':
            return message += '\n' + `${infoSport} Ліонелем Мессі?`;
        case 'бокс':
            return message += '\n' + `${infoSport} Александром Усиком?`;
        case 'баскетбол':
            return message += '\n' + `${infoSport} Леброном Джеймсом?`;
        case '':
            return message += '\n' + `${didNotSay} ваш улюблений вид спорту`; 
        default:
            return message += '\n' + `Твій улюблений вид спорту - ${favoriteSport}.`;        
    }
}
