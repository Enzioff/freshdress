(function toggle() {
    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.querySelector('[data-toggle]');
        const checkedInput = document.querySelector('.bonuses__check')
        if (!toggleButton || !checkedInput) return

        toggleButton.addEventListener('click', () => {
            toggleButton.classList.toggle('active')
            checkedInput.checked = !checkedInput.checked;
        })
    })
})()
