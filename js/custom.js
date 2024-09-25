//innerHTML을 활용한 동적 DOM생성
const frame = document.querySelector("section");
const data = ["title1", "title2", "title3"];

let tags = "";

data.forEach((el) => {
  tags += `
    <article>
      <h1>${el}</h1>
    </article>
  `;
});

console.log(tags);
frame.innerHTML = tags;
