import axios from "axios"; // library used to send asynch CRUD
import { useEffect, useState } from "react";

import Messages from "./Messages";

const url = "https://mcmillendevelopment-default-rtdb.firebaseio.com/messages.json";

export default function Admin(){
    const [messages, setMessages] = useState([]);
    useEffect(()=> {
        // Can't fetch data directly here b/c async,
        // so create a function to do it
        const fetchMessages = async ()=> {
            const res = await axios.get(url);
            setMessages(res.data);
        };
        fetchMessages();
    }, []);

    return (
        <>
            <div className="home">
                <Messages messages={messages} />
            </div>
        </>
    )
}