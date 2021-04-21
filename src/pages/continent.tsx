import { Box, Flex, Icon, Image, Text,  HStack, Avatar} from '@chakra-ui/react';

import { GoInfo } from 'react-icons/go'
import { Card } from '../components/Card';

export default function Continent() {
  return (
    <>
      <Flex 
        height={{base: 300, md: 500}}  
        maxWidth={1920} 
        alignItems="flex-end"
        justifyContent="center"
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

        <Box position="absolute" width={1160} mx="auto">
          <Text
            color="white"
            fontSize="6xl" 
            fontWeight="semibold"
            mb="14"
          >
            Europa
          </Text>
        </Box>
        
      </Flex>

      <Flex mt="36" mx="auto" justifyContent="space-between" maxWidth={1160}  alignItems="center">
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
          ml="5"
        >
          Cidades +100
        </Text> 
        <HStack  spacing="0" flexWrap="wrap" mx="auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </HStack>
      </Box>
    </>
  );
}