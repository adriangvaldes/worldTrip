import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface SectionProps {
  showIcon: boolean;
}

export function Section({showIcon}: SectionProps){
  return (
    <Flex maxWidth={1160} height="100%" mt="20" mx="auto" justifyContent="space-between">
      <Box ml={["12", "10", "9", "0"]} mr={["12", "10", "9", "0"]}>
        { showIcon && <Image src="../assets/icons/cocktail.svg" alt="cocktail" mx="auto" mb="5"/>}
        <Text whiteSpace="nowrap" textOverflow="ellipsis" fontSize="2xl" fontWeight="semibold">vida noturna</Text>
      </Box>
      <Box ml={["12", "10", "9", "0"]} mr={["12", "10", "9", "0"]}>
        {showIcon && <Image src="../assets/icons/surf.svg" alt="cocktail" mx="auto" mb="5"/>}
        <Text fontSize="2xl" fontWeight="semibold">praia</Text>
      </Box>
      <Box ml={["12", "10", "9", "0"]} mr={["12", "10", "9", "0"]}>
        {showIcon && <Image src="../assets/icons/building.svg" alt="cocktail" mx="auto" mb="5"/>}
        <Text fontSize="2xl" fontWeight="semibold">moderno</Text>
      </Box>
      <Box ml={["12", "10", "9", "0"]} mr={["12", "10", "9", "0"]}>
        {showIcon && <Image src="../assets/icons/museum.svg" alt="cocktail" mx="auto" mb="5"/>}
        <Text fontSize="2xl" fontWeight="semibold">clássico</Text>
      </Box>
      <Box ml={["12", "10", "9", "0"]} mr={["12", "10", "9", "0"]}>
        {showIcon && <Image src="../assets/icons/earth.svg" alt="cocktail" mx="auto" mb="5"/>}
        <Text fontSize="2xl" fontWeight="semibold">e mais...</Text>
      </Box>
    </Flex>
  );
}