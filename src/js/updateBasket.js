import axios from "axios";

(function updateBasket() {
    document.addEventListener('DOMContentLoaded', () => {
        const carts = document.querySelectorAll('[data-cart]');
        const cartCount = document.querySelector('[data-cart-count]')
        const price = document.querySelector('[data-cart-total]')
        const positions = document.querySelector('[data-cart-position]')
        const removePosition = document.querySelectorAll('[data-cart-remove-position]')
        let checkedItems = document.querySelectorAll('[data-cart-check]')
        const selectAll = document.querySelector('[data-cart-select-all]')
        const removeAll = document.querySelectorAll('[data-basket-removeAll]')
        const discount = document.querySelector('[data-cart-discount]')
        const total = document.querySelector('[data-basket-total]')
        const openBtn = document.querySelector('[data-open-checkbox]')
        const removeMobile = document.querySelector('[data-basket-remove-mobile]')
        const cartBody = document.querySelector('.cart__body')
        const cartTotal = document.querySelector('.total')
        const cartEmpty = document.querySelector('[data-empty]')
        const cartTotalCount = document.querySelector('[data-user-basket-count]');
        const cartTotalText = document.querySelector('[data-total-text]')
        const removeUrl = '/local/ajax/basket/deleteProduct/';
        const updateUrl = '/local/ajax/basket/updateProductCount/'

        const sendData = (data, url = removeUrl) => {
            axios.post(url, data)
                .then(response => {
                    console.log(response)
                })
                .catch(error => console.error(error));
        }

        const checkBasketCount = () => {
            if (cartTotalCount.textContent === '0') {
                cartTotalCount.classList.add('hidden')
            } else {
                cartTotalCount.classList.remove('hidden')
            }
        }

        const fixWords = (count) => {
            if (count % 10 === 1 && count % 100 !== 11) {
                cartTotalText.textContent = ' товар на сумму'
            } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
                cartTotalText.textContent = ' товара на сумму'
            } else {
                cartTotalText.textContent = ' товаров на сумму'
            }
        }

        carts.forEach(cart => {
            const plusBtn = cart.querySelector('[data-counter-plus]')
            const minusBtn = cart.querySelector('[data-counter-minus]')
            const removeBtn = cart.querySelector('[data-cart-remove]')
            const check = cart.querySelector('[data-cart-check]')
            const input = cart.querySelector('[data-counter-input]')
            let currentCount = input.value > 1 ? input.value : 1;
            let checked = false;

            plusBtn.addEventListener('click', () => {
                const data = new FormData();
                currentCount++;
                updateValues(carts)
                data.append('id', cart.dataset.cart)
                data.append('count', currentCount)
                cartTotalCount.textContent = `${parseInt(cartTotalCount.textContent) + 1}`;
                sendData(data, updateUrl);
            })
            minusBtn.addEventListener('click', () => {
                const data = new FormData();
                console.log(currentCount)
                if (currentCount > 1) {
                    currentCount--;
                    updateValues(carts)
                    cartTotalCount.textContent = `${parseInt(cartTotalCount.textContent) - 1}`;
                    checkBasketCount()
                }
                data.append('id', cart.dataset.cart)
                data.append('count', currentCount)
                sendData(data, updateUrl);
            })
            removeBtn.addEventListener('click', () => {
                const data = new FormData();
                cart.remove()
                data.append('id', cart.dataset.cart)
                sendData(data)
                updateValues(carts)
                removePositions(carts)
                cartTotalCount.textContent = `${parseInt(cartTotalCount.textContent) - 1}`;
                checkBasketCount()
            })
            check.addEventListener('click', () => {
                checked = !checked
                removePositions(carts)
            })
        })

        if (!selectAll) return
        selectAll.addEventListener('click', () => {
            const selectInput = selectAll.querySelector('input');
            checkedItems.forEach(el => {
                el.checked = selectInput.checked;
            })
            removePositions(carts)
        })
        if (!openBtn) return
        openBtn.addEventListener('click', () => {
            if (openBtn.textContent === 'Выбрать') {
                openBtn.textContent = 'Отменить'
                removeMobile.classList.remove('hidden')
            } else {
                openBtn.textContent = 'Выбрать'
                removeMobile.classList.add('hidden')
            }
            checkedItems.forEach(el => {
                el.classList.toggle('active')
            })
        })

        const updateValues = (carts) => {
            carts = document.querySelectorAll('[data-cart]');
            let count = 0;
            let currentPrice = 0;
            carts.forEach(el => {
                const input = el.querySelector('[data-counter-input]')
                const elPrice = el.querySelector('[data-cart-price]')
                count += parseInt(input.value);
                currentPrice += parseInt(input.value) * parseInt(elPrice.textContent.replace(" ", ''))
                fixWords(count)
            })
            price.textContent = currentPrice;
            cartCount.textContent = `${count}`
            if (discount) {
                total.textContent = `${currentPrice - discount.textContent.replace(" ", '')}`
            } else {
                total.textContent = `${currentPrice}`
            }
            positions.textContent = carts.length;
        }
        updateValues(carts)

        const removePositions = (carts) => {
            carts = document.querySelectorAll('[data-cart]');
            let checked = [];
            carts.forEach(el => {
                const checkedItem = el.querySelector('[data-cart-check]')
                if (checkedItem.checked) {
                    checked.push(el)
                }
            })
            removePosition.forEach(el => {
                el.textContent = checked.length;
            })
            if (carts.length <= 0) {
                cartBody.classList.add('hidden')
                cartTotal.classList.add('hidden')
                cartEmpty.classList.add('active')
            }
        }

        removeAll.forEach(removeBtn => {
            removeBtn.addEventListener('click', () => {
                const selectInput = selectAll.querySelector('input');
                let checked = document.querySelectorAll('[data-cart-check]:checked');
                let checkedItems = document.querySelectorAll('[data-cart-check]');
                const data = new FormData();
                const cartId = []

                for (let i = 0; i < checked.length; i++) {
                    cartId.push(parseInt(checked[i].parentNode.dataset.cart))
                }
                data.append('id', JSON.stringify(cartId))
                sendData(data);

                cartTotalCount.textContent = `${parseInt(cartTotalCount.textContent) - checked.length}`;
                checkBasketCount()

                checked.forEach(el => {
                    el.closest('[data-cart]').remove();
                    updateValues(carts);
                });
                selectInput.checked = false;
                checked = document.querySelectorAll('[data-cart-check]:checked');
                checkedItems = document.querySelectorAll('[data-cart-check]');
                removePosition.forEach(el => {
                    el.textContent = checked.length;
                })
                if (checkedItems.length <= 0) {
                    cartBody.classList.add('hidden')
                    cartTotal.classList.add('hidden')
                    cartEmpty.classList.add('active')
                }
            })
        })
    })
})()
