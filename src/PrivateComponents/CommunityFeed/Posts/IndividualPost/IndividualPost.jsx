import './IndividualPost.css'

function IndividualPost(props){
    const formatDate = (dateString) =>{
        let tempDate = [...dateString]
        console.log(tempDate)
        let day = tempDate.splice(8, 2).join('')
        let month = tempDate.splice(5, 2).join('')
        let year = tempDate.splice(0, 4).join('')
        let newDate = `${month}/${day}/${year}`
        return newDate
      }
    return (
        <div className="IndividualPost">
            <p>Username?</p>
            <p>Date: {formatDate(props.post.createdAt)}</p>
            <p>{props.post.content}</p>
            <div className="controller-container">
                <button>Like</button>
                <button>Comment</button>
            </div>
        {/* THIS IS THE OVERALL COMPOENET DIV     */}
        </div>
    )}
  
  export default IndividualPost