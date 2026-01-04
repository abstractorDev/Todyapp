import Tasks from '@/public/images/tasks.png';
import indicator from '@/public/svg/indicator.svg';
import selectedIndicator from '@/public/svg/selected-indicator.svg';
import Image from 'next/image';

export default function Four() {
	return (
		<main className='container p-4 h-[95vh] relative'>
			<section className='flex flex-col gap-8'>
				{/* <div>
					<p className='text-dark-cyan text-end font-bold'>Skip</p>
				</div> */}
				<p className='m-auto mt-5 text-3xl font-bold'>
					Welcome to <span className='text-dark-cyan'>Todyapp</span>
				</p>

				<div>
					<Image alt='' src={Tasks} />
				</div>

				{/* <div className='-mt-3'>
					<p>
						Find the practicality in making your todo list. Find the
						practicality in making your todo list
					</p>

					<p className='text-secondary'>
						Easy-to-understand user interface that makes you more comfortable
						when you want to create a task or to do list, Todyapp can also
						improve productivity
					</p>
				</div> */}

				{/* <div>
					<div className='flex flex-center flex-row-reverse gap-2 mt-8'>
						<Image alt='' src={selectedIndicator} className='cursor-pointer' />
						<Image alt='' src={indicator} className='cursor-pointer' />
						<Image alt='' src={indicator} className='cursor-pointer' />
					</div>
				</div> */}

				<div className='m-auto'>
					<button className='bg-dark-cyan text-white py-4 px-20 rounded-2xl font-bold text-xl flex gap-1'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z'
								fill='#FFFFFF'
							/>
						</svg>
						Continue with email
					</button>
				</div>

				<div className='flex'>
					<div className='border-natural-line border w-1/4 h-px m-auto'></div>
					<p className='m-auto text-natural-secondary'>or continue with</p>
					<div className='border-natural-line border w-1/4 h-0.5 m-auto'></div>
				</div>

				<div className='flex gap-4 m-auto shrink'>
					<button className='flex items-center justify-center gap-2 w-38 bg-natural-bg cursor-pointer p-4 rounded-xl font-bold'>
						<svg
							width='26'
							height='26'
							viewBox='0 0 26 26'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clipPath='url(#clip0_29369_2592)'>
								<path
									d='M26 13C26 5.82029 20.1797 0 13 0C5.82029 0 0 5.82029 0 13C0 19.4886 4.75389 24.8668 10.9688 25.8421V16.7578H7.66797V13H10.9688V10.1359C10.9688 6.87781 12.9096 5.07812 15.879 5.07812C17.3009 5.07812 18.7891 5.33203 18.7891 5.33203V8.53125H17.1498C15.535 8.53125 15.0313 9.53342 15.0313 10.5625V13H18.6367L18.0604 16.7578H15.0313V25.8421C21.2461 24.8668 26 19.4886 26 13Z'
									fill='#1877F2'
								/>
								<path
									d='M18.0603 16.7578L18.6367 13H15.0312V10.5625C15.0312 9.53443 15.5349 8.53125 17.1498 8.53125H18.789V5.33203C18.789 5.33203 17.3014 5.07812 15.879 5.07812C12.9095 5.07812 10.9687 6.87781 10.9687 10.1359V13H7.66791V16.7578H10.9687V25.8421C12.3147 26.0526 13.6852 26.0526 15.0312 25.8421V16.7578H18.0603Z'
									fill='white'
								/>
							</g>
							<defs>
								<clipPath id='clip0_29369_2592'>
									<rect width='26' height='26' fill='white' />
								</clipPath>
							</defs>
						</svg>
						Facebook
					</button>
					<button className='flex items-center justify-center gap-2 w-38 bg-natural-bg cursor-pointer p-4 rounded-xl font-bold'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<g clipPath='url(#clip0_29369_2464)'>
								<path
									d='M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4609 19.0139 23.766 15.9274 23.766 12.2764Z'
									fill='#4285F4'
								/>
								<path
									d='M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.2444 19.252C9.11378 19.252 6.45936 17.1399 5.50694 14.3003H1.51649V17.3912C3.55361 21.4434 7.70279 24.0008 12.24 24.0008Z'
									fill='#34A853'
								/>
								<path
									d='M5.50254 14.3003C4.99988 12.8099 4.99988 11.1961 5.50254 9.70575V6.61481H1.51651C-0.185495 10.0056 -0.185495 14.0004 1.51651 17.3912L5.50254 14.3003Z'
									fill='#FBBC04'
								/>
								<path
									d='M12.24 4.74966C13.9508 4.7232 15.6043 5.36697 16.8433 6.54867L20.2694 3.12262C18.1 1.0855 15.2207 -0.034466 12.24 0.000808666C7.70279 0.000808666 3.55361 2.55822 1.51649 6.61481L5.50253 9.70575C6.45054 6.86173 9.10937 4.74966 12.24 4.74966Z'
									fill='#EA4335'
								/>
							</g>
							<defs>
								<clipPath id='clip0_29369_2464'>
									<rect width='24' height='24' fill='white' />
								</clipPath>
							</defs>
						</svg>
						Google
					</button>
				</div>
			</section>
		</main>
	);
}
