import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Comprador: React.FC = () => {
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [newsletter, setNewsletter] = useState(false);

    const register = () => {
        // Simple validation
        if (!email || !password || password !== confirmPassword) {
            alert('Por favor, preencha todos os campos obrigatórios e verifique se as senhas coincidem.');
            return;
        }

        // Here you would typically send the data to your backend
        // For this example, we'll just redirect to login page
        history.push('/login');
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-black text-white h-24 flex items-center px-4">
                <button onClick={() => history.push('/login')} className="flex items-center">
                    <span className="material-icons text-white text-2xl">arrow_back</span>
                    <span className="ml-4 text-xl font-medium">Cadastre-se</span>
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-6 py-8">
                <div className="form-container w-full">
                    <h1 className="text-3xl text-center mb-8 font-bold">TORNE-SE UM MEMBRO NIKE</h1>
                    
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-center mb-6">DADOS CADASTRAIS</h2>
                        
                        <form id="registerForm">
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Endereço de e-mail *</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="nike-input w-full p-3 border border-gray-300 rounded-lg focus:border-black"
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-sm font-medium mb-2">Senha *</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="nike-input w-full p-3 border border-gray-300 rounded-lg focus:border-black"
                                />
                                <p className="text-xs text-gray-500 mt-2">Use pelo menos 8 caracteres e uma combinação de letras e números</p>
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirmar Senha *</label>
                                <input 
                                    type="password" 
                                    id="confirmPassword" 
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="nike-input w-full p-3 border border-gray-300 rounded-lg focus:border-black"
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="firstName" className="block text-sm font-medium mb-2">Primeiro Nome *</label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="nike-input w-full p-3 border border-gray-300 rounded-lg focus:border-black"
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="lastName" className="block text-sm font-medium mb-2">Sobrenome *</label>
                                <input 
                                    type="text" 
                                    id="lastName" 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="nike-input w-full p-3 border border-gray-300 rounded-lg focus:border-black"
                                />
                            </div>
                            
                            <div className="mb-6">
                                <label htmlFor="birthdate" className="block text-sm font-medium mb-2">Data de Nascimento *</label>
                                <input 
                                    type="date" 
                                    id="birthdate" 
                                    value={birthdate}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    className="nike-input w-full p-3 border border-gray-300 rounded-lg focus:border-black"
                                />
                            </div>
                            
                            <div className="flex items-center mb-8">
                                <input 
                                    type="checkbox" 
                                    id="newsletter" 
                                    checked={newsletter}
                                    onChange={() => setNewsletter(!newsletter)}
                                    className="mr-3 w-5 h-5"
                                />
                                <label htmlFor="newsletter" className="text-sm">Quero me inscrever para receber e-mails exclusivos da Nike, com ofertas de produtos, inspirações e muito mais.</label>
                            </div>
                            
                            <p className="text-xs text-gray-500 mb-6">Ao criar sua conta, você concorda com os <a href="#" className="underline">Termos de Uso</a> e <a href="#" className="underline">Política de Privacidade</a> da Nike, incluindo o <a href="#" className="underline">Uso de Cookies</a>.</p>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-black text-white py-6 px-4">
                <button onClick={register} className="w-full bg-black text-white py-4 rounded-lg text-center text-xl font-bold">
                    CADASTRAR
                </button>
            </footer>
        </div>
    );
};

export default Comprador;
;