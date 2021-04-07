const num = 24
const num2 = num **2
console.log(num2)

const num3 = Math.ceil (Math.random()*10) 
console.log (num3)

new Date ().toDateString()//?


const locale = 'ru-Ru'
const options = {

} 
const date = new Intl.DateTimeFormat (locale, options).format() //?


const fibonacci = [1, 1, 2, 3, 5, 8]
const nextFib = fibonacci.concat ([13])
const next = [...nextFib, 21, '']//?
next.every(n => typeof n === 'number')//?
