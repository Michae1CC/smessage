 import React from "react";

interface MessageBubbleProps {
    message: string;
    fromUser: boolean;
}

export const MessageBubble: React.FunctionComponent<MessageBubbleProps> = (props: MessageBubbleProps) => {
    const bubbleStyle = props.fromUser ? "text-user" : "text-recipient";
    const bootstrapJustifyStyle = props.fromUser ? "justify-content-md-end" : "justify-content-md-start";
    return (
      <div className={`row ${bootstrapJustifyStyle}`}>
        <div className={`col-md-auto ${bubbleStyle}`}>{props.message}</div>
      </div>
    );
}
