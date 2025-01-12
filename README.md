# Work in progress
Horror Scorer was originally a group project for the completion of the Washington University coding bootcamp. At the time it was completed we students had only been using React for two weeks and did not have a firm grasp on the concepts. We assembled the app to meet the MVP but there were several design mistakes made that lead to memory leakage. In addition, some of the desired features from the planning phase, such as a search bar and a rating system never came to fruition. I am in the process of re-factoring the app to eliminate the design flaws and to add features. Current changes can be seen in the refactor branch. 

The design flaw in conditionally rendering two components with dependent states has been fixed. The individual movies now are on their own page. In addition the fetch request for the movieArr has been moved into a useEffect hook instead of useState to prevent re-fetch the data every time the page re-renders. 



##  <h1>The Horror Scorer Movie App</h1><h2> License </h2>
![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)[  Apache](https://opensource.org/licenses/Apache-2.0)<h2> Table of Contents </h2> 
- [License](#license) 
- [Description](#description) 
- [Installation](#installation) 
- [Technologies](#technologies) 
- [Usage](#usage) 
- [Contributors](#contributors)  
- [Github](#github) 
- [Email](#email) 
<h2>Description</h2> <p>In the spirit of holloween, we built a horror movie review site with a social media component.</p><h2>Installation</h2>Download files to your computer. Run "npm install" in the root directory. After Node modules have installed type "npm run develop."
<h2>Technologies</h2> <p>We used the following technologies in our build: <p>HTML, CSS, Javascript, Node, Mongoose, GraphQl, Express, Bcrypt, Apollo and React</p><h2>Usage</h2> <p>This application gives the user the opportunty to review horror genre films. They can also leave a comment on the film and also comment on other peoples comments. All of which is kept behind a sign-up/login wall.</p>
<h2>Contributors</h2> <p>There are 5 contributors to this project.  They are:</p> 1. Andrew Kamadulski at https://github.com/Kamadulski999<br /> 2. Shom Bhandari at https://github.com/spbhanda<br /> 3. Sam Moore at https://github.com/semoore2093<br /> 4. Ian Bridges at https://github.com/ianbridges<br /> <p>5. Bobby Bridges at https://github.com/Zaphod1977</p><h2>Github Link</h2> <p>https://github.com/Zaphod1977/Horror_Scorer</p><h2>Email Address</h2>1. Andrew Kamadulski at andrew.kamadulski@gmail.com<br /> 2. Shom Bhandari at spbhanda@gmail.com<br /> 3. Sam Moore at semoore2093@gmail.com<br /> 4. Ian Bridges at megabridge12@gmail.com<br /> <p>5. Bobby Bridges at carfiguru@hotmail.com</p><p>Simply navigate to -> https://horror-scorer.herokuapp.com/.</p><p> <img src="https://github.com/Zaphod1977/Horror_Scorer/blob/pre-production/client/src/images/horror_scorer_screengrab.PNG?raw=true" width="800" /></p>
