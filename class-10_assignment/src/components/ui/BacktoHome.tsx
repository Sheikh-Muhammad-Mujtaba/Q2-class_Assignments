"use client"

import React from 'react'
import { Button } from './button'
import Link from 'next/link'
import { usePathname } from "next/navigation";


function BacktoHome() {
    const pathname = usePathname();
    const hideBackButton = pathname === "/";
  return (
    <>
    {!hideBackButton && (
        <Button size={"sm"} variant={"secondary"}  >
            <Link href={"/"}> 
            &lt;- Back
    </Link>
        </Button>
    )}
    </>
  )
}

export default BacktoHome