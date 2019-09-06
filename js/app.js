'use strict'

const eventBrite = new EventBrite()
const ui = new Ui()

// Listener to finder
document.getElementById('searchBtn').addEventListener('click', (e) => {
  e.preventDefault()

  // Read text of search input
  const searchText = document.getElementById('event').value

  // Read selected category
  const categories = document.getElementById('category-list')
  const selectedCategory = categories.options[categories.selectedIndex].value

  console.log(searchText)
  console.log(selectedCategory)

  // Check that there is something written on the search
  if(searchText !== '') {
    // When there is a search
    eventBrite.getEvents(searchText, selectedCategory)
      .then(events => {
        if(events.events.events.length > 0) {
          // If there are events show the result
          ui.cleanResults()
          ui.showEvents(events.events)
        } else {
          // No events, send an alert
          ui.showMessage('No hay resultados', 'alert alert-danger mt-4')
        }
      })

  } else {
    // show message
    ui.showMessage('Escribe algo en el buscador', 'alert alert-danger mt-4')
  }
})