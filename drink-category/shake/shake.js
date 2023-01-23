async function fetchData() {
  const URL =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=shake";
  try {
    const res = await fetch(URL);
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
fetchData().then((res) => console.log(res.drinks));

async function getdrinks() {
    const drinksData = await fetchData();
  drinksData.drinks.forEach(element => {
    const main = document.querySelector("main");
    const card = document.createElement("div");
    const cardTitle = document.createElement("div");
    const title = document.createElement("h5");
    const img = document.createElement("img");
    card.classList.add("card");
    cardTitle.classList.add("card-title");
   img.classList.add("card-img-top");
    title.innerHTML = element.strDrink;
    img.src = element.strDrinkThumb;
    img.alt = element.strDrink;
    cardTitle.appendChild(title);
    card.append(img, cardTitle);
    main.appendChild(card);

    
  });

  }

getdrinks();