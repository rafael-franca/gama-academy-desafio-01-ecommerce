import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import SaleBackgroundImg from '../public/sale-background.jpg'

export default function Home() {
    const [email, setEmail] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleSubmitForm = () => {
        localStorage.setItem('email', email);
        localStorage.setItem('acceptTerm', String(acceptTerms));
        
        setEmail('');
        setAcceptTerms(false);
        setIsRegistered(true);
    }

    return (
        <>
            <Head>
                <title>🎅🏻 Noel Super Sale - Noel Store</title>
            </Head>

            <div className="h-screen relative overflow-hidden flex bg-gradient-to-b from-blue-50 to-blue-100">
                <div className="z-10 flex-1 w-full max-w-lg py-8 bg-white md:py-16 flex items-center">
                    <div className="w-full max-w-md px-4 mx-auto sm:px-6 md:px-8">
                        {isRegistered ? (
                            <div className="flex flex-col items-center p-8 space-y-4">
                                <div className="flex items-center justify-center w-16 h-16">
                                    <p className="text-5xl">🥳</p>
                                </div>
                    
                                <header className="max-w-xs space-y-1 text-center">
                                    <h2 className="text-xl font-semibold tracking-tight">Parabéns!</h2>
                        
                                    <p className="text-sm font-medium text-gray-500">
                                        Você receberá as melhores e maiores ofertas de natal. É só aguardar e aproveitar!
                                    </p>
                                </header>
                            </div>
                        ) : (
                            <>
                                <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
                                    🎅🏻 Noel Super Sale
                                </h1>

                                <p className="mt-4 text-base font-medium text-gray-500">
                                    Cadastre-se e receba primeiro todas as informações, descontos e novidades da maior sale de natal do ano.
                                </p>

                                <form className="mt-8 space-y-6" action="">
                                    <div className="space-y-2">
                                        <label className="inline-block text-sm font-medium text-gray-700"
                                            htmlFor="email">E-mail</label>

                                        <input
                                            className="block w-full h-12 transition duration-75 border-gray-300 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-red-600 focus:border-red-600"
                                            id="email"
                                            type="email"
                                            required
                                            onChange={event => setEmail(event.target.value)} />
                                    </div>

                                    <div className="flex space-x-3">
                                        <input
                                            className="text-red-500 transition border border-gray-300 rounded shadow-sm focus:border-red-500 focus:ring-2 focus:ring-red-500"
                                            id="terms_of_service"
                                            type="checkbox"
                                            required
                                            onChange={() => setAcceptTerms(!acceptTerms)} />

                                        <label className="inline-block text-sm font-medium leading-5 text-gray-700"
                                            htmlFor="terms_of_service">
                                            Ao se cadastrar no noelstore.com.br você aceita nossos Termos e Condições de Uso e nossa Política de Privacidade.
                                        </label>
                                    </div>

                                    <button
                                        className="flex items-center justify-center w-full h-10 px-3 text-sm font-semibold tracking-tight text-white transition bg-red-600 rounded-lg shadow hover:bg-red-500 focus:bg-red-700 focus:outline-none focus:ring-offset-2 focus:ring-offset-red-700 focus:ring-2 focus:ring-white focus:ring-inset disabled:bg-opacity-50 disabled:cursor-not-allowed"
                                        type="button"
                                        onClick={handleSubmitForm}
                                        disabled={!acceptTerms && !email}>
                                        Enviar
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
                <div className="relative flex-1">
                    <Image src={SaleBackgroundImg} layout="fill" alt="🎅🏻 Noel Super Sale" loading="lazy" objectFit="cover" />
                    <div className="absolute bottom-0 right-0">
                        <p className="p-3 bg-white bg-opacity-90 text-gray-800 rounded-tl text-xs m-0">Foto de <a href="https://www.pexels.com/pt-br/@max-fischer?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Max Fischer</a> no <a href="https://www.pexels.com/pt-br/foto/homem-de-casaco-marrom-segurando-um-microfone-5868722/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Pexels</a>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}