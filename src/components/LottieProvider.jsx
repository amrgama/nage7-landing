import Lottie from "lottie-react"

// import Lottie from "lottie-react"

// const useIsomorphicLayoutEffect =
//     typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function LottieProvider ({...options}){
   
    return (
        <Lottie {...options} loop={options?.loop || true} />
    )
}