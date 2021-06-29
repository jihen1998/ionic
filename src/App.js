import logo from './logo.svg';
import './App.css'
import {React,useState} from "react";
import { Route } from 'react-router-dom';
import GoalList from "./components/test";
import NewGoal from "./components/newGoal";
import '@ionic/react/css/core.css';
import {IonApp, IonButton, IonDatetime, IonRouterOutlet} from '@ionic/react';
import {IonReactRouter} from "@ionic/react-router";
import Home from "./components/Home";
function App() {
  /*  const [courseGoals,setCourseGoals]=useState(
        [{id:1,text:'Finish the Course'},
        {id:2,text:'Learn all about the Course Main Topic'},
        {id:3,text:'Help other students in the Course Q&amp;A'}])
const addGoalsHandler=(newGoal)=>{
// setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prev=>prev.concat(newGoal))
console.log(courseGoals);*/


  return (
 /*   <div title="this works" className="Att">
     hellgho world
        <NewGoal  onAddGoal={addGoalsHandler}/>
   <GoalList  goals={courseGoals} />
    </div>*/
     <div>
         <IonApp>
             <IonReactRouter>
                 <IonRouterOutlet>
                 </IonRouterOutlet>
             </IonReactRouter>
         </IonApp>
<Home/>
     </div>
  );
}

export default App;
