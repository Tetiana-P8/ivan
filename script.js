'use strict';


// alert('hello');

// const result = confirm('Are you here?');

// console.log(result);

// const answer = prompt('Вам есть 18?', '');

// console.log(answer);
 
// let age = prompt('Сколько тебе лет?', '');

// alert(`Тебе ${age} лет!`);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
	count: numberOfFilms,
	movies : {},
	actors : {},
	genres: [],
	ptivat: false
};

const lastOfFilms = prompt('Один из последних просмотренных фильмов?'),
	starOfFilms = +prompt('На сколько оцените его?'),
	lastOfFilms2 = prompt('Один из последних просмотренных фильмов?'),
	starOfFilms2 = +prompt('На сколько оцените его?');




personalMovieDB.movies[lastOfFilms] = starOfFilms;
personalMovieDB.movies[lastOfFilms2] = starOfFilms2;


console.log(personalMovieDB);