import { useState } from "react";
import Card from "./Card"
import Error from "./Error";
import Footer from "./Footer";

//Aqui deberias escribir tus funciones de validacion
const validateCourse = (course) => {
  const withoutSpaces = course.trim();
  // Separamos el string en un array para luego
  // recorrelo y validar si existe al menos un numero
  const courseArray = withoutSpaces.split("");
  // Some nos retorna true si al menos una de las
  // iteraciones es verdadera
  const hasNumber = courseArray.some((character) => {
    // Si el valor es NaN, no es un numero
    if (isNaN(character)) {
      return false;
    } else {
      return true;
    }
  });
  // Validamos la extension y que haya al menos un numero
  if (withoutSpaces.length > 6 && hasNumber) {
    return true;
  } else {
    return false;
  }
 };
 

const validateName = (name) => {
  // Validamos la extension y que no empiece con un caracter en blanco
  if (name.length > 3 && name[0] !== " ") {
    return true;
  } else {
    return false;
  }
 };
 

function App() {
  const [state, setState] = useState({
    name: "",
    course: "",
    errors: false,
    isSubmitted: false
  })

  const handleChange = (e) => setState(prev => ({...prev,  [e.target.name]: e.target.value}));

  const handleSubmit = (e)=>{
    e.preventDefault()
    const isNameValid = validateName(state.name)
    const isCourseValid = validateCourse(state.course)

    if(!isNameValid || !isCourseValid){
      setState(prev => ({...prev, errors: true, isSubmitted: false}))
    }
    else {
      setState(prev => ({...prev, isSubmitted: true, errors: false}))
    }
  }

  return (
    <div className="App">
     <h1>Carga de estudiantes</h1>
     <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name..." onChange={handleChange}/>
        <input name="course"  placeholder="Course..." onChange={handleChange}/>
        {state.errors ? <Error/> : null}
        <button type="submit" >+</button>
     </form>
     {state.isSubmitted ? <Card name={state.name} course={state.course} /> : null}

      <Footer/>
    </div>
  );
}

export default App;
