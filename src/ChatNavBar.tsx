import "./ChatNavBar.scss"

export function ChatNavBar() {
  return (
    <>
    <div className="chat-nav-outer">
      <a href="/"><div className="row nav-option">Hi</div></a>
      <a href="/"><div className="row nav-option">Hi 2</div></a>
      <a href="/"><div className="row nav-option">Hi 3</div></a>
    </div>
    <hr/>
    <div className="chat-nav-outer">
      <a href="/"><div className="row nav-option"> Hi Again</div></a>
      <a href="/"><div className="row nav-option"> Hi Again 2</div></a>
      <a href="/"><div className="row nav-option"> Hi Again 3</div></a>
    </div>
    </>
  );
}

export default ChatNavBar;