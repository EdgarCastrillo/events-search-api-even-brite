'use strict'

class EventBrite {
  constructor() {
    this.token_auth = 'FMUBAQWJIR25T653ZPM4'
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
}