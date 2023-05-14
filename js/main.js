// btnModal - массив из элементов батн

function modalForm() {
	const btnsModal = document.querySelectorAll('#btnmodal')
	const btnOut = document.querySelector('.button-out')
	const modals = document.querySelector('.modal-auth')
	const form = document.querySelector('#logInForm')
	const logIn = document.querySelector('#login')
	const password = document.querySelector('#password')
	const logInName = document.querySelector('.user-name')
	const postalRGEX = /^[А-ЯА-яA-Za-z0-9]{1,15}$/

	if (localStorage.length !== 0) {
		logInName.textContent = getLocalValue('login', 'name')
		addClass(btnsModal[0], 'none')
		deleteClass(btnOut, 'none')
	}
	function removeError(inputs) {
		const parent = form.querySelectorAll('.error-label')
		console.log(parent)
		if (parent.length !== 0) {
			parent.forEach(item => {
				item.remove()
			})
		} else {
			inputs.forEach(item => {
				deleteClass(item, 'warning-input')
			})
		}
	}
	function validateInputs(arr) {
		arr.forEach(item => {
			if (item.value === '') {
				const text = document.createElement('label')
				addClass(text, 'error-label')
				addClass(item, 'warning-input')
				item.after(text)
				item.type === 'text'
					? (text.innerHTML = 'введите логин не менее 3 символов')
					: (text.innerHTML = 'введите пароль не менее 3 символов')
			} else {
				deleteClass(item, 'warning-input')
			}
		})
	}

	function getLocalValue(key, val) {
		const login = JSON.parse(localStorage.getItem(key))

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

	function outFunction() {
		removeError([logIn, password])
		addClass(btnOut, 'none')
		deleteClass(btnsModal[0], 'none')
		logInName.innerHTML = ''

		localStorage.removeItem('login')
	}

	function toggleBtn() {
		removeError([logIn, password])
		toggleClass(modals, 'modal-open')
		password.value = ''
		logIn.value = ''
	}

	btnsModal.forEach(item => {
		item.addEventListener('click', toggleBtn)
	})

	btnOut.addEventListener('click', outFunction)

	// input login func
	function logins(e) {
		e.preventDefault()
		removeError([logIn, password])

		if (
			logIn.value.trim() !== '' &&
			password.value.trim() !== '' &&
			postalRGEX.test(logIn.value) !== false
		) {
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
			validateInputs([logIn, password])
		}
	}

	form.addEventListener('submit', logins)
}

modalForm()
