import React from 'react'
import { useContext } from 'react'
import {AppContext} from '../context/AppProvider';

function SetupForm() {

  const {quiz ,handleChange,handleSubmit,error} = useContext(AppContext);

  return (
    <main>
        <section className='quiz quiz-small'>
            <form className='setup-form'>
            <h2>setup quiz</h2>
            <div className="form-control">
                <label htmlFor="amount">number of questions</label>
                <input type="text" name='amount' id='amount' className='form-input' min={1} max={50} value={quiz.amount} onChange={handleChange} />
            </div>
            <div className="form-control">
                <label htmlFor="catogory">catogory</label>
               <select className='form-input' value={quiz.category} onChange={handleChange} name="catogory" id="catogory">
                <option value="sports">sports</option>
                <option value="history">history</option>
                <option value="politcs">politcs</option>
               </select>
            </div>
            <div className="form-control">
                <label htmlFor="difficulty">difficulty</label>
               <select className='form-input' onChange={handleChange} value={quiz.difficulty} name="difficulty" id="difficulty">
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
               </select>
            </div>
            { error && <p className="error">can't generates questions , pls try again</p>}
            <button onClick={handleSubmit} type='submit'>start</button>
            </form>
        </section>
    </main>
  )
}

export default SetupForm