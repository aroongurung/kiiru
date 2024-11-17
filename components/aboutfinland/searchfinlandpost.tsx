'use client'
import React, { useState } from 'react'
import { FinlandPostMetadata} from '@/lib/finlandposts'
import FinlandPosts from '@/components/aboutfinland/finlandposts'
import {Input} from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'


export default function SearchFinlandPost({finlandposts}: {finlandposts: FinlandPostMetadata[]}) {
    const[query, Setquery] = useState("")
    const filtered = finlandposts.filter(finlandpost =>
        finlandpost.title?.toLowerCase().includes(query.toLocaleLowerCase())
    )
    const isFiltered = query.length > 0
    function resetFilter(){
        Setquery(" ")
    }

  return (
    <div>
        <div className='mb-12 flex items-center gap-3'>
            <Input 
                type='text'
                placeholder='Search Finlandposts ...'
                className= 'h-9 w-full sm:w-1/2'
                value = {query}
                onChange = {e => Setquery(e.target.value)}
            />
            {isFiltered && (
                <Button 
                    size='sm'
                    variant='secondary'
                    onClick={resetFilter}
                    className='h-8 px-2 lg:px-3'
                >
                    Reset
                    <X className='ml-2 h-4 w-4' />
                </Button>                          
            )}
        </div>
        <FinlandPosts finlandposts = {filtered} />
    </div>
  )
}
