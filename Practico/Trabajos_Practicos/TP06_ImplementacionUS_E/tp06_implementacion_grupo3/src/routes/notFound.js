import React from 'react'

export default function notFound() {
  return (
    <>
    <div className='bg-coffee-500 bg-opacity-70 w-50'>
        <div className="alert alert-error shadow-lg">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Error! La dirección ingresada no existe.</span>
        </div>
        <button className='btn' onClick={() => {window.location.href='./order'}}>Volver al Inicio</button>
        </div>
    </div>
    </>
  )
}
