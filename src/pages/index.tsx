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
        height={{base: 200, md: 370}}  
        maxWidth={1920} 
        justifyContent="center"
      >
        <Box 
          height={{base: 200, md: 335}} 
          w="100%" 
          overflow="hidden" 
          position="relative" 
        >  
          <Image src="../assets/background.jpg" alt="background" position="absolute" margin="auto" />
        </Box>
        <Flex
          w={{base: 375, md: 720, lg: 1440 }}  
          justifyContent="space-between"
          position="absolute"
          pt={{ base: "7" , md: "20"}}
          px={{ base: "5" , md: 0}}
        >
          <Box ml={{base: "0", lg: "36"}} >
            <Text 
              fontSize={{ base: "2xl" ,md: "4xl"}}
              color="white"
              maxWidth={426}
            >
              5 continentes,<br/>infintas possibilidades.
            </Text>
            <Text 
              fontSize={{ base: "sm" ,md: "lg"}} 
              color="white"
              mt="5"
              maxWidth={524}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou
            </Text>
          </Box>
          { isWideVersion && <Image src="../assets/Airplane.svg" alt="airplane" mt="0" mr="36"/>}
        </Flex>
     
      </Flex>

      <Section showIcon={isWideVersion}/>

      <Box maxWidth={840} mx="auto" mt="32">
        <Text 
          fontSize={{ base: "xl", md: "4xl"}} 
          fontWeight={{ base: "medium" ,md: "medium" }}
          textAlign="center"
        >
          Vamos nessa?<br/>Então escolha seu continente
        </Text>
      </Box>

      <Banner />
      
    </>
  )
}
