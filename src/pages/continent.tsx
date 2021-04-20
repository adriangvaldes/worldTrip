import { Box, Flex, Icon, Image, Text,  HStack, Avatar} from '@chakra-ui/react';

import { GoInfo } from 'react-icons/go'

export default function Continent() {
  return (
    <>
      <Flex 
        height={{base: 300, md: 500}}  
        maxWidth={1920} 
      >
        <Box 
          height="100%" 
          w="100%" 
          overflow="hidden" 
          position="relative"
        >  
          <Image 
            src="../assets/toscanyItaly.jpg" 
            alt="background" 
            position="absolute" 
            margin="auto" 
            objectFit="cover" 
            top={-700}
          />
        </Box>

        <Text 
          position="absolute" 
          color="white"
          fontSize="6xl" 
          fontWeight="semibold"
          ml="36"
        >
          Europa
        </Text>
      </Flex>

      <Flex mt="36" mx="auto" justifyContent="space-between" maxWidth={1440} px="28" alignItems="center">
        <Text textAlign="justify" maxWidth={600} fontSize="xl">
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
         a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o 
         Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex justifyContent="space-between" width={490} >
          <Box>
            <Text
              fontSize="6xl"
              fontWeight="bold"
              color="yellow.500"
              lineHeight="4rem"
              mx="auto"
              textAlign="center"
            >
              50 
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="bold"
            >
              países 
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="6xl"
              fontWeight="bold"
              color="yellow.500"
              lineHeight="4rem"
              textAlign="center"
            >
              60 
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="bold"
            >
              línguas 
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="6xl"
              fontWeight="bold"
              color="yellow.500"
              lineHeight="4rem"
              textAlign="center"
            >
              27 
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              
            >
              cidades +100
              <Icon as={GoInfo} fontSize="sm" color="gray.200"/> 
            </Text>
          </Box>
        </Flex>
      </Flex>
    
      <Box mt="20" px="28" maxWidth={1440} mx="auto" mb="40">
        <Text
          fontSize="4xl"
          fontWeight="bold"
          mb="10"
        >
          Cidades +100
        </Text> 
        <HStack spacing="14">
          <Box border="1px solid #FFBA08" borderRadius={4}>
            <Image src="./assets/cities/london.png"/>
            <Flex mb="6" mt="5" alignItems="center" justifyContent="space-between" px="6">
              <Box>
                <Text
                  fontWeight="bold"
                  mb="3"
                >
                  Londres
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.100"
                >
                  Reino Unido
                </Text>
              </Box>
              <Avatar size="sm"/>
            </Flex>
          </Box>
          <Box border="1px solid #FFBA08" borderRadius={4}>
            <Image src="./assets/cities/london.png"/>
            <Flex mb="6" mt="5" alignItems="center" justifyContent="space-between" px="6">
              <Box>
                <Text
                  fontWeight="bold"
                  mb="3"
                >
                  Londres
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.100"
                >
                  Reino Unido
                </Text>
              </Box>
              <Avatar size="sm"/>
            </Flex>
          </Box>
        </HStack>
      </Box>
    </>
  );
}