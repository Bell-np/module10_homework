let a = prompt('Введите число');

a = +a;


if (a % 2 === 0) {
    alert("четное");

}
else if (a % 1 === 0) {
    alert("нечетное");

}
else if (typeof(a) === NaN) {
    alert("Упс, это не число");
}
else {
    alert("Упс, кажется вы ошиблись");
}



