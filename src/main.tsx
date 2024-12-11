import Routes from './routes/RouterProvider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './styles/theme'
import './styles/main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </StrictMode>,
)
