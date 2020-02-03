var App = App || {}

App.ClickCountView = (clickCounter, options) => {
  if (!clickCounter) throw new Error(App.ClickCountView.messages.noClickCounter)
  if (!options.updateElement) throw new Error(App.ClickCountView.messages.updateElement)
  
  const view = {
    updateView() {
        options.updateElement.innerHTML = clickCounter.getValue()
    },

    increaseAndUpdateView() {
      clickCounter.increase()
      this.updateView()
    }
  }
  options.triggerElement.addEventListener('click', ()=>{
    view.increaseAndUpdateView()
  })
  
  return view
}

App.ClickCountView.messages = {
  noClickCounter: 'clickCount를 주입해야 합니다',
  updateElement: 'updateElement를 주입해야 합니다'
}