import { MainContainer } from "@minchat/react-chat-ui";
import './chat.css'
       import React from 'react'
       
       export default function Chat() {
         return (
            <div className="chatcon"> <MainContainer
            inbox={{
                onScrollToBottom: () => { },
                themeColor: "#6ea9d7",
                loading: false,
                onConversationClick: () => console.log("onChat click"),
                selectedConversationId: "1"
            }}
            selectedConversation={
                {
                    themeColor: "#6ea9d7",
                    messages: [
                        {
                            "user": {
                                "id": "danny_1",
                                "name": "Daniel Georgetown",
                                avatar: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"

                            },
                            "text": "first message"
                        },
                        {
                            "user": {
                                "id": "mark",
                                "name": "Markus"
                            },
                            "text": "hello"
                        },],
                        header: "Sandra Bullock",
            currentUserId: "danny_1",
                onSendMessage: () => console.log("onSendMessage"),
                onBack: () => { }

            }
        }
    />
        </div>
         )
       }
       