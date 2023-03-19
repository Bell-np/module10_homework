let x = prompt();

if(typeof(+x) == 'number' && !isNaN(x)){
    alert(`${x} — число`);
}
else if (typeof(x) == 'string') {
    alert(`${x} — строка`);
}
else if (typeof(x) == 'boolean') {
    alert(`${x} — логическое значение`);
}
else{
    alert('Тип x не определён');
}