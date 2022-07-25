import { useEffect, useState } from "react"

interface WindowDimentions {
  width: number
  height: number
}

export const useWindowDimensions = (): WindowDimentions => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return (): void => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
