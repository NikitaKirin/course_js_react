/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt('Один из последних просмотренных фильмов?', '');
            let grade = +prompt('На сколько оцените его?', '');
            console.log(lastFilm);
            if (lastFilm != null && grade != null && lastFilm == '' && lastFilm.length > 50) {
                i--;
                continue;
            }
            this.movies[lastFilm] = grade;
        }
    },

    detectPersonalLevel() {
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count <= 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка!");
        }
    },

    showMyDB() {
        if (this.privat == false) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            let answer = prompt(`Ваш любимый жанр под номером ${i}`);
            while (answer === '' || answer === null) {
                answer = prompt(`Ваш любимый жанр под номером ${i}`);
            }
            if (answer != '' && answer != null) {
                personalMovieDB.genres.push(answer);
            }
        }

        this.genres.forEach((genre, index) => {
            console.log(`Любимый жанр #${index+1} - это ${genre}`);
        });
    },

    toggleVisibleMyDB() {
        if (this.privat === false) {
            this.privat = true;
        } else {
            this.privat = false;
        }
    }

};

personalMovieDB.writeYourGenres();