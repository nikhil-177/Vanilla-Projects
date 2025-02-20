import seriesData from '../api/SeriesData.json'

function NetflixSeries(){
    return (
        
       <ul>
        {
            seriesData.map((element) => {
                return (
                    <li key={element.id}>
                        <img src={element.img_url} alt="" width={'30%'} height={'30%'}/>
                        <div>Name: {element.name}</div>
                        <div>Rating: {element.rating}</div>
                        <p>Description: {element.description}</p>
                        <div>Genre: {element.genre}</div>
                        <div>Cast: {element.cast} </div>
                        <a href={element.watch_url} target='_blank'>
                            <button>Watch Now</button>
                        </a>
                    </li>
                )    
            })
        }
        
      </ul>
    )
}

export default NetflixSeries