import { Flex, Icon, Image, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { AiOutlineLeft } from 'react-icons/ai';


export function Header() {
  const router = useRouter()

  return (
    <Flex maxWidth={1440} alignItems="center" mx="auto">
      { router.pathname !== '/' &&
        <Link position="absolute" href="/" my={27} ml="36">
          <Icon  as={AiOutlineLeft} fontSize="32"  />
        </Link> 
      }
        <Image src="../assets/Logo.png" alt="logo" my={27} mx="auto"></Image>
    </Flex>
  );
}