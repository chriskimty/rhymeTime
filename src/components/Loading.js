import clock from '../assets/logo.svg'
import { useEffect } from 'react'

const Loading = (props) => {
    
    useEffect(() => {
        props.setLoading(true)
        setTimeout(() => {
            props.setLoading(false)
        }, 1200)
    }, [props])
    return (
        <div className="logoContainer">
              <img src={clock} className="logo" alt="logo" />
        </div>
    )
}

export default Loading;