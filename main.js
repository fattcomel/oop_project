function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
}


 // Fetch the recipe and instructions for a French omelet from mealDB
 fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=french%20omelet')
 .then(response => response.json())
 .then(data => {
   // Get the first result from the API response
   const omelet = data.meals[0];

   // Create HTML elements to display the recipe and instructions
   const title = document.createElement('h2');
   title.textContent = omelet.strMeal;
   const image = document.createElement('img');
   image.src = omelet.strMealThumb;
   const ingredientsTitle = document.createElement('h3');
   ingredientsTitle.textContent = 'Ingredients:';
   const ingredients = document.createElement('ul');
   for (let i = 1; i <= 8; i++) {
     const ingredient = omelet['strIngredient' + i];
     if (ingredient) {
       const listItem = document.createElement('li');
       const ingredientImage = document.createElement('img');
       ingredientImage.src = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
       ingredientImage.alt = ingredient;
       listItem.appendChild(ingredientImage);
       listItem.appendChild(document.createTextNode(ingredient));
       ingredients.appendChild(listItem);
     }
   }
   const instructionsTitle = document.createElement('h3');
   instructionsTitle.textContent = 'Instructions:';
   const instructions = document.createElement('ol');
   omelet.strInstructions.split('\r\n').forEach(instruction => {
     if (instruction) {
       const listItem = document.createElement('li');
       listItem.textContent = instruction;
       instructions.appendChild(listItem);
     }
   });

   // Add the HTML elements to the page
   const omeletDiv = document.getElementById('omelet');
   omeletDiv.appendChild(ingredientsTitle);
   omeletDiv.appendChild(ingredients);
   omeletDiv.appendChild(instructionsTitle);
   omeletDiv.appendChild(instructions);
 })
 .catch(error => {
   console.error('Error fetching French omelet recipe:', error);
 });

 // Fetch the recipe and instructions for a French onion soup from mealDB
 fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=french%20onion%20soup')
 .then(response => response.json())
 .then(data => {
   // Get the first result from the API response
   const soup = data.meals[0];

   // Create HTML elements to display the recipe and instructions
   const title = document.createElement('h2');
   title.textContent = soup.strMeal;
   const image = document.createElement('img');
   image.src = soup.strMealThumb;
   const ingredientsTitle = document.createElement('h3');
   ingredientsTitle.textContent = 'Ingredients:';
   const ingredients = document.createElement('ul');
   for (let i = 1; i <= 8; i++) {
     const ingredient = soup['strIngredient' + i];
     if (ingredient) {
       const listItem = document.createElement('li');
       const ingredientImage = document.createElement('img');
       ingredientImage.src = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
       ingredientImage.alt = ingredient;
       listItem.appendChild(ingredientImage);
       listItem.appendChild(document.createTextNode(ingredient));
       ingredients.appendChild(listItem);
     }
   }
   const instructionsTitle = document.createElement('h3');
   instructionsTitle.textContent = 'Instructions:';
   const instructions = document.createElement('ol');
   soup.strInstructions.split('\r\n').forEach(instruction => {
     if (instruction) {
       const listItem = document.createElement('li');
       listItem.textContent = instruction;
       instructions.appendChild(listItem);
     }
   });

   // Add the HTML elements to the page
   const soupDiv = document.getElementById('soup');
   soupDiv.appendChild(ingredientsTitle);
   soupDiv.appendChild(ingredients);
   soupDiv.appendChild(instructionsTitle);
   soupDiv.appendChild(instructions);
 })
 .catch(error => {
   console.error('Error fetching French onion soup recipe:', error);
 });


// Fetch the recipe and instructions for a French onion soup from mealDB
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=french%20lentils%20with%20garlic%20and%20thyme')
.then(response => response.json())
.then(data => {
  // Get the first result from the API response
  const lentils = data.meals[0];

  // Create HTML elements to display the recipe and instructions
  const title = document.createElement('h2');
  title.textContent = lentils.strMeal;
  const image = document.createElement('img');
  image.src = lentils.strMealThumb;
  const ingredientsTitle = document.createElement('h3');
  ingredientsTitle.textContent = 'Ingredients:';
  const ingredients = document.createElement('ul');
  for (let i = 1; i <= 8; i++) {
    const ingredient = lentils['strIngredient' + i];
    if (ingredient) {
      const listItem = document.createElement('li');
      const ingredientImage = document.createElement('img');
      ingredientImage.src = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
      ingredientImage.alt = ingredient;
      listItem.appendChild(ingredientImage);
      listItem.appendChild(document.createTextNode(ingredient));
      ingredients.appendChild(listItem);
    }
  }
  const instructionsTitle = document.createElement('h3');
  instructionsTitle.textContent = 'Instructions:';
  const instructions = document.createElement('ol');
  lentils.strInstructions.split('\r\n').forEach(instruction => {
    if (instruction) {
      const listItem = document.createElement('li');
      listItem.textContent = instruction;
      instructions.appendChild(listItem);
    }
  });

  // Add the HTML elements to the page
  const lentilsDiv = document.getElementById('lentils');
  lentilsDiv.appendChild(ingredientsTitle);
  lentilsDiv.appendChild(ingredients);
  lentilsDiv.appendChild(instructionsTitle);
  lentilsDiv.appendChild(instructions);
})
.catch(error => {
  console.error('Error fetching French Lentils With Garlic and Thyme recipe:', error);
});


