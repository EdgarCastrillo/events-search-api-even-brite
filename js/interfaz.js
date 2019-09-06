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