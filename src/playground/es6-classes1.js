class Person{
    constructor(name='Anonymous', age=0){
      this.name=name
      this.age=age
      
    }
 getGreeting(){
     return ` hi i am ${this.name}`
 }

    getDescription(){
      return ` ${this.name} is ${this.age} old`
    }
  }

  class Student extends Person{
      constructor(name, age,major){
         super(name,age)
         this.major=major
      }
  }

  class Traveler extends Person{
      constructor(name,age, homeLocation){
       super(name,age)
       this.homeLocation=homeLocation
      }
      getGreeting(){
          let traveler=super.getGreeting()
          if(this.homeLocation){
            traveler+= `and visiting from ${this.homeLocation}`
          }

       return traveler   
      }
      
  }
  
  const result= new Student('Andrew Mead', 26, 'Computer Science')
  console.log(result)
  const me= new Traveler('Andrew Mead', 26, 'Peshawar')
  console.log(me.getGreeting())
 