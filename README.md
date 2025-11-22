# muratkocak4040-tam-sayilar-kutuphanesi

7. sınıf tam sayılar konusu için hazırlanmış basit bir JavaScript kütüphanesi. 
Toplama/çıkarma, quiz puanı ve seviye etiketi hesaplamak için yardımcı fonksiyonlar içerir.

## Kurulum

```bash
npm install muratkocak4040-tam-sayilar-kutuphanesi
```

## Kullanım

```js
const {
  topla,
  cikar,
  seviyeEtiketi,
  quizPuani,
} = require("muratkocak4040-tam-sayilar-kutuphanesi");

console.log(topla(3, 4));            // 7
console.log(cikar(10, 7));           // 3
console.log(seviyeEtiketi(35));      // "orta"
console.log(quizPuani(5, 2));        // 5 * 10 - 2 * 5 = 40
```

## API

- `topla(a, b)` – iki tam sayının toplamını döndürür.
- `cikar(a, b)` – iki tam sayının farkını döndürür (a - b).
- `seviyeEtiketi(puan)` – puana göre `"baslangic" | "orta" | "ileri"` döndürür.
- `quizPuani(dogru, yanlis)` – her doğruya +10, her yanlışa -5 puan vererek toplam puanı hesaplar.
