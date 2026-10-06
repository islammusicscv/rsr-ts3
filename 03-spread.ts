// =====================================================
// TS 3 · 03 Spread in destructuring s tipi
// Preverjanje:  npx.cmd tsc
//
// tsc javi napake v tej datoteki. Popravi kodo tako, da tsc
// za to datoteko ne javi nobene napake. Tipov ne spreminjaj.
// =====================================================

interface Dogodek {
  id: number;
  naslov: string;
  cena: number;
}
interface Vstopnica {
  readonly id: number;
  readonly koda: string;
}

const jazz: Dogodek = { id: 1, naslov: "Jazz večer", cena: 25 };
const dogodki: Dogodek[] = [jazz, { id: 2, naslov: "Opera", cena: 60 }];


// ---------- 1 ----------
// Kopija s ceno 15.
const akcija: Dogodek = { ...jazz, cena: "15" };


// ---------- 2 ----------
// Kopija s ceno 20.
const znizan: Dogodek = { ...jazz, cnea: 20 };


// ---------- 3 ----------
// Vzemi naslov in ceno.
const { ime, cena } = jazz;


// ---------- 4 ----------
// Nov seznam, v katerem ima dogodek z id 2 ceno 50.
const posodobljeni: Dogodek[] = dogodki.map((d) => {
  if (d.id === 2) {
    return { ...d, cena: 50 };
  }
});


// ---------- 5 ----------
// Vstopnica dobi novo kodo. Polja so readonly, zato ustvari NOV objekt.
const vstopnica: Vstopnica = { id: 1, koda: "A1B2" };
vstopnica.koda = "Z9Y8";
const nova: Vstopnica = vstopnica;

console.log(akcija, znizan, ime, cena, posodobljeni, nova);
