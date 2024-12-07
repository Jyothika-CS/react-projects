import "./EV.css"

export const EventHandling = () => {

    // function handleButtonClick() {
    //     alert("Button clicked");
    // }

    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user}, Welcome!`);
    }

    const handleButtonClick = (event) => {
        console.log(event);
        alert("Button clicked");
    }

    return (
        <>
            <button onClick={handleButtonClick}> Click Me </button>
            <br />
            <button onClick={() => handleButtonClick(event)}>Click Me 2</button>
            <br />
            <button onClick={(event) => console.log(event)}> Inline Function </button> 
            <br />
            <button onClick={() => alert("Hey, I am Inline event function")}> Inline Arrow Function </button>
            {/* //Passing Arguments to EventHandling function  */}
            {/* <button onClick={handleWelcomeUser("Jyothika")}> Click Me </button> */}
            <button onClick={() => handleWelcomeUser("Jyothika")}> Click Me </button>
            <button onClick={() => handleWelcomeUser("Ram")}> Click Me </button>
        </>
    )
}