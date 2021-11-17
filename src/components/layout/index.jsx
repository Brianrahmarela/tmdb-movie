import React from 'react'


const Layout = ({ children }) => {
  return (
    <div>
        <main className="max-w-6xl mx-auto">
          { children }
        </main>
    </div>
  )
}

export default Layout

