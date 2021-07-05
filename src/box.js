import React, {useState, useEffect} from 'react';
// import Countdown from 'react-countdown';
import './styles/output.css'
import './App.css';


function Box(props) { // Renderer callback with condition
    const renderer = ({hours, minutes, seconds, completed}) => {
        if (completed) { // Render a completed state
            return <h1>Done</h1>
        } else { // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };

    return (
        <div> {
            props.question.id === 13 ? <div className="bg-blue-200 w-16 h-16 sm:w-32 sm:h-32 lg:w-36 lg:h-36 p-2 rounded shadow-lg">

                <div className="flex flex-col justify-center sm:mt-5">
                    {
                    props.lock ? <div className="flex flex-col justify-center items-center">
                        <svg className="animate-bounce w-6 h-6 text-amber-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                        <div className="h-4 w-14 sm:h-8 sm:w-24 px-4 bg-yellow-400 hover:bg-blue-700 text-white rounded flex justify-center items-center">
                            <div onClick={
                                    (ev) => {
                                        ev.preventDefault();
                                        props.startGame()
                                    }
                                }
                                className="text-xs sm:text-sm cursor-pointer">START</div>
                        </div>
                    </div> : <div className="flex flex-col justify-center items-center text-xxs sm:text-sm font-bold">
                        <p>Correct : {
                            props.correct
                        } </p>
                        <p>Incorrect : {
                            props.incorrect
                        }</p>
                        <p>Bingos : {
                            props.bingo
                        }</p>

                    </div>
                } </div>

            </div> : <div className={
                `p-2 rounded w-16 h-16 sm:w-32 sm:h-32 lg:w-36 lg:h-36 shadow-lg flex flex-col justify-center ${
                    props.question.in_correct ? "blur-xs bg-red-300 cursor-not-allowed pointer-events:none" : (props.question.correct) ? "blur-xs bg-green-300 cursor-not-allowed pointer-events:none" : "bg-white"
                } ${
                    props.lock ? "filter blur-sm cursor-not-allowed pointer-events:none" : "filter blur-none pointer-events:cursor"
                }`
            }>
                <div className="h-14 sm:h-16 md:h-20 lg:h-24">
                    <p className="text-green-800 font-mono text-xxs sm:text-xs">
                        {
                        props.question.question
                    }</p>
                </div>
                <div className="flex flex-row justify-center">

                    <div onClick={
                            (ev) => {
                                ev.preventDefault();
                                if (props.lock || props.question.is_selected) 
                                    return;
                                


                                props.onClick(props.index, props.question, true)
                            }
                        }
                        className="h-3 w-6 sm:w-12 sm:h-6 px-3 text-xs bg-green-500 rounded text-white mr-2 text-xxs sm:text-xs flex justify-center items-center cursor-pointer">
                        True
                    </div>

                    <div onClick={
                            (ev) => {
                                ev.preventDefault();
                                if (props.lock || props.question.is_selected) 
                                    return;
                                


                                props.onClick(props.index, props.question, false)
                            }
                        }
                        className="h-3 w-6 sm:w-12 sm:h-6 px-3 text-xs bg-red-500 rounded text-white text-xxs sm:text-xs flex justify-center items-center cursor-pointer">
                        False
                    </div>


                </div>
            </div>
        } </div>
    );
}

export default Box;
