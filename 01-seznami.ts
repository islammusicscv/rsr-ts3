// =====================================================
// TS 3 · 01 Seznami s tipi
// Preverjanje:  npx.cmd tsc
//
//   Dogodek[]   seznam dogodkov
//   find(…)     vrne Dogodek | undefined (morda ga ni našel)
//
// tsc javi napake v tej datoteki. Popravi kodo tako, da tsc
// za to datoteko ne javi nobene napake. Tipov ne spreminjaj
// in ne uporabljaj any.
// =====================================================

interface Dogodek {
  id: number;
  naslov: string;
  cena: number;
  prostaMesta: number;
}


// ---------- 1 ----------
// Opera ima 2 prosti mesti.
const dogodki: Dogodek[] = [
  { id: 1, naslov: "Jazz večer", cena: 25, prostaMesta: 10 },
  { id: 2, naslov: "Opera", cena: 60 },
];


// ---------- 2 ----------
// Seznam naslovov.
const naslovi: string[] = dogodki.map((d) => d.cena);


// ---------- 3 ----------
// Id pride iz naslova strani (URL), zato je besedilo.
const idIzUrl: string = "2";
const izbran = dogodki.find((d) => d.id === idIzUrl);


// ---------- 4 ----------
// Če dogodka ni, izpiši "Ni najdeno".
const iskani = dogodki.find((d) => d.id === 7);
console.log("4:", iskani.naslov);


// ---------- 5 ----------
// Seštej vse cene.
let vsota: number = 0;
for (const d of dogodki) {
  vsota = vsota + d.naslov;
}

console.log(naslovi, izbran, vsota);
