import Link from "next/link";

export const ErrorImage = ({
	tagName,
	reset,
}: {
	tagName: string;
	reset: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<div
			id="error-wrapper"
			className="w-full text-white sm:flex flex-col items-center justify-start  perspective-12 pt-24 lg:pt-32 hidden"
		>
			<h1 id="error-heading" className="text-[4rem] xl:text-[10rem] uppercase">
				not found
			</h1>
			<div className="text-center flex flex-col gap-6  leading-8 z-50">
				<p className="text-[3rem] xl:text-[7rem] sm:leading-[100px]">
					image with tag{" "}
					<span className="text-cyan-400 font-bold">#{tagName}</span> not found
				</p>
				<p className="uppercase text-2xl sm:text-3xl xl:text-4xl mt-10">
					try searching for something else
				</p>

				<div className="mt-4 sm:mt-8">
					<div className="flex w-full justify-center gap-3">
						<p
							onClick={() => reset("")}
							className="border border-gray-200 rounded-full px-4 py-2 w-fit flex gap-2 items-center justify-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
							Reset
						</p>
					</div>
				</div>
			</div>
			<div className="fixed bottom-0 top-0 left-0 right-0 overflow-hidden">
				<div className="cloak__container">
					<div className="cloak"></div>
				</div>
			</div>
		</div>
	);
};
