export function validateForm(): void {
    const registerForm = document.getElementById('registerForm') as HTMLFormElement;
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirmPassword') as HTMLInputElement;
    const termsCheckbox = document.getElementById('terms') as HTMLInputElement;
    
    // Error elements
    const nameError = document.getElementById('nameError') as HTMLElement;
    const emailError = document.getElementById('emailError') as HTMLElement;
    const passwordError = document.getElementById('passwordError') as HTMLElement;
    const confirmPasswordError = document.getElementById('confirmPasswordError') as HTMLElement;
    
    registerForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        let isValid = true;
        
        // Reset errors
        [nameError, emailError, passwordError, confirmPasswordError].forEach(el => {
            el.classList.add('hidden');
        });
        
        // Validate name
        if (nameInput.value.trim().length < 3) {
            nameError.classList.remove('hidden');
            nameInput.classList.add('shake');
            isValid = false;
            setTimeout(() => nameInput.classList.remove('shake'), 500);
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.classList.remove('hidden');
            emailInput.classList.add('shake');
            isValid = false;
            setTimeout(() => emailInput.classList.remove('shake'), 500);
        }
        
        // Validate password
        if (passwordInput.value.length < 6) {
            passwordError.classList.remove('hidden');
            passwordInput.classList.add('shake');
            isValid = false;
            setTimeout(() => passwordInput.classList.remove('shake'), 500);
        }
        
        // Validate confirm password
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.classList.remove('hidden');
            confirmPasswordInput.classList.add('shake');
            isValid = false;
            setTimeout(() => confirmPasswordInput.classList.remove('shake'), 500);
        }
        
        // Validate terms
        if (!termsCheckbox.checked) {
            termsCheckbox.classList.add('shake');
            isValid = false;
            setTimeout(() => termsCheckbox.classList.remove('shake'), 500);
        }
        
        if (isValid) {
            // Simulate form submission
            const submitButton = registerForm.querySelector('button[type="submit"]') as HTMLButtonElement;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Cadastrando...';
            submitButton.disabled = true;
            
            // In a real app, you would send the data to your backend here
            setTimeout(() => {
                alert('Cadastro realizado com sucesso! Redirecionando...');
                // In a real app, you would redirect to the login page or dashboard
                window.location.href = '/login';
            }, 1500);
        }
    });
    
    // Add input validation on blur
    nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim().length < 3) {
            nameError.classList.remove('hidden');
        } else {
            nameError.classList.add('hidden');
        }
    });
    
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.classList.remove('hidden');
        } else {
            emailError.classList.add('hidden');
        }
    });
    
    passwordInput.addEventListener('blur', () => {
        if (passwordInput.value.length < 6) {
            passwordError.classList.remove('hidden');
        } else {
            passwordError.classList.add('hidden');
        }
    });
    
    confirmPasswordInput.addEventListener('blur', () => {
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.classList.remove('hidden');
        } else {
            confirmPasswordError.classList.add('hidden');
        }
    });
}
