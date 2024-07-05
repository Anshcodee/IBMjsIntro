//In this lab, you will explore how JavaScript dynamically generates restaurant menu sections for breakfast, main course, and dessert using JavaScript's array methods. 
//You will learn to use map to populate the breakfast menu, forEach to display the main course menu items, and a traditional for loop to render the dessert items. 
//Additionally, you will understand how HTML content can be updated dynamically, showcasing the power of JavaScript in modifying webpage elements based on predefined arrays.
const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak','Pasta','Burger','Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// We will use both the 'map method' and 'forEach method' here
// 'map' method to iterate thru breakfast

const breakfastMenuItemsHTML = breakfastMenu.map((item,index) => `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// The provided code converts breakfast menu array items into HTML strings using map() and an arrow function to structure each item's HTML format.
// a string concatenation method has been used to join the generated HTML strings into one cohesive string using join ('') to prepare for insertion

// 'forEach array' method will be used to traverse mainCourseMenu

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index+1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// The variable mainCourseItem is initialized as an empty string (''). It will be used to accumulate HTML strings generated for each main course menu item.
// The forEach method loops through each element in the mainCourseMenu array. For each item in the array, the arrow function (item, index) => {…} is executed. 
//      Inside the arrow function, an HTML string is composed for each menu item, incorporating the item's content and its corresponding index.
// Then HTML content is updated dynamically by setting the innerHTML property of the HTML element with the ID maincourseMenuItems to the accumulated mainCourseItem string 
//      which will insert main course menu items into the specific element within the webpage.

// 'for loop' will be used to iterate dessertMenu