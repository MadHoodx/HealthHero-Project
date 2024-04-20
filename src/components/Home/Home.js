import Navbar from "../Navbar/Navbar";
import "./Home.css"
import { IoIosArrowForward } from "react-icons/io";
import { CiCalculator1 } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaGlasses } from "react-icons/fa6";

export default function Home() {

    return (

        <body className="homebody">

            <Navbar></Navbar>

            <div className="homebackground"></div>


            <div className="fourbluebox">
                <div className="bluebox">
                    <FaGlasses className="glasses" /><br></br>
                    <p4> Human <br></br>Benchmark</p4><br></br>
                    <button><IoIosArrowForward className="arrow" /></button>
                </div>

                <div className="bluebox1">
                    <CiCalculator1 className="cal" /><br></br>
                    <p3>TDEE</p3><br></br>
                    <button><IoIosArrowForward className="arrow" /></button>
                </div>

                <div className="bluebox">
                    <IoNewspaperOutline className="news" /><br></br>
                    <p3>News</p3><br></br>
                    <button><IoIosArrowForward className="arrow" /></button>
                </div>

                <div className="bluebox1">
                    <IoLocationSharp className="loc" /><br></br>
                    <p3>Locations</p3><br></br>
                    <button><IoIosArrowForward className="arrow" /></button>


                </div>
            </div>

            <div className="humancontainer">

                <div className="humanbenchmark">
                    <div className="twocolorbox"><FaGlasses /> </div>
                    <h3>Human Benchmark</h3>
                    <p3>Human Benchmark is the test of physical body. </p3>
                    <p3>Reaction, Number memory, Color blind test,
                        <br></br>Verbal memory, Typing test.</p3>

                </div>

                <div className="tdeedetail">
                    <div className="twocolorbox">
                        <CiCalculator1 />
                    </div>
                    <h3>TDEE Calculator</h3>
                    <p3>TDEE Calculator is a tool that estimates the <br></br>calories
                        burn by your body in a day based on <br></br>your aged, sex,
                        height, weight, <br></br>and physical activity level</p3>

                </div>
            </div>


            <div className="line"></div>
            
            <div className="humancontainer">
                <div className="newsdetail">
                    <div className="twocolorbox">
                        <IoNewspaperOutline />
                    </div>
                    <h3>News</h3>
                    <p3>We will update every news story in Thailand every <br></br>day.</p3>

                </div>
                <div className="locdetail">

                    <div className="twocolorbox">
                        <IoLocationSharp />
                    </div>
                    <h3>Locations</h3>
                    <p3>We will correct the exercise place near you.</p3>

                </div>


            </div>

            <div className="line"></div>


            <div className="newstoday">
                <div className="bluerod"></div>
                <h1 >News today</h1>
            </div>




        </body >



    )

}