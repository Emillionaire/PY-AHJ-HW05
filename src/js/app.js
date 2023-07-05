import PopupWidget from './PopupWidget'

document.addEventListener('DOMContentLoaded', () => {
    const popover = document.querySelector('.popover')
    const popupWidget = new PopupWidget(popover)
    const btn = document.querySelector('.btn')
    btn.addEventListener('click', popupWidget.onBtnClick.bind(popupWidget))
})