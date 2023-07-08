import { CirclesWithBar } from  'react-loader-spinner';
const override = {
    display: "block",
    position: "fixed",
    top: "35vh",
    left: "calc(50vw - 50px)",
              
  };

export const Loader = ()=>{
    return(
        <CirclesWithBar height="100" width="100" color="#303f9f" wrapperStyle={override} wrapperClass=""
            visible={true} outerCircleColor="" innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
        />
    )
           
}