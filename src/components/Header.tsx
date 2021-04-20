import { Flex, Icon, Image, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { AiOutlineLeft } from 'react-icons/ai';


export function Header() {
  const router = useRouter()

  return (
    <Flex maxWidth={1920} alignItems="center" mx="auto" justifyContent="space-between" px={{base: "10", md: "36"}}>
      { router.pathname !== '/' &&
        <Link  href="/">
          <Icon  as={AiOutlineLeft} fontSize="32"  />
        </Link> 
      }
        <Image src="../assets/Logo.png" alt="logo" my={27} />
        <div></div>
    </Flex>
  );
}