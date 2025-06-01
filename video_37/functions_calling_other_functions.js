function cutFruitPieces(fruit){
    return fruit *4
}
function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    const juice =  `juice with  ${apples} apples and ${applePieces} Pieces, ${oranges} oranges and ${orangePieces} Pieces` 
    return juice
    
}
console.log(fruitProcessor(2,3))
