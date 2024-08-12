import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

const HeaderServer = async () => {

    const payload = await getPayloadHMR({config})
    const header = await payload.findGlobal({
        slug: 'header'
    })


  return (
    <div className={'bg-gray-500 py-12 max-w-5xl mx-auto'}>
        <div className={'relative w-64 h-20 flex justify-center items-center'}>
            <Image src={header.logo.url} alt={header.logo} fill className={'object-contain'}/>
            <div>
                {header.nav?.map((item, index) => {
                    return (
                        <Link key={index} href={item.link} className={'text-white text-lg mx-4'}>{item.label}</Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default HeaderServer