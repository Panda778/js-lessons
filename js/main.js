// btnModal - массив из элементов батн

const btnsModal = document.querySelectorAll('#btnmodal')
const btnOut = document.querySelector('.button-out')
const modals = document.querySelector('.modal-auth')
const form = document.querySelector('#logInForm')
const logIn = document.querySelector('#login')
const password = document.querySelector('#password')
const logInName = document.querySelector('.user-name')
const modal_auth = document.querySelector('.modal-auth__dialog')

if (localStorage.length !== 0) {
	logInName.textContent = getLocalValue('login', 'name')
	addClass(btnsModal[0], 'none')
	deleteClass(btnOut, 'none')
}

function getLocalValue(key, val) {
	let login = JSON.parse(localStorage.getItem(key))

	return login[val]
}

function addClass(event, value) {
	return event.classList.add(value)
}

function deleteClass(event, value) {
	return event.classList.remove(value)
}

function toggleClass(event, value) {
	return event.classList.toggle(value)
}

btnsModal.forEach(item => {
	item.addEventListener('click', () => {
		toggleClass(modals, 'modal-open')
	})
})

btnOut.addEventListener('click', () => {
	addClass(btnOut, 'none')
	deleteClass(btnsModal[0], 'none')
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
		deleteClass(modals, 'modal-open')
		addClass(btnsModal[0], 'none')
		deleteClass(btnOut, 'none')
		logInName.textContent = getLocalValue('login', 'name')
	} else {
		// delayu validate
		;('')
	}
}

form.addEventListener('submit', logins)
