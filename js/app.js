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
  
})