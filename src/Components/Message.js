import { Link } from "react-router-dom";

export default function Message({ message }) {
    return (
        <div className="post">
            <div className="postInfo">
                <span className="postTitle">
                    <Link to={`/post/${message._id}`} className="link">
                        {message.name}
                    </Link>
                </span>
                <hr />
            </div>
            <p className="postDesc"><strong>Email: </strong>{message.email}</p>
            <p className="postDesc"><strong>Phone Number: </strong>{message.phone}</p>
            <p className="postDesc"><strong>Message: </strong>{message.information}</p>
        </div>
    )
}