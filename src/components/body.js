function Body () {

    function handleKeyDown(event) {
        if (event.code == "Enter") {
            console.log(document.getElementById("guess").value)

        }
      }
    return (
        
    <div className = "body">
    <input type="text" className="name" id = "guess" placeholder = "Guess Here" onKeyDown={handleKeyDown} />
    </div>
)

}

export default Body;