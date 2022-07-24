# Blogpost Trees

The Green Monitor website is the result of a fruitful collaboration of UX Design, Web Development, Data Science and Deep Learning. The solution showcases the positive environmental impact of trees in Berlin and raises the users' awareness about the trees surrounding them. Our application allows the user to gain more information about trees in their selected district of Berlin and to identify trees simply by uploading pictures with their smartphone or Laptop. The application aims to facilitate users in Berlin to gain knowledge about the trees around them and encourages them to make Berlin greener together.

### Our Path: From idea to application

Our original idea was based around the environmental impact of CO2 absorption of trees, which depends on their species, age and location. We wanted to learn about and predict the CO2 absorption of trees in Berlin.

Our application allows the user
- to gain more information about trees in the twelve districts of Berlin. 
- to understand the oldest and the highest tree in each districts of Berlin.
- to know the amount of CO2 each oldest and highest tree species in each district can absorb per year and in total life. 
- to identify trees simply by uploading pictures with their smartphone or Laptop.

Our Vision is to facilitate people in Berlin to gain more knowledge about the trees surrounding them and on the trees impact on the environment in terms of CO2 absorption.

<p align="center">
    <img alt="Logo" src="https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/UX-branch/App_logo..png" width="200"/>
  </P>


### UX: Define the macro-design direction
Upon liasing with the WD track, the UX presented the first design sketch (created via Sketch) with team and recorded rough ideas. UX research was futher carried out on the target audience ("Whose problem will the app solve"?) and personas were collected though with some challenges as our product is quite unique and a thorough understanding of its purpose was required. After defining the design direction, the initial sketch was futher adjusted into a low fidelity wireframe and then developed into an interactive prototyp with figma. Details of structure and the prototype was presented to team while making adjustments were necessary.

<p>Personas</p>
<p>
    <img alt="Personas" src="https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/UX-branch/Personas.jpg"/>
</p>

<p>High fidelity prototype
</p>

<p align="center">
    <img alt="High fidelity Prototype" src="https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/UX-branch/High%20fidelity%20prototype.png" width="800" />
</p>


## Web development
We were informed to develope the app on React, which was introduced to us not long ago, so we had to face handsome amount of difficulties which on the other hand made us learn new things vey quickly, on React the code is components based, which makes it cleaner and reuasable. We were able to move changing data from component to component without many nasty hiccups. Again, the introduction to these technologies meant that we had to learn a great deal more than what was originally offered in the academic phase, but its outcome was immeasurably useful for us emerging developers.

 - Web Dev Team developed the web based on the prototype designed by UX.
-Bootstrapped fundamental architecture.
-API Integrations(BackEnd functionalities on the image Upload part).
-Collected data from DS and “hard coded” it to have the top ten trees species,streets with most trees, the oldest and highest tree in each districts .
-Used google to search for how to calculate CO2 absorption with Species, Age,circumference, dry weight, CO2 absorption per year and in total for each districts.
-Each German name species has been provided with the Scientific Name and an image of the species. 
-Created an external link that will help users for more information.
-React router is used to direct to different pages based on the request.
</p>

### Back-End

<p> As both WD techies chose the front-end course during the academic phase, suddenly being confronted with back-end logic and challenges was certainly a challenge and required adaptability and time-investment. We were able to connect an API from AI tract to the the backend of the image upload part.
concerning  the general backend of the app, we were unable to connect the data from DS tract because the API was not ready yet.</p>

The overall development process is illustrated below. It should also be mentioned that the tasks were not always worked on one after the other, but that work was often done in parallel on different challenges. Team WD decided to split the work based on interests and understanding of the code. This proved to be a successful decision in team communication in order to reach the ambitious goals. Through careful coordination, trust in each other’s abilities, and a great deal of motivation, challenges were overcome. Although some bugs remain, some functions are still merely placeholders, and the usability is rather limited due to the lack of responsiveness, the progress we made in such a short time was so unimaginable at the beginning of this bootcamp that this project for us in the WD track can only be considered a success. A great learning experience that we will bring to all pending future projects.  <br><br>
    -- Get Started Page
    ![image](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/webdev-branch/learntreesfive/App_Screenshots/GetStarted.png)
    -- Homepage
    ![image](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/webdev-branch/learntreesfive/App_Screenshots/Homepage.png)
    -- About Page
    ![image](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/webdev-branch/learntreesfive/App_Screenshots/About.png)
    -- Image Upload Page
    ![image](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/webdev-branch/learntreesfive/App_Screenshots/ImageUpload.png)
    -- Districts Page
    ![image](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/webdev-branch/learntreesfive/App_Screenshots/Districts.png)
    ![image](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/webdev-branch/learntreesfive/App_Screenshots/Districts_2.png)
    ![image](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/webdev-branch/learntreesfive/App_Screenshots/Districts_3.png)
    -- District Mitte Data
    ![image](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/webdev-branch/learntreesfive/App_Screenshots/Mitte.png)
    ![image](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/webdev-branch/learntreesfive/App_Screenshots/Mitte_info.png)
    ![image](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/webdev-branch/learntreesfive/App_Screenshots/Mitte_Co2.png)


