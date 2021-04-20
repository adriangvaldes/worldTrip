import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    white: {
      "100" : "#F5F8FA"
    },
    gray: {
      "100" : "#999999",
      "400" : "#47585B",
    },
    yello: {
      "500" : "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#47585B'
      }
    }
  }
})