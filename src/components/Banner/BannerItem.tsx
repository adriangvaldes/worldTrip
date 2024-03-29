import { Flex, Image, Text, Box } from "@chakra-ui/react";

interface BannerItemProps {
  title: string,
  description: string,
  url: string,
}

export function BannerItem({title, description, url} :BannerItemProps){
  return (
    <Flex 
      height={{ base: 250, md: 450}} 
      maxWidth={1240} 
      overflow="hidden" 
      position="relative" 
      alignItems="center" 
      justifyContent="center" 
    >
      <Flex flexDirection="column">
        <Text 
          color="white" 
          fontSize={["4xl", "5xl"]} 
          fontWeight="semibold" 
          mx="auto" 
          mb={{ base: "1", md: "5"}}
        >
          {title}
        </Text>
        <Text 
          color="white" 
          fontSize={["md", "2xl"]} 
          fontWeight="semibold" 
          mx="auto"
        >
          {description}
        </Text>
      </Flex>   
      <Image 
        src={`../assets/${url}.jpg`} 
        alt={title} 
        margin="auto" 
        position="absolute" 
        objectFit="cover" 
        top={0} left={0} 
        width="100%" 
        height="100%"
        zIndex="-1"
      />
    </Flex>
  ); 
}