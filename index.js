// Murat Kocak - 7. sinif tam sayilar icin ornek npm kutuphanesi
// Paket adi: muratkocak4040-tam-sayilar-kutuphanesi

/**
 * Iki tam sayiyi toplar.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function topla(a, b) {
  return a + b;
}

/**
 * Iki tam sayiyi cikarir (a - b).
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function cikar(a, b) {
  return a - b;
}

/**
 * Verilen puana gore seviye etiketi dondurur.
 * 0–19: "baslangic", 20–39: "orta", 40+: "ileri"
 * @param {number} puan
 * @returns {"baslangic"|"orta"|"ileri"}
 */
function seviyeEtiketi(puan) {
  if (puan >= 40) return "ileri";
  if (puan >= 20) return "orta";
  return "baslangic";
}

/**
 * Dogru ve yanlis sayisina gore quiz puani hesaplar.
 * Dogru basina +10, yanlis basina -5 puan verilir.
 * @param {number} dogru
 * @param {number} yanlis
 * @returns {number}
 */
function quizPuani(dogru, yanlis) {
  return dogru * 10 - yanlis * 5;
}

module.exports = {
  topla,
  cikar,
  seviyeEtiketi,
  quizPuani,
};
