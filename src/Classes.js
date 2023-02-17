const Classes = () =>{

    // Class
  class myName{
    constructor(name){
      this.name = name
    }
    showMyname = ()=>{
      return "my name is "+this.name
    }
  }
  class myLName extends myName{
    constructor(name,lname){
      super(name)
      this.lastname = lname
    }
    showFullName = () =>{
      return this.showMyname()+" and my lastname is "+this.lastname
    }
  }
  const name = new myLName("Narutchai","Nhongharn")
  return name.showFullName()

}
export default Classes