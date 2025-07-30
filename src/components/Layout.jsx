
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
const Layout = ({children }) => {
  
  return (
    <>
      
      <Header />
      <div className="container mx-auto">
          <div className="grid min-h-dvh lg:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem] xl:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem]">
              <Sidebar />
              <div className="col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10"></div>
              <div className="relative row-start-1 p-10">
                  {children}
              </div>
          </div>
      </div>   
    </>
  )
}

export default Layout
