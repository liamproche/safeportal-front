import Resources from '../Resources/Resources';
import Posts from "./Posts/Posts"
import './CommunityFeed.css'

//THIS MAY BE WHERE THE BULK OF THE API CALLS HAPPEN

function CommunityFeed() {
    return (
        <div className="CommunityFeed">
            <h1>This is the community feed component</h1>
            <Resources/>
            <Posts/>
        </div>
    )
}

export default CommunityFeed;