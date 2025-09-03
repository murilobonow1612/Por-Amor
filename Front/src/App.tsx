import React, { useState } from 'react'
import Logo from './assets/Logo_Por_Amor_site.png'
import './index.css'
import down_arrow from './assets/down-arrow.png';
import up_arrow from './assets/up-arrow.png';


const App = () => {

  const [bebidasIsOpen, bebidasSetIsOpen] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

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
            <a href='#' className='navlinks mr-10 hover:text-white'>Monte sua cesta</a>
            <a href='#' className='navlinks mr-10 hover:text-white'>Sobre nós</a>
            <a href='#' className='navlinks mr-10 hover:text-white'>Contato</a>
          </div>
        </div>
        <div className='content text-center mt-10'>
          <h1 className='text-5xl'>Monte sua cesta!</h1>
          <div className='basketbuilder flex text-center mt-10'>
            <div className='basket-section mr-10 shadow-2xl p-6'>
              <p className='mt-10 text-3xl border-b-2 pb-4'>Eu desejo...</p>
              <div className='itemsList mt-5 text-2xl'>





                <button className='section cursor-pointer bg-gray-50 w-full flex pl-5 text-start! rounded-2xl shadow-xl/13 items-center' onClick={() => bebidasSetIsOpen(!bebidasIsOpen)}>Bebidas
                  <span>
                    {bebidasIsOpen ? <img src={up_arrow} className='w-5 ml-5' /> : <img src={down_arrow} className='w-5 ml-5' />}
                  </span>
                </button>

                <div className={bebidasIsOpen ? "block" : "hidden"}>
                    {items.filter((item) => item.category === "Bebidas").map((item) => (
                      <li key={item.id} className='list-none mt-2 flex justify-start!'>
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
              </div>

            </div>
            <div className='basket-section shadow-2xl'>
            </div>
            <button onClick={() => setMenuIsOpen(!menuIsOpen)} className='btn-finalizar fixed bottom-10! right-20 bg-green-300 text-white p-4 rounded-xl shadow-xl/12 text-2xl cursor-pointer'>Finalizar</button>
            <div onClick={() => setMenuIsOpen(!menuIsOpen)} className={`overlay fixed inset-0 transition-all duration-300  ${menuIsOpen ? "backdrop-blur-md bg-black/20" : "backdrop-blur-0 "}`}></div>
            <div className='text-center justify-center flex'>


              <div className={`payment h-160 w-200 fixed z-300 rounded-2xl 
              left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 ${menuIsOpen ? "opacity-100" : "opacity-0"}`}>
                <p>Finalizar</p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}
export default App