//studenti
const studenti = [
  { ime: "Pero", prosek: 7.1, grad: "Berovo" },
  { ime: "Stojko", prosek: 6, grad: "Kavadarci" },
  { ime: "Stojna", prosek: 10, grad: "Veles" },
  { ime: "Mara", prosek: 5, grad: "Kichevo" },
  { ime: "Petka", prosek: 8.3, grad: "Skopje" },
  { ime: "Mitre", prosek: 7.5, grad: "Ohrid" },
  { ime: "Risto", prosek: 9, grad: "Strumica" },
  { ime: "Tosho", prosek: 8.3, grad: "Gevgelija" },
];

const vkupenProsek =
  studenti.reduce((sum, student) => sum + student.prosek, 0) / studenti.length;
console.log("Вкупен просек:", vkupenProsek);

const kratkiIminja = studenti.filter((student) => student.ime.length <= 4);
console.log("Студенти со кратки имиња:", kratkiIminja);

const studentOdStrumica = studenti.find(
  (student) => student.grad === "Strumica"
);
console.log("Студент од Strumica:", studentOdStrumica);

//horoskop
function horoskop(mesec, den) {
  if ((mesec === 1 && den >= 20) || (mesec === 2 && den <= 18)) {
    return "Водолија";
  } else if ((mesec === 2 && den >= 19) || (mesec === 3 && den <= 20)) {
    return "Риби";
  } else if ((mesec === 3 && den >= 21) || (mesec === 4 && den <= 19)) {
    return "Овен";
  } else if ((mesec === 4 && den >= 20) || (mesec === 5 && den <= 20)) {
    return "Бик";
  } else if ((mesec === 5 && den >= 21) || (mesec === 6 && den <= 20)) {
    return "Близнаци";
  } else if ((mesec === 6 && den >= 21) || (mesec === 7 && den <= 22)) {
    return "Рак";
  } else if ((mesec === 7 && den >= 23) || (mesec === 8 && den <= 22)) {
    return "Лав";
  } else if ((mesec === 8 && den >= 23) || (mesec === 9 && den <= 22)) {
    return "Девица";
  } else if ((mesec === 9 && den >= 23) || (mesec === 10 && den <= 22)) {
    return "Вага";
  } else if ((mesec === 10 && den >= 23) || (mesec === 11 && den <= 21)) {
    return "Скорпија";
  } else if ((mesec === 11 && den >= 22) || (mesec === 12 && den <= 21)) {
    return "Стрелец";
  } else if ((mesec === 12 && den >= 22) || (mesec === 1 && den <= 19)) {
    return "Јарец";
  } else {
    return "Невалиден месец или ден!";
  }
}

console.log(horoskop(10, 1));

//presmetaj ploshtina
function presmetajPloshtina(a, b) {
  return a * b;
}

console.log(presmetajPloshtina(6, 15));

//presmetaj periметар
function presmetajPerimetar(a, b) {
  return 2 * (a + b);
}

console.log(presmetajPerimetar(5, 10));
