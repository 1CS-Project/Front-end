import { getToken } from '@/app/action';
import Confirmation from '@/components/registration/confirmation/confirmation'
import React from 'react'

async function page() {
  const token=await getToken();    

  return (
    <Confirmation token={token!}/>
  )
}

export default page