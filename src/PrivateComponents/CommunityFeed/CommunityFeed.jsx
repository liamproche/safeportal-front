import Posts from "./Posts/Posts"
import Resources from "../Resources/Resources";
import GroupOverview from "./GroupOverview/GroupOverview";
import './CommunityFeed.css'

//THIS MAY BE WHERE THE BULK OF THE API CALLS HAPPEN

function CommunityFeed() {
    return (
        <div className="CommunityFeed">
            <Resources/>
            <Posts/>
            <GroupOverview/>
        </div>
    )
}

export default CommunityFeed;