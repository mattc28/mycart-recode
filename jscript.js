const foods = document.querySelector('.items'),
 shoppingCartContent = document.querySelector('#cart-content tbody');

 loadEventListeners();

function loadEventListeners(){
    //when new items is added
    foods.addEventListener('click', buyitem);
    console.log("Let's start!");

function buyitem(e){
    if(e.target.classList.contains('add-btn')){
        //read the course value
     const food = e.target.parentElement.parentElement;
        getFoodInfo(food);
    }
}}

function getFoodInfo(food) {
  //create an Object with course data
  const foodInfo= {
      //image: course.querySelector('img').src,
      title: food.querySelector('.product').textContent,
      price: food.querySelector('.cost').textContent,
      id: food.querySelector('#amount').value
  };
  addToCart(foodInfo);
}

function addToCart(food){
  const row = document.createElement('tr');
  console.log("this works!");
  row.innerHTML = `
<tr>
  <td>
      ${food.title}
  </td>
   <td>
      ${food.price}
  </td>
   <td>
      x ${food.id}
  </td>
</tr>
`
  ;

  shoppingCartContent.appendChild(row);
}
;