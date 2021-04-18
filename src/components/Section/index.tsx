import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function Section(){
  return (
    <Flex w={1160} mt="20" mx="auto" justifyContent="space-between">
      <Box>
        <Image src="../assets/icons/cocktail.svg" alt="cocktail" mx="auto" mb="5"/>
        <Text fontSize="2xl" fontWeight="semibold">vida noturna</Text>
      </Box>
      <Box>
        <Image src="../assets/icons/surf.svg" alt="cocktail" mx="auto" mb="5"/>
        <Text fontSize="2xl" fontWeight="semibold">praia</Text>
      </Box>
      <Box>
        <Image src="../assets/icons/building.svg" alt="cocktail" mx="auto" mb="5"/>
        <Text fontSize="2xl" fontWeight="semibold">moderno</Text>
      </Box>
      <Box>
        <Image src="../assets/icons/museum.svg" alt="cocktail" mx="auto" mb="5"/>
        <Text fontSize="2xl" fontWeight="semibold">clássico</Text>
      </Box>
      <Box>
        <Image src="../assets/icons/earth.svg" alt="cocktail" mx="auto" mb="5"/>
        <Text fontSize="2xl" fontWeight="semibold">e mais...</Text>
      </Box>
    </Flex>
  );
}