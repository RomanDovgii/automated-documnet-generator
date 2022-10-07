import { Link } from "react-router-dom";

function Button(props) {
    const {nextPage, text} = props;

    return (
        <Link to={nextPage}>{text}</Link>
    );
}

export default Button;