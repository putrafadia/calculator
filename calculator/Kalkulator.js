let screen = document.querySelector('.calc-screen');
let numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators');
const clear =  document.getElementById('clear-btn');
const btn_equal = document.getElementById('equal-btn');
const persent = document.getElementById('percent');
let sementara = document.getElementsByClassName('sementara');
const point_sym = document.getElementById('point-symbol')

class Kalkulator{
  constructor(currentVal){
    this.currentVal = currentVal;
    this.preVal = '';
    this.addOper = '';
  }

  inputOperators(operator){
    if (this.addOper === ''){
      this.preVal = this.currentVal;
    }
    this.addOper = operator;
    screen.value = '0';
    sementara[0].innerHTML = `${this.preVal} ${this.addOper}`;
  }

  decimal(decimal){
    if (this.currentVal.includes(decimal))return
    this.currentVal += decimal;
  }

  calculate(){
    let result = ''
    if(this.currentVal == ''){
        this.currentVal = '0'
    }
    switch(this.addOper){
        case '+':
            result = parseFloat(this.preVal) + parseFloat(this.currentVal)
            break
        case '-':
            result = parseFloat(this.preVal) - parseFloat(this.currentVal)
            break
        case 'x':
            result = parseFloat(this.preVal) * parseFloat(this.currentVal)
            break
        case '÷':
            result = parseFloat(this.preVal) / parseFloat(this.currentVal)
            break
        case '%':
            result = parseFloat(this.preVal) / 100
            break
        default:
            result = this.currentVal;
            break
    }
    this.currentVal = result;
    this.addOper = '';
  }

  clearDisplay(){
    this.preVal = '';
    this.addOper = '';
    this.currentVal = '0';
    screen.value = this.currentVal;
    sementara[0].innerHTML = this.currentVal;
  }

  getDsiplay(number){
    this.currentVal = number;
    screen.value = number;
    sementara[0].innerHTML = `${this.preVal} ${this.addOper} ${this.currentVal} =`;
  }

  updateDisplay(){
    screen.value = this.currentVal;
    //sementara[0].innerHTML = this.currentVal;
  }
  
}

const calculator = new Kalkulator(screen.value);

numbers.forEach((number)=>{
  number.addEventListener('click', ()=>{
      if(screen.value =='0'){
          screen.value = number.value
          calculator.getDsiplay(screen.value)
          //calculator.updateDisplay()
      }
      else{
          screen.value += number.value
          calculator.getDsiplay(screen.value)
          calculator.updateDisplay()
      }
  })
})

clear.addEventListener('click', ()=>{
  calculator.clearDisplay()
})

operators.forEach((operator)=>{
  operator.addEventListener('click', ()=>{
      calculator.inputOperators(operator.value)
  })
})

btn_equal.addEventListener('click', ()=>{
    calculator.calculate()
    calculator.updateDisplay()
})

point_sym.addEventListener('click', ()=>{
  calculator.decimal(point_sym.value);
  calculator.updateDisplay()
})