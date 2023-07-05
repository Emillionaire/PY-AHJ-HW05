export default class PopupWidget {
    constructor (container) {
        this.container = container
    }

    onBtnClick () {
        if (this.container.style.visibility === 'visible') {
            this.container.style.visibility = 'hidden'
        } else {
            this.container.style.visibility = 'visible'
        }
    }
}