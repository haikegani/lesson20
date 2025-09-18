// main.js

// #1 Об'єкт користувача
const userObj = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

// #3 Функція перетворення рядка у верхній регістр
function defUpperStr(str) {
  return (str || 'default text').toUpperCase()
}

// #4 Функція для парних чисел
function evenFn(n) {
  const res = []
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) res.push(i)
  }
  return res
}

// #5 Функція повернення дня тижня
function weekFn(n) {
  if (!Number.isInteger(n)) return null
  switch (n) {
    case 1: return 'Понеділок'
    case 2: return 'Вівторок'
    case 3: return 'Середа'
    case 4: return 'Четвер'
    case 5: return 'П\'ятниця'
    case 6: return 'Субота'
    case 7: return 'Неділя'
    default: return null
  }
}

// #6 Класифікація віку
function ageClassification(n) {
  return n < 0 ? null :
         n <= 24 ? 'Дитинство' :
         n <= 44 ? 'Молодість' :
         n <= 65 ? 'Зрілість' :
         n <= 75 ? 'Старість' :
         n <= 90 ? 'Довголіття' :
         n <= 122 ? 'Рекорд' :
         null
}

// #7 Функція для непарних чисел
function oddFn(n) {
  const res = []
  let i = 1
  while (i <= n) {
    if (i % 2 !== 0) res.push(i)
    i++
  }
  return res
}

// #8 Основна функція для callback
function mainFunc(a, b, cb) {
  return typeof cb === 'function' ? cb(a, b) : false
}

// Callback функції
function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function cbPow(num, pow) {
  return Math.pow(num, pow)
}

function cbAdd(a, b) {
  return a + b
}

// Експорт функцій для тестів
export {
  userObj,
  defUpperStr,
  evenFn,
  weekFn,
  ageClassification,
  oddFn,
  mainFunc,
  cbRandom,
  cbPow,
  cbAdd
}
