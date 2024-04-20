import './Tdee.css';
import Navbar from '../Navbar/Navbar';
import { IoBody } from "react-icons/io5";
import { BsGenderMale } from "react-icons/bs";
import { BsGenderFemale } from "react-icons/bs";
import React from 'react';
import { useState } from "react";






export default function Tdee() {





    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [male, setMale] = useState(null);
    const [female, setFemale] = useState(null);
    const [sedentary, setSendentary] = useState(0);
    const [light, setLight] = useState(null);
    const [heavy, setHeavy] = useState(null);
    const [bmr, setBmr] = useState(0);
    const [cal, setCal] = useState(0);
    const [malepress, setMalePress] = useState(false);
    const [femalepress, setFemalePress] = useState(false);
    const [senpress, setSenPress] = useState(false);
    const [lightpress, setLightPress] = useState(false);
    const [heavypress, setHeavyPress] = useState(false);








    function setMaleOn(e) {
        setMale(1);
        setFemale(0)
        setMalePress(true);
        setFemalePress(false);
    }

    function setFemaleOn(e) {
        setMale(0);
        setFemale(1);
        setMalePress(false);
        setFemalePress(true);
    }

    function setAgeOn(e) {

        setAge(e.target.value);
    }
    function setWeightOn(e) {

        setWeight(e.target.value);
    }
    function setHeightOn(e) {

        setHeight(e.target.value);
    }

    function setSendentaryOn(e) {

        setSendentary(1);
        setLight(0);
        setHeavy(0);
        setSenPress(true);
        setLightPress(false);
        setHeavyPress(false);
    }
    function setLightOn(e) {

        setSendentary(0);
        setLight(1);
        setHeavy(0);
        setSenPress(false);
        setLightPress(true);
        setHeavyPress(false);
    }

    function setHeavyOn(e) {

        setSendentary(0);
        setLight(0);
        setHeavy(1);
        setSenPress(false);
        setLightPress(false);
        setHeavyPress(true);
    }



    function calculateOn() {


        if (male === 1 && female === 0) {

            setBmr((10 * weight) + (6.25 * height) - (5 * age) + 5);
        }
        else if (male === 0 && female === 1) {
            setBmr((10 * weight) + (6.25 * height) - (5 * age) - 161);
        }



        if (sedentary === 1 && light === 0 && heavy === 0) {
            setCal(((10 * weight) + (6.25 * height) - (5 * age) + 5) * 1.2)
        }
        else if (sedentary === 0 && light === 1 && heavy === 0) {
            setCal(((10 * weight) + (6.25 * height) - (5 * age) + 5) * 1.375)
        }
        else if (sedentary === 0 && light === 0 && heavy === 1) {
            setCal(((10 * weight) + (6.25 * height) - (5 * age) + 5) * 1.725)
        }
    }




    return (


        <body className='tdeebody'>

            <Navbar></Navbar>

            <div className='twoboxcontainer'>


                <div className='leftsidebox'>
                    <h1>TDEE Calculator</h1>



                    <div className='gen'>
                        <p3>Gender</p3>
                        <div className='gen-act'>
                            <div className='genderbtn'>
                                <button style={{ backgroundColor: malepress ? '#9ebcf8' : 'white' }} className='malebtn' onClick={(setMaleOn)} >Male</button>
                                <button style={{ backgroundColor: femalepress ? '#f5a2c4' : 'white' }} className='femalebtn' onClick={(setFemaleOn)} >Female</button>
                                <BsGenderMale className='maleicon' />
                                <BsGenderFemale className='femaleicon' />

                            </div>
                            <div className='act'>
                                <p3>Activity</p3>

                                <button style={{ backgroundColor: senpress ? '#9ebcf8' : '#E9F2FD' }} className='sedentary' onClick={(setSendentaryOn)}>Sedentary</button>
                                <button style={{ backgroundColor: lightpress ? '#9ebcf8' : '#E9F2FD' }} className='light' onClick={(setLightOn)}>Light exercise</button>
                                <button style={{ backgroundColor: heavypress ? '#9ebcf8' : '#E9F2FD' }} className='heavy' onClick={(setHeavyOn)}>Heavy exercise</button>




                            </div>
                        </div>
                        <div className="tdee-input-box1">
                            <p2>Age (Year) </p2>
                            <input type="numeric" onChange={setAgeOn} />

                        </div>
                        <div className="tdee-input-box2">
                            <p2>Weight (kg.)</p2>
                            <input type="numeric" onChange={setWeightOn} />

                        </div>
                        <div className="tdee-input-box3">
                            <p2>height (cm.)</p2>
                            <input type="numeric" onChange={setHeightOn} />

                        </div>


                        <button className='tdee-calculate' onClick={calculateOn}>Calculate</button>


                        <div className='resultcontainer'>
                            <h3>Result</h3>

                            <p3><nobr>BMR = {bmr} calories/day </nobr></p3>
                            <p3><nobr>Maintenance = {cal} calories/day </nobr></p3>

                        </div>

                    </div>




                </div>
                <div className='rightsidebox'>

                    <IoBody className='bodyicon' />

                    <div className="bodyfat-input-box">
                        <p2>Body Fat (%)</p2>
                        <input type="numeric" />
                    </div>

                    <button className='bodyfat-calculate'>Calculate</button>



                </div>
            </div>






        </body>
    )



}