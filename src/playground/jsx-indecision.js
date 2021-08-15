console.log('App.js is running!');

const appRoot = document.getElementById('app');
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit=(e)=>{
  e.preventDefault();
  const option=e.target.elements.option.value
  if(option){
    app.options.push(option)
    e.target.elements.option.value='';
    renderFormValue();
  }
}
const removeFormValue=()=>{
  app.options=[]
  renderFormValue()
}

const makeDecision=()=>{
  const randNumber = Math.floor(Math.random() * app.options.length)
  const option = app.options[randNumber]
  alert(option)
}

const renderFormValue=()=>{
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'here are your option': 'No option'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length===0} onClick={makeDecision}>what should I do</button>
      <button onClick={removeFormValue}>Remove All</button>
      <ol>
        {app.options.map((option)=> <li key={option}>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option">
      </input>
      <button>Options</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot)
}

renderFormValue()





