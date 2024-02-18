import { Button } from '@/components/ui/button'
import React from 'react'
import { NavLinks } from '../Links'
import { PaperPlaneIcon } from '@radix-ui/react-icons'

export default function SideNavBar() {
    const links = [
        {nombre : "Enviados", href : "/dashboard/enviados", icon : PaperPlaneIcon}
    ]
  return (
    <div className="h-screen px-2 w-64  flex flex-col  items-center">
        <div className='w-full px-2 h-44 flex items-end justify-center rounded-md bg-blue-600 my-2'>
            <p className='font-bold h-32' >Emailer</p>      
        </div>
        <div className='w-full flex justify-center items-center'>
            <Button >
                <p>Redactar</p>
            </Button>
        </div>
        <div className='w-full flex flex-col'>
            <NavLinks links={links} />
        </div>
    </div>
    )
};