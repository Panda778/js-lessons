// btnModal - массив из элементов батн

import { modalForm } from './modal/form.js'

async function main() {
	const response = await fetch('/data.json')
	const json = await response.json()
	document.addEventListener('DOMContentLoaded', () => {
		return json
	})

	function render(object) {
		const { name, img, id, count, weight, price, hit } = object
		let res = 0
		const wrapper = document.createElement('div')
		wrapper.className = 'col-md-6'
		wrapper.setAttribute('data-id', id)

		const hits = document.createElement('span')
		hits.className = 'bookmark'
		hits.textContent = 'HIT'

		const cart__wrapper = document.createElement('div')
		cart__wrapper.className = 'card mb-4'
		cart__wrapper.setAttribute('data-id', id)

		const cart__img = document.createElement('img')
		cart__img.setAttribute('src', img)
		cart__img.setAttribute('alt', 'img')
		cart__img.className = 'product-img'

		const cart__body = document.createElement('div')
		cart__body.className = 'card-body text-center'

		const cart__title = document.createElement('h4')
		cart__title.className = 'item-title'
		cart__title.textContent = name

		const cart__count = document.createElement('p')
		const cart__count__small = document.createElement('small')
		cart__count__small.setAttribute('data-items-in-box', '')
		cart__count__small.className = 'text-muted'
		cart__count__small.textContent = count + 'шт'

		const detail__wrapper = document.createElement('div')
		detail__wrapper.className = 'details-wrapper'
		const couter__wrapper = document.createElement('div')
		couter__wrapper.className = 'items counter-wrapper'

		const minus = document.createElement('div')
		minus.className = 'items__control'
		minus.setAttribute('data-action', 'minus')
		minus.textContent = '-'

		let count__current = document.createElement('div')
		count__current.className = 'items__current'
		count__current.setAttribute('data-counter', count)
		count__current.textContent = res

		const plus = document.createElement('div')
		plus.className = 'items__control'
		plus.setAttribute('data-action', 'plus')
		plus.textContent = '+'

		const prices = document.createElement('div')
		prices.className = 'price'
		const price__weight = document.createElement('div')
		price__weight.className = 'price__weight'
		price__weight.textContent = weight + 'г.'
		const price__currency = document.createElement('div')
		price__currency.className = 'price__currency'
		price__currency.textContent = price

		plus.onclick = () => {
			res = parseInt(count__current.textContent, 10)
			if (res < 10) return (count__current.textContent = res + 1)
		}
		minus.onclick = () => {
			res = parseInt(count__current.textContent, 10)
			if (res != 0) return (count__current.textContent = res - 1)
		}

		const button = document.createElement('button')
		button.setAttribute('data-cart', '')
		button.setAttribute('type', 'button')
		button.className = 'btn btn-block btn-outline-warning'
		button.textContent = '+ в корзину'

		wrapper.append(cart__wrapper)
		cart__wrapper.append(cart__img)
		cart__wrapper.append(cart__body)
		cart__body.append(cart__title)
		cart__body.append(cart__count)
		cart__count.append(cart__count__small)
		cart__body.append(detail__wrapper)
		detail__wrapper.append(couter__wrapper)
		couter__wrapper.append(minus)
		couter__wrapper.append(count__current)
		couter__wrapper.append(plus)

		detail__wrapper.append(prices)
		prices.append(price__weight)
		prices.append(price__currency)
		cart__body.append(button)

		return wrapper
	}

	function cartRender(params) {
		const rows = document.querySelector('.grid-item')
		params.forEach(element => {
			return rows.append(render(element))
		})
	}

	modalForm()
	cartRender(json)
}
main()
