/*
Kávéfőző BEKAPCSOLÁSA
IF NINCS ELÉG KÁVÉ THEN
    KÁVÉ HOZZÁADÁSA
ENDIF
IF NINCS ELG VÍZ THEN
    VÍZ HOZZÁADÁSA
ENDIF
WHILE NEM MELEGEDETT FEL
    10 MP VÁRAKOZÁS
ENDWHILE
CSÉSZE ODAHELYEZÉSE
GOMB MEGNYOMÁSA
*/

/*ÖSSZEGZÉS ALGORITMUSA:

összeg = 0
CIKLUS AMÍG van még szám,ADDIG
    szám= következő elem
    összeg = összeg + szám
CIKLUS VÉGE
*/

let numericArry = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (i =0; i<numericArry.length; i++) {
    sum += numericArry[i];
}

console.log("sum: ", sum);

/* Számlálás algoritmusa:

db = 0
CIKLUS AMÍG van még szám ADDIG
    szám= következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db+1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let db =0;
for (i =0; i<numericArry.length; i++) {
    if(numericArry[i] % 2 == 0) {
        db ++;
    }
}
console.log("Even number: ", db);

/*
SZÉLSŐ ÉRTÉK KERESÉSE ALGORITMUSA

legelső = legnagyobb
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let biggest = numericArry[0];
for (let i = 0; i < numericArry.length; i++) {
    if (numericArry[i] > biggest) {
        biggest = numericArry[i];
    }
}
console.log("The biggest element: ", biggest);

let smallest = numericArry[0];
for (let i = 0; i < numericArry.length; i++) {
    if (numericArry[i] < smallest) {
        smallest = numericArry[i];
    }
}
console.log("The smallest element: ", smallest);


/*
Eldöntés tététele(algoritmusa):

találat = HAMIS
CIKLUS AMÍG van elem ÉS NEM találat
    szám = következő elem
    HA igaz a feltétel a számra,AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE

*/
let contains = false;
for (let i = 0; i < numericArry.length && contains == false; i++) {
    if (numericArry[i] == 5) {
        contains = true;
    }
}
console.log("This arry contains 5: ", contains);




