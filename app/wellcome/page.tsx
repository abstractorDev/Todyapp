'use client';
import Link from 'next/link';

const pages: number[] = [1, 2, 3];

export default function Wellcome() {
	return (
		<>
			{pages.map((_, i: number) => (
				<Link href={`wellcome/${i + 1}`} className='text-3xl mr-4' key={i}>
					{i + 1}
				</Link>
			))}
		</>
	);
}
