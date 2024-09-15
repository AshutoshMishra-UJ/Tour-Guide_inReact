import Card from './Card'
function Tours({tours,removeTour}){
    return(
        <div className="Container">
            <div>
                <h2 className='title'>Plan Tours With Me</h2>
            </div>
            <div className='Cards'>
                {
                    // returning each data and map it with the cards so as we have n number of th data then ot wll map with n number of the cards
                    tours.map((tour)=>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                    
                }
            </div>
        </div>
    );
}
export default Tours;