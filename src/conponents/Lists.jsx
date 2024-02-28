function List() {
  const movies = [
    {id: 1, name: "The Batman", rating: 9},
    {id: 2, name: "Saving Private Ryan", rating: 10},
    {id: 3, name: "BladeRunner", rating: 8 },
    {id: 4,name: "Drag Me to Hell", rating: 2},
  ];

  movies.sort((a, b) => b.rating - a.rating);

  const listItems = movies.map((movie) => <li key={movie.id}>{movie.name}: {movie.rating}</li>);

  return (<ul>{listItems}</ul>);
}

export default List;
