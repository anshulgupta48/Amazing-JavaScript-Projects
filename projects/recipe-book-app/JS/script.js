// <======== Initializing Variables ========>
const API_KEY = "035418a258014ddba64aba0e4e4060e4";
const recipeListEl = document.getElementById("recipe-list");
init();


// <======== JS Function to Display the Recipes ========>
function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "Recipe Image";

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        recipeIngredientsEl = document.createElement("p");
        recipeIngredientsEl.innerHTML = `
        <strong>Ingredients:</strong> ${recipe.extendedIngredients
                .map((ingredient) => ingredient.original)
                .join(", ")}
    `;

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    });
}


// <======== JS Function to Fetch the Recipes ========>
async function getRecipes() {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );

    const data = await response.json();
    return data.recipes;
}


// <======== JS Function to Run the Recipe Book App ========>
async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes);
}