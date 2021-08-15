import React from 'react'
import AddOption  from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'
export default class IndecisionApp extends React.Component{
  state={
    options:[],
    selectedOption:undefined
  }
  
    // Fetch Data
    componentDidMount(){
  
      try {
        const json=localStorage.getItem('options')
        const options= JSON.parse(json)
        if(options){
          this.setState(()=>({
            options
          }))
        }
      }
       catch(e){
  
      }
    }
  
    // Save Data
    componentDidUpdate(prevProps, prevState){
      if(prevState.options.length !== this.state.options.length){
        const json=JSON.stringify(this.state.options)
        localStorage.setItem('options', json)
      }
    }
  
    componentWillUnmount(){
      console.log('componentWillUnmount')
    }
  
    handleDeleteOptions=()=>{
      this.setState(()=>({
        options:[]
      }))
    }
  
    handleDeleteOption=(optionToRemove)=>{
      this.setState((prevState)=>({
        options:prevState.options.filter((option)=> optionToRemove!== option)
      }))
  
    }
  
    handlePick=()=>{
      this.setState(()=>{
       const randNumber=Math.floor(Math.random() * this.state.options.length)
       const option =this.state.options[randNumber]
       this.setState(()=>({
         selectedOption:option
       }))
      })
    }
  
    handleAddOption=(option)=>{
      if(!option){
        return 'Enter valid value to add option'
      } else if(this.state.options.indexOf(option) > -1){
        return 'This option are already exist'
      }
     this.setState((prevState)=>({
       options:prevState.options.concat(option)
  
     }))
    }

    handleClearSelectedOption=()=>{
      this.setState(()=>({
        selectedOption:undefined
      }))
    }
  
    render(){
  
      const title='Indecision App!!'
      const subTitle= 'Put your life in the hand of computer'
      return(
       <div className = 'container'>
       <Header  title={title} subTitle={subTitle}/>
       <Action hasOptions={this.state.options.length > 0}
       handlePick={this.handlePick}
       />
       <div className ="widget">
       <Options options={this.state.options}
       handleDeleteOptions={this.handleDeleteOptions}
       handleDeleteOption={this.handleDeleteOption}
       />
       <AddOption
       handleAddOption={this.handleAddOption}
       />
       </div>
      
       <div>
       </div>  
       <OptionModal 
       selectedOption = {this.state.selectedOption}
       handleClearSelectedOption = {this.handleClearSelectedOption}
       />
       </div>
      )
    }
  }