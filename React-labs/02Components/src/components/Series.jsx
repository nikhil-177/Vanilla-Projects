import seriesData from '../api/SeriesData.json'
import '../App.css'

function NetflixSeries(){
    return (
        
       <ul>
        {
            seriesData.map(({id , img_url , rating , description , genre , name , cast , watch_url}) => {
                return (
                    <li key={id}>
                        <img src={img_url} alt="" width={'30%'} height={'30%'}/>
                        <div id='name'>Name: {name}</div>
                        <div className=
                        {(rating >= 8.5) ? 'rating-above' : 'rating-below'}>
                            Rating: {rating}</div>
                        <p>Description: {description}</p>
                        <div id='genre'>Genre: {genre.join(",")}</div>
                        <div id='cast'>Cast: {cast.join(",")} </div>
                        <a href={watch_url} target='_blank'>
                            <button className={(rating >= 8.5 ) ? 'btn btn-above' : 'btn btn-below'}>Watch Now</button>
                        </a>
                    </li>
                )    
            })
        }
        
      </ul>
    )
}

export default NetflixSeries