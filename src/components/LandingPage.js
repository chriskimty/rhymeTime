import clock from '../assets/logo.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import Loading from './Loading';
import UserRhyme from './UserRhyme'
import Footer from './Footer'

const LandingPage = () => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            {
                loading
                    ? <Loading setLoading={setLoading} />
                    : 
                    <div className="landing">
                        <nav>
                            <div className="wrapper">
                                <Link to = "/">
                                    <h3>rhyme
                                        <img src={clock} className="tiny" alt="clock logo" />
                                    </h3>
                                    </Link>
                                    {/* <ul> */}
                                        {/* Links for the following two apps are COMING SOON */}
                                        {/* <li>cinnonym</li>
                                        <li>antonymph</li>
                                    </ul> */}
                                </div>
                            </nav>
                        <header>
                            <div className="wrapper">
                                <h1>
                                    <img src={clock} className="small" alt="small clock"/>rhymeTime
                                </h1>
                                <UserRhyme />
                            </div>   
                        </header>
                        <Footer />      
                    </div>
            }   
        </>
    )
}
export default LandingPage;