// =====================================================
// TS 3 · 06 Poročilo o dogodkih
// Preverjanje:  npx.cmd tsc
// Zagon:        node 06-porocilo.ts
//
// PRAVILA za funkcijo porocilo(seznam)
//   1. V poročilu so samo dogodki s prostimi mesti.
//   2. Razvrščeni so po ceni naraščajoče, pri enaki ceni po naslovu
//      (slovenska abeceda).
//   3. Vsaka vrstica ima obliko "naslov – cena €".
//   4. Seznama, ki ga funkcija dobi, ne sme spremeniti (readonly).
//
// Koda ima 3 napake. Dve ti pokaže tsc, tretjo scenarij.
// Pozor: dokler je prva napaka tsc tam, tsc druge ne vidi. Ko
// popraviš eno, se lahko pokaže naslednja.
//
// KONČAL SI, KO tsc za to datoteko ne javi napak in so vsi
// scenariji ✓. Podatkov, scenarijev in funkcije preveri ne spreminjaj.
// =====================================================

interface Dogodek {
  naslov: string;
  cena: number;
  prostaMesta: number;
}

function porocilo(seznam: readonly Dogodek[]): string[] {
  return seznam
    .sort((a, b) => {
      if (a.cena !== b.cena) {
        return a.cena - b.cena;
      }
      return a.naslov > b.naslov;
    })
    .filter((d) => d.prostaMesta >= 0)
    .map((d) => `${d.naslov} – ${d.cena} €`);
}


// ===== SCENARIJI (ne spreminjaj) =====
function preveri(oznaka: string, dobljeno: string[], pricakovano: string[]): void {
  const d = JSON.stringify(dobljeno);
  const p = JSON.stringify(pricakovano);
  console.log(`${d === p ? "✓" : "✗"} ${oznaka}`);
  if (d !== p) {
    console.log(`    dobljeno:    ${d}`);
    console.log(`    pričakovano: ${p}`);
  }
}

const dogodki: readonly Dogodek[] = [
  { naslov: "Jazz večer", cena: 25, prostaMesta: 10 },
  { naslov: "Rock koncert", cena: 40, prostaMesta: 0 },
  { naslov: "Stand-up", cena: 15, prostaMesta: 5 },
  { naslov: "Opera", cena: 60, prostaMesta: 2 },
  { naslov: "Čarovniški šov", cena: 15, prostaMesta: 4 },
];

preveri("A vsi dogodki", porocilo(dogodki), [
  "Čarovniški šov – 15 €",
  "Stand-up – 15 €",
  "Jazz večer – 25 €",
  "Opera – 60 €",
]);
preveri("B izvirnik nespremenjen", dogodki.map((d) => d.naslov), [
  "Jazz večer", "Rock koncert", "Stand-up", "Opera", "Čarovniški šov",
]);
preveri("C vse razprodano", porocilo([dogodki[1]]), []);
