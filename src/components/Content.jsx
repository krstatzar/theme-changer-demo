import { useThemeContext } from "./ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'


export function Content(){

   
 const {theme} = useThemeContext();

 
   

    return(
        <div className="content">

            <h2>Slected theme:
                 {/* This will be rendered if the condition is true */}
      {theme === 'light' ? (<FontAwesomeIcon icon={faSun} style={{color: "#000000",}} />) : (<FontAwesomeIcon icon={faMoon}  style={{color: "#FFF",}} />)  }
               
                {theme}
                </h2>

<img src="https://placehold.co/500x300" alt="image" />
            <p>Simple test project done with Vite + Ract.</p>
               <p> The idea was just to learn useContext hook and ended up adding few more bells and whistles
  </p>
<p><a target="_blank" href="https://github.com/krstatzar/theme-changer-demo">GitHub</a></p>
        </div>
    )
}