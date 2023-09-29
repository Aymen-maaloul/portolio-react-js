import logo from './logo.svg';
import ODS from './assest/ODS.png';
import Git from './assest/Git.png';
import arduino from './assest/arduino.png';
import baya from './assest/baya.png';
import bl from './assest/bl.png';
import css from './assest/css.png';
import desktop from './assest/desktop.webp';
import facebook from './assest/facebook.png';
import figma from './assest/figma.png';
import github from './assest/github.png';
import html from './assest/html.png';
import instagram from './assest/instagram.png';
import me from './assest/me.png';
import plus from './assest/plus.png';
import python from './assest/python.png';
import share from './assest/share.png';
import text from './assest/text.png';
import working from './assest/working.png';
import './App.css';
import style from './index.css'
function App() {
  return (
    
    <div className="App">
      <Head />
      <Home />
      <About />
      <Projects />
    </div>
  );
}
function Head(){
  return(
    <nav>
        
        <ul>
            <li class="aymendev">
                <a href="" class="aymen">Aymen.dev</a>
            </li>
            <div class="sv">
                <button class="ml" href=""><svg class="nc" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>
                <button class="nl" href=""><svg class="mc" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
            </div>
            <li class="links">
                <li type="none">
                    <a href="" class="home">Home</a>
                </li>
                <li type="none">
                    <a href="#About" class="about">About</a>
                </li>
                <li type="none">
                    <a href="#Projects" class="projects">Projects</a>
                </li>
                <li type="none">
                    <a href="#contact" class="contact">Contact</a>
                </li>
            </li>
        </ul>
    </nav>
  )
}
function Home(){
  return(
    <html>
    <body>
      <div class="hello">
        <div>
            <h1>Front-end Developer <image src={Git} alt=""></image></h1>
            <p>Hi, I'm Aymen Maaloul. A passionate Front-end 
                Developer based in Metouia, Gabes. 📍</p>
        </div>
        <div class="img">

        </div>
    </div>
    <div id="social">
    <table class="social">
        <tr>
            <a href="https://www.facebook.com/aymen.maaloul.90/">
                <svg class="nbv" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 320 512"><style></style><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
            </tr>
        <tr><a href="https://github.com/Aymen-maaloul"><svg class="nbv" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 496 512">*<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a></tr>
        <tr><a href="https://www.instagram.com/aymen.maaloul/"><svg class="nbv" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 448 512"><style></style><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></tr>
    </table>
</div>
<div id="tech">
        <p class="tech">Tech Stack |</p>
        <div><center><img className="html" src={html} alt=""></img></center></div>
        <div><center><img className="css" src={css} alt=""></img></center></div>
        <div><center><img className="arduino" src={arduino} alt=""></img></center></div>
        <div><center><img className="figma" src={figma} alt=""></img></center></div>
        <div><center><img className="git" src={Git} alt=""></img></center></div>
        <div><center><img className="python" src={python} alt=""></img></center></div>
    </div>
    <div class="hello1">
        <div class="img">

        </div>
        <div>
            <h1>Front-end Developer </h1>
            <p>Hi, I'm Aymen Maaloul. A passionate Front-end 
                Developer based in Metouia, Gabes. 📍</p>
        </div>
        
    </div>
    <div id="social1">
        <table class="social">
            <tr>
                <a target="_blank" href="https://www.facebook.com/aymen.maaloul.90/">
                    <svg class="nbv" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 320 512"><style></style><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
            </tr>
            <tr>
                <a target="_blank" href="https://github.com/Aymen-maaloul">
                    <svg class="nbv" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a></tr>
            <tr>
                <a target="_blank" href="https://www.instagram.com/aymen.maaloul/">
                    <svg class="nbv" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 448 512"><style></style><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>
            </tr>
    </table>
</div>
    <div id="tech1">
        <p class="tech1">Tech Stack</p>
        <div>
        <div><center><img className="html" src={html} alt=""></img></center></div>
        <div><center><img className="css" src={css} alt=""></img></center></div>
        <div><center><img className="arduino" src={arduino} alt=""></img></center></div>
        <div><center><img className="figma" src={figma} alt=""></img></center></div>
        <div><center><img className="git" src={Git} alt=""></img></center></div>
        <div><center><img className="python" src={python} alt=""></img></center></div>
</div>
  </div>
    </body>
    </html>
  )
}
function About(){
  return(

      <section id="About">
          <div class="desktop">
              <img src={desktop} alt=""></img>
              
          </div>
          <div class="webtext">
              <svg xmlns="http://www.w3.org/2000/svg" width="218" height="218" viewBox="0 0 218 218" fill="none">
                  <circle cx="109" cy="109" r="109" fill="white"/>
                  
                </svg>
                  <span class="x">
                      <img class="textweb" src={text} alt=""></img>
                  <img class="working" src={working} alt=""></img>
                  </span>
            </div>
              <div class="about1">
                  <h1>ABOUT ME</h1>
                  <h2>A dedicated Front-end Developer
                      based in Metouia, Gabes 📍</h2>
                  <p>Hello , I’m Aymen maaloul , I’m 17 years old. 
                      I study at highschool . I’m a Front-end developer, 
                      I make beautiful design and website, 
                      I use figma for UI/UX design and HTML, CSS, JS .
                      I love computer science and I always want to develop myself</p>
              </div>
      </section>
  )
}
function Projects(){
  return(
    <section id="Projects">
        
    <div class="ODS">
        <img src={ODS} alt=""></img>
            <div class="x">
                <center>
                    <h1>ODS website🔭</h1>
                    <p>This website is for ODS
                        association</p>
                    <div class="k">
                        <center>
                            <div class="html1"><h3>HTML</h3></div>
                            <div class="css1"><h3>CSS</h3></div>
                            <div class="js"><h3>JS</h3></div>
                        </center>
                    </div>
                    <div class="li">
                    <a class="live" target="_blank" href="https://oasis-de-science.vercel.app/">
                        Live <img class="liv" src={share} alt=""></img>
                    </a></div>
                </center>
            </div>
    </div>
    <div class="baya">
        
            <div class="p">
                <center>
                    <h1>Baiti ECOMMERCE 🛒</h1>
                    <p>just an ecommerce 
                        front-end design</p>
                    <div class="m">
                        <center>
                            <div class="html1"><h3>HTML</h3></div>
                            <div class="css1"><h3>CSS</h3></div>
                        </center>
                    </div>

                </center>
            </div>
            <img src={baya} alt=""></img>
    </div>
    <div class="baya1">
        <img src={baya} alt=""></img>
        <div class="p1">
            <center>
                <h1>Baiti ECOMMERCE 🛒</h1>
                <p>just an ecommerce 
                        front-end design</p>
                <div class="m1">
                    <center>
                        <div class="html1"><h3>HTML</h3></div>
                        <div class="css1"><h3>CSS</h3></div>
                    </center>
                </div>

            </center>
        </div>
        
</div>
    <div class="bl">
        <img src={bl} alt=""></img>
        <div class="n">
            <center>
        <h1>Car Bluetooth 👾</h1>
        <p>Car Bluetooth 3d design and constructing</p>
            <div class="o">
                <center>
        <div class="i"><h3>Blender</h3></div>
        <div class="e"><h3>Arduino</h3></div></center></div>
        <div class="mo">
        <a href="" class="more">More
            <img src={plus}alt=""></img>
        </a>
    </div>
    </center>
    </div>
</div>
</section>
  )
}

export default App;
