 import React from "react";

interface MessageBubbleProps {
    message: string;
    fromUser: boolean;
}

export const MessageBubble: React.FunctionComponent<MessageBubbleProps> = (props: MessageBubbleProps) => {
    return (
      <div className="row justify-content-md-end">
        <div className={"col-md-auto text-recipient"}>{props.message}</div>
      </div>
    );
}
