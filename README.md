<h1>HACCP for hospitlaity-retail </h1>

As a challenge to test our understandment of Spring Boot during the _nology consultancy programme we were given the task to build a full stack app. This repository is for the front end of the app. This were the specificications for the project:
<ul>
    <li>data store in a database;</li>
    <li>an API and backend developed using Spring Boot</li>
    <li>a frontend developed using React;</li>
</ul>
You should be able to :
<ul>
    <li>view your data;</li>
    <li>create new data;</li>
    <li>update existing data;</li>
    <li>delete old data;</li>
    <li>filter your results ;</li>
</ul>

<h2>Table of contents</h2>
<ul>
    <li>General Info</li>
    <li>Technologies</li>
    <li>Setup</li>
    <li>Status</li>
</ul>

<h2>General Info</h2>
<p>My goal was to create an HACCP app that can be use in any sector tha handles food. The app give you the possibilit to add equipments by serial number, to which is connected a table of data to record the temperatures for that specific item. The same concept is used to add suppplier and add delivery and temperatures to the database.</p>
<p>The data can the been retrived by the database by choosing different option available in the frontend.</p>

<h2>Technologies</h2>
<p>The app was built with:</p>
<ul>
    <li>React</li>
    <li>CSS / SASS</li>
    <li>Spring Boot</li>
    <li>Java</li>
    <li>MySQL</li>
</ul>

<h2>Setup</h2>
<p>Download this repository and the backend(<a href="https://github.com/Martinelli-89/hospitality-app-backend">Link</a>)</p>
<p>Then cahnge the 2nd, 3rd and 4th line of the application.properties file in the backend repository according on the settings you are using for your SQL workbench. Run the HaccpAppApplication on the backend and you should be able to use the frontend. </p>

<h2>Status<h2>
<p>I need to add more data validation on the backend to make sure the user can't post wrong data to the database or make request, link searching for an empty data, that currently breaks the app. When the loose ends are sorted I would like to add on the backend more tables to be able to allow sign up and login, so an user can see all the data entered by his/her company.</p>  


<h5>Thanks for checking the app. If you find any bug I didn't notice or have any suggestion please reach out :)<h5>