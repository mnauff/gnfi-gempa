type QuoteFunType = {
	figureUrl: string;
	figureName: string;
	quote: string;
};
export default function Quote2(props: QuoteFunType) {
	return (
		<div className="mx-auto flex max-w-[65ch] flex-col px-4 xl:flex-row xl:px-0">
			<div className="flex-grow">
				<p className="text-2xl font-bold">{props.quote}</p>
			</div>
			<div className="relative w-[247px] flex-none">
				<img
					src={props.figureUrl}
					alt={props.figureName}
					className="relative z-10"
				/>
				<div className="absolute -top-10 right-0 hidden xl:block">
					<svg
						role="img"
						aria-label="Quote 2"
						width="105"
						height="83"
						viewBox="0 0 105 83"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M63.5616 30.6673C63.5616 69.86 27.9819 83 27.9819 83L24.5901 76.6667C24.5901 76.6667 36.2079 71.5433 41.6936 59.8102C38.5759 60.8003 35.241 61.3333 31.7795 61.3333C14.2288 61.3333 0 47.6036 0 30.6673C0 13.7302 14.2288 0.000465393 31.7795 0.000465393C49.3328 0.000465393 63.5616 13.7302 63.5616 30.6673Z"
							fill="#B1B1B1"
						/>
						<path
							d="M105 30.6665C105 69.8591 69.4206 82.999 69.4206 82.999L66.0305 76.6657C66.0305 76.6657 77.6472 71.5424 83.1336 59.8094C80.0151 60.7993 76.6799 61.3325 73.2196 61.3325C55.6678 61.3325 41.4391 47.6028 41.4391 30.6665C41.4391 13.7301 55.6678 0.000137329 73.2196 0.000137329C90.7713 0.000137329 105 13.7301 105 30.6665Z"
							fill="#878787"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
