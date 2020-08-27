'use strict';

1) Переписать функцию-конструктор MyArray на классы. Дописать методы shift, unshift.

class MyArray {
  length = 0;

  constructor(...args) {
    for (let i = 0; i < args.length; i++) {
      this[i] = args[i];
      this.length++;
    }
  }
  
  push(...items) {
  	for (let i = 0; i < items.length; i++) {
    	this[this.length++] = items[i];
    }
    return this.length;
  }
  
  pop() {
  	let lastItem = this[this.length - 1];
    delete this[this.length - 1];
		this.length--;
    return lastItem;
  }
  
  forEach(callback) {
  	for (let i = 0; i < this.length; i++) {
    	callback(this[i], i);
    }
  }
  
  shift() {
  	let i = 0,
    		firstElement = this[0];
    for (i; i < this.length-1; i++) {
    	this[i] = this[i+1]
    }
    delete this[i];
    this.length = i;
    return firstElement;
  }
  
  unshift(...items) {
		if (items.length) {
      let argsLength = items.length;
      this.length = argsLength + this.length;
      for (let i = this.length - 1; i > argsLength - 1; i--) {
        this[i] = this[i-argsLength];
      }
      for (let i = 0; i < argsLength; i++) {
        this[i] = items[i];
      }
    }
    return this.length;
  }
}



2) Реализовать класс RangeValidator, со следующими свойствами:
    ■  from (number);
    ■  to (number);
Реализовать getter'ы и setter'ы для обоих свойств
Реализовать getter range, который будет возвращать массив с двумя числами диапазона
Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон.

class RangeValidator {

  set from(value) {
    this._from = value;
  }

  get from() {
    return this._from;
  }

  set to(value) {
    this._to = value;
  }

  get to() {
    return this._to;
  }

  get range() {
    return [this._from, this._to];
  }

  validate(num) {
    return num >= this._from && num <= this._to;
  }
}

const test = new RangeValidator();
test.from = 0;
test.to = 10;
console.log(test.validate(12));
console.log(test.validate(26));
console.log(test.validate(7));
console.log(test.validate(0));



//Задачи по массивам

3. Сделайте функцию, которая определяет, есть в массиве заданный элемент или нет.

function mySearch(needle, array) {
  for (let i = 0; i < array.length; i++) {
    if (needle === array[i]) {
      return true;
    }
}
}

4. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

function processNum(input) {
  console.log('Check input');
  let stringNum = input.toString();
  if (input > 9) {
    let i = 0,
        sum = 0;
    for (i; i < stringNum.length; i++) {
      sum += parseInt(stringNum[i]);
    }
    console.log(`Sum is ${sum}`);
    processNum(sum);
    return;
  }
  console.log(`Result is ${input}`);
  return;
}

5.  Напишите функцию, которая возвращает массив состоящий только из уникальных элементов из каждого массива


function arrUnique(arr) {
  return [...new Set(arr)];
}

