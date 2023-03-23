
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    // Obtener los elementos select
    const fruit1Select = document.getElementById('fruit-1');
    const fruit2Select = document.getElementById('fruit-2');
    const fruit3Select = document.getElementById('fruit-3');
    // Crear opciones de selección para cada elemento select
    data.forEach(fruit => {
      const option = document.createElement('option');
      option.value = fruit.name;
      option.text = fruit.name;
      fruit1Select.appendChild(option);
      
      const option2 = document.createElement('option');
      option2.value = fruit.name;
      option2.text = fruit.name;
      fruit2Select.appendChild(option2);
      
      const option3 = document.createElement('option');
      option3.value = fruit.name;
      option3.text = fruit.name;
      fruit3Select.appendChild(option3);
    });

      // Agregar un eventListener al botón submit
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Obtener los valores seleccionados de los elementos select
  const name = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone').value;
  const instructions = document.getElementById('instructions').value;
  const fruit1 = document.getElementById('fruit-1').value;
  const fruit2 = document.getElementById('fruit-2').value;
  const fruit3 = document.getElementById('fruit-3').value;
  const orderDate = new Date()
  const formattedDate = orderDate.getDate() + "-" + (orderDate.getMonth() + 1) + "-" + orderDate.getFullYear() + " " + orderDate.getHours() + ":" + orderDate.getMinutes();
  // Buscar la fruta seleccionada en los datos JSON
  const fruits = [fruit1, fruit2, fruit3];
  const selectedFruits = data.filter(fruit => fruits.includes(fruit.name));
  
  // Crear una lista de HTML con la información de la fruta seleccionada
  const list = document.createElement('ul');
  const nameItem = document.createElement('li');
  const emailItem = document.createElement('li');
  const phoneNumberItem = document.createElement('li');
  const instructionsItem = document.createElement('li');
  const orderDateItem = document.createElement('li');
  nameItem.textContent = `Client Name: ${name}`;
  emailItem.textContent = `Email: ${email}`;
  phoneNumberItem.textContent = `Phone Number: ${phoneNumber}`;
  instructionsItem.textContent = `Aditional Instructions: ${instructions}`;
  orderDateItem.textContent = `Order Date: ${formattedDate}`;
  list.appendChild(orderDateItem);
  list.appendChild(nameItem);
  list.appendChild(emailItem);
  list.appendChild(phoneNumberItem);
  list.appendChild(instructionsItem);
  selectedFruits.forEach(fruit => {
    const item = document.createElement('li');
    item.textContent = `Name: ${fruit.name}, Calories: ${fruit.nutritions.calories}, Sugar: ${fruit.nutritions.sugar}, Carbohydrates: ${fruit.nutritions.carbohydrates}, Protein: ${fruit.nutritions.protein}, Fat: ${fruit.nutritions.fat}`;
    list.appendChild(item);
  });
  
  // Mostrar la lista de frutas seleccionadas en el div order-summary
  const orderSummary = document.getElementById('order-summary');
  orderSummary.innerHTML = '';
  orderSummary.appendChild(list);
   // Retrieve the current number of drinks submitted from local storage
   let numDrinks = localStorage.getItem('numDrinksSubmitted');
   if (!numDrinks) {
     numDrinks = 0;
   }
   // Increment the number of drinks submitted and store it back in local storage
   numDrinks++;
   localStorage.setItem('numDrinksSubmitted', numDrinks);

});
});


