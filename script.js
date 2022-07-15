const nameInput = document.querySelector('#contactName');
const namePlaceholder = document.querySelector('#namePlaceholder');
const emailInput = document.querySelector('#contactEmail');
const emailPlaceholder = document.querySelector('#emailPlaceholder');
const subjectInput = document.querySelector('#contactSubject');
const subjectPlaceholder = document.querySelector('#subjectPlaceholder');
const messageInput = document.querySelector('#contactMessage');
const messagePlaceholder = document.querySelector('#messagePlaceholder');
const submitBtn = document.querySelector('#contactBtn');
const contactForm = document.querySelector('#contactForm');

const aboutElement = document.querySelector('#about');
const skillElement = document.querySelector('#skill');
const hobbieElement = document.querySelector('#hobbie');
const formationElement = document.querySelector('#formation');
const projectsElement = document.querySelector('#projects');
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const subjectError = document.querySelector('#subjectError');
const messageError = document.querySelector('#messageError');

nameInput.addEventListener('blur', () => {
    if (nameInput.value !== '') {
        namePlaceholder.classList.add('active');
    } else {
        namePlaceholder.classList.remove('active');
    }

    if (nameInput.value === '') {
        nameError.style.display = 'none';
        nameInput.style.boxShadow = '0 2px rgba(0, 0, 0, 0.2)';
    } else if (nameInput.value.length < 3) {
        nameError.style.display = 'block';
        nameInput.style.boxShadow = '0 2px rgba(255, 0, 0)';
    } else {
        nameError.style.display = 'none';
        nameInput.style.boxShadow = '0 2px rgba(0, 0, 0, 0.2)';
    }
});

emailInput.addEventListener('blur', () => {
    if (emailInput.value !== '') {
        emailPlaceholder.classList.add('active');
    } else {
        emailPlaceholder.classList.remove('active');
    }

    if (emailInput.value === '') {
        emailError.style.display = 'none';
        emailInput.style.boxShadow = '0 2px rgba(0, 0, 0, 0.2)';
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        emailError.style.display = 'none';
        emailInput.style.boxShadow = '0 2px rgba(0, 0, 0, 0.2)';
    } else {
        emailError.style.display = 'block';
        emailInput.style.boxShadow = '0 2px rgba(255, 0, 0)';
    }
});

subjectInput.addEventListener('blur', () => {
    if (subjectInput.value !== '') {
        subjectPlaceholder.classList.add('active');
    } else {
        subjectPlaceholder.classList.remove('active');
    }

    if (subjectInput.value === '') {
        subjectError.style.display = 'none';
        subjectInput.style.boxShadow = '0 2px rgba(0, 0, 0, 0.2)';
    } else if (subjectInput.value.length < 3) {
        subjectError.style.display = 'block';
        subjectInput.style.boxShadow = '0 2px rgba(255, 0, 0)';
    } else {
        subjectError.style.display = 'none';
        subjectInput.style.boxShadow = '0 2px rgba(0, 0, 0, 0.2)';
    }
});

messageInput.addEventListener('blur', () => {
    if (messageInput.value !== '') {
        messagePlaceholder.classList.add('active');
    } else {
        messagePlaceholder.classList.remove('active');
    }

    if (messageInput.value === '') {
        messageError.style.display = 'none';
        messageInput.style.boxShadow = '0 2px rgba(0, 0, 0, 0.2)';
    } else if (messageInput.value.length < 10) {
        messageError.style.display = 'block';
        messageInput.style.boxShadow = '0 2px rgba(255, 0, 0)';
    } else {
        messageError.style.display = 'none';
        messageInput.style.boxShadow = '0 2px rgba(0, 0, 0, 0.2)';
    }
});

messageInput.addEventListener('scroll', () => {
    console.log(messageInput.scrollTop);
    if (messageInput.scrollTop >= 17) {
        messagePlaceholder.style.opacity = '0';
    } else {
        messagePlaceholder.style.opacity = '1';
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (
        nameInput.value !== '' &&
        emailInput.value !== '' &&
        subjectInput.value !== '' &&
        messageInput.value !== '' &&
        nameInput.value.length >= 3 &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value) &&
        subjectInput.value.length >= 3 &&
        messageInput.value.length >= 10
    ) {
        alert('Mensagem Enviada com Sucesso!');
        nameInput.value = '';
        emailInput.value = '';
        subjectInput.value = '';
        messageInput.value = '';
        namePlaceholder.classList.remove('active');
        emailPlaceholder.classList.remove('active');
        subjectPlaceholder.classList.remove('active');
        messagePlaceholder.classList.remove('active');
    } else {
        alert('Favor verificar as informações abaixo!');
    }
});

aboutElement.addEventListener('click', () => {
    window.scrollTo({ top: 527, behavior: 'smooth' });
});

skillElement.addEventListener('click', () => {
    window.scrollTo({ top: 929, behavior: 'smooth' });
});

hobbieElement.addEventListener('click', () => {
    window.scrollTo({ top: 1254, behavior: 'smooth' });
});

formationElement.addEventListener('click', () => {
    window.scrollTo({ top: 1622, behavior: 'smooth' });
});

projectsElement.addEventListener('click', () => {
    window.scrollTo({ top: 2207, behavior: 'smooth' });
});
