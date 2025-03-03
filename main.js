const userNameInput = document.querySelector('.user-name')
const passwordInput = document.querySelector('.password')
const passRepeatInput = document.querySelector('.password-repeat')
const mailInput = document.querySelector('.mail')

const nameError = document.querySelector('.p-name')
const passwordError = document.querySelector('.p-pass')
const passRepeatError = document.querySelector('.p-repeat')
const mailError = document.querySelector('.p-mail')

const btnClear = document.querySelector('.clear')
const btnSend = document.querySelector('.send')
const btnClose = document.querySelector('.close')

const alertWindow = document.querySelector('.alert')

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')
	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clerError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkForm = input => {
	input.forEach(elem => {
		if (elem.value === '') {
			showError(elem, elem.placeholder)
		} else {
			clerError(elem)
		}
	})
}

// const nameCheck = e => {
// 	let nameText = userNameInput.value
// 	if (nameText.length < 3) {
// 		nameError.style.display = 'block'
// 		userNameInput.style.backgroundColor = 'rgb(129, 155, 233, .3)'
// 	} else {
// 		nameError.style.display = 'none'
// 		userNameInput.style.backgroundColor = 'white'
// 	}
// }

// const passCheck = e => {
// 	let nameText = passwordInput.value
// 	if (nameText.length < 8) {
// 		passwordError.style.display = 'block'
// 		passwordInput.style.backgroundColor = 'rgb(129, 155, 233, .3)'
// 	} else {
// 		passwordError.style.display = 'none'
// 		passwordInput.style.backgroundColor = 'white'
// 	}
// }

// const repeatCheck = e => {
// 	let nameText = passRepeatInput.value
// 	if (nameText.length < 8 || nameText !== passwordInput.value) {
// 		passRepeatError.style.display = 'block'
// 		passRepeatInput.style.backgroundColor = 'rgb(129, 155, 233, .3)'
// 	} else {
// 		passRepeatError.style.display = 'none'
// 		passRepeatInput.style.backgroundColor = 'white'
// 	}
// }

// const mailCheck = e => {
// 	let nameText = mailInput.value
// 	if (nameText.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
// 		mailError.style.display = 'none'
// 		mailInput.style.backgroundColor = 'white'
// 	} else {
// 		mailError.style.display = 'block'
// 		mailInput.style.backgroundColor = 'rgb(129, 155, 233, .3)'
// 	}
// }

const clearAll = e => {
	e.preventDefault()
	;[userNameInput, passwordInput, passRepeatInput, mailInput].forEach(elem => {
		elem.value = ''
		// elem.style.display = 'none'
		// elem.style.backgroundColor = 'white'
	})
}

const sendBtnEvents = () => {
	// nameCheck()
	// passCheck()
	// repeatCheck()
	// mailCheck()
	// showAlert()

	checkForm([userNameInput, passwordInput, passRepeatInput, mailInput])
}

const showAlert = () => {
	if (
		nameError.style.display == 'none' &&
		passwordError.style.display == 'none' &&
		passRepeatError.style.display == 'none' &&
		mailError.style.display == 'none'
	) {
		alertWindow.style.display = 'block'
	}
}
const closeAlert = () => {
	alertWindow.style.display = 'none'
}

btnClear.addEventListener('click', clearAll)
btnSend.addEventListener('click', sendBtnEvents)
btnClose.addEventListener('click', closeAlert)
