'use client';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';

import Todos from '@/public/images/Todos.png';
import Mobile from '@/public/images/Mobile.png';
import onboarding from '@/public/svg/Onboarding.svg';
import indicator from '@/public/svg/indicator.svg';
import selectedIndicator from '@/public/svg/selected-indicator.svg';
import SwiperButtonNext from '@/public/components/SwiperButtonNext';

//  comps

const arr = [1, 2, 3];

export default function Wellcome() {
	const swiper = useSwiper();
	// const [slide, setSlide] = useState(indicator);

	// function handleIndicator() {
	// 	setSlide(slide === indicator ? selectedIndicator : indicator);
	// }

	return (
		<>
			<Swiper
				pagination={{ clickable: true }}
				navigation
				spaceBetween={50}
				slidesPerView={1}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<main className='container w-screen h-screen bg-dark-cyan flex-center'>
						<section className='w-full my-auto flex flex-col gap-10 text-white'>
							<div className='flex-center'>
								<Image alt='' src={onboarding} className='w-48' />
							</div>

							<div className='flex flex-col gap-4 m-auto text-center'>
								<h1 className='font-bold text-4xl'>TodyApp</h1>

								<p className='text-xl'>
									The best to do list application for you
								</p>
							</div>

							<div className='flex-center flex-row-reverse h-8 gap-2'>
								{arr.map((_, i) => {
									let ind = indicator;

									return (
										<Image
											key={i}
											alt=''
											className='cursor-pointer'
											onClick={() => {
												if (ind === indicator) ind = selectedIndicator;
												else ind = indicator;
											}}
											src={ind}
										/>
									);
								})}
							</div>
						</section>
					</main>
				</SwiperSlide>
				{/*  */}
				<SwiperSlide>
					<main className='container p-4 h-[95vh] relative'>
						<section className='flex flex-col gap-8'>
							<div>
								<p className='text-dark-cyan text-end font-bold'>Skip</p>
							</div>

							<div>
								<Image alt='' src={Mobile} />
							</div>

							<div className='-mt-3'>
								{/* <p>Your convenience in making a todo list</p> */}

								<p className='text-secondary'>
									Here's a mobile platform that helps you create task or to list
									so that it can help you in every job easier and faster.
								</p>
							</div>

							<div>
								<div className='flex flex-center flex-row-reverse gap-2 mt-8'>
									<Image alt='' src={indicator} className='cursor-pointer' />
									<Image
										alt=''
										src={selectedIndicator}
										className='cursor-pointer'
									/>
									<Image alt='' src={indicator} className='cursor-pointer' />
								</div>
							</div>

							<div className='m-auto'>
								<button className='bg-dark-cyan text-white py-4 px-24 rounded-2xl font-bold text-xl'>
									Continue
								</button>
							</div>
						</section>
					</main>
				</SwiperSlide>
				{/*  */}
				<SwiperSlide>
					<main className='container p-4 h-[95vh] relative'>
						<section className='flex flex-col gap-8'>
							<div>
								<p className='text-dark-cyan text-end font-bold'>Skip</p>
							</div>

							<div>
								<Image alt='' src={Todos} />
							</div>

							<div className='-mt-3'>
								<p>
									Find the practicality in making your todo list. Find the
									practicality in making your todo list
								</p>

								<p className='text-secondary'>
									Easy-to-understand user interface that makes you more
									comfortable when you want to create a task or to do list,
									Todyapp can also improve productivity
								</p>
							</div>

							<div>
								<div className='flex flex-center flex-row-reverse gap-2 mt-8'>
									<Image
										alt=''
										src={selectedIndicator}
										className='cursor-pointer'
									/>
									<Image alt='' src={indicator} className='cursor-pointer' />
									<Image alt='' src={indicator} className='cursor-pointer' />
								</div>
							</div>

							<div className='m-auto'>
								<button className='bg-dark-cyan text-white py-4 px-24 rounded-2xl font-bold text-xl'>
									Continue
								</button>
							</div>
						</section>
					</main>
				</SwiperSlide>
				{/*  */}
				{/* <SwiperSlide>Slide 4</SwiperSlide> */}
				<SwiperButtonNext>slide</SwiperButtonNext>
			</Swiper>
		</>
	);
}
