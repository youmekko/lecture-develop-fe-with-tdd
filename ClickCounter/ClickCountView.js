var App = App || {}

App.ClickCountView = ((clickCounter, updateElement) => {
    if(!clickCounter) throw Error('clickCounter')

    return {
        updateView(){
            updateElement.innerHTML = clickCounter.getValue()
        }
    }
})
