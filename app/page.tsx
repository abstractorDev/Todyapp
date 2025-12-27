import Link from 'next/link';

export default function Home() {
	return (
		<Link href={`intro`} className='text-3xl mr-4'>
			Intro
		</Link>
	);
}
