"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NavigatingLoading: React.FC = () => {
  return (
		<>
			<ProgressBar
				height="4px"
				color="#fdc10d"
				options={{showSpinner: false}}
				shallowRouting
			/>
		</>
  );
};

export default NavigatingLoading;
