**Tema :** Finansinių intrumentų algoritminės prekybos sistemos terminalas <br>
**Studento vardas, pavardė, grupė, parašas:** Eivanas Maksvytis, INI s 17 -1<br>
**Pateikta github:** https://github.com/emakeiv/infra_pvb_front

#### 1. Formos (Panaudoti 7 rūšių vizualūs elementai)
  1) **Charts** -  grafikai (porftolio_operations_chart.jsx)
  2) **Tables** - alokacijos ir parametrai (alloc_table.jsx, metric_table.jsx)
  3) **Forms** - vartotojo profilis, prisijungimas (profile.jsx, login.jsx)
  4) **Modals** - pranešimai (modal.jsx)
  5) **Navigation** - navigacijos instrumentai (TopNavbar.jsx, SideNavBar.jsx)
  6) **Cards** - metrikos korteles (metrics.jsx)
  7) **Buttons** - grafiko raiškos mygtukai (granularity_toolbar.jsx)

#### 2. Struktūra
  1) **Tenkina standartą** -  ❌ (w3c validator)
  2) **Semantiniai segmentai** - atlikta su skyriais ir semantiniais komponentais
  3) **Valdymo meniu** - veikiantys naršymo meniu per React Router.

#### 3. Failai
  1) **Du tarpusavyje susieti failai** - naudoju React puslapius ir komponentus.
  2) **Vieno puslapio svetainė sudaryta iš kelių loginių dalių susietų nuorodų** - SPA kuriame **React Router** jungia loginius puslapius.
  3) **Projektas suskirstytas logiškais pakatalogiais** - katalogai (components, pages, data)
  4) 
#### 4. Lentelė
  1) Duomenys pateikiami lentelėse (alloc_table.jsx, metric_table.jsx)
  
#### 5. Paveiksliukai
   1) **Išoriniai** -❌
   2) **Vietiniai** - login.jsx
   3) **Vartotojo ikelta** - profile.jsx (TODO)
   4) **Fiksuotas dydis** - login.jsx
   5) **Adaptuojamas dydis**
   6) **Semantinis surišamas su aprašu** - login.jsx

#### 6. CSS 
  **Parinkikliai (selectors):**
  1) **tag** - login.css
  2) **class** - .metric-card, .text-success, t.t
  3) **id** - alloc_table.css , chart.css
  4) **pseudo** - (:hover) alloc_table.css :hover
  5) **attribute** - (::after) alloc_table.css (::before, ::after)
  6) **combo** - (.navbar . navlink) ir pan.
  7) 
  **Parametrai:**
  1) **Fixed** -
  2) **Absolute** - 
  3) **Relative** - (alloc_table.css)
  4) **Sticky** - (topnavbar.jsx)
  6) **Static** - 

#### 7. Maketas
  1) **Float** - ❌
  2) **Flexbox** - naudojamas parametrų kortelėse ir kituose komponentuose.
  3) **Flex** - login.jsx, topnavbar.jsx
  5) **Grid** - ❌
  6) **Boostrap** - naudojamas visoje aplikacijoje

#### 8. Javascript
  1) **Žymos atributo reikšmė** - vengiu eilutinių scenarijų
  2) **Vidinis script blokas html faile** - ❌
  3) **Išorinis JS failas** - Visa js logika yra komponentuose, o jie atskiruose failuose.
  4) 
#### 9. Įvykiai
  1) **click** - onClick (alloc_table.jsx, modal.jsx)
  2) **load** - useEffect (dauybę vietų) užtikrina duomenų įkėlimą, prijungtą prie komponento.
  3) **drag** - ❌

#### 10. DOM
  1) **getElementbyId** - (main.jsx)
  2) **getElementbyClass** - (alloc_table.jsx)
  3) **querySelector** -  (alloc_table.jsx)

##### main.jsx:
```js
const root = ReactDOM.createRoot(document.getElementById("root"));
```

##### alloc_table.jsx:
```js
 const click = (key) => {
    const headers = document.getElementsByClassName("sortable-header");
    for (let header of headers) {
      header.classList.remove("highlight-column");
    }
    const activeHeader = document.querySelector(`[data-key="${key}"]`);
    if (activeHeader) {
      console.log(activeHeader);
      activeHeader.classList.add("highlight-column");
    }
    sort(key);
  };
```
#### 11. Tipai
  1) **Objektai**: JSON duomenų failai
  2) **Masyvai**: JSON kompozitai su masyvais  

