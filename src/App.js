import React, {useState, useEffect} from 'react';
import questions from './questions.json'
import './styles/output.css'
import sound from './sound.wav'
import click from './mouse-click.wav'
import error from './error.mp3'
import Box from './box.js';
function App() {
    const [question, setQuestions] = useState([]);
    const [lock, setLock] = useState(true);
    const [bounce, setBounce] = useState();
    const [correct, setCorrect] = useState(0);
    const [incorrect, setInorrect] = useState(0);
    const [bingo, setBingo] = useState(0);
    const [all_selected, setAllSelected] = useState(false);


    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => { // Update the document title using the browser API
        setQuestions(questions)
    }, []);

    const checkResult = (selected) => {
        if (is_adjacent_row_selected(selected) || is_adjacent_column_selected(selected) || is_main_diagonal_selected(selected) || is_anti_diagonal_selected(selected)) {
            setBingo(bingo + 1);
            let audio = new Audio(sound);
            audio.play()
            setBounce('animate-pulse')
            setTimeout(function () {
                setBounce('')
            }, 2000);
        }
    }

    const handleClick = (index, selected, answer) => {
        let newArr = [...question]
        newArr[index].is_selected = true;
        setQuestions(newArr)
        if (selected.answer === answer) {
            let audio = new Audio(click);
            audio.play()
            let newArr = [...question]
            newArr[index].correct = selected.correct ? false : true;
            setQuestions(newArr)
            checkResult(selected)
            setCorrect(correct + 1)
        } else {
            let audio = new Audio(error);
            audio.play()
            let newArr = [...question]
            newArr[index].in_correct = selected.in_correct ? false : true;
            setQuestions(newArr)
            setInorrect(incorrect + 1)
        }
        // setLock(check_all_selected);

    }


    const is_adjacent_row_selected = selected => {
        return question.filter((item) => {
            return item.position[0] == selected.position[0]
        }).every((item) => {
            return item.correct
        })
    }

    const is_adjacent_column_selected = selected => {
        return question.filter((item) => {
            return item.position[1] == selected.position[1]
        }).every((item) => {
            return item.correct
        })
    }

    const is_main_diagonal_selected = selected => {
        return question.filter((item) => {
            return selected.is_main_diagonal === item.is_main_diagonal;
        }).every((item) => {
            return item.correct
        })
    }

    const is_anti_diagonal_selected = selected => {
        return question.filter((item) => {
            return selected.is_anti_diagonal === item.is_anti_diagonal;
        }).every((item) => {
            return item.correct
        })
    }

    const check_all_selected = selected => {
        return question.every((item) => {
            return item.is_selected
        })
    }


    return (

        <div className="bg-gradient-to-r from-yellow-100 to-yellow-300 min-h-screen flex items-center justify-center">
            <div className={
                `${bounce} grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-1`
            }>
                {
                question.map((item, index) => {
                    return <Box question={item}
                        lock={lock}
                        bingo
                        ={bingo}
                        correct
                        ={correct}
                        incorrect={incorrect}
                        all_selected={all_selected}
                        key={
                            item.id
                        }
                        onClick={handleClick}
                        startGame
                        ={() => setLock(currentLock => !currentLock)}
                        index={index}></Box>
            })
            } </div>
        </div>

    );
}

export default App;
