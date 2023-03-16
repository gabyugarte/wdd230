// Obtener la referencia al elemento HTML donde se mostrarán los negocios
const businessList = document.querySelector('.business-list-index');

// Cargar los datos desde el archivo JSON
fetch('data.json')
  .then(response => response.json())
  .then(data2 => {
    // Mostrar los primeros tres negocios en el elemento HTML
    for (let i = 0; i < 3; i++) {
      // Crear un elemento <div> con la clase "business-card" para mostrar la información del negocio
      const businessDiv = document.createElement('div');
      businessDiv.classList.add('business-card');
      
      // Obtener los datos del negocio
      const businessName = data2[i].name;
      const businessAddress = data2[i].address;
      const businessPhone = data2[i].phone;
      const businessWebsite = data2[i].website;
      const businessImage = data2[i].image;
      const businessMembership = data2[i].membership;
      
      // Crear el HTML para mostrar la información del negocio
      businessDiv.innerHTML = `
        <h2>${businessName}</h2>
        <p>${businessAddress}</p>
        <p>${businessPhone}</p>
        <p>${businessWebsite}</p>
        <img src="${businessImage}" alt="${businessName}" />
        <p>${businessMembership}</p>
      `;
      
      // Añadir el elemento <div> al elemento HTML donde se mostrarán los negocios
      businessList.appendChild(businessDiv);
    }
  })
  .catch(error => console.error(error));

