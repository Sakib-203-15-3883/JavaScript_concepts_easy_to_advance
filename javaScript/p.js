//callback function
console.log("hello");

function fun1(callback) {
  console.log("fun1");
  setTimeout(() => {
    const person = {
      name: "sakib",
      age: 24,
    };

    callback(person);
  }, 2000);
}

function information(person) {
  console.log(person.name);
  console.log(person.age);
}

fun1(information);

// promises

const momIshappy = true;

const willGetPhone = new Promise((resolve, rejected) => {
  if (momIshappy) {
    const mobile = {
      name: "iphone",
      price: 70000,
    };

    resolve(mobile);
  } else {
    const reason = new error("mom is not happy");
    rejected(reason);
  }
});

async function fun3() {
  const value = await willGetPhone;
  return value;
}

fun3().then((value) => {
  console.log(value);
});
// willGetPhone
//   .then((mobile) => {
//     console.log(mobile.name, mobile.price);
//     return mobile.name;
//   })
//   .then((name) => {
//     console.log(name);
//   })

//   .catch((reason) => {
//     console.log(reason);
//   });

console.log("before promise");

// using async/await syntex

const promise = async function sum() {
  const x = 10;
  const y = 20;
  const sum = x + y;
  return Promise.resolve(sum);
};

async function result() {
  const ans = await promise();
  return ans;
}

result().then((ans) => {
  console.log(ans);
});
