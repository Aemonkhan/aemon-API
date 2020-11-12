/// var obj = {
//   meals: [{}, {}, {}]
//}
var submitForm = document.getElementById('submit1')
function searchRecipe(e) {
    e.preventDefault();
    var search = document.getElementById('search');
    console.log(search.value)
    var api2 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value}`
    console.log(api2)
    /// api call
    fetch(api2) // Call the fetch function passing the url of the API as a parameter
        .then(res => res.json())
        .then(function (data) {
            // Your code for handling the data you get from the API
            console.log(data.meals)
            const recipesArr = data.meals;
            var row = document.getElementById('row');
            for (let i = 0; i < recipesArr.length; i++) {
                var div = document.createElement('div')
                div.className = 'box';
                var text = document.createTextNode(recipesArr[i].strMeal)
                div.appendChild(text)
                row.appendChild(div)
                var img = document.createElement('img');
                img.setAttribute("src", recipesArr[i].strMealThumb);
                // var randomImgID = `img${i}`
                // img.setAttribute("id", randomImgID);
                img.setAttribute("width", "200");
                img.setAttribute("height", "150");
                div.appendChild(img)
                row.appendChild(div)
            }
        })
        .catch(function (error) {
            // This is where you run code if the server returns any errors
            console.log(error)
        });
    search.value = '';
    row1.innerHTML = '';
}

function searchRandom() {
    var api = 'https://www.themealdb.com/api/json/v1/1/random.php'
    fetch(api)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            var recipeSingle = data.meals
            var row1 = document.getElementById('row1');
            var row = document.getElementById('row');
            row.innerHTML = '';
            row1.innerHTML = '';

            for (let i = 0; i < recipeSingle.length; i++) {
                var div = document.createElement('div')
                var parentdiv = document.createElement('parentdiv')
                var h1 = document.createElement('recipe')
                var img = document.createElement('img')
                var h3 = document.createElement('text')
                var h2 = document.createElement('img')
                div.className = 'box1';

                var content = document.createElement('div')
                var textcontent = document.createTextNode(recipeSingle[i].strInstructions)
                div.appendChild(textcontent)
                var text = document.createTextNode(recipeSingle[i].strMeal)
                h3.appendChild(text)
                var img = document.createElement('img');
                img.setAttribute("src", recipeSingle[i].strMealThumb);
                img.setAttribute("width", "250");
                img.setAttribute("height", "200");
                h2.appendChild(img)
                div.appendChild(parentdiv)
                parentdiv.appendChild(h1)
                parentdiv.appendChild(img)
                parentdiv.appendChild(h3)
                row1.appendChild(div)


            }

        })

}
submitForm.addEventListener('submit', searchRecipe);