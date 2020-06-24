let calculator = {
    add :  function(x, y) {
        return this.isFloat(x + y);
    },    
    subtract : function(x, y) {
        return this.isFloat(x - y);
    },
    multiply : function(x, y) {
        return this.isFloat(x * y);
    },
    divide : function(x, y) {
        return this.isFloat(x / y);
    },
    isFloat : function(x) {
        if (x % 1 === 0) {
            return x;
        }
        return x.toFixed(4);
    },
    operate : function(operator, x, y) {
        switch (operator) {
            case '+':
                this.add(x, y);                
                break;
            case '-':
                this.subtract(x, y);                
                break;
            case '*':
                this.multiply(x, y);                
                break;
            case '/':
                this.divide(x, y);                
                break;
        }
    }
}

let keypad = document.getElementById('keypad');
let display = document.getElementById('display');
keypad.addEventListener('click', function(event) {
    let key = event.target;
    if (key.classList.value === 'key input') {
        display.textContent += key.textContent;
    } else if (key.classList.value == 'key') {
        display.style.background = 'black';
    } else if (key.classList.value == 'key clear') {
        display.textContent = '';
    } else if (key.classList.value == 'key =') {
        let res = eval(`${display.textContent}`);
        console.log(res);
        display.textContent = res;
    }
})
