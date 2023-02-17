import logo from './logo.svg';
import Kanto from './forRoute/Kanto';
import './App.css';
import { useState } from 'react';
const App = () => {

//  <FetchData props={{url: "https://pokeapi.co/api/v2/type/"}}/>
    // const [kantoData] = Kanto("https://pokeapi.co/api/v2/pokedex/2/")

    // const [myname,setMyname] = useState({brand: "Ford",
    // model: "Mustang",
    // year: "1964",
    // color: "red"}
        
         
        
    // )
    const [myname, setMyname] = useState({
        input: {
          author: {
            id: -1,
            author: {
              fName:'diao',
              lName: 'narutchai'
            }
          },
          message: {
            id: -1,
            text: 'txt',
            date: '2023'
          }
        }
      });
    return(
        <>
        <label>Chane fName</label>
        <input
      
            onChange={
                (e)=>setMyname(
                    { 
                       input:{
                            ...myname.input,
                            author: {
                                ...myname.input.author,
                                author:
                                {
                                    ...myname.input.author.author,
                                    fName: e.target.value
                                }
                            }
                       }
                    }
                )
            }
           
        
        />
        <label>Chane authorID</label>
        <input
      
            onChange={
                (e)=>setMyname(
                    { 
                       input:{
                            ...myname.input,
                            author: {
                                ...myname.input.author,
                                id: e.target.value
                                
                            }
                       }
                    }
                )
            }
           
        
        />
         <label>Chane message Date</label>
        <input
      
            onChange={
                (e)=>setMyname(
                    { 
                       input:{
                            ...myname.input,
                            message: {
                                ...myname.input.message,
                                date: e.target.value
                                
                            }
                       }
                    }
                )
            }
           
        
        />
        
        {/* <p>{myname[1].length}</p> */}
        <p>authorID: {myname.input.author.id}</p>
        <p>authorName: {myname.input.author.author.fName}</p>
        <p>authorName: {myname.input.author.author.lName}</p>
        <p>msgID {myname.input.message.id}</p>
         <p>text {myname.input.message.text}</p>
        <p>messageDate: {myname.input.message.date}</p> 
       
        </>
    )
}

export default App;
