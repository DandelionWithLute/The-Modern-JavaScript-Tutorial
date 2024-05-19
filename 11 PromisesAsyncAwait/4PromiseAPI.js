// let promise = Promise.all(iterable);

// Important
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
]).then(console.log);

let names = ["mojombo", "defunkt", "pjhyett", "wycats"];

let requests = names.map((name) => {
  fetch(`http://api.github.com/users/${name}`);
});

Promise.all(requests)
  .then((responses) => {
    for (let res of responses) {
      console.log(`${res.url}:${res.status}`);
    }
    return responses;
  })
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then((users) => users.forEach((user) => alert(user.name)));
