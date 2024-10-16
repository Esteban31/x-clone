import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const RightBarComponent = () => {

    const userSession = JSON.parse(localStorage.getItem('userSession'))
    const [usersCollection, setUsersCollection] = useState([])

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('usersCollection')) || [];
        const filteredUser = storedUsers.filter(item => item.user != userSession.user);
        setUsersCollection(filteredUser);

    }, []);

    return (
        <>
            <div className="searchContainer sticky top-0 bg-black z-10 w-full h-auto">
                <label class="input input-bordered flex items-center rounded-full w-full">
                    <input type="text" class="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="h-4 w-4 opacity-70"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </label>
            </div>
            <div className="card h-auto flex justify-center border-2 border-white mt-10 ml-4 w-full">
                <div className="card-body">
                    <h3 className="font-extrabold">Subscríbete a premium</h3>
                    <p className="text-sm">
                        Suscríbete para desbloquear nuevas funciones y, si eres
                        elegible, recibir un pago de cuota de ingresos por anuncios.
                    </p>
                    <button className="w-2/3 btn bg-custom-blue text-custom-gray rounded-full">
                        Susbscibirte
                    </button>
                </div>
            </div>
            <div className="card h-auto flex justify-center border-2 border-white mt-10 ml-4 w-full">
                <div className="card-body">
                    <h3 className="font-extrabold">Qué está pasando</h3>
                    <h4>Entretenimiento-Tendencia</h4>
                    <h1 className="font-bold">Por conocer</h1>
                    {usersCollection.map((follower, index) => (
                        <Link key={index} to={"/app/"+follower.user.replace('@','')}>
                            <li class="flex items-center py-4 text-white" >
                                <img class="w-10 h-10 rounded-full" src={follower.profilePic} alt="Foto de perfil" />
                                <div class="ml-4">
                                    <p class="text-sm font-semibold">{follower.userName}</p>
                                    <p class="text-sm text-gray-600">{follower.user}</p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
