import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <main className="p-4">
        <Outlet/>
      </main>
    </>
  )
}

export default AppLayout