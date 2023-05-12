// btnModal - массив из элементов батн

const btnsModal = document.querySelectorAll('#btnmodal')
const btnOut = document.querySelector('.button-out')
const modals = document.querySelector('.modal-auth')
const form = document.querySelector('#logInForm')
const logIn = document.querySelector('#login')
const password = document.querySelector('#password')
const logInName = document.querySelector('#loginName')
const modal_auth = document.querySelector('.modal-auth__dialog')
const loginSucces = JSON.parse(localStorage.getItem('login'))

if (loginSucces) {
	logInName.innerHTML = `Добро пожаловать : ${loginSucces.name}`
	btnsModal[0].classList.add('none')
	btnOut.classList.remove('none')
}
// close open modal
btnsModal.forEach(item => {
	item.addEventListener('click', () => {
		modals.classList.toggle('modal-open')
	})
})

btnOut.addEventListener('click', () => {
	btnOut.classList.add('none')
	btnsModal[0].classList.remove('none')
	logInName.innerHTML = ''
	localStorage.removeItem('login')
})

// input login func
function logins(e) {
	e.preventDefault()

	if (logIn.value.trim() !== '' && password.value.trim() !== '') {
		let obj = {
			name: logIn.value,
			password: password.value,
		}
		localStorage.setItem('login', JSON.stringify(obj))
		logIn.value = ''
		password.value = ''
		modals.classList.remove('modal-open')
		btnsModal[0].classList.add('none')
		btnOut.classList.remove('none')
	} else {
		alert('pliz zapolni polya')
		logIn.value[0]
		password.value = ''
	}
	loginSucces
		? (logInName.innerHTML = `Добро пожаловать : ${loginSucces.name}`)
		: ''
}

form.addEventListener('submit', logins)
