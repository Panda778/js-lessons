import { cardItem } from './modal/cardItem.js'
import { renderCart } from './modal/cart.js'
import { modalForm } from './modal/form.js'

// btnModal - массив из элементов батн
cardItem()
modalForm()

if (localStorage.getItem('cart') !== null) {
	//тут код я беру блок с надписью пустая корзина даю дисплей ноне и отрисовываваю
	renderCart()
} else {
}
//

//
