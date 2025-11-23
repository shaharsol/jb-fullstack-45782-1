import User from "../../models/User"
import Comment from "../../models/Comment"

const postIncludes = {
    include: [User, {
        model: Comment,
        include: [User]
    }]
}

export default postIncludes