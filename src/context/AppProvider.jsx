import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const table = {
    sports : 21,
    history : 23,
    politics : 24

}


export const AppContext = createContext();
export const AppProvider = ({children}) => {

    const [correct,setCorrect] = useState(0)
    const [waiting,setWaiting] = useState(true)
    const [loading,setLoading] = useState(false)
    const [questions,setQusetions] = useState([])
    const [index,setIndex] = useState(0)
    const [error,setError] = useState(false)
    const [quiz,setQuiz] = useState({
        amount:10,
        category : "sports",
        difficulty:"easy"
    })
    const [modal,setModal] = useState(false)


    const fetchData =  async (url) => {
        setLoading(true)
        setWaiting(false)


        const response = await axios(url);
        
        if(response){
           const data = response.data.results;
           if(data.lenght > 0){
            setQusetions(data);
            setLoading(false)
            setWaiting(false)
            setError(false)
           }else{
            setWaiting(true)
            setLoading(true)
           }
        }else{
            setWaiting(true)
        }


    }


    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
        setWaiting(true);
        setCorrect(0);
    }

    const nextQuestion = () => {
        setIndex((oldIndex) => {
            const index = oldIndex +1;
            if(index > questions.lenght-1){
                openModal();
                return 0;

            }else{
                return index;
            }
        })
    }

    const checkAnswers = (value) => {
        if(value){
            setCorrect((oldState) => oldState+1);
        }

        nextQuestion();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setQuiz({...quiz,[name]:value})

    }



    const handleSubmit = (e) => {
        e.preventDefault();

        const {amount ,difficulty,category} = quiz;

        const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;

        fetchData(url);
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <AppContext.Provider value={{
            waiting , loading , questions , index , correct , error , modal , nextQuestion , checkAnswers , handleSubmit , closeModal ,handleChange
        }}>
            {children}
        </AppContext.Provider>
    )


}