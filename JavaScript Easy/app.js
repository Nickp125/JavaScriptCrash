function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
    }
  }

  if (!Number.isInteger(rating)) {
    ratings += " .";
  }
  return ratings;
}

console.log(showRating(3.5));

function sortLowToHigh(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortHighToLow([1, 5, 0, 10, 4]));

function sortHighToLow(numbers) {
  return numbers.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 0 },
    { id: 3, price: 500 },
  ]),
);

async function postsByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

  const result = await promise.json()

  const posts = result.filter(element => element.userId === userId)

  console.log(posts)
}

postsByUser(4);

async function firstSixIncomplete() {

   const promise = await fetch("https://jsonplaceholder.typicode.com/todos");
   const result = await promise.json()
   const posts = result.filter(element => !element.completed).slice(0, 6)

   console.log(posts)
}

firstSixIncomplete();