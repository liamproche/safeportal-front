import Resources from '../Resources/Resources';
import './CommunityFeed.css'

//THIS MAY BE WHERE THE BULK OF THE API CALLS HAPPEN

function CommunityFeed() {
    return (
        <div className="CommunityFeed">
            <Resources/>
            <h1>This is the community feed component</h1>
        </div>
    )
}

export default CommunityFeed;