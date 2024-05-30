import Guess from './guesses';
import { useState} from 'react';

function Body () {
    const [numGuesses, setNumGuesses] = useState(0);
    const [listSimiliarity, setListSimilarity] = useState([])
    //    const listItems = guessList.map((d) => <h1 key={d}>{d}</h1>);

    function handleKeyDown(event) {
        if (event.code === "Enter") {
            const isvalid = true; //needs to be modified to determine whether a word is actually a word!!!
            if (isvalid) {
                const similarity = Math.random()*100 //Needs to be modified to get actual similarity score!!
                var currentWord = document.getElementById("guess").value;
                var currentSim = similarity;
                const newSimList = [];

                for (let i = 0; i < listSimiliarity.length; i++) {
                    if (listSimiliarity[i].similarity <= currentSim){
                        newSimList.push({id: currentWord, similarity: currentSim})
                        currentWord = listSimiliarity[i].id;
                        currentSim = listSimiliarity[i].similarity;
                    }
                    else {
                        newSimList.push({id: listSimiliarity[i].id, similarity: listSimiliarity[i].similarity})
                    }
                }
                if (listSimiliarity.length < 20) {
                    newSimList.push({id: currentWord, similarity: currentSim});
                }
                setListSimilarity(newSimList);
                document.getElementById("guess").value = "";
                setNumGuesses(numGuesses + 1)

            }
            console.log(document.getElementById("guess").value)

        }
      }
    return (
        
    <div className = "body">
    <input type="text" className="name" id = "guess" placeholder = "Guess Here" onKeyDown={handleKeyDown} />
    
    <div className = "guessList" >
        {/* <Guess word = "Supercalifragilisticexpialidocious" similarity = {10}></Guess>
        <Guess word = "123456789" similarity = {52}></Guess>
        <Guess word = "Testing" similarity = {50}></Guess>
        <Guess word = "Testing" similarity = {50}></Guess>
        <Guess word = "Testing" similarity = {50}></Guess>
        <Guess word = "Testing" similarity = {50}></Guess>
        <Guess word = "Testing" similarity = {50}></Guess> */}

        {listSimiliarity.length > 0 && listSimiliarity.map((x) => <Guess word = {x.id} similarity = {x.similarity}></Guess>)}

    </div>

    </div>
)

}

export default Body;