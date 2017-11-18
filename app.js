// var calculator = {
// 		sum: 0,
// 		add: function(value) {
//       this.sum += value;
//     },
//     subtract: function() {
//       this.sum -= value;
//     },
//     times: function() {
//       this.sum = this.sum * value;
//     },
//     divide: function() {
//       this.sum = this.sum / value;
//     },
//     clear: function() {
//       this.sum = 0;
//     },
//     equals: function() {
//       return this.sum;
//     },
// }

var elem = document.getElementById('entry');

console.log(elem);

function numberEntry(number) {
  h1.innerHTML += number;
}

var number1 = document.getElementById("one");

number1.addEventListener("click", function() {
  console.log(number1.innerHTML);
  numberEntry(number1.innerHTML);
});
