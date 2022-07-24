import React from 'react'

function SetupForm() {
  return (
    <main>
        <section className='quiz quiz-small'>
            <form className='setup-form'>
            <h2>setup quiz</h2>
            <div className="form-control">
                <label htmlFor="amount">number of questions</label>
                <input type="text" name='amount' id='amount' className='form-input' min={1} max={50} />
            </div>
            <div className="form-control">
                <label htmlFor="catogory">catogory</label>
               <select className='catogory' name="catogory" id="catogory">
                <option value="sports">sports</option>
                <option value="history">history</option>
                <option value="politcs">politcs</option>
               </select>
            </div>
            <div className="form-control">
                <label htmlFor="difficulty">difficulty</label>
               <select className='difficulty' name="difficulty" id="difficulty">
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
               </select>
            </div>
            <p className="error">can't generates questions , pls try again</p>
            <button type='submit'>start</button>
            </form>
        </section>
    </main>
  )
}

export default SetupForm