import { Toaster } from '@/components/ui/toaster'
import React from 'react'
import {SideNavBar} from '@/app/ui/dashboard'

export default function Layout({children}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full h-screen  md:w-64 ">
            <SideNavBar/>
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
        </div>
    </div>
    )
}
