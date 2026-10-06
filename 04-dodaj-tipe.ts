// =====================================================
// TS 3 · 04 Dodaj tipe funkcijam nad seznami
// Preverjanje:  npx.cmd tsc
//
// Dodaj tipe parametrom in tip vrnjene vrednosti. Ne uporabljaj any.
//
// Vrstice pod // @ts-expect-error so namerno napačne in morajo
// to ostati. Na začetku (dokler tipov ni) tsc pri njih javi
// "Unused '@ts-expect-error' directive". Ko napišeš prave tipe,
// ta sporočila izginejo. Kode pod funkcijami ne spreminjaj.
// =====================================================

interface Dogodek {
  id: number;
  naslov: string;
  cena: number;
}


// ---------- 1 ----------
// Dobi seznam dogodkov in id (število). Vrne najden dogodek ali undefined.
function najdi(seznam, id) {
  return seznam.find((d) => d.id === id);
}


// ---------- 2 ----------
// Dobi seznam dogodkov. Vrne seznam naslovov.
function naslovi(seznam) {
  return seznam.map((d) => d.naslov);
}


// ---------- 3 ----------
// Dobi seznam, ki se ga NE SME spremeniti, id in novo ceno (število).
// Vrne nov seznam, v katerem ima dogodek s tem id novo ceno.
function posodobiCeno(seznam, id, cena) {
  return seznam.map((d) => {
    if (d.id === id) {
      return { ...d, cena: cena };
    }
    return d;
  });
}


// ===== KLICI (ne spreminjaj) =====
const dogodki: Dogodek[] = [{ id: 1, naslov: "Jazz večer", cena: 25 }];

const najden: Dogodek | undefined = najdi(dogodki, 1);
// @ts-expect-error id mora biti število
najdi(dogodki, "1");
// @ts-expect-error rezultat je lahko undefined
const zagotovo: Dogodek = najdi(dogodki, 1);

const imena: string[] = naslovi(dogodki);
// @ts-expect-error naslovi so besedilo
const stevila: number[] = naslovi(dogodki);

const novi: Dogodek[] = posodobiCeno(dogodki, 1, 30);
// @ts-expect-error cena mora biti število
posodobiCeno(dogodki, 1, "30");

console.log(najden, zagotovo, imena, stevila, novi);
