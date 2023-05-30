'use strict';

function Food(id, name, type, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
  }
  

  Food.prototype.generateID = function() {
    return Math.floor(1000 + Math.random() * 9000);
  };
  
  
  Food.prototype.render = function() {
    return `<tr>
              <td>${this.id}</td>
              <td>${this.name}</td>
              <td>${this.type}</td>
              <td>${this.price}</td>
            </tr>`;
  };
  
 
  document.getElementById('food-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    const foodName = document.getElementById('food-name').value;
    const foodType = document.getElementById('food-type').value;
    const foodPrice = document.getElementById('food-price').value;
  
    const food = new Food(Food.prototype.generateID(), foodName, foodType, foodPrice);
  
  
    const foodTable = document.getElementById('food-table');
    const foodRow = food.render();
    foodTable.querySelector('tbody').innerHTML += foodRow;
  
   
    document.getElementById('food-name').value = '';
    document.getElementById('food-type').value = '';
    document.getElementById('food-price').value = '';
  });