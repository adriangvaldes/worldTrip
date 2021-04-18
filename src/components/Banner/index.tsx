import { Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { BannerItem } from "./BannerItem";


SwiperCore.use([Navigation, Pagination]);

export function Banner() {
  return (
    <Flex height={450}  w={1240} position="relative" mx="auto" mb="10" mt="14" alignItems="center" justifyContent="center">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <BannerItem title="America do Sul" description="Paisagens Exóticas" url="riodejaneiro" />
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem title="America do Norte" description="Vida top noturna" url="europa" />
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem title="Ásia" description="Xing ling nhon nhon" url="lantauIsland" />
          </SwiperSlide>
          <SwiperSlide>
            <BannerItem title="Europa" description="O continente mais antigo" url="toscanyItaly" />
          </SwiperSlide>
        </Swiper>
     </Flex>
  );
}