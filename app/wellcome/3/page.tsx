import Todos from '@/public/images/Todos.png';
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
					<Image alt='' src={Todos} />
				</div>

				<div className='-mt-3'>
					<p>
						Find the practicality in making your todo list. Find the
						practicality in making your todo list
					</p>

					<p className='text-secondary'>
						Easy-to-understand user interface that makes you more comfortable
						when you want to create a task or to do list, Todyapp can also
						improve productivity
					</p>
				</div>

				<div>
					<div className='flex flex-center flex-row-reverse gap-2 mt-8'>
						<Image alt='' src={selectedIndicator} className='cursor-pointer' />
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
	);
}
