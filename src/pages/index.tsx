import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Flex height={370} w="100%" position="relative" >
        <Box height={335} w="100%" overflow="hidden" position="relative" >  
          <Image src="../assets/background.jpg" alt="background" position="absolute" margin="auto" />
        </Box>
        <Flex position="absolute" width="100%"  justifyContent="space-between">
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

      <Flex w={1160} mt="20" mx="auto" justifyContent="space-between">
        <Box>
          <Image src="../assets/icons/cocktail.svg" alt="cocktail" mx="auto"/>
          <Text fontSize="2xl" fontWeight="semibold">vida noturna</Text>
        </Box>
        <Box>
          <Image src="../assets/icons/surf.svg" alt="cocktail" mx="auto"/>
          <Text fontSize="2xl" fontWeight="semibold">praia</Text>
        </Box>
        <Box>
          <Image src="../assets/icons/building.svg" alt="cocktail" mx="auto"/>
          <Text fontSize="2xl" fontWeight="semibold">moderno</Text>
        </Box>
        <Box>
          <Image src="../assets/icons/museum.svg" alt="cocktail" mx="auto"/>
          <Text fontSize="2xl" fontWeight="semibold">clássico</Text>
        </Box>
        <Box>
          <Image src="../assets/icons/earth.svg" alt="cocktail" mx="auto"/>
          <Text fontSize="2xl" fontWeight="semibold">e mais...</Text>
        </Box>
      </Flex>

      <Box width={840} mx="auto" mt="32">
        <Text fontSize="4xl" fontWeight="medium" textAlign="center">Vamos nessa?<br/>Então escolha seu continente</Text>
      </Box>

      <Flex height={450}  w={1240} position="relative" mx="auto" mb="10" mt="14" alignItems="center" justifyContent="center">
        <Box height={450} w={1240} overflow="hidden" position="relative" >  
          <Image src="../assets/background.jpg" alt="background" position="absolute" margin="auto" />
        </Box>

        <Flex position="absolute" flexDirection="column">
          <Text color="white" fontSize="5xl" fontWeight="semibold" mx="auto" mb="5">Europa</Text>
          <Text color="white" fontSize="2xl" fontWeight="semibold">O continente mais antigo</Text>
        </Flex>
     </Flex>
    </>
  )
}
