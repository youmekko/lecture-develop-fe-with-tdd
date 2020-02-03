describe('App.ClickCountView', ()=> {
  let clickCounter, updateElement, view
  beforeEach(()=>{
    clickCounter = App.ClickCounter()
    updateElement = document.createElement('span')
    view = App.ClickCountView(clickCounter, updateElement)
  })
  
  it('clickCounter를 주입하지 않으면 에러를 던진다', ()=>{
    const clickCounter = null
    const updateElement = document.createElement('span')
    const actual = () => App.ClickCountView(clickCounter, updateElement)
    expect(actual).toThrowError()
  })
  
  it('updateElement를 주입하지 않으면 에러를 던진다', ()=>{
    const clickCounter = App.ClickCounter()
    const updateElement = null
    const actual = () => App.ClickCountView(clickCounter, updateElement)
    expect(actual).toThrowError()
  })
  
  describe('updateView()', ()=> {
    it('ClickCounter의 getValue() 값을 출력한다', ()=> {
      const counterValue = clickCounter.getValue()
      view.updateView()
      expect(updateElement.innerHTML).toBe(counterValue.toString())
    })
  })
})