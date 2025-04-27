'use client';

interface CircleRatingProps {
	rating: number;
	size?: number;
	strokeWidth?: number;
}

export default function CircleRating({
	rating,
	size = 140,
	strokeWidth = 7,
}: CircleRatingProps) {
	const radius = size / 2 - strokeWidth;
	const circumference = 2 * Math.PI * radius;

	const strokeDashoffset = circumference - (rating / 100) * circumference;

	const ratingColor = getRatingColor(rating);

	return (
		<div className="relative flex items-center justify-center">
			<div
				className={`w-[${size}px] h-[${size}px] rounded-full backdrop-blur-xs bg-black/50 flex items-center justify-center`}
			>
				<svg
					width={size}
					height={size}
					viewBox={`0 0 ${size} ${size}`}
					className="transform rotate-0"
				>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						fill="transparent"
						className="stroke-mauve-10 dark:stroke-mauve-dark-10"
						strokeWidth={strokeWidth}
						strokeDasharray={circumference}
						strokeDashoffset="0"
					/>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radius}
						fill="transparent"
						stroke={ratingColor}
						strokeWidth={strokeWidth}
						strokeDasharray={circumference}
						strokeDashoffset={strokeDashoffset}
						strokeLinecap="square"
						className="transition-all duration-1000 ease-out"
					/>
				</svg>

				<div className="absolute inset-0 flex items-center justify-center">
					<span className="font-special font-semibold">
						<span
							className="text-2xl uppercase tracking-normal leading-none"
							style={{ color: ratingColor }}
						>
							{rating}
						</span>
						<span className="text-sm text-mauve-12 dark:text-mauve-dark-12 uppercase tracking-normal leading-none">
							%
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}

function getRatingColor(rating: number): string {
	if (rating >= 75) return 'var(--color-success)';
	if (rating >= 50) return 'var(--color-warning)';
	return 'var(--color-error)';
}
