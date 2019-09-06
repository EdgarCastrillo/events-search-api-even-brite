'use strict'

class Ui {
  constructor() {
    // Initialize the app upon instantiation
    this.init()

    // Read th result
    this.list = document.getElementById('events-result')
  }

  // Method for when you initialize the app
  init() {
    // Call to print categories to the REST API
    this.printCategories()
  }

  // Print categories
  printCategories() {
    const list = eventBrite.getCategories()
      .then(categories => {
        const categor = categories.categories.categories
        console.log(categor)

        // Select the categories select
        const selectCategory = document.getElementById('category-list')

        // Array and print the <option>
        categor.forEach(categor => {
          const option = document.createElement('option')
          option.value = categor.id
          option.appendChild(document.createTextNode(categor.name_localized))
          selectCategory.appendChild(option)
        });

      })
  } 

  // Read API respons and print the results
  showEvents(events) {
    // Read evnets and add to a varible
    const eventsList = events.events

    // Go through an array and create the tample
    eventsList.forEach(event => {
      this.list.innerHTML += `
        <div class="col-md-4 mb-4">
          <div clas="card">
              <img class="img-fluid mb-2" src="${event.logo !== null ? event.logo.url : ''}">
            <div class="card-body">
              <div class="card-text">
                <h2 class="text-center">${event.name.text}</h2>
                <p class="lead text-info">Información del evento</p>
                <p>${event.description.text.substring(0,280)}...</p>
                <span class="badge badege-primary">Capacidad: ${event.capacity}</span>
                <span class="badge badege-secondary">Fecha y hora: ${event.start.local}</span>
                <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar entradas</a>
              </div>  
            </div>
          </div>
        </div>
      `
    })
  }

  // Clean previous results
  cleanResults() {
    this.list.innerHTML = ''
  }

  // Method to print messages
  showMessage(message, classes) {
    const div = document.createElement('div')
    div.classList = classes

    // Add text
    div.appendChild(document.createTextNode(message))
    const searchDiv = document.querySelector('#search')
    searchDiv.appendChild(div)

    // Remove alert
    setTimeout(() => {
      this.cleanMessage()
    }, 3000);
  }

  // Hide message if exist
  cleanMessage() {
    const alert = document.querySelector('.alert')
    if(alert) {
      alert.remove()
    }
  }
}