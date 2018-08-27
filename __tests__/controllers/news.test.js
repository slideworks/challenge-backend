const NewsController = require('../../controllers/news.controller')
const NewsCtrl = new NewsController()

describe('News Controller ', () => {
  it('should return a news json ', () => {

    let news = NewsCtrl.index()
    expect(NewsCtrl.index()).toHaveBeenCalled
    expect(news).not.toBe({}) // not empty object
  })
})
