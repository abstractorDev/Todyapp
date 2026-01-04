import React from 'react';
import { useSwiper } from 'swiper/react';

export default function SwiperButtonNext({ children }: { children: any }) {
	const swiper = useSwiper();
	return <button onClick={() => swiper.slideNext()}>{children}</button>;
}
