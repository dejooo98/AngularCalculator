import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentNumber = '0';
  firstOperand = null;
  operator = null;
  waitForSecondNumber = false;

  constructor() {}

  ngOnInit(): void {}

  getNumber(value: string) {
    console.log(value);

    if (this.waitForSecondNumber) {
      this.currentNumber = value;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === '0'
        ? (this.currentNumber = value)
        : (this.currentNumber += value);
    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  doCalculation(operation: any, secondOperand: any) {
    switch (operation) {
      case '+':
        return (this.firstOperand += secondOperand);
      case '-':
        return (this.firstOperand -= secondOperand);
      case '*':
        return (this.firstOperand *= secondOperand);
      case '/':
        return (this.firstOperand /= secondOperand);
      case '=':
        return secondOperand;
    }
  }

  getOperation(operation: any) {
    console.log(operation);

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(
        this.operator,
        Number(this.currentNumber)
      );
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = operation;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

  clearAll() {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
