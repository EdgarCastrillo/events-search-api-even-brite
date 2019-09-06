'use strict'

class EventBrite {
  constructor() {
    this.token_auth = 'XY7LWTTVAKS6ECNSFHHU'
    this.sort = 'date'
  }

  
  // Get categories en init()
  async getCategories() {
    // Get categories to REST API of Event Brite
    const responseCategories = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`)
    
    // Wait response of categories and return a JSON()
    const categories = await responseCategories.json()
    
    // Return the result
    return {
      categories
    }
  }
  
  // Show search results
  async getEvents(event, category) {
    const responseEvent = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${event}&sort_by=${this.sort}&categories=${category}&token=${this.token_auth}`)
    
    // Wait event response and return JSON()
    const events = await responseEvent.json()

    return {
      events
    }
  }
}