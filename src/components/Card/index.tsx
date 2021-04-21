import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";

export function Card() {
  return (
    <Box padding="5">
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
    </Box>
  );
}