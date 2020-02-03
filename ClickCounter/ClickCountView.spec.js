describe('App.ClickCountView', ()=> {
  describe('updateView()', ()=> {

    let clickCounter, updateElement, view

    beforeEach(()=>{
      clickCounter = App.ClickCounter()
      updateElement = document.createElement('span')
      view = App.ClickCountView(clickCounter, updateElement)
    })

    it('ClickCounter의 getValue() 값을 출력한다', ()=> {
      const counterValue = clickCounter.getValue()
      view.updateView()
      expect(updateElement.innerHTML).toBe(counterValue.toString())
    })
  })
})