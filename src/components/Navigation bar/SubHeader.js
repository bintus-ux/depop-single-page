import React from 'react'
import { Wrap, WrapItem, useMediaQuery } from '@chakra-ui/react'

const SubHeader = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 767px)')

  return (
    <>
      {!isSmallScreen && (
        <Wrap
          px='30px'
          py='15px'
          align='center'
          width='100%'
          height='auto'
          justify='left'
          fontSize='18px'
          fontWeight='600'
          style={{ borderBottom: 'ridge 0.5px lightgrey' }}>
          <WrapItem style={{ marginRight: '30px' }}>Menswear</WrapItem>
          <WrapItem style={{ marginRight: '30px' }}>Womenwear</WrapItem>
          <WrapItem style={{ marginRight: '30px' }}>Brands</WrapItem>
          <WrapItem style={{ marginRight: '30px' }} color='red'>
            New Year Sale
          </WrapItem>
        </Wrap>
      )}
    </>
  )
}

export default SubHeader
