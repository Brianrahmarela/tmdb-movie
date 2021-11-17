import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div 
      className="bg-green-500 h-16" 
      data-testid="navbar"
    >
      <main className="flex flex-row justify-between max-w-7xl mx-auto p-4">
          <Link to='/'><h1 className="text-white font-bold text-2xl">
              TMDB 
            </h1></Link>
        <main className="flex">
          <h2 className="text-white font-bold text-xl mx-4">
          <Link to='/detail'>Detail</Link>
          </h2>
          <h2 className="text-white font-bold text-xl">
          <Link to='/watched'>Watched</Link>
          </h2>
        </main>
      </main>
    </div>
  )
}

export default Header