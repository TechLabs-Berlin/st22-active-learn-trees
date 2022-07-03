# Deep Learning Track - Development of tree identification model 
All of this originates from the idea to combine species and age of tree to estimate CO2 absorption.
And DL/AI learning: implementing transfer learning and active learning


## Project outline of CNN for tree identification
## Part A) Set-up
#### Step 0: Identification of most common tree species in Berlin 
- a) berlin databank of trees:
berlin_trees = ['ACER', 'AESCULUS','BETULA', 'CARPINUS', 'CORYLUS','CRATAEGUS','FRAXINUS','PLATANUS','POPULUS', 'PRUNUS','QUERCUS','ROBINIA','SORBUS','TILIA', 'ULMUS']
#### Step 1: Identification of suitable image dataset for tree identification
- Leaves
- Plantnet
- Bing image download
--> output file/google colab with text, code, results and conclusion
#### Step 2: Inital setup of a softwarepipeline for deployment of a model that can be used in a browser
--> Integration into Web application on Trees website


Model can be found here: https://raw.githubusercontent.com/Constifox/st22-active-learn-trees/main/ai-model/model.json
Classifier can be foudn here: https://raw.githubusercontent.com/Constifox/st22-active-learn-trees/main/ai-model/class_definitions.json
Check out the very simple leave classifying model hosted on netlify:
https://famous-pegasus-8b90b9.netlify.app/tree_identifying.html

Now integrated by the WD team with React.

## Part B) Refinement: Defining a proper set up for improvement of our image dataset and image classificaiton model
### Step 3: Creation of image dataset by downloading images from Bing and manually sort/labeling
- a) berlin databank of trees:
berlin_trees = ['ACER', 'AESCULUS','BETULA', 'CARPINUS', 'CORYLUS','CRATAEGUS','FRAXINUS','PLATANUS','POPULUS', 'PRUNUS','QUERCUS','ROBINIA','SORBUS','TILIA', 'ULMUS']
- b) Adding genus/family present in Austrian leave set
'FAGUS'
### Step 4: Improving the dataset and model via Active learn using the python library superintend
1) species in Berlin --> image download via bing focused on LEAVES OF SPECIES
future maybe: extend the image dataset to general images of trees and classify for large(very old and high circumference) tree vs small tree (young, saplings etc), no tree --> again image download via bing


### Step 5: Deciding on and implenting the “best" CNN model
- How to measure successful improvement of model? - Austrian leaves dataset
- Own CNN
- Transfer learning (pre trained eg on imagenet)
-- mobile net etc
-- I naturalist



