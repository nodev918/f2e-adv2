import { LikeBtn, EmojiBtn, Pager } from "./component/button.js.js";

function App() {
  React.useEffect(() => {
    console.log("I am mounted");
  }, []);
  return (
    <div>
      <LikeBtn />
      <EmojiBtn emo={"😍"} />
      <EmojiBtn emo={"🍔 "} />
      <Pager current={617} total={999} />
    </div>
  );
}

ReactDOM.render(<App />, root);
