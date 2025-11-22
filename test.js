const { topla, cikar, seviyeEtiketi, quizPuani } = require("./index");

console.log("3 + 4 =", topla(3, 4));
console.log("10 - 7 =", cikar(10, 7));
console.log("Puan 35 seviye:", seviyeEtiketi(35));
console.log("5 dogru, 2 yanlis puan:", quizPuani(5, 2));
