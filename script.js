//CIKLAI

// function count () {}

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// console.log(11)
// console.log(12)
// console.log(13)
// console.log(14)
// console.log(15)





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

// for (let i = 1; i <= 15; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 15; i++) {
//     console.log(i)
// }


// TASK No 1
// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.

function task1(){
    for (let i = 1; i <= 100; i++)
    console.log(i)
}
task1()

function multiply2 (){
    for (let i = 1; i <= 100; i++) {
    let output = i * 2
    console.log(output)
    }
}
multiply2()

function multiply5 (){
    for (let i = 1; i <= 100; i++) {
    let output = i * 5
    console.log(output)
    }
}
multiply5()

function sudetis (number){
    for (let i = 1; i <= 100; i++) {
        let output = i + number
        console.log(output)
    }
}
sudetis(5)

function atimtis (number) {
    for (let i = 1; i <= 100; i++) {
        let output = i - number
        console.log(output)
    }
}
atimtis(2)

function kvadratu () {
    for (let i = 1; i <= 100; i++) {
        let output = i * i
        console.log(output)
    }
}
kvadratu()

function kubu () {
    for (let i = 1; i <= 100; i++) {
        let output = i * i * i
        console.log(output)
    }
}
kubu()