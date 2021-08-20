import React, {useState} from 'react';
import './Eightball.css'

const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
]

const EightBall = (props) => {
    /// I'm having trouble figuring out the start state
    const [start, startMessage] = useState("Think of a question")
    const isStart = useState(start)
    const genRandom = () => Math.floor(Math.random() * answers.length);
    const [random, chooseAnswer] = useState(genRandom())
    console.log(random)
    const answer = answers[random]
    return (
        <div className="game">
            <div className="eight-ball">
                <p className="eight-ball-text" style={{color: answer.color}}>{answer.msg}</p>
            </div>
            <div className="button-div">
                <button onClick={() => chooseAnswer(genRandom())}>Ask the Magic 8 Ball!</button>
            </div>
        </div>
    )
}

export default EightBall;