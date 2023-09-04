 import React from "react";

interface MessageBubbleProps {
    message: string
}

export const MessageBubble: React.FunctionComponent<MessageBubbleProps> = (props: MessageBubbleProps) => {
    return (
      <div className="row justify-content-md-end">
        <div className="col-md-auto text-user">{props.message}</div>
      </div>
    );
}
