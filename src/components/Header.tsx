import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Image src="../assets/Logo.png" alt="logo" my={27}></Image>
    </Flex>
  );
}