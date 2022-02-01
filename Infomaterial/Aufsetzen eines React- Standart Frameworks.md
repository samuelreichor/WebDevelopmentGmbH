<h1>Aufsetzen eines React- Standart Frameworks:</h1>

Ich benutze Vite um bessere Performance zu erreichen.

1. Ordner Anlegen in dem das Projekt sein sollte und diesen in Visual Studio öffnen

2. Dann Vite mit npm installieren und bei der Abfrage für den Namen des Ordners ./ für keinen Ordner angeben. Im zweiten abfrage Feld den Namen des Projektes Angeben.

   ```
   1. npm init vite@latest
   	./
   	musterprojektname
   2. npm install
   3. npm run dev
   ```

   

3. Tailwind installieren mit:

   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   

4. Tailwind konfigurieren: Als erstes bei tailwind.config.js das einfügen:

   ```javascript
   module.exports = {
   	content: [
       	"./index.html",    
       	"./src/**/*.{vue,js,ts,jsx,tsx}",
       ],  
       theme: {
       	extend: {},
       },
       plugins: [],
     }
   ```

   

5. src/index.css konfigurieren und dazu diese Zeilen ganz oben einfügen:

   ```javascript
   @tailwind base; 
   @tailwind components; 
   @tailwind utilities;
   ```

   

6. Testen ob alles richtig installiert ist und dazu bei App.jsx das einfügen:

   ```javascript
   const App = () => {
    return(
       <div className='App'>
         <h1 class="text-3xl font-bold underline">
         Hello world!
       </h1>
       </div>   
     )
     
   }
   
   export default App
   ```

   und anschließend sollte mit dem Befehl *npm run dev* ein Hello World im Browser zu sehen sein.





7. Das Einrichten der nötigen Frameworks ist jetzt abgeschlossen. Aber um Ordnung in einer Website zu haben ist es schlau unter src einen Ordner namens "components" anzulegen und dann von allen Bereichen der Website eigene Files anlegt z.B. (Navbar.jsx, Footer.jsx, usw. ). Danach Folgenden Code in die jeweiligen jsx-Dateien rein kopieren:

   ```javascript
   const Footer = () => {
       return (
           <h1>Footer</h1>
       )
   }
   
   export default Footer;
   ```

   Wichtig ist in jedem Bereich das Wort Footer mit dem Namen des Bereiches auszutauschen (alt + rechte Maustaste).

8. Dann noch in dem gleichen Ordner eine File mit dem Namen *index.js* anlegen und den Code anpassen:

   ```javascript
   export { default as Navbar } from './Navbar'; // Navbar ist zb der name der Navbar Componente (Navbar.jsx)
   export { default as Welcome } from './Welcome';
   export { default as LoaderInformation } from './Loader';
   export { default as Information } from './Information';
   export { default as Aboutme } from './Aboutme';
   export { default as Contact } from './Contact';
   export { default as Footer } from './Footer';
   ```

   

9. Danach sind die Components im ganzen Projekt sichtbar und sie müssen nur noch bei der Datei App.jsx importet werden mit:

   ```javascript
   import { Navbar, Welcome, Footer, Aboutme, Contact, Information } from "./components";
   ```

   und aufgerufen werden diese dann als Componenten. Das Ganze App.jsx schaut dann so aus:

   ```javascript
   import { Navbar, Welcome, Footer, Aboutme, Contact, Information } from "./components";
   
   const App = () => {
   
     return(
       <div className='min-h-screen'> //vordesign von Tailwind
         <div className="gradient-bg-welcome"> //vordesign von Tailwind
           <Navbar/>
           <Welcome />
         </div>
         <Aboutme/>
         <Information/>
         <Contact/>
         <Footer/>
       </div>   
     )
     
   }
   
   export default App
   ```

   

10. Danach sollten beim erneuten ausführen von *npm run dev*, alle Componenten auf einem weißen Hintergrund aufgelistet sein. ----> Congratulations 

