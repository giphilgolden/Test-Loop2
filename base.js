let LoopOne = document.querySelector("#Loop-One")
let LoopTwo = document.querySelector("#Loop-Two")
let LoopOneHtml = LoopOne.innerHTML
let ArrayOne = [1,13,44,55,11,55,66]
let ArrayTwo = document.querySelector("#Array-Two")
let NewArray = []
let ArrayAnswer = document.querySelector("#Array-Answer")
let LoopThree = document.querySelector("#Loop-Three")
let ArrayThree = document.querySelector("#Array-Three")

for (let index = 1; index < 10; index++) {
    LoopOne.innerHTML += index
}

// for (let index = 0; index < ArrayOne.length ; index++) {
//     LoopTwo.innerHTML += ArrayOne[index] + " "
// }

for (let index = 0; index < ArrayOne.length ; index++) {
    if(index < ArrayOne.length - 1){
        LoopTwo.innerHTML += ArrayOne[index] + ","
    } else {
        LoopTwo.innerHTML += ArrayOne[index] + ""
    }
}

if(ArrayTwo.innerHTML === LoopTwo.innerHTML) {
    ArrayAnswer.innerHTML = "Yes!!!"
} else {
    ArrayAnswer.innerHTML = "No :("
}

function ThirdLoop(x,y){
    return x + " " + y + " "
} 

LoopThree.innerHTML += ThirdLoop(1,2)
LoopThree.innerHTML += ThirdLoop(2,3)
LoopThree.innerHTML += ThirdLoop(3,4)
LoopThree.innerHTML += ThirdLoop(4,5)

function ThirdLoop2(x,y){
    NewArray.push(x)
    NewArray.push(y)
}

ThirdLoop2(1,2)
ThirdLoop2(2,3)
ThirdLoop2(3,4)
ThirdLoop2(4,5)

for (let index = 0; index <= LoopThree.innerHTML.length; index++){
console.log(index)
}

ArrayThree.innerHTML = NewArray