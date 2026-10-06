// =====================================================
// TS 3 · 05 Košarica z readonly
// Preverjanje:  npx.cmd tsc
// Zagon:        node 05-kosarica.ts
//
// Košarica je readonly seznam readonly vrstic, zato je tsc ne
// pusti spreminjati.
//
// PRAVILA
//   1. skupaj(k) vrne vsoto cena × kolicina.
//   2. dodaj(k, izdelek) vrne NOVO košarico. Če izdelek z istim id
//      že obstaja, se njegova količina poveča za 1, sicer se doda
//      vrstica s količino 1.
//   3. odstrani(k, id) vrne NOVO košarico brez vrstice s tem id.
//   4. kolicina(k, id) vrne količino izdelka v košarici, ali 0,
//      če ga v košarici ni.
//
// Koda ima 3 napake. Dve ti pokaže tsc, tretjo scenarij.
// Dokler tsc javlja napake, se program pri zagonu lahko zruši.
//
// KONČAL SI, KO tsc za to datoteko ne javi napak in so vsi
// scenariji ✓. Tipov, scenarijev in funkcije preveri ne spreminjaj.
// =====================================================

interface Izdelek {
  readonly id: number;
  readonly naslov: string;
  readonly cena: number;
}
interface Vrstica extends Izdelek {
  readonly kolicina: number;
}
type Kosarica = readonly Vrstica[];


function skupaj(k: Kosarica): number {
  let vsota = 0;
  for (const v of k) {
    vsota = vsota + v.cena * v.kolicina;
  }
  return vsota;
}

function dodaj(k: Kosarica, izdelek: Izdelek): Kosarica {
  const obstaja = k.find((v) => v.id === izdelek.id);
  if (obstaja) {
    obstaja.kolicina = obstaja.kolicina + 1;
    return k;
  }
  return [...k, { ...izdelek, kolicina: 1 }];
}

function odstrani(k: Kosarica, id: number): Kosarica {
  return k.filter((v) => v.id === id);
}

function kolicina(k: Kosarica, id: number): number {
  return k.find((v) => v.id === id).kolicina;
}


// ===== SCENARIJI (ne spreminjaj) =====
function preveri(oznaka: string, dobljeno: unknown, pricakovano: unknown): void {
  const d = JSON.stringify(dobljeno);
  const p = JSON.stringify(pricakovano);
  console.log(`${d === p ? "✓" : "✗"} ${oznaka}: ${d}`);
  if (d !== p) {
    console.log(`    pričakovano: ${p}`);
  }
}

const zacetna: Kosarica = [
  { id: 1, naslov: "Majica", cena: 20, kolicina: 1 },
  { id: 2, naslov: "Kapa", cena: 15, kolicina: 2 },
];
const majica: Izdelek = { id: 1, naslov: "Majica", cena: 20 };
const sal: Izdelek = { id: 3, naslov: "Šal", cena: 10 };

preveri("A skupaj", skupaj(zacetna), 50);
preveri("B dodaj nov", dodaj(zacetna, sal).map((v) => v.naslov), ["Majica", "Kapa", "Šal"]);
preveri("C dodaj obstoječ", dodaj(zacetna, majica).map((v) => v.kolicina), [2, 2]);
preveri("D začetna nespremenjena", zacetna.map((v) => v.kolicina), [1, 2]);
preveri("E odstrani", odstrani(zacetna, 2).map((v) => v.naslov), ["Majica"]);
preveri("F količina kape", kolicina(zacetna, 2), 2);
preveri("G količina šala", kolicina(zacetna, 3), 0);
