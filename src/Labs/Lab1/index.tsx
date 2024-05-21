export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>

      {/* Paragraph tags section */}
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-2">
          This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
        </p>
        <p id="wd-p-3">
          This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
        </p>
      </div>

      {/* Ordered list section */}
      <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        <p>How to make pancakes:</p>
        <ol id="wd-pancakes">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>

        {/* Recipe for Fish-Flavored Shredded Pork */}
        <p>My Favorite Recipe: Fish-Flavored Shredded Pork</p>
        <ol id="wd-your-favorite-recipe">
          <li>Julienne the pork tenderloin and marinate with soy sauce and cornstarch.</li>
          <li>Prepare the sauce by mixing soy sauce, vinegar, sugar, chicken stock, and a touch of sesame oil.</li>
          <li>Stir-fry garlic, ginger, and scallion until aromatic. Add the wood ear mushrooms and bamboo shoots, stir-fry briefly.</li>
          <li>Add the marinated pork and stir-fry until cooked. Pour the sauce over and mix until everything is well coated and the sauce thickens.</li>
          <li>Serve hot with rice.</li>
        </ol>
      </div>
      My favorite recipe:

<ol id="wd-my-favorite-recipe">{/* complete on your own */}</ol>

<h5>Unordered List Tag</h5>

My favorite books (in no particular order)

<ul id="wd-my-books">

  <li>Dune</li>

  <li>Lord of the Rings</li>

  <li>Ender's Game</li>

  <li>Red Mars</li>

  <li>The Forever War</li>

</ul>

Your favorite books (in no particular order)

<ul id="wd-your-books">

  <li>One Hundred Years of Solitude</li>

  <li>The Moon and Sixpence</li>

  <li>For the Love of Money</li>

</ul>
<div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td valign="top" align="right">Q1</td>
              <td valign="top">HTML</td>
              <td valign="top">2/3/21</td>
              <td valign="top">85</td>
            </tr>
            <tr>
              <td valign="top" align="right">Q2</td>
              <td valign="top">CSS</td>
              <td valign="top">2/10/21</td>
              <td valign="top">90</td>
            </tr>
            <tr>
              <td valign="top" align="right">Q3</td>
              <td valign="top">JavaScript</td>
              <td valign="top">2/17/21</td>
              <td valign="top">95</td>
            </tr>
            {/* Adding additional quizzes Q4 through Q10 */}
            <tr>
              <td valign="top" align="right">Q4</td>
              <td valign="top">React</td>
              <td valign="top">3/1/21</td>
              <td valign="top">88</td>
            </tr>
            <tr>
              <td valign="top" align="right">Q5</td>
              <td valign="top">Redux</td>
              <td valign="top">3/15/21</td>
              <td valign="top">92</td>
            </tr>
            <tr>
              <td valign="top" align="right">Q6</td>
              <td valign="top">Node.js</td>
              <td valign="top">3/29/21</td>
              <td valign="top">91</td>
            </tr>
            <tr>
              <td valign="top" align="right">Q7</td>
              <td valign="top">TypeScript</td>
              <td valign="top">4/12/21</td>
              <td valign="top">100</td>
            </tr>
            <tr>
              <td valign="top" align="right">Q8</td>
              <td valign="top">GraphQL</td>
              <td valign="top">4/26/21</td>
              <td valign="top">100</td>
            </tr>
            <tr>
              <td valign="top" align="right">Q9</td>
              <td valign="top">Docker</td>
              <td valign="top">5/10/21</td>
              <td valign="top">100</td>
            </tr>
            <tr>
              <td valign="top" align="right">Q10</td>
              <td valign="top">Kubernetes</td>
              <td valign="top">5/24/21</td>
              <td valign="top">100</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="wd-images">

  <h4>Image tag</h4>

  Loading an image from the internet:

  <br />

  <img id="wd-starship"

    width="400px"

   src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"

  />

  <br />

  Loading a local image:

  <br />

  <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
  <div id="wd-forms">

  <h4>Form Elements</h4>

  <form id="wd-text-fields">

    <h5>Text Fields</h5>

    <label htmlFor="wd-text-fields-username">Username:</label>

    <input id="wd-text-fields-username" placeholder="jdoe" /> <br />

    <label htmlFor="wd-text-fields-password">Password:</label>

    <input type="password" id="wd-text-fields-password" value="123@#$asd" />

    <br />

    <label htmlFor="wd-text-fields-first-name">First name:</label>

    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />

    <label htmlFor="wd-text-fields-last-name">Last name:</label>

    <input type="text" id="wd-text-fields-last-name" placeholder="Doe"

      value="Wonderland" title="The last name" />

