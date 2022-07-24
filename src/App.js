
import './App.css';
import Loading from './components/LogingScreen';
import Modal from './components/Modal';
import SetupForm from './components/SetupForm';
import { useContext } from 'react';
import { AppContext } from './context/AppProvider';

function App() {

  const { waiting , loading , questions , index , correct , nextQuestion, checkAnswer } = useContext(AppContext);
  if(waiting){
    return(
      <SetupForm/>
    )
  }
  if(loading){
    return (
      <Loading />
    )
  }

  const { incorrect_answers , correct_answer , question } = questions[index];

  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random()*4);
  if(tempIndex === 3){
    answers.push(correct_answer);
  }else{
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <div className="App">
     {/* <SetupForm/>
     <Modal/>
     <Loading/> */}
     <section className='quiz'>
        <p className="coorect-answers">coorect answers:{correct}/{index}</p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{__html:question}} />
          <div className="btn-container">
            {
              answers.map((answer,idx) => (
                <button  onClick={()=>checkAnswer(correct_answer === answer)} dangerouslySetInnerHTML={{__html:answer}}  className="answer-btn" key={index}></button>
              ))
            }
          </div>
          <button className='next-questions'>next-questions</button>
        </article>
        <button onClick={nextQuestion} className='next-question'></button>
     </section>
    </div>
  );
}

export default App;
