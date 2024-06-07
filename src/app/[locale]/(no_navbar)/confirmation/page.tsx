import { getToken } from '@/app/action';
import Confirmation from '@/components/registration/confirmation/confirmation'
import { pick } from 'lodash';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import React, { useEffect } from 'react'

async function page() {
  const t = await getTranslations('confirmEmail');
  const messages = await getMessages();

  const token=await getToken();    
  const sendEmail=async ()=>{
    let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/SendUrlEmail`,{
      method:"POST",
      headers:{
          "Authorization":`Bearer ${token}`,
      }
    
  })};
  // useEffect(()=>{
    sendEmail();
  // },[])

  return (
    <NextIntlClientProvider messages={pick(messages)}>
      <Confirmation token={token!}/>
    </NextIntlClientProvider>
  )
}

export default page;