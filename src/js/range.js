import noUiSlider from "nouislider/dist/nouislider";

(function range() {

    document.addEventListener('DOMContentLoaded', () => {
        const slider = document.querySelectorAll('[data-range]')

        slider.forEach(range => {
            const rangeSlider = range.querySelector('#range')
            const snapValues = range.querySelectorAll('[data-snap-value]')
            const hiddenValue = range.querySelectorAll('[data-range-value]')


            noUiSlider.create(rangeSlider, {
                start: [parseInt(hiddenValue[0].value), parseInt(hiddenValue[1].value)],
                connect: [false, true, false],
                range: {
                    "min": [parseInt(hiddenValue[0].value)],
                    "max": [parseInt(hiddenValue[1].value)]
                }
            });
            rangeSlider.noUiSlider.on("update", (values, handle) => {
                snapValues[handle].textContent = Math.floor(values[handle]);
                hiddenValue[handle].value = Math.floor(values[handle]);
            });
        })
    })
})()