#### 12. Operatoriai
 1) **Aritmetiniai:** pokyčio skaičiavimai (alloc_table.jsx, metrics.jsx)
 2) **Palyginimas:** sąlyginis teigiamų / neigiamų verčių atvaizdavimas (alloc_table.jsx, metrics.jsx, modal.jsx)
 3) **Loginis:** &&, ||, != sąlyginiame atvaizdavime (alloc_table.jsx)
 4) **Priskyrimas:** būsenos atnaujinimai naudojant setState arba useState.
 5) **Trinaris:** eilutinis sąlyginis atvaizdavimas. (alloc_table.jsx, modal.jsx)
 6) 
#### 13. Sąlyginiai sąkiniai
 1) **If Else:** 
 2) **Switch:** - (granularity_toolbar.jsx)

##### granularity_toolbar.jsx:
```js
const click = (e) => {
    let timeFrame = "";
    console.log(`selected:${e.target.value}`);

    switch (e.target.value) {
      case "1D":
        timeFrame = "Daily";
        break;
      case "1M":
        timeFrame = "Monthly";
        break;
      case "3M":
        timeFrame = "Quarterly";
        break;
      case "1Y":
        timeFrame = "Yearly";
        break;
      case "ALL":
        timeFrame = "All";
        break;
      default:
        timeFrame = "Custom";
        break;
    }
    console.log(`time frame was set to:${timeFrame}`);
  };
```

#### 14. Ciklai
  1) **map:**
  2) **for:** 
  3) 

#### 15. Masyvai 
  1) **filter** - alloc_table.jsx
  2) **map** - metric_table.jsx 
  3) **sort** - alloc_table.jsx

##### alloc_table.jsx:
```js
    const winners = assets?.filter((asset) => asset.change > 0);
    const losers = assets?.filter((asset) => asset.change < 0);
```
##### metric_table.jsx:
```js
<tbody>
    {data?.map(({ name, value }, index) => (
        <tr key={index}>
        <td>{name}</td>
        <td>{value}</td>
        </tr>
    ))}
</tbody>
```
##### alloc_table.jsx:
```js
const sort = (key) => {
    const sorted = [...assets].sort((a, b) => {
      return direction === "asc"
        ? a[key] > b[key]
          ? 1
          : -1
        : a[key] < b[key]
        ? 1
        : -1;
    });
    setAssets(sorted);
    setDirection(direction === "asc" ? "desc" : "asc");
```

#### 16. JS funkcijos

  1) **toFixed** - alloc_table.jsx
  2) **abs** - metrics.jsx

##### alloc_table.jsx:
```js
    <td>{asset.price.toFixed(2)}</td>
    <td style={{ color: asset.change > 0 ? "green" : "red" }}>{asset.change.toFixed(2)}</td>
```

##### metrics.jsx:
```js
    <span className={`${ isPositive ? "text-success" : "text-danger"}`}>
     <i className={`bi ${isPositive ? "bi-arrow-up" : "bi-arrow-down"} me-1`}></i>
         {Math.abs(change)}% Daily
    </span>
```

#### 17. Sukurtos funkcijos
  1) **Gražina rezultatus** - sort (alloc_table.jsx)
  2) **Priima parametrus** -  click (granularity_toolbar.jsx)
  3) **IIFE ((Immediately Invoked Function Expression)** -  main.jsx
  4) **Yra anoniminė** - 
  5) **Yra su kintamasis** - 

##### alloc_table.jsx:
```js
const sort = (key) => {
    const sorted = [...assets].sort((a, b) => {
      return direction === "asc"
        ? a[key] > b[key]
          ? 1
          : -1
        : a[key] < b[key]
        ? 1
        : -1;
    });
    setAssets(sorted);
    setDirection(direction === "asc" ? "desc" : "asc");
```

##### granularity_toolbar.jsx:
```js
 const click = (e) => {
    console.log(`selected:${e.target.value}`);
  };
```

##### main.jsx:
```js
(function () {
  console.log("App initialized");
})();
```
  

  


