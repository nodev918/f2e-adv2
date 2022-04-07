export { LikeBtn, EmojiBtn, Pager }

function LikeBtn(props) {
    const [isLiked, changeLike] = React.useState(false)
    return (
        <button className="xxx" onClick={() => {
            changeLike(!isLiked)
        }}>{isLiked ? '取消' : '點讚'}  👍</button>
    )
}

function EmojiBtn(props) {
    const [num, changenum] = React.useState(0)
    return (
        <button onClick={() => {
            changenum(num + 1)
        }}>{num}  {props.emo}</button>
    )
}

function Pager(props) {
    const buttons = (
        Array.apply(null, { length: props.total })
        .map((n, index) => index + 1)
        .filter((n) => {
            if (n === 1) {
                return true
            } else if (n === props.total) {
                return true
            } else if (Math.abs(n - props.current) <= 2) {
                return true
            } else {
                return false
            }
        })
        .reduce((prev, n) => {
            const last = prev[prev.length - 1];
            return prev.concat(n - last > 1 ? [-1, n] : [n])
        }, [])
        .map((n, i) => (
            n === -1 ? <span key={i}>...</span> : <button key={i}>{n}</button>
        ))
    )

    return <div>{buttons}</div>
}