import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import SendToDatabase from './api/saveData';

const MyForm = () => {
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [name, setName] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Email changed:', event.target.value); // Adicione este log
        setEmail(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Name changed:', event.target.value); // Adicione este log
        setName(event.target.value);
    };

    const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Telefone changed:', event.target.value); // Adicione este log
        setTelefone(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Aqui você pode usar os valores de email e telefone
        console.log(email);
        console.log(telefone);
        console.log(name);
        SendToDatabase(name, email, telefone);
    };

    return ( 
        <div className='flex justify-center text-center py-12'>
            <div className='flex justify-center w-[600px] rounded-xl bg-white'>
            <form onSubmit={handleSubmit}>
            <p className='text-black py-6 pt-12 font-serif'>Um de nossos consultores vai entrar em contacto consigo</p>
            <div className='py-2'>
                    <input 
                        type="name" 
                        id="name" 
                        value={name} 
                        placeholder='SEU NOME'
                        onChange={handleNameChange} 
                        className=" p-2 border w-full border-gray-300 rounded text-black"
                    />
                </div>
                <div className='py-2'>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        placeholder='SEU MELHOR E-MAIL'
                        onChange={handleEmailChange} 
                        className=" p-2 border w-full border-gray-300 rounded text-black"
                    />
                </div>
                <div className='py-2'>
                    <input 
                        type="tel" 
                        id="telefone" 
                        value={telefone} 
                        placeholder='SEU WHATSAPP'
                        onChange={handleTelefoneChange} 
                        className=" p-2 border w-full border-gray-300 rounded text-black"
                    />
                </div>
                <div className='py-4'>
                    <Button className='rounded-xl py-8 text-lg text-white w-full' type='submit' variant={'blueFCS'} size={'sm'}>
                        QUERO TER MINHA VIDA TRANSFORMADA
                    </Button>
                </div>
                <div>
                    <p className='text-black pb-12 font-serif'>Preenche o formulário acima e <span className='font-bold'>tenha a vida transformada</span></p>
                </div>
            </form>
            </div>
        </div>
    );
}

export default MyForm;
