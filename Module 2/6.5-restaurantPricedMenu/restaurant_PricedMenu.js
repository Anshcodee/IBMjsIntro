const breakfastMenu = ['Pancakes -$12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak -$30', 'Pasta -$24.99', 'Burger -$25', 'Salmon -$28'];
const dessertMenu = ['Cake -$30', 'Ice Cream -$8', 'Pudding -$12', 'Fruit Salad -$15'];


// Using 'map' method for breakfastMenu

const breakfastMenuItems_HTML = breakfastMenu.map((item,index) => `<p>--> Item ${index+1}: ${item}`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItems_HTML;
// join('') concatenates all strings into one
// .innerHTML --> 


// Using 'forEach' method for mainCourseMenu

let mainCourseMenuItems_HTML = '';
mainCourseMenu.forEach((item,index) => {
mainCourseMenuItems_HTML += `<p>--> Item ${index+1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItems_HTML;

// forEach adds to an already existing variable. One by one


// Using a cute for loop for desserts

let dessertMenuItems_HTML = '';
for (i=0; i<dessertMenu.length;i++){
    dessertMenuItems_HTML += `<p>--> Item ${i+1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItems_HTML;

