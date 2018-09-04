const n = parseFloat(prompt('Введіть коеффіціент n'));

//Код для обчислення в циклі
function fib(n) {
    let a = 1,
        b = 1;
    for (i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

const message = 'Число ' + n + ' ряду Фібоначчі рівне ' + fib(n);
alert(message);