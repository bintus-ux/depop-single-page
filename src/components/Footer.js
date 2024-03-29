import {
  Wrap,
  WrapItem,
  Stack,
  Flex,
  Select,
  useMediaQuery,
} from '@chakra-ui/react'
import { FaInstagram } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  function handleScroll() {
    const pageTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const pageBottom = pageTop + window.innerHeight
    const fadeups = document.querySelectorAll('.fade_up')

    fadeups.forEach((fade_up) => {
      if (fade_up.getBoundingClientRect().top < pageBottom) {
        fade_up.classList.add('visible')
      } else {
        fade_up.classList.remove('visible')
      }
    })
  }

  document.addEventListener('scroll', handleScroll)

  const [isSmallScreen] = useMediaQuery('(max-width: 767px)')

  const footerItems = [
    'Blog',
    'About',
    'Sell on Afrotopia',
    'Afro Amplified',
    'Jobs',
    'News',
    'Support',
    'Terms',
    'Privacy',
    'Safety',
    'Sitemaps',
    'Cookies',
  ]
  function handleScroll() {
    const pageTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const pageBottom = pageTop + window.innerHeight
    const fadeups = document.querySelectorAll('.fade_up')

    fadeups.forEach((fade_up) => {
      if (fade_up.getBoundingClientRect().top < pageBottom) {
        fade_up.classList.add('visible')
      } else {
        fade_up.classList.remove('visible')
      }
    })
  }

  document.addEventListener('scroll', handleScroll)

  return (
    <>
      {!isSmallScreen && (
        <Flex
          as='footer'
          className='fade_up'
          role='contentinfo'
          mx='auto'
          h='auto'
          flexWrap='wrap'
          py='auto'
          px={{
            base: '10px',
            sm: '10px',
            md: '10px',
            lg: '30px',
            xl: '30px',
          }}
          style={{ border: '1px solid lightgray' }}>
          <Stack justify='space-between' direction='row' align='center'>
            <Wrap
              py='15px'
              align='center'
              width={{
                base: '400px',
                sm: '400px',
                md: '300px',
                lg: 'auto',
                xl: '100%',
              }}
              height='auto'>
              {footerItems.map((item, i) => (
                <WrapItem
                  key={i}
                  color='rgb(38, 38, 38)'
                  style={{ textDecoration: 'none' }}
                  fontSize='15px'
                  fontFamily='Poppins'
                  fontWeight='600'
                  lineHeight='1.5'
                  textDecoration='none'
                  paddingRight={5}
                  cursor='pointer'
                  _hover={{
                    fontsize: '20px',
                  }}>
                  {item}
                </WrapItem>
              ))}
            </Wrap>
            <Flex
              w={{
                base: '400px',
                sm: '400px',
                md: '300px',
                lg: '500px',
                xl: '500px',
              }}
              justify='space-between'
              direction='row'
              align='center'>
              <FaInstagram />
              <FaXTwitter />
              <FaFacebookF />
              <FaTiktok />
              <Select
                w={{
                  base: '120px',
                  sm: '120px',
                  md: '100px',
                  lg: '100px',
                  xl: '120px',
                }}
                fontFamily='monospace'>
                <option value='en' aria-label='English' selected>
                  English
                </option>
                <option value='fr' aria-label='Français'>
                  Français
                </option>
                <option value='de' aria-label='Deutsch'>
                  Deutsch
                </option>
                <option value='it' aria-label='Italiano'>
                  Italiano
                </option>
              </Select>
              <Select
                w={{
                  base: '120px',
                  sm: '120px',
                  md: '100px',
                  lg: '100px',
                  xl: '120px',
                }}
                fontFamily='monospace'>
                <option value='au' aria-label='Australia'>
                  Australia
                </option>
                <option value='de' aria-label='Germany'>
                  Germany
                </option>
                <option value='fr' aria-label='France'>
                  France
                </option>
                <option value='gb' aria-label='United Kingdom'>
                  United Kingdom
                </option>
                <option value='it' aria-label='Italy'>
                  Italy
                </option>
                <option value='us' aria-label='United States' selected>
                  United States
                </option>
              </Select>
            </Flex>
          </Stack>
        </Flex>
      )}
    </>
  )
}

export default Footer
