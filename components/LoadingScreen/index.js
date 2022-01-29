import BarLoader from "react-spinners/BarLoader"

function LoadingScreen(){
	return (
		<div className="flex items-center justify-center flex-grow">
			<BarLoader color="#C4C4C4" loading={true} size={150} />
		</div>
	)
}

export default LoadingScreen