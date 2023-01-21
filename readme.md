<ul><h3>Scripts used in project :</h3>
<li>npm run build : used to compile ts files to js files.</li>
<li>npm run lint : to apply eslint for code</li>
<li>npm run prettier : to apply specific formats that are defined in .prettierrc file to project</li>
<li>npm run test : to apply build then test in project</li>
<li>npm run start : use it after the code is compiled successfully to run server </li>
</ul>
<hr/>
<h4>
-There is a eslint configuration for test jasmine by using {"jasmine":true} in env
</h4>
<hr/>
<ul> the endpoints api for testing are:
<li>/</li>
<li>/images?height=any_value&width=any_value&filename=any_value</li>
 </ul>
<hr/>
 <h3>Functions used in project:
 <h4>- image_processing im Processing.ts file</h4>
 </h3>
<hr/>
 <h4> examples for valid URL endpoints for displaying images :</h4>
 <h5>- http://localhost:3000/images?filename=1.jpg&width=500&height=400</h5>
 <h5> - http://localhost:3000/images?filename=1.jpg&width=600&height=600</h5>
 <h5>- http://localhost:3000/images?filename=2.jpg&width=700&height=700</h5>
 <h5>- http://localhost:3000/images?filename=4.jpg&width=700&height=700 </h5>

