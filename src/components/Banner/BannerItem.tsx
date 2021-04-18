import { Flex, Image, Text } from "@chakra-ui/react";

interface BannerItemProps {
  title: string,
  description: string,
  url: string,
}

export function BannerItem({title, description, url} :BannerItemProps){
  return (
    <Flex 
      height={450} 
      w={1240} 
      overflow="hidden" 
      position="relative" 
      alignItems="center" 
      justifyContent="center" 
    >
      <Flex position="absolute" flexDirection="column">
        <Text 
          color="white" 
          fontSize="5xl" 
          fontWeight="semibold" 
          mx="auto" 
          mb="5"
        >
          {title}
        </Text>
        <Text 
          color="white" 
          fontSize="2xl" 
          fontWeight="semibold" 
          mx="auto"
        >
          {description}
        </Text>
      </Flex>   
      <Image src={`../assets/${url}.jpg`} alt={title} margin="auto" />
    </Flex>
  ); 
}