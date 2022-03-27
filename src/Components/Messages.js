import Message from "./Message";

export default function Messages({ messages }) {
    return (
        <div className="posts">
            {messages.map((m)=>(
                <Message message={m} />
            ))}
        </div>
    );
}