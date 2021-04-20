import { Box, Flex, Image, Text, Icon } from "@chakra-ui/react";
import { GoPrimitiveDot } from 'react-icons/go';

interface SectionProps {
  showIcon: boolean;
}

export function Section({showIcon}: SectionProps){
  return (
    <Flex 
      maxWidth={1160} 
      height={120} 
      mt={{base: "9", md: "20"}} 
      mx={{ base: "12", md: "auto"}} 
      justifyContent="space-between" 
      flexWrap="wrap" 
      pt={{base: "", md: "0"}}
    >
      <Box >
        { showIcon && <Image src="../assets/icons/cocktail.svg" alt="cocktail" mx="auto" mb="5"/>}
        <Flex alignItems="center" justifyContent="center" mb="7">
          { !showIcon && <Icon as={GoPrimitiveDot} color="yellow.500" fontSize={{base: "2xl", md: "3xl"}} mr="1"/>}
          <Text  fontSize={{base:"xl", md:"2xl"}} fontWeight="semibold" >
            vida noturna
          </Text>
        </Flex>
        
      </Box>
      <Box >
        {showIcon && <Image src="../assets/icons/surf.svg" alt="cocktail" mx="auto" mb="5"/>}
        <Text fontSize={{base:"xl", md:"2xl"}} fontWeight="semibold" mb="7">
          { !showIcon && <Icon as={GoPrimitiveDot} color="yellow.500" fontSize={{base: "2xl", md: "3xl"}} mr="1"/>}
          praia
        </Text>
      </Box>
      <Box >
        {showIcon && <Image src="../assets/icons/building.svg" alt="cocktail" mx="auto" mb="5"/>}
        <Text fontSize={{base:"xl", md:"2xl"}} fontWeight="semibold" mb="7">
          { !showIcon && <Icon as={GoPrimitiveDot} color="yellow.500" fontSize={{base: "2xl", md: "3xl"}} mr="1"/>}
          moderno
        </Text>
      </Box>
      <Box >
        {showIcon && <Image src="../assets/icons/museum.svg" alt="cocktail" mx="auto" mb="5"/>}
        <Text fontSize={{base:"xl", md:"2xl"}} fontWeight="semibold" mb="7">
          { !showIcon && <Icon as={GoPrimitiveDot} color="yellow.500" fontSize={{base: "2xl", md: "3xl"}} mr="1"/>}
          clássico
        </Text>
      </Box>
      <Box mx={{ base:"auto", md: 0}}>
        {showIcon && <Image src="../assets/icons/earth.svg" alt="cocktail" mx="auto" mb="5"/>}
        <Text fontSize={{base:"xl", md:"2xl"}} fontWeight="semibold" mb="7">
          { !showIcon && <Icon as={GoPrimitiveDot} color="yellow.500" fontSize={{base: "2xl", md: "3xl"}} mr="1"/>}
          e mais...
        </Text>
      </Box>
    </Flex>
  );
}