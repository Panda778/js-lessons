// btnModal - массив из элементов батн

let btnModal = document.querySelectorAll('#btnmodal')
let modals = document.querySelector('.modal-auth')

btnModal.forEach(item => {
	item.addEventListener('click', () => {
		modals.classList.toggle('modal-open')
	})
})
