async function fetchData() {
  const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=pasta";

  try {
    const res = await fetch(URL);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// fetchData().then((res) => console.log(res.meals));

async function getmeals() {
  const mealsData = await fetchData();
  // console.log(mealsData.meals);
  mealsData.meals.forEach((element) => {
    const main = document.querySelector("main");
    const card = document.createElement("div");
    const cardTitle = document.createElement("div");
    const title = document.createElement("h5");
    const img = document.createElement("img");
    card.classList.add("card");
    cardTitle.classList.add("card-title");
    img.classList.add("card-img-top");
    title.innerHTML = element.strMeal;
    img.src = element.strMealThumb;
    img.alt = element.strMeal;
    cardTitle.appendChild(title);
    card.append(img, cardTitle);
    main.appendChild(card);
  });
}

getmeals();
