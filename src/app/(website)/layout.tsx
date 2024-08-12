import React, { ReactNode } from 'react'

import HeaderServer from '@/blocks/global/Header/Server'
import FooterServer from '@/blocks/global/Footer/Server'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <HeaderServer />
        {children}
        <FooterServer />
    </div>
  )
}

export default layout