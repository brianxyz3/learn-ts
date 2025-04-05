import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  interface User {
    name: string
    readonly id: number
    email: string
    comments: [number, string]
  }

  interface TakePhoto {
    burst: number
    potraitMode: boolean
  }
  
  interface IgStory {
    createStory(): void
  }

  class InstagramPost implements TakePhoto{
    public burst: number = 1
    constructor(
      public potraitMode: boolean
    ){}
  }

  class InstagramStory implements TakePhoto, IgStory{
    createStory(): void{
      console.log("new Story");
      return
    }
    constructor(
      public burst: number,
      public potraitMode: boolean
    ){}
  }

  interface User {
    userRole: "user" | "admin" | "c-level"
  }


  const user1: User = {
    name: "Brian",
    id: 1,
    email: "b@gmail.com",
    comments: [1, "Hello"],
    userRole: "c-level"
  }

  interface Arr {
    [index: number]: unknown
  }
  interface Obj {
    [key: string]: unknown
  }

  const randArr: Arr = ["string", 1]

  const randObj: Obj = {
    user: "david",
    id: 1,
    isAdmin: false
  }
  // console.log(user1);
  console.log(typeof randArr);
  
  let users: User[] = [user1];

  // class Food {
  //   private readonly id: number = 1
  //   name: string
  //   rating: number
  //   constructor(
  //     name: string, rating: number
  //   ){
  //     this.name = name,
  //     this.rating = rating
  //   }
  // }

  // OR
  // Shortcut

  class Food {
    protected _id: number = 1
    constructor(
      public readonly name: string,
      public rating: number ,
    ){}
    
    get getFoodName(): number {
      return this._id;      
    }

    
    public set id(newValue : number) {
      if(newValue <= 1) return;
      this._id = newValue;
    }
    
  }
  

  class OtherFood extends Food {
    private isNew: boolean = true;
      setFood(){
        this._id = 3
      }
  }

  const newFood = new Food("Rice", 3);
  // console.log(users);

  // console.log(newFood);
  
  return (
    <>
      <div>
        <a href="https://vite.dev" rel="noopener noreferrer" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" rel="noopener noreferrer" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