// Fetch the recipe and instructions for a French onion soup from mealDB
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=french%20onion%20chicken%20with%20roasted%20carrots%20&%20mashed Potatoes')
.then(response => response.json())
.then(data => {
  // Get the first result from the API response
  const potato = data.meals[0];

  // Create HTML elements to display the recipe and instructions
  const title = document.createElement('h2');
  title.textContent = potato.strMeal;
  const image = document.createElement('img');
  image.src = potato.strMealThumb;
  const ingredientsTitle = document.createElement('h3');
  ingredientsTitle.textContent = 'Ingredients:';
  const ingredients = document.createElement('ul');
  for (let i = 1; i <= 8; i++) {
    const ingredient = potato['strIngredient' + i];
    if (ingredient) {
      const listItem = document.createElement('li');
      const ingredientImage = document.createElement('img');
      ingredientImage.src = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
      ingredientImage.alt = ingredient;
      listItem.appendChild(ingredientImage);
      listItem.appendChild(document.createTextNode(ingredient));
      ingredients.appendChild(listItem);
    }
  }
  const instructionsTitle = document.createElement('h3');
  instructionsTitle.textContent = 'Instructions:';
  const instructions = document.createElement('ol');
  potato.strInstructions.split('\r\n').forEach(instruction => {
    if (instruction) {
      const listItem = document.createElement('li');
      listItem.textContent = instruction;
      instructions.appendChild(listItem);
    }
  });

  // Add the HTML elements to the page
  const potatoDiv = document.getElementById('potato');
  potatoDiv.appendChild(ingredientsTitle);
  potatoDiv.appendChild(ingredients);
  potatoDiv.appendChild(instructionsTitle);
  potatoDiv.appendChild(instructions);
})
.catch(error => {
  console.error('Error fetching French Onion Chicken with Roasted Carrots & Mashed Potatoes:', error);
});

//recipe.html fetch recipe white chocolate creme brulee

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=white%20chocolate%20creme%20brulee')
.then(response => response.json())
.then(data => {
  // Get the first result from the API response
  const brulee = data.meals[0];

  // Create HTML elements to display the recipe and instructions
  const title = document.createElement('h2');
  title.textContent = brulee.strMeal;
  const image = document.createElement('img');
  image.src = brulee.strMealThumb;
  const ingredientsTitle = document.createElement('h3');
  ingredientsTitle.textContent = 'Ingredients:';
  const ingredients = document.createElement('ul');
  for (let i = 1; i <= 8; i++) {
    const ingredient = brulee['strIngredient' + i];
    if (ingredient) {
      const listItem = document.createElement('li');
      const ingredientImage = document.createElement('img');
      ingredientImage.src = `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
      ingredientImage.alt = ingredient;
      listItem.appendChild(ingredientImage);
      listItem.appendChild(document.createTextNode(ingredient));
      ingredients.appendChild(listItem);
    }
  }
  const instructionsTitle = document.createElement('h3');
  instructionsTitle.textContent = 'Instructions:';
  const instructions = document.createElement('ol');
  brulee.strInstructions.split('\r\n').forEach(instruction => {
    if (instruction) {
      const listItem = document.createElement('li');
      listItem.textContent = instruction;
      instructions.appendChild(listItem);
    }
  });

  // Add the HTML elements to the page
  const bruleeDiv = document.getElementById('brulee');
  bruleeDiv.appendChild(ingredientsTitle);
  bruleeDiv.appendChild(ingredients);
  bruleeDiv.appendChild(instructionsTitle);
  bruleeDiv.appendChild(instructions);
})
.catch(error => {
  console.error('Error fetching White Chocolate Creme Brulee:', error);
});


//in food.html fetch creme brule

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=White%20Chocolate%20Creme%20Brulee';

// Fetch white chocolate creme brulee data from MealDB API 
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const recipe = data.meals[0];
    const recipeImgUrl = recipe.strMealThumb;

    // Update HTML with recipe name and image
    document.getElementById('recipe-img').setAttribute('src', recipeImgUrl);
  })
  .catch(error => {
    console.log('Error:', error);
  });

//fetch weather

  function getWeather() {
    let city = document.getElementById("city").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      let weatherInfo = document.getElementById("weather-info");
      weatherInfo.innerHTML = `<p>City: ${data.name}</p>
      <p>Temperature: ${data.main.temp} K</p>
      <p>Humidity: ${data.main.humidity} %</p>
      <p>Description: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
      console.error(error);
      let weatherInfo = document.getElementById("weather-info");
      weatherInfo.innerHTML = "<p>Error fetching weather data</p>";
    });
  }