# Blogpost Trees


### Our Path: From idea to application

Original idea: 
- The CO2 absorption of trees depends on their species, age and location.
- Learn about and predict the CO2 absorption of trees in Berlin

Our application will allow the user
- to gain more information about trees in their selected district of Berlin.
- to identify trees simply by uploading pictures with their smartphone or Laptop.

Vision: Facilitate people in Berlin to gain more knowledge about the trees surrounding them and on the trees impact on the environment in terms of CO2 absorption.

TODO: Add logo
<p align="center">
    <img alt="Trees logo" src="" width="400" />
</p>

### UX: Define the macro-design direction
(PLEASE AJUST TEXT)
Progress so far:
Presented the first design sketch with team and recorded rough ideas.
Analysed user flow.
Transformed initial sketch into an interactive wireframe.
Next steps:
Prepare high fidelity prototype for testing.
Present all possible details of structure and the prototype to team
Create a LOGO for the product.
Liaise with the WD track to determine the final design draft.


(Add personas link)
<p align="center">
    <img alt="Personas" src="g" width="600" />
</p>

(Add wireframe link)
<p align="center">
    <img alt="Early wireframes" src="" width="600" />
</p>


## Web development
So basically we were informed to develope the app on React, which was introduced to us not long ago, so we had to face handsome amount of difficulties which on the other hand made us learn new things vey quickly, on React the code is components based, which makes it cleaner and reuasable. We were able to move changing data from component to component without many nasty hiccups. Again, the introduction to these technologies meant that we had to learn a great deal more than what was originally offered in the academic phase, but its outcome was immeasurably useful for us emerging developers.</p>

### Back-End

<p> As both WD techies chose the front-end course during the academic phase, suddenly being confronted with back-end logic and challenges was certainly a challenge and required adaptability and time-investment. Luckily, under the guidance of the experienced mentors, back-end difficulties were overcome and its logic proved to be less of a frightening obstacle to us, the front-end techies. </p>

The overall development process is illustrated below. It should also be mentioned that the tasks were not always worked on one after the other, but that work was often done in parallel on different challenges. Team WD decided to split the work based on interests and understanding of the code. This proved to be a successful decision in team communication in order to reach the ambitious goals. Through careful coordination, trust in each other’s abilities, and a great deal of motivation, challenges were overcome. Although some bugs remain, some functions are still merely placeholders, and the usability is rather limited due to the lack of responsiveness, the progress we made in such a short time was so unimaginable at the beginning of this bootcamp that this project for us in the WD track can only be considered a success. A great learning experience that we will bring to all pending future projects.  <br><br>

![image](https://yoshirodigital.com/wp-content/uploads/2020/08/Website-Design-Blueprint-and-the-Development-Process.jpg)


##  Data science
The data science track was responsible for collecting trees data around Berli, clean it, present it through different visualisations, and build a machine learning model to predict trees age. The data is collected from the website of the Senate Department for the Environment, Urban Mobility, Consumer Protection and Climate Action in Berlin. 
After cleaning the dataset from anomalies, it is stored in the drive under the following link https://www.notion.so/Cleaned-Dataset-Visualizations-6eeb0250bcb44278b4d4449a38783b49#d503c1c276214002b36c347142fdd781 and a table containing the dataset is created in the supabase database.
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
(PLEASE ADD TEXT)

# Final remarks

