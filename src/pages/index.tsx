import { Box, Flex, Icon, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Section } from '../components/Section';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Flex 
        height={370} 
        maxWidth={1920} 
        justifyContent="center"
      >
        <Box 
          height={335} 
          w="100%" 
          overflow="hidden" 
          position="relative" 
        >  
          <Image src="../assets/background.jpg" alt="background" position="absolute" margin="auto" />
        </Box>
        <Box position="absolute">
          <Flex
            w={{base: 375, md: 720, lg: 1440 }}  
            justifyContent="space-between"
          >
            <Box ml={{base: "0", lg: "36"}} >
              <Text 
                fontSize="4xl"
                color="white"
                mt="20"
                maxWidth={426}
              >
                5 continentes,<br/>infintas possibilidades.
              </Text>
              <Text 
                fontSize="lg" 
                color="white"
                mt="5"
                maxWidth={524}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou
              </Text>
            </Box>
            { isWideVersion && <Image src="../assets/Airplane.svg" alt="airplane" mt="20" mr="36"/>}
          </Flex>
        </Box>
      </Flex>

      <Section showIcon={isWideVersion}/>

      <Box maxWidth={840} mx="auto" mt="32">
        <Text 
          fontSize="4xl" 
          fontWeight="medium" 
          textAlign="center"
        >
          Vamos nessa?<br/>Então escolha seu continente
        </Text>
      </Box>

      <Banner />
      
    </>
  )
}
