export function renderCart() {
	const item = JSON.parse(localStorage.getItem('cart'))
	const carts = JSON.parse(localStorage.getItem('data'))
	const empty = document.querySelector('.alert-secondary')
	const total = document.querySelector('.total-price')
	const grid = document.querySelector('.cart-wrapper')
	if (item !== null) {
		empty.classList.remove('none')
		grid.textContent = ''

		item.forEach(i => {
			carts.forEach(el => {
				if (i.id === el.id) {
					const cart__item = document.createElement('div')
					cart__item.className = 'cart-item'

					const cart__item__top = document.createElement('div')
					cart__item__top.className = 'cart-item__top'
					const cart__item__img = document.createElement('div')
					cart__item__img.className = 'cart-item__img'

					const cart__img = document.createElement('img')
					cart__img.setAttribute('alt', '')

					const cart__item__desc = document.createElement('div')
					cart__item__desc.className = 'cart-item__desc'

					const cart__item__title = document.createElement('div')
					cart__item__title.className = 'cart-item__title'
					const cart__item__weight = document.createElement('div')
					cart__item__weight.className = 'cart-item__weight'

					const cart__item__details = document.createElement('div')
					cart__item__details.className = 'cart-item__details'

					const items = document.createElement('div')
					items.className = 'items items--small counter-wrapper'

					const items__minus = document.createElement('div')
					items__minus.className = 'items__control'
					items__minus.setAttribute('data-action', 'minus')
					items__minus.textContent = '-'

					const items__current = document.createElement('div')
					items__current.className = 'items__current'
					items__current.setAttribute('data-counter', '')

					const items__plus = document.createElement('div')
					items__plus.className = 'items__control'
					items__current.setAttribute('data-action', 'plus')
					items__plus.textContent = '+'

					const priceItem = document.createElement('div')
					priceItem.className = 'price'

					const price__currency = document.createElement('div')
					price__currency.className = 'price__currency'
					total.textContent = 23232
					cart__item.setAttribute('data-id', el.id)
					cart__img.setAttribute('src', el.img)
					cart__item__title.textContent = 'roll'
					cart__item__weight.textContent = `${el.count}шт./${el.weight}г`
					items__plus.onclick = () => {
						items__current.textContent = ++i.count
					}
					items__minus.onclick = () => {
						if (item.count != 0) {
							items__current.textContent = --i.count
						}
					}
					price__currency.textContent = `${el.price}₽`
					items__current.textContent = i.count
					cart__item.append(cart__item__top)
					cart__item__top.append(cart__item__img)
					cart__item__img.append(cart__img)
					cart__item__top.append(cart__item__desc)
					cart__item__desc.append(cart__item__title)
					cart__item__desc.append(cart__item__weight)
					cart__item__desc.append(cart__item__details)
					cart__item__details.append(items)
					items.append(items__minus)
					items.append(items__current)
					items.append(items__plus)
					priceItem.append(price__currency)
					cart__item__details.append(priceItem)
					grid.append(cart__item)
				}
			})
		})
	} else {
		empty.classList.add('none')
	}
}
