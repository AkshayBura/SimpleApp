function Content(props){
    return(
        <>
        <div className="container">
            <h1>{props.name}</h1>
            <p className="para-desc">{props.description}</p>
        </div>
        </>
    );
}

export default Content;