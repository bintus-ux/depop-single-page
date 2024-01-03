import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('')
  const [list] = useState(['HTML', 'CSS', 'Javascript'])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [list.length])

  const handleInputFocus = () => {
    setInputValue('')
  }

  const handleInputBlur = () => {
    if (inputValue === '') {
      setCurrentIndex(0)
    }
  }

  return (
    <Box className='search_bar'>
      <Box className='input_box'>
        <Box className='search_container'>
          <Box className='circle'></Box>
          <Box className='line'></Box>
        </Box>
        <input
          type='text'
          className='input'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <Box
          className='placeholder'
          style={{ display: inputValue ? 'none' : 'flex' }}>
          <Box className='box'>
            <p>Search for</p>
          </Box>
          <Box className='slider_box' style={{ height: '40px' }}>
            <Box className='slider' style={{ opacity: '1', left: '0px' }}>
              "{list[currentIndex]}"
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SearchBar
