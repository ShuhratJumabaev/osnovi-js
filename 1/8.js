// Необходимо написать сценарий, определяющий площадь прямоугольного треугольника по заданным катетам (S = ab/2).
// С помощью скрипта вывести в окно браузера инкремент площади.
var a = prompt("Ведите перовое число");
var b = prompt("Ведите второе число");
var square = (a * b) / 2;
alert(square++);
alert(square);
