
const Display = ({images}) => {

    console.log(images)
    return(
        <div className="image">
            {images.map((pics,ind)=>{
                return(
                    <div className="flex" key={ind}>
                    <p>👍 {pics.likes}</p>
                        <img  src={pics.urls.regular} alt={pics.alt_description}/>
                    <h5> {pics.alt_description}</h5>
                    </div>
                )
            })}
        </div>
    )
}

export default Display;