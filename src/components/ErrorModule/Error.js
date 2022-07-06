import './Error.css';

function Error(props){
    return(
        <div className="backdrop" >
            <div className="card modal">
                <div className="header">
                    <h2>{props.heading}</h2>
                </div>
                <div className="content">
                    <p> {props.message} </p>
                </div>
                <div className="actions">
                    <button onClick={props.onConfirm}>Ok</button>
                </div>
            </div>
        </div>
    );
}

export default Error;