import PropTypes from 'prop-types';


function Btn({ text, fontSize }) {
    return <button
        style={{
            value : {text},
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize
        }}>
        {text}</button>
}

Btn.propTypes = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired, 
};

export default Btn;