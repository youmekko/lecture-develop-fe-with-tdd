var App = App || {}

App.ClickCountView = ((clickCounter, updateElement) => {
    if (!clickCounter) throw new Error(App.ClickCountView.messages.noClickCounter)
    if (!updateElement) throw new Error(App.ClickCountView.messages.updateElement)

    return {
        updateView(){
            updateElement.innerHTML = clickCounter.getValue()
        }
    }
})

App.ClickCountView.messages = {
    noClickCounter: 'clickCount를 주입해야 합니다',
    noUpdateEl: 'updateEl를 주입해야 합니다'
  }
