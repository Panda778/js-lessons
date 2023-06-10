import { cardItem } from './modal/cardItem.js'
import { renderCart } from './modal/cart.js'
import { modalForm } from './modal/form.js'

// btnModal - массив из элементов батн
cardItem()
modalForm()

//

if (localStorage.getItem('cart')) {
	renderCart()
} else {
	;('')
}

//
