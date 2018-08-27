const News = require('../../models/news')

describe('News Model ', () => {
  it('should create a new on db ', () => {

    let newsObj = {
      title: 'I\'m a little pea, i love the skies and the trees',
      link: 'https://beautifulpeanuts.co',
      up_votes: 8000,
      down_votes: 1,
      ip: '10.1.1.1'
    }

    News.create(newsObj, result => {
      expect(result).toBeTruthy
    })

  })
})
