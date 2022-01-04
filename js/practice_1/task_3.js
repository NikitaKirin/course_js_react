/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const count = personalMovieDB.count;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
        let grade = +prompt('На сколько оцените его?', '');
        console.log(lastFilm);
        if (lastFilm != null && grade != null && lastFilm == '' && lastFilm.length > 50) {
            i--;
            continue;
        }
        personalMovieDB.movies[lastFilm] = grade;
    }
}

function detectPersonalLevel() {
    if (count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (count >= 10 && count <= 30) {
        alert("Вы классический зритель");
    } else if (count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка!");
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let answer = prompt(`Ваш любимый жанр под номером ${i}`);
        if (answer != '' && answer != null) {
            personalMovieDB.genres.push(answer);
        }
    }
}