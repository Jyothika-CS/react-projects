export const EventProps = () => {

    const handleWelcomeUSer = (user) => {
        alert(`Hey, ${user}`);
    }

    const handleHover = () => {
        alert("Hey thanks for hover!");
    }

    return (
        <>
            <WelcomeUSer 
                onClick={() => handleWelcomeUSer("Jyothika")} 
                onMouseEnter = {handleHover}
            />
        </>
    )
}

const WelcomeUSer = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log("Hey User, Welcome");
        onClick();
    }
    return (
        <>
            <button onClick={onClick}>Click</button>
            <button onMouseEnter={onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}