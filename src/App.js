import Toggle from './components/themeToggle';
import logo from './logo.svg';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    
      <div className="bg-blue-50 h-auto flex md:px-6 md:py-6 py-2 px-2 dark:bg-gray-800">
       
        <div className="container mx-auto  md:py-24 py-6 bg-gradient-to-r dark:from-black from-green-500 via-green-600 to-green-400 rounded-xl dark:to-black">

              <div className="text-center  flex flex-col items-center">
                        
                <img src={logo} className="animate-pulse w-64 h-64 shadow-md rounded-full bg-white " alt="logo" />
                
                      
                <p className="text-3xl text-white mt-10">
                  Template using <a href="https://es.reactjs.org/" className="font-bold">React</a> and <a href="https://tailwindcss.com/" className="font-bold">Tailwind</a>.
                </p>
                
                                
                

            
                <div className="mt-10">
                  <Toggle />
                </div> 

                <nav className="text-white mt-10 tracking-wider">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
                  </ul>
                </nav>

                <div className="text-green-800 text-bold dark:text-white mt-10 bg-green-200 dark:bg-gray-700 rounded-xl w-3/4 p-10">
                  <Switch>
                    <Route path="/about">
                      <h1  >This is About</h1>
                    </Route>
                    <Route path="/users">
                      <h1 >This is Users</h1>
                    </Route>
                    <Route path="/">
                      <h1 >This is Home</h1>
                    </Route>
                  </Switch>
                </div>

                <p className="text-white text-sm mt-10">Created by <span className="text-bold">dhinojosac</span></p>

              </div>

              
        </div>

   
      </div>
    </BrowserRouter>

  );
}

export default App;
