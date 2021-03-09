const Button = ({color, text, onClick}) => {
    // const onClick = (e) => {

    // }
    return (
        <button onClick={onClick} className='btn' style={{backgroundColor: color}}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
};

export default Button
