"use strict";
// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// "highScore" isminde bir değişken oluşturalım. Bu değişken, bir sayı veya
// boolean değer alabilsin.
let highScore;
// Kodu buraya yazalım...
// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "stuff" isminde boş bir array oluşturalım. Bu array, sayılardan veya stringlerden
// oluşabilsin. Ancak sayılar ve string'ler bu array'in içinde bir arada olamasın. 
// Yani ya sayı array'i olabilsin, ya da string array'i olabilsin.
// Kodu buraya yazalım...
let stuff = [];
// sayılar için StuffArray oluşturalım
let numberStuff = [];
numberStuff = [1, 2, 3];
console.log("Sayılar:", numberStuff);
// stringler için StuffArray oluşturalım
let stringStuff = [];
stringStuff = ["apple", "banana", "cherry"];
console.log("Meyveler:", stringStuff);
// **********************************************
// ******************* BÖLÜM 5 ******************
// **********************************************
// RGB renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - r bir numara olsun
// - g bir numara olsun
// - b bir numara olsun
// Kodu buraya yazalım...
// HSL renklerini temsil eden bir tür oluşturalım. Bu tür, aşağıdaki özelliklere sahip
// olsun:
// - h bir numara olsun
// - s bir numara olsun
// - l bir numara olsun
// Kodu buraya yazalım...
// "colors" isminde boş bir array oluşturalım. Bu array, yukarıda oluşturduğumuz iki 
// türden oluşabilsin. Yani bu array'in içinde hem RGB renkler, hem de HSL renkler 
// bulunabilsin.
// Kodu buraya yazalım...
// **********************************************
// ******************* BÖLÜM 6 ******************
// **********************************************
// "greet" isminde bir fonksiyon oluşturalım. Bu fonksiyon, parametre olarak:
// - string
// veya
// - string'lerden oluşan array
// alabilsin. Eğer fonksiyona bir string girilirse (isim string'i), fonksiyon bu
// string için "Merhaba, İSİM" şeklinde bir string yazdırsın. Eğer fonksiyona bir
// array girilirse, fonksiyon bu array'in her bir string elemanı için ayrı ayrı
// "Merhaba, İSİM" şeklinde bir string yazdırsın.
// Kodu buraya yazalım...
function greet(name) {
    if (typeof name === "string") {
        return console.log(`Merhaba ${name}`);
    }
    else if (Array.isArray(name)) {
        const greeting = name.map(name => {
            console.log(`Merhaba ${name}`);
        });
        console.log(greeting.join(" "));
    }
    else {
        console.log("geçersiz oldu");
    }
}
greet("beyza");
greet(["beyza", "sfdkfs"]);
