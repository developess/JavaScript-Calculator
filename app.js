var calculator = {
		sum: 0,
            storedFunction: "",
		add: function(value) {
      this.sum += value;
    },
    subtract: function(value) {
      this.sum -= value;
    },
    times: function(value) {
      this.sum = this.sum * value;
    },
    divide: function(value) {
      this.sum = this.sum / value;
    },
    clear: function() {
      this.sum = 0;
    },
    equals: function() {
      return this.sum;
    }
}

var display = "";

function print(num) {
  document.getElementById('entry').innerHTML = display;
}

// Number Buttons

document.getElementById("one").addEventListener("click",() => {
      display += 1;
      print();
});

document.getElementById("two").addEventListener("click",() => {
      display += 2;
      print();
});

document.getElementById("three").addEventListener("click",() => {
      display += 3;
      print();
});

document.getElementById("four").addEventListener("click",() => {
      display += 4;
      print();
});

document.getElementById("five").addEventListener("click",() => {
      display += 5;
      print();
});

document.getElementById("six").addEventListener("click",() => {
      display += 6;
      print();
});

document.getElementById("seven").addEventListener("click",() => {
      display += 7;
      print();
});

document.getElementById("eight").addEventListener("click",() => {
      display += 8;
      print();
});

document.getElementById("nine").addEventListener("click",() => {
      display += 9;
      print();
});

document.getElementById("zero").addEventListener("click",() => {
      display += 0;
      print();
});

// function buttons

document.getElementById("add").addEventListener("click",() => {
    calculator.sum = parseInt(display);
    calculator.storedFunction = "add";
    display = "";
    print();
});

document.getElementById("subtract").addEventListener("click",() => {
    calculator.sum = parseInt(display);
    calculator.storedFunction = "subtract";
    display = "";
    print();
});

document.getElementById("times").addEventListener("click",() => {
    calculator.sum = parseInt(display);
    calculator.storedFunction = "times";
    display = "";
    print();
});

document.getElementById("divide").addEventListener("click",() => {
    calculator.sum = parseInt(display);
    calculator.storedFunction = "divide";
    display = "";
    print();
});

document.getElementById("clear").addEventListener("click",() => {
    calculator.sum = 0;
    calculator.storedFunction = "";
    display = "";
    print();
});

document.getElementById("equals").addEventListener("click",() => {
    calculator[calculator.storedFunction](parseInt(display));
    display = calculator.sum;
    print();
    display = "";
});
