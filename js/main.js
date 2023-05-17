// btnModal - массив из элементов батн

import { modalForm } from './form.js'

async function main() {
	const response = await fetch('/data.json')
	const json = await response.json()
	document.addEventListener('DOMContentLoaded', () => {
		return json
	})

	function renderItem(arr) {
		const rows = document.querySelector('.grid-item')
		let items = ''
		for (const item of arr) {
			items += `
			<div class="col-md-6" data-id=${item.id}>
			${item.hit ? ` <span class='bookmark'>HIT</span> ` : ''}

			<div class="card mb-4" data-id="01">
				<img class="product-img" src=${item.img} alt="">
				<div class="card-body text-center">
					<h4 class="item-title">${item.name}</h4>
					<p><small data-items-in-box class="text-muted">${item.count}</small></p>

					<div class="details-wrapper">
						<div class="items counter-wrapper">
							<div class="items__control" data-action="minus">-</div>
							<div class="items__current" data-counter>1</div>
							<div class="items__control" data-action="plus">+</div>
						</div>

						<div class="price">
							<div class="price__weight">${item.weight}г.</div>
							<div class="price__currency">${item.price}₽</div>
						</div>
					</div>

					<button data-cart type="button" class="btn btn-block btn-outline-warning">+ в корзину</button>

				</div>
			</div>
		</div>`
		}
		rows.innerHTML = items
	}
	modalForm()

	renderItem(json)
}
main()
