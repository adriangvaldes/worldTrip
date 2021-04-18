import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Section } from '../components/Section';

export default function Home() {
  return (
    <>
      <Flex 
        height={370} 
        maxWidth={1440} 
        position="relative" 
        justifyContent="center" 
        mx="auto"
      >
        <Box 
          height={335} 
          w="100%" 
          overflow="hidden" 
          position="relative" 
        >  
          <Image src="../assets/background.jpg" alt="background" position="absolute" margin="auto" />
        </Box>
        <Flex 
          position="absolute" 
          width="100%"  
          justifyContent="space-between"
        >
          <Box ml="100">
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
          <Image src="../assets/Airplane.svg" alt="airplane" mr="100" mt="20"/>
        </Flex>
      </Flex>

      <Section />

      <Box width={840} mx="auto" mt="32">
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
