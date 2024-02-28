function Button() {

  let count = 0;

  const handleClick = (name) => {
    if(count < 3){
      count++
      console.log(`${name} You Clicked Me this many times ${count}`)
    } else{
      console.log(`${name} Stop clicking`)
    }
  };

  return <button onClick={() => handleClick("Brooooooo")} className="button">Dont Push Me!</button>;
}

export default Button;

//check console