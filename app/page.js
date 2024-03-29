import LikeButton from './like-button';

// <!-- <html> -->
  // <!-- <body> -->
    // <!-- <div id="app"></div> -->

    // <!-- <script src="https://unpkg.com/react@17/umd/react.development.js"></script> -->
    // <!-- <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script> -->
    // <!-- <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> -->

    // <!-- <script type="text/jsx"> -->
      // <!-- const app = document.getElementById("app") -->

      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }

      export default function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]

        return (
          <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <LikeButton />
          </div>
        );
      }
    // <!-- </script> -->
  // <!-- </body> -->
// <!-- </html> -->