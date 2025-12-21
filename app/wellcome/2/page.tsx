import Mobile from '@/public/images/Mobile.png';
import indicator from '@/public/svg/indicator.svg';
import selectedIndicator from '@/public/svg/selected-indicator.svg';
import Image from 'next/image';

export default function Three() {
	return (
		<main className='container p-4 h-[95vh] relative'>
			<section className='flex flex-col gap-8'>
				<div>
					<p className='text-dark-cyan text-end font-bold'>Skip</p>
				</div>

				<div>
					<Image alt='' src={Mobile} />
				</div>

				<div className='-mt-3'>
					<p>Find the practicality in making your todo list</p>

					<p className='text-secondary'>
						Here's a mobile platform that helps you create task or to list so
						that it can help you in every job easier and faster.
					</p>
				</div>

				<div>
					<div className='flex flex-center flex-row-reverse gap-2 mt-8'>
						<Image alt='' src={indicator} className='cursor-pointer' />
						<Image alt='' src={selectedIndicator} className='cursor-pointer' />
						<Image alt='' src={indicator} className='cursor-pointer' />
					</div>
				</div>

				<div className='absolute bottom-0 left-5 m-auto'>
					<button className='bg-dark-cyan text-white py-4 px-36 rounded-2xl font-bold text-xl'>
						Continue
					</button>
				</div>
			</section>
		</main>
	);
}
