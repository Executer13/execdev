import React from 'react'

 const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        {children}
    </div>
  )
}

export default Layout;