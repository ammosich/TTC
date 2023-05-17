const select = document.querySelector("#inputSelect");
const result = document.querySelector("#resultFirstExercise");
const etherium = {
  usd: 2811,
  rub: 200612,
  eur: 2666,
};
function getRate(arg1) {
  return etherium[arg1];
}
select.addEventListener("input", () => {
  result.textContent = getRate(select.value);
});
//-----------------------------------------------------------------
const x = document.querySelector("#inputSecond");
const result1 = document.querySelector("#resultSecondExercise");
const j = {
  lang: "JavaScript",
  course: "Third",
};
const p = {
  lang: "Python",
  course: "Third",
};
const c = {
  lang: "C++",
  course: "Third",
};
function getValues(arg1) {
  if (arg1 == "JavaScript") {
    console.log(Object.entries(j));
    return Object.entries(j);
  } else if (arg1 == "Python") {
    console.log(Object.entries(p));
    return Object.entries(p);
  } else if (arg1 == "C++") {
    console.log(Object.entries(c));
    return Object.entries(c);
  } else {
    return "Введите значение из списка";
  }
}
x.addEventListener("input", () => {
  result1.textContent = getValues(x.value);
});
//-----------------------------------------------------------------
const x1 = document.querySelector("#inputThird");
const result2 = document.querySelector("#resultThirdExercise");
const adress = {
  street: "Lenina",
  building: 1,
  flat: 40,
};
const book = {
  name: "somebook",
  publishingHouse: "asdasd",
  pages: 23,
};
const car = {
  company: "toyota",
  model: "mark2",
  condition: "new",
};
function getInfo(arg1) {
  if (arg1 == "1") {
    return Object.keys(adress);
  } else if (arg1 == "2") {
    return Object.keys(book);
  } else if (arg1 == "3") {
    return Object.keys(car);
  } else {
    return "Введите значение из списка";
  }
}
x1.addEventListener("input", () => {
  result2.textContent = getInfo(x1.value);
});
//-----------------------------------------------------------------
const result3 = document.querySelector("#resultFourthExercise");
const o1 = {
  asd: "asd",
  zxc: "zxc",
};
const o2 = {
  qwe: "qwe",
  rty: "rty",
};
function joinObj(arg1, arg2) {
  let n = { ...arg1, ...arg2 };
  return typeof n;
}
console.log(joinObj(o1, o2));
result3.textContent = joinObj(o1, o2);
//-----------------------------------------------------------------
const x2 = document.querySelector("#inputFifth");
const x3 = document.querySelector("#inputFifth1");
const btn = document.querySelector("#btn");
const result4 = document.querySelector("#resultFifthExercise");
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
function createUser(name, email) {
  let u = new User(name, email);
  console.log(u);
  return u.name + " " + u.email;
}
btn.addEventListener("click", () => {
  result4.textContent = createUser(x2.value, x3.value);
});
//-----------------------------------------------------------------
const result5 = document.querySelector("#resultSixthExercise");
class User1 {
  constructor(id, isAdmin) {
    this.id = id;
    this.admin = isAdmin;
  }
  getId() {
    return "#" + this.id;
  }
  isAdmin() {
    if (this.admin.toLowerCase() == "admin") {
      return true;
    } else {
      return false;
    }
  }
}
let u1 = new User1(100, "Admin");
console.log(u1.getId());
console.log(u1.isAdmin());
let u2 = new User1(217, "SimpleUser");
console.log(u2.getId());
console.log(u2.isAdmin());
result5.textContent =
  u1.getId() + u1.isAdmin() + " " + u2.getId() + u2.isAdmin();
//-----------------------------------------------------------------
const result6 = document.querySelector("#resultSeventhExercise");
class AreaOfCirlce {
  constructor(r) {
    this._r = r * 3.14 * 2;
  }
  get r() {
    return this._r;
  }
  set r(value) {
    this._r = Number.parseInt(value, 10) * 3.14 * 2;
  }
}

let area = new AreaOfCirlce(2);
console.log(area._r);
area.r = 10;
console.log(area._r);

result6.textContent = area.r;
//-----------------------------------------------------------------
const result7 = document.querySelector("#resultEigthExercise");
class Course {
  constructor(m) {
    this.mark = m;
  }
  getGrade() {
    return this.mark > 3 ? true : false;
  }
  getCertificate() {
    return this.getGrade() ? "Выдать сертификат" : "Курс не пройден";
  }
}
const c1 = new Course(5);
console.log(c1.getCertificate());
result7.textContent = c1.getCertificate();
const c2 = new Course(3);
console.log(c2.getCertificate());
