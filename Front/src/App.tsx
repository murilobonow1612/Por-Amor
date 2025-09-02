import React, { useState } from 'react'
import Logo from './assets/Logo_Por_Amor_site.png'
import './index.css'

const App = () => {

  const [bebidasIsOpen, bebidasSetIsOpen] = useState(false)

  type Item = {
    id: number,
    name: string,
    emoji: string,
    category: string,
    price: number
  }


  const items: Item[] = [
    { id: 1, name: 'vinho', emoji: '🍷', category: 'Bebidas', price: 15.00 },
    { id: 2, name: 'espumante', emoji: '🍾', category: 'Bebidas', price: 20.00 }
  ]


  return (
    <div>
      <div className='page_Container w-full'>
        <div className='navbar w-full py-5 shadow-xl/15 flex items-center bg-sla-100'>
          <div className='brand flex items-center'>
            <img src={Logo} className='w-50 mr-10' />
            <p className='text-white text-2xl'>Presentes que vêm do coração</p>
          </div>
          <div className='links text-2xl ml-100'>
            <a href='#' className='mr-10 hover:text-white scale-350'>Monte sua cesta</a>
            <a href='#' className='mr-10'>Sobre nós</a>
            <a href='#' className='mr-10'>Contato</a>
          </div>
        </div>
        <div className='content text-center mt-20'>
          <h1 className='text-5xl'>Monte sua cesta!</h1>
          <div className='basketbuilder flex text-center mt-10'>
            <div className='basket-section mr-10 shadow-2xl p-6'>
              <p className='mt-10 text-3xl border-b-2 pb-4'>Eu desejo...</p>
              <div className='itemsList text-start mt-5 text-2xl'>
                <button onClick={() => bebidasSetIsOpen(!bebidasIsOpen)}>Bebidas
                  <span>
                    {bebidasIsOpen ? "▲" : "▼"}
                  </span>
                </button>


                {bebidasIsOpen ? (
                  <div>
                    {items.filter((item) => item.category === "Bebidas").map((item) => (
                      <li key={item.id} className='lista_de_itens list-none mt-2 flex'>
                        <div className='checkbox-wrapper mr-1'>
                          <input type="checkbox" className="check" id={(item.id).toString()} />
                          <label htmlFor={(item.id).toString()} className="label">
                            <svg width="45" height="45" viewBox='0 0 95 95'>
                              <rect x="30" y="20" width="50" height="50" stroke='black' fill='none'></rect>
                              <g transform="translate(0,-952.36222)">
                                <path d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4" stroke="black" stroke-width="3" fill="none" className="path1"></path>
                              </g>
                            </svg>
                          </label>
                        </div>
                        {item.name}<span>{item.emoji}</span>
                      </li>
                    ))
                    }
                  </div>
                ) : (
                  ""
                )}
              </div>

            </div>
            <div className='basket-section shadow-2xl'>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App