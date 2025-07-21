import { HiMenu } from "react-icons/hi";
import { FaQuestion } from "react-icons/fa6";
import { AiTwotoneSound } from "react-icons/ai";
import { MdVibration } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { IoToggleOutline } from "react-icons/io5";
import { AiOutlineTable } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCircleNotch } from "react-icons/fa";
import { IoRadioButtonOn } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import '../assets/style/header.css'
import { useState } from "react";


function Header() {

     const [isOpen, setisOpen] = useState(false)

    const navToggle = () => {
        setisOpen(!isOpen)
    }
    return (
        <>
            <header className="header container-full">
                <nav className="navbar ">
                    <div className="nav-brand">
                        <div className="nav-logo" onClick={navToggle}> {isOpen ? <BsArrowLeft /> : <HiMenu />}</div>
                    </div>
                </nav>
            </header>

            <div className={`nav-settings container-full ${isOpen ? 'show-menu' : ''}`}>
                {/* start settings */}
                <div className="quick-start-settings">
                    <h3>Quick Start Settings</h3>
                    <div className="select-quaction">
                        <div><FaQuestion /></div>
                        <div>Number of Questions</div>
                        <div>5</div>
                    </div>
                    <hr className="hr" />
                </div>

                {/* system settings */}
                <div className="system-settings">
                    <h3>System Settings</h3>
                    <div className="select-system">
                        <div><AiTwotoneSound /></div>
                        <div>Sound Feedback</div>
                        <div><IoToggleOutline /></div>
                    </div>
                    <hr className="hr" />

                    <div className="select-system">
                        <div><MdVibration /></div>
                        <div>Vibration Feedback</div>
                        <div><IoToggleOutline /></div>
                    </div>
                    <hr className="hr" />

                    <div className="select-system">
                        <div><RiGalleryLine /></div>
                        <div>Splash image Feedback</div>
                        <div><IoToggleOutline /></div>
                    </div>
                    <hr className="hr" />

                    <div className="select-system">
                        <div><MdOutlineAddCircleOutline /></div>
                        <div>Auto Submit</div>
                        <div><IoToggleOutline /></div>
                    </div>
                    <hr className="hr" />

                    <div className="select-system">
                        <div><LuAlarmClock /></div>
                        <div>Timer</div>
                        <div>10s</div>
                    </div>
                    <hr className="hr" />
                </div>

                {/* multiplication settings */}
                <div className="multiplication-settings">
                    <h3>Multiplication Settings</h3>
                    <div className="select-multiplication">
                        <div><AiOutlineTable /></div>
                        <div>Table size</div>
                        <div>10</div>
                    </div>
                    <hr className="hr" />

                    <div className="select-multiplication">
                        <div><IoMdCloseCircleOutline /></div>
                        <div>Numbers to avoid</div>
                        <div></div>
                    </div>
                    <hr className="hr" />

                    <div className="select-multiplication">
                        <div><FaCircleNotch /></div>
                        <div>Number to include</div>
                        <div></div>
                    </div>
                    <hr className="hr" />
                </div>

                {/* Addition settings */}
                <div className="addtion-settings">
                    <h3>Addition Settings</h3>
                    <div className="select-addition">
                        <div><FaCircleNotch /></div>
                        <div>First Number</div>
                        <div></div>
                    </div>
                    <hr className="hr" />
                    <div className="select-addition">
                        <div><FaCircleNotch /></div>
                        <div>First Number</div>
                        <div></div>
                    </div>
                    <hr className="hr" />
                </div>
                {/* Subtraction settings */}
                <div className="substraction-settings">
                    <h3>Substraction Settings</h3>
                    <div className="select-substraction">
                        <div><FaCircleNotch /></div>
                        <div>First Number</div>
                        <div></div>
                    </div>
                    <hr className="hr" />
                    <div className="select-substraction">
                        <div><FaCircleNotch /></div>
                        <div>second Number</div>
                        <div></div>
                    </div>
                    <hr className="hr" />
                </div>

                {/* Square settings */}
                <div className="square-settings">
                    <h3>Square Settings</h3>
                    <div className="select-square">
                        <div><FaCircleNotch /></div>
                        <div>Number to include</div>
                        <div></div>
                    </div>
                    <hr className="hr" />
                </div>

                {/* Cube settings */}
                <div className="cube-settings">
                    <h3>Cube Settings</h3>
                    <div className="select-cube">
                        <div><FaCircleNotch /></div>
                        <div>Number to include</div>
                        <div></div>
                    </div>
                    <hr className="hr" />
                </div>

                {/* division settings */}
                <div className="division-settings">
                    <h3>Division Settings</h3>
                    <div className="select-division">
                        <div><AiOutlineTable /></div>
                        <div>Table size</div>
                        <div>10</div>
                    </div>
                    <hr className="hr" />

                    <div className="select-division">
                        <div><IoMdCloseCircleOutline /></div>
                        <div>Numbers to avoid</div>
                        <div></div>
                    </div>
                    <hr className="hr" />

                    <div className="select-division">
                        <div><FaCircleNotch /></div>
                        <div>Division by</div>
                        <div></div>
                    </div>
                    <hr className="hr" />
                </div>

                 {/* theme settings */}
                <div className="theme-settings">
                    <h3>Theme</h3>
                    <div className="select-theme">
                        {/* <div><FaCircleNotch /></div> */}
                        <div>Pink</div>
                        <div><IoRadioButtonOn /></div>
                    </div>
                    <hr className="hr" />
                    <div className="select-theme">
                        {/* <div><FaCircleNotch /></div> */}
                        <div>Blue</div>
                        <div><IoRadioButtonOn /></div>
                    </div>
                    <hr className="hr" />
                </div>
            </div>
        </>
    )
}

export default Header   