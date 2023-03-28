import React, { ReactNode } from 'react'

export const Container = ({ children }: { children: ReactNode }) => {
    return (
        <main className='container mx-auto px-4'>{
            children
        }</main>
    )
}