<h5>Text boxes</h5>

<label>Biography:</label><br/>

<textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>

<h5 id="wd-buttons">Buttons</h5>

<button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">

  Hello World!

</button>


<h5>File upload</h5>

<input id="wd-upload" type="file"/>


<h5 id="wd-radio-buttons">Radio buttons</h5>


<label>Favorite movie genre:</label><br />


<input type="radio" name="radio-genre" id="wd-radio-comedy"/>

<label htmlFor="wd-radio-comedy">Comedy</label><br />


<input type="radio" name="radio-genre" id="wd-radio-drama"/>

<label htmlFor="wd-radio-drama">Drama</label><br />


<input type="radio" name="radio-genre" id="wd-radio-scifi"/>

<label htmlFor="wd-radio-scifi">Science Fiction</label><br />


<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>

<label htmlFor="wd-radio-fantasy">Fantasy</label>

<h5 id="wd-checkboxes">Checkboxes</h5>

<label>Favorite movie genre:</label><br/>


<input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>

<label htmlFor="wd-chkbox-comedy">Comedy</label><br/>


<input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>

<label htmlFor="wd-chkbox-drama">Drama</label><br/>


<input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>

<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>


<input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>

<label htmlFor="wd-chkbox-fantasy">Fantasy</label>

<h4 id="wd-dropdowns">Dropdowns</h4>


<h5>Select one</h5>

<label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>

<select id="wd-select-one-genre">

   <option value="COMEDY">Comedy</option>

   <option value="DRAMA">Drama</option>

   <option selected value="SCIFI">

       Science Fiction</option>

   <option value="FANTASY">Fantasy</option>

</select>


<h5>Select many</h5>

<label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>

<select id="wd-select-many-genre" multiple>

   <option selected value="COMEDY">Comedy</option>

   <option value="DRAMA">Drama</option>

   <option selected value="SCIFI">

       Science Fiction</option>

   <option value="FANTASY">Fantasy</option>

</select>

<h4>Other HTML field types</h4>


<label htmlFor="wd-text-fields-email"> Email: </label>

<input type="email"

      placeholder="jdoe@somewhere.com"

      id="wd-text-fields-email"/><br/>


<label htmlFor="wd-text-fields-salary-start"> Starting salary:

</label>

<input type="number"

      id="wd-text-fields-salary-start"

      placeholder="1000"

      value="100000"/><br/>


<label htmlFor="wd-text-fields-rating"> Rating: </label>

<input type="range" id="wd-text-fields-rating"

      placeholder="Doe"

      max="5"

      value="4"/><br/>


<label htmlFor="wd-text-fields-dob"> Date of birth: </label>

<input type="date"

      id="wd-text-fields-dob"

      value="2000-01-21"/><br/>
  </form>

<h4>Anchor tag</h4>

Please

<a id="wd-lipsum" href="https://www.lipsum.com">click here</a>

to get dummy text<br/>

Please <a id="wd-github" href="https://github.com/Ayukawa813/kanbas-react-web-app.git">visit my GitHub</a> 

to see the code<br/>
</div>

</div>
    </div>
  );
}
