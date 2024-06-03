import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src="./assets/free-avatar-370-456322.webp" alt="" />
                    <span className="postUsername">Johan Andersson</span>
                    <span className="postDate">5 mins ago</span>
                    <MoreVert/>
                </div>
                <div className="postTopRight"></div>
            </div>
            <div className="postCenter">
                <span className="postText">Finally! Holidays!</span>
                <img className="postImg" src="./assets/p014mtzq.jpg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="./assets/facebook-reaction-like.svg" alt="" />
                    <img className="heartIcon" src="./assets/2489672.webp" alt="" />
                    <span className="postLikeCounter">32 people like it!</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
