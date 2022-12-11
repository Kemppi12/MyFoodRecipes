import { useState , useEffect } from "react";
//import SearchBar from "./SearchBar";
import RecipeList from "../components/RecipeList";

//import { Card } from 'react-bootstrap'
//import { useAuth } from "../contexts/AuthContext";
import MainNavigation from "../components/MainNavigation";
//import { Switch , Route } from 'react-router-dom'
//import SearchRecipesNew from "./SearchRecipesNew";
//import { useHistory } from 'react-router-dom'
//import { useAuth } from "../contexts/AuthContext";
//import firebase from "firebase/compat" 
//import {getDatabase , ref , orderByChild, equalTo, rootRef } 
//from 'https://yourfoodrecipes-bc17a-default-rtdb.europe-west1.firebasedatabase.app/.json';

const dbUrl = 'https://yourfoodrecipes-bc17a-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'

const SavedRecipesPage = () => {

  /*function handleLogout(){
  }*/
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //const { currentUser } = useAuth()

  
  //const history = useHistory()
  //const {currentUser} = useAuth()
  //const id = $uid;

  //const userId = currentUser.$uid

  useEffect(() => {}, [recipes]);

  const fetchRecipesHandler = async () => {


    //const dbUrl = firebase.database().ref();

    //const recipeRef = rootRef.child('recipes').orderByChild('userId').equalTo(userId);

    /*firebase.auth().onAuthStateChanged(user => {
      if (user) {
       const { currentUser } = firebase.auth();
       console.log('Currently logged in user', currentUser);
       store.dispatch(userLoggedIn(currentUser.uid));
       browserHistory.push('/newsfeed');
       // save the current user's uid to redux store.
      } else {
       browserHistory.push('/signin');
       // delete the current user's uid from the redux store.
      }
     })

     const fetchEmployees = () => {
      const {currentUser} = firebase.auth();
     
      return (dispatch) => {
       firebase.database().ref(`/users/${currentUser.uid}/employees`)
           .on('value', (snapshot) => {
            dispatch({type: FETCH_EMPLOYEE_SUCCESS, payload: snapshot.val()})
           });
           //TODO catch error
      }
     }*/

    const url = dbUrl;

    try{
      setLoading(true);
      const response = await fetch (url);
      console.log(response)

      if(!response.ok){
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      
      console.log(data)

      const fetchedRecipes = [];


      for (const key in data) {
        fetchedRecipes.push({
          id: key,
          name:data[key].name,
          category:data[key].category,
          area:data[key].area,
          instructions:data[key].instructions,
          image:data[key].image,
        });
      }

      /*for (const userId in data){
        fetchedRecipes.push({
          id:userId,
          name:data[userId].name,
          category:data[userId].category,
          area:data[userId].area,
          instructions:data[userId].instructions,
          image:data[userId].image,
       })
      }*/

      setRecipes(fetchedRecipes);
      setLoading(false);
    }catch (error){
      setError(error.message);
      setLoading(false);
    }
  }; 

  useEffect(() => {
    fetchRecipesHandler();
  }, []);

  let content;

  if(loading){
    content = <p>Loading....</p>;
  }else if(error){
    content = <p>{error}</p>;
  }else {
    content = <RecipeList recipes={recipes}/>;
  }
  
  return (
    <div>
      <MainNavigation />          
      <div className="recipe-list">
        {content}
      </div>      
    </div>
  )
  

  }; 
  export default SavedRecipesPage;
  
  
  