import Image from 'next/image';

import onboarding from '@/public/svg/Onboarding.svg';
import indicator from '@/public/svg/indicator.svg';
import selectedIndicator from '@/public/svg/selected-indicator.svg';

export default function One() {
	return (
		<main className=''>
			<section className='container w-screen h-screen flex-center flex-col gap-10 bg-dark-cyan text-white'>
				<div className='flex-center'>
					<Image alt='' src={onboarding} className='w-48' />
				</div>

				<div className='flex flex-col gap-4'>
					<h1 className='font-bold text-4xl'>MIND DO</h1>

					<p className='text-xl'>The best to do list application for you</p>
				</div>

				<div className='flex flex-center flex-row-reverse gap-2 mt-8'>
					<Image alt='' src={indicator} className='cursor-pointer' />
					<Image alt='' src={indicator} className='cursor-pointer' />
					<Image alt='' src={selectedIndicator} className='cursor-pointer' />
				</div>
			</section>
		</main>
	);
}
