import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <>
      {/* sidebar */}
      <aside className="fixed left-0 top-0 w-[100px] h-screen bg-purple500"></aside>
      <main
        className="absolute left-[100px] p-10"
        style={{ width: 'calc(100% - 100px)' }}
      >
        <Outlet />
      </main>
    </>
  )
}

export default DashboardLayout
