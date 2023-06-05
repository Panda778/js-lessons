import { datas } from '../data/getData.js'
import { renderCart } from './cart.js'
export function cardItem() {
	let arr = []
	let total = 0
	let res = 0
	let ads = JSON.parse(localStorage.getItem('cart'))
	if (ads) {
		ads.forEach(element => {
			arr.push(element)
		})
	}

	document.addEventListener('DOMContentLoaded', () => {
		return datas
	})

	function render(card) {
		const { name, img, id, count, weight, price, hit } = card
		const wrapper = document.createElement('div')
		wrapper.className = 'col-md-6'
		wrapper.setAttribute('data-id', id)
		const hits = document.createElement('span')
		hits.className = 'bookmark'
		hits.textContent = 'HIT'

		const card__wrapper = document.createElement('div')
		card__wrapper.className = 'card mb-4'
		card__wrapper.setAttribute('data-id', id)

		const card__img = document.createElement('img')
		card__img.setAttribute('src', img)
		card__img.setAttribute('alt', 'img')
		card__img.className = 'product-img'

		const card__body = document.createElement('div')
		card__body.className = 'card-body text-center'

		const card__title = document.createElement('h4')
		card__title.className = 'item-title'
		card__title.textContent = name

		const card__count = document.createElement('p')
		const card__count__small = document.createElement('small')
		card__count__small.setAttribute('data-items-in-box', '')
		card__count__small.className = 'text-muted'
		card__count__small.textContent = count + 'шт'

		const detail__wrapper = document.createElement('div')
		detail__wrapper.className = 'details-wrapper'
		const couter__wrapper = document.createElement('div')
		couter__wrapper.className = 'items counter-wrapper'

		const minus = document.createElement('div')
		minus.className = 'items__control'
		minus.setAttribute('data-action', 'minus')
		minus.textContent = '-'

		const count__current = document.createElement('div')
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
			if (res < 10) {
				res = res + 1
				count__current.textContent = res
			}
		}
		minus.onclick = () => {
			res = parseInt(count__current.textContent, 10)
			if (res != 0) count__current.textContent = res - 1
		}

		const button = document.createElement('button')
		button.setAttribute('data-card', '')
		button.setAttribute('type', 'button')
		button.className = 'btn btn-block btn-outline-warning'
		button.textContent = '+ в корзину'

		wrapper.append(card__wrapper)
		card__wrapper.append(card__img)
		card__wrapper.append(card__body)
		card__body.append(card__title)
		card__body.append(card__count)
		card__count.append(card__count__small)
		card__body.append(detail__wrapper)
		detail__wrapper.append(couter__wrapper)
		couter__wrapper.append(minus)
		couter__wrapper.append(count__current)
		couter__wrapper.append(plus)

		detail__wrapper.append(prices)
		prices.append(price__weight)
		prices.append(price__currency)
		card__body.append(button)
		button.onclick = () => {
			const obj = {
				id: card.id,
				count: count__current.textContent,
			}

			if (ads) {
				arr.findIndex(function (value, idx, arrs) {
					if (value.id === obj.id) {
						let num = (obj.count =
							parseInt(value.count, 10) + parseInt(obj.count, 10))
						value.count = num
						localStorage.setItem('cart', JSON.stringify(arr))
					}
				})
			} else {
				if (arr.length !== 0) {
					arr.findIndex(function (value, idx, arrs) {
						if (value.id !== obj.id) {
							arr.push(obj)
							localStorage.setItem('cart', JSON.stringify(arr))
						}
					})
				} else {
					arr.push(obj)
					localStorage.setItem('cart', JSON.stringify(arr))
				}
			}
			// if (ads) {
			// 	ads.filter(item => {
			// 		if (item.id === obj.id) {
			// 			let num = (obj.count =
			// 				parseInt(item.count, 10) + parseInt(obj.count, 10))

			// 			arr.forEach(i => {
			// 				if (i.id === obj.id) {
			// 					obj.count = num
			// 					arr.push(obj)
			// 					console.log('dasda', arr)
			// 					localStorage.setItem('cart', JSON.stringify(arr))
			// 				} else {
			// 					arr.push(obj)
			// 					localStorage.setItem('cart', JSON.stringify(arr))
			// 				}
			// 			})
			// 		}
			// 	})
			// } else {
			// 	arr.push(obj)
			// 	localStorage.setItem('cart', JSON.stringify(arr))
			// }
			renderCart()
		}
		return wrapper
	}

	function cardRender(params) {
		const rows = document.querySelector('.grid-item')
		params.forEach(element => {
			return rows.append(render(element))
		})
	}

	cardRender(datas)
}

// 1 перепись данных
