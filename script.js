//CIKLAI

// console.log('- ' + 1)
// console.log('- ' + 2)
// console.log('- ' + 3)
// console.log('- ' + 4)
// console.log('- ' + 5)
// console.log('- ' + 6)
// console.log('- ' + 7)
// console.log('- ' + 8)
// console.log('- ' + 9)
// console.log('- ' + 10)
// console.log('- ' + 11)
// console.log('- ' + 12)
// console.log('- ' + 13)
// console.log('- ' + 14)
// console.log('- ' + 15)
// console.log('- ' + 16)
// console.log('- ' + 17)
// console.log('- ' + 18)
// console.log('- ' + 19)
// console.log('- ' + 20)

function count(num) {
    console.log('- ' + num + ' !!!')
  }
  
  // count(1)
  // count(2)
  // count(3)
  // count(4)
  // count(5)
  // count(6)
  // count(7)
  // count(8)
  // count(9)
  // count(10)
  // count(11)
  // count(12)
  // count(13)
  // count(14)
  // count(15)
  // count(16)
  // count(17)
  // count(18)
  // count(19)
  // count(20)
  

//FOR CIKLAS (LOOP)
//1. Iniciavimo žodelis - cikle yra 'for'

//2. Paprasti skliaustai - ()
    //2.1. Sukuriamas kintamasis (dažniausiai jo pavadinimas yra 'i')
    //2.2. Sąlyga (if)
    //2.3. Kintamojo vertės pakeitimas

//3. Riestiniai skliaustai - {}

/* 

for (kintamasis; salyga; kintamojo keitimas) {

}

*/

// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 20; i++) {
//   count(i)
// }

// TASK No 1
// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.

// function task1(){
//     for (let i = 1; i <= 100; i++)
//     console.log(i)
// }
// task1()

function multiply2 (start = 1, end = 100, nth = 1){
    for (let i = start; i <= end; i += nth) {
    let output = i * 2
    console.log(output)
    }
}
multiply2(35, 140, 5)

function multiply5 (){
    for (let i = 1; i <= 100; i++) {
    let output = i * 5
    console.log(output)
    }
}
// multiply5()

function sudetis (number){
    for (let i = 1; i <= 100; i++) {
        let output = i + number
        console.log(output)
    }
}
// sudetis(5)

function atimtis (number) {
    for (let i = 1; i <= 100; i++) {
        let output = i - number
        console.log(output)
    }
}
// atimtis(2)

function kvadratu () {
    for (let i = 1; i <= 100; i++) {
        let output = i * i
        console.log(output)
    }
}
// kvadratu()

function kubu () {
    for (let i = 1; i <= 100; i++) {
        // let output = i * i * i
        // let output = Math.pow(i, 3)
        let output = i**3 // **3 reiskia - pakelta treciuoju laipsniu
        console.log(output)
    }
}
// kubu()

// 7. Sukurti analogiškas funkcijas pirmoms užduotims, tačiau padaryti, jog ciklai skaičiuotųsi nuo 100 iki 1.

function multiply2 (){
    for (let i = 100; i >= 1; i--) {
    let output = i * 2
    console.log(output)
    }
}
// multiply2()

function multiply5 (){
    for (let i = 100; i >= 1; i--) {
    let output = i * 5
    console.log(output)
    }
}
// multiply5()

function sudetis (){
    for (let i = 100; i >= 1; i--) {
        let output = i + 5
        console.log(output)
    }
}
// sudetis()

function atimtis () {
    for (let i = 100; i >= 1; i--) {
        let output = i - 2
        console.log(output)
    }
}
// atimtis()

function kvadratu () {
    for (let i = 100; i >= 1; i--) {
        let output = i * i
        console.log(output)
    }
}
// kvadratu()

// function kubu () {
//     for (let i = 100; i >= 1; i--) {
//         let output = i * i * i
//         console.log(output)
//     }
// }
// kubu()

// 8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

function multiply2 (number){
    for (let i = 1; i <= 100; i++) {
    let result = i * number
    let output = `${i} * ${number} = ${result}`
    console.log(output)
    }
}
// multiply2(2)

function multiply5 (number){
    for (let i = 1; i <= 100; i++) {
    let result = i * number
    let output = `${i} * ${number} = ${result}`
    console.log(output)
    }
}
// multiply5(5)

function sudetis (number){
    for (let i = 1; i <= 100; i++) {
        let result = i + number
        let output = `${i} + ${number} = ${result}`
        console.log(output)
    }
}
// sudetis(5)

function atimtis (number) {
    for (let i = 1; i <= 100; i++) {
        let result = i - number
        let output = `${i} - ${number} = ${result}`
        console.log(output)
    }
}
// atimtis(2)

function kvadratu () {
    for (let i = 1; i <= 100; i++) {
        let result = Math.pow(i, 2)
        let output = `${i} * ${i} = ${result}`
        console.log(output)
    }
}
// kvadratu()

function kubu () {
    for (let i = 1; i <= 100; i++) {
        let result = Math.pow(i, 3)
        let output = `${i} * ${i} * ${i} = ${result}`
        console.log(output)
    }
}
// kubu()


// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:

// 9.1. Nusakytų nuo kokio skaičiaus prasidės ciklas.

// 9.2. Nusakytų iki kokio skaičiaus veiks ciklas.

// 9.3. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę.
