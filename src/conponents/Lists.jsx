function List() {
  const movies = ["saving private ryan", "Hush", "Inception", "The Batman"];
  const myMovieList = movies.map((myMovieList) => (
    <>
      <li>{myMovieList}</li>
    </>
  ));
  
  return (<ul>{myMovieList}</ul>);
}

export default List;
