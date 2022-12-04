//import { useRef } from "react";


const AddRecipe = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    //const name = e.target.elements.name.value;
    //const category = e.target.elements.category.value;
    //const instructions = e.target.elements.instructions.value;
  }

  /*let newRecipe = {
    id: Math.random(),
    //name: props.name,
    //category: props.category,
    //instructions: props.instructions,
   
  };*/

  //props.setRecipes((prevRecipes) => [...prevRecipes, newRecipe]); 

  return (
    <form onSubmit={handleSubmit} className="menu">
      <input type="text" id="name" />
      <input type="text" id="price" />
      <button type="submit">Add Menu Item</button>
    </form>
  );



};

export default AddRecipe;


/*const AddRecipe = (props) => {
  const textRef = useRef("");
  const dateRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const recipe = {
      text: textRef.current.value,
      date: dateRef.current.value,
    };

    props.onAddRecipe(recipe);

    textRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="text">Text</label>
        <textarea rows="5" id="text" ref={textRef}></textarea>
      </div>
      <div>
        <label htmlFor="date">Title</label>
        <input type="date" id="date" ref={dateRef} />
      </div>

      <button>Add Recipe</button>
    </form>
  );
};*/
