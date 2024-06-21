"use strict";
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.
// Kodu buraya yazalım...
const ages = []; /* 1 */
const ages1 = []; /* 2 */
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.
// Kodu buraya yazalım...
const gameBoard = [];
const size = 2;
for (let satir = 0; satir < size; satir++) {
    let row = [];
    for (let sutun = 0; sutun <= size; sutun++) {
        row.push("2,3,2,4,5");
    }
    gameBoard.push(row);
}
console.log(gameBoard);
let product = {
    name: "ice Caramel Frappe",
    price: 150
};
console.log(product);
// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.
// Kodu buraya yazalım...
function getTotal(products) {
    let totalPrice = 0;
    for (let product of products) {
        totalPrice += product.price;
    }
    return totalPrice;
}
// Örnek bir ürün array'i oluştur
let products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 50 }
];
// Ürünlerin toplam fiyatı
console.log("Toplam Fiyat:", getTotal(products));
