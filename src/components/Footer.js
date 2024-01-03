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
    'Sell on Depop',
    'Depop Amplified',
    'Jobs',
    'News',
    'Support',
    'Terms',
    'Privacy',
    'Safety',
    'Sitemaps',
    'Cookies',
  ]

  return (
    <>
      {!isSmallScreen && (
        <Flex
          as='footer'
          role='contentinfo'
          mx='auto'
          flexWrap='wrap'
          py={{ base: '12', md: '5' }}
          px={{ base: '12px', md: '30px' }}
          style={{ border: '1px solid red' }}>
          <Stack
            justify='space-between'
            direction='row'
            align='center'
            gap='100px'>
            <Wrap py='15px' align='center' width='100%' height='auto'>
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
              w='600px'
              justify='space-between'
              direction='row'
              align='center'
              style={{ border: '1px solid red' }}>
              <FaInstagram />
              <FaXTwitter />
              <FaFacebookF />
              <FaTiktok />
              <Select w='120px' fontFamily='monospace'>
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
              <Select w='170px' fontFamily='monospace'>
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
