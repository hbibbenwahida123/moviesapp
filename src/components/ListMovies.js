import CardMovies from "./CardMovies"

const ListMovies =({movies,titre})=> {
    return (
        <div id="listmovies">
            {

                movies.filter((el,i,t)=>el.title.toUpperCase().includes(titre.toUpperCase())).map((el,i,t)=> <CardMovies key={el.id} el={el}/>) 
                
                
                
                // .map((el,i,t)=> <CardMovies key={el.id} el={el}/>) 
               
            }

        </div>
    )
}

export default ListMovies 