// for (let i = 0; i < countries_data.length; i++) {
//   // console.log(`${countries_data[i].name}`);
//   const p = document.createElement("p");
//   p.textContent = `${countries_data[i].name}-${countries_data[i].capital}`;

//   const img = document.createElement("img");
//   img.src = countries_data[i].flag;

//   document.body.append(p);
//   document.body.append(img);
// }

countries_data.forEach((ulke) => {
  console.log(ulke);

  const div = document.createElement("div");
  div.classList.add("card");
  div.style.width = "25rem";

  const img = document.createElement("img");
  img.src = ulke.flag;
  img.classList.add("card-img-top");

  const div2 = document.createElement("div");
  div2.classList.add("card-body");

  const h5 = document.createElement("h5");
  h5.classList.add("card-tittle");
  h5.textContent = ulke.name;

  const p = document.createElement("p");
  p.classList.add("card-text");
  p.textContent = `${ulke.capital}-${ulke.languages}- ${ulke.region}`;

  const a = document.createElement("a");
  a.setAttribute("class", "btn btn-warning");
  a.textContent = ulke.population;

  div2.append(h5);
  div2.append(p);
  div2.append(a);

  div.append(img);
  div.append(div2);

  document.body.append(div);
});