##  Data science
The data science track was responsible for collecting trees data around Berlin, clean it, present it through different visualisations, and build a machine learning model to predict trees age. The data is collected from the website of the Senate Department for the Environment, Urban Mobility, Consumer Protection and Climate Action in Berlin. 

We cleaned the dataset from anomalies, like mixed up age and planting year. And then stored in the drive under the following link https://www.notion.so/Cleaned-Dataset-Visualizations-6eeb0250bcb44278b4d4449a38783b49#d503c1c276214002b36c347142fdd781 and a table containing the dataset is created in the supabase database.

### Visualizations per species
The visualizations were done according to two categories which are based on tree species and based on Berlin district. 
The main statistics performed on trees per their species showcase the following:
    -- The number of trees per species 
    ![image](https://user-images.githubusercontent.com/72529331/179850625-a5e8c968-432d-4100-935f-55b6dad832b0.png)
    -- Largest height per tree species 
    ![image](https://user-images.githubusercontent.com/72529331/179849391-fa663763-2a45-4020-82ec-e900cca76e44.png)
    -- Largest girth per tree species
    ![image](https://user-images.githubusercontent.com/72529331/179849655-5d73ce40-48d4-4df8-9eeb-1f715922457e.png)
    -- Largest crown diameter per tree species 
    ![image](https://user-images.githubusercontent.com/72529331/179849817-0b79944e-14b2-450e-aa1c-fe1c7492054f.png)
    -- The average height per species
    ![image](https://user-images.githubusercontent.com/72529331/179850505-7c6b6d08-c1ee-451e-b869-c8869dd69853.png)
    -- The average girth per species 
   ![image](https://user-images.githubusercontent.com/72529331/179849995-c8d9fd3b-046d-416a-b70f-8e74280b0232.png)
    -- The average crown diameter per species
    ![image](https://user-images.githubusercontent.com/72529331/179850211-288bca32-bf14-4197-972b-9e89121c1e94.png)
    
### Visualizations per district
We decided that the following information will be interesting for every district:
* Top 10 most common species per district (and visualization)
* Top 10 streets with most trees per district (and visualization)
* Hightest tree
* Oldest tree

Here are examples for Berlin Mitte:

Top 10 most common species in Mitte

![image](https://user-images.githubusercontent.com/71033405/179935309-a75e8cfa-2b55-402b-98d2-f1fbe268fc83.png)

Top 10 streets with most trees in Mitte

![image](https://user-images.githubusercontent.com/71033405/179935369-01d3264e-0904-41ac-8125-5e6131f625e2.png)

Hightest & Oldest tree in Mitte

![image](https://user-images.githubusercontent.com/71033405/179935403-6ed5df87-b33f-429b-bf16-88136fa20175.png)

### Machine Learning: Estimating Age
The machine learning algorithm was trained to predict the age. First, the trees age is calculated based on the growth factor of each tree species. These are the formulas used to calculate age:
    -- diameter = circumference / 3.14  (Pi)
    -- age = diameter * growth factor
 
 The main variables of the linear regression model are X (contains: tree height, girth, crown diameter, tree diameter), and Y ( estimated age: calculated by the above formula)
 The linear regression statistics are as follows:
    -- Coefficients: [[ 0.00522242  0.76037409 -0.020068    0.24215735]]
    -- Intercept: [9.14116479]
    -- Mean squared error (MSE): 963.87
    -- Coefficient of determination (R^2): 0.26
 The regression model results in a predicted Y that is used against the estimated Y to draw the following scater plot:
 ![image](https://user-images.githubusercontent.com/72529331/179852208-3148e161-2ca2-4f1e-9ca9-809d07ad6690.png)


##  AI/Deep Learning

The Deep Learning Track was given the task to deevelop a model that would allow for tree identification based on a picture.  
This originates from the idea to combine species and age of tree to estimate their CO2 absorption. But for this knowing the species of a tree is crucial and we wanted to aid this by allowing the user to identify a tree based on a picture. For the improvement of the training dataset we started implementing active learning and for the improvement of the neural network transfer learning.

![image](https://raw.githubusercontent.com/TechLabs-Berlin/st22-active-learn-trees/main/DL-neural-network/Step1-exploring-datasets/leaves.png)


# Final remarks

UX: " Being the only UX techie in team made me quite skeptical at first but I was more than enthusiatic to jump on the challenge! Overall, it was a challenging, yet educative experience, having to work with a team of dedicated individuals and to explore act of designing!"
