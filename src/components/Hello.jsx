const name = "component";
function Hello({message}){
      return (
            <h1>
                  {message.text} 
                  {message.name} 
                  {message.emoji}
                  {message.numbers}
            </h1>
      );
}

export default Hello;