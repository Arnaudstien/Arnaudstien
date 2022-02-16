import request from "@fewlines-education/request";
import "dotenv/config";

request("http://www.perdu.com", (error, html) => {
  if (error) {
    console.error(error);
  } else {
    console.log(html);
  }
});
/* Will print the following in your terminal:
  <html>
    <head>
      <title>Vous Etes Perdu ?</title>
    </head>
    <body>
      <h1>Perdu sur l'Internet ?</h1>
      <h2>Pas de panique, on va vous aider</h2>
      <strong><pre>    * <----- vous &ecirc;tes ici</pre></strong>
    </body>
  </html>
*/

function createPost() {
  return;
}

export { createPost };
