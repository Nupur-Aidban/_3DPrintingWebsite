export default function InputBox(props) {
    return (
        <div className='input-group'>
            <span className="icon">            
                {props.icon}
            </span>
            <input type="text" {...props}/>
        </div>
    );
}