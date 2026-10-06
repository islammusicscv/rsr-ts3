// =====================================================
// TS 3 · 02 Razvrščanje in readonly
// Preverjanje:  npx.cmd tsc
//
//   readonly Dogodek[]   seznama ni mogoče spremeniti
//                        (ni push, sort, splice …)
//   toSorted(fn)         vrne razvrščeno KOPIJO
//
// tsc javi napake v tej datoteki. Popravi kodo tako, da tsc
// za to datoteko ne javi nobene napake. Tipov ne spreminjaj.
// =====================================================

interface Dogodek {
  naslov: string;
  cena: number;
}

const izvirnik: readonly Dogodek[] = [
  { naslov: "Rock koncert", cena: 40 },
  { naslov: "Jazz večer", cena: 25 },
  { naslov: "Čarovniški šov", cena: 15 },
];


// ---------- 1 ----------
// Kopija, razvrščena po ceni naraščajoče.
const poCeni = izvirnik.toSorted((a, b) => a.cena > b.cena);


// ---------- 2 ----------
// Kopija, razvrščena po ceni padajoče. Izvirnik ostane.
const poCeniPadajoce = izvirnik.sort((a, b) => b.cena - a.cena);


// ---------- 3 ----------
// Nov seznam z dodanim dogodkom. Izvirnik ostane.
const opera: Dogodek = { naslov: "Opera", cena: 60 };
izvirnik.push(opera);
const zOpero: readonly Dogodek[] = izvirnik;


// ---------- 4 ----------
// Kopija, razvrščena po naslovu (slovenska abeceda).
const poNaslovu = izvirnik.toSorted((a, b) => a.naslov - b.naslov);


// ---------- 5 ----------
// Seznam NASLOVOV, razvrščen po ceni.
const nasloviPoCeni: string[] = izvirnik.toSorted((a, b) => a.cena - b.cena);

console.log(poCeni, poCeniPadajoce, zOpero, poNaslovu, nasloviPoCeni);
