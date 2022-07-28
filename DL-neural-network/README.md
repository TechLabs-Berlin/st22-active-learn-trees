# Deep Learning Track - Development of tree identification model 
All of this originates from the idea to combine species and age of tree to estimate CO2 absorption.
And DL/AI learning: implementing transfer learning and active learning


## Project outline of CNN for tree identification
## Part A) Set-up
#### Step 0: Identification of most common tree species in Berlin 
- a) berlin databank of trees:
berlin_trees = ['ACER', 'AESCULUS','BETULA', 'CARPINUS', 'CORYLUS','CRATAEGUS','FRAXINUS','PLATANUS','POPULUS', 'PRUNUS','QUERCUS','ROBINIA','SORBUS','TILIA', 'ULMUS']

`https://colab.research.google.com/drive/1rKc-JRlbbI8miFOavy8Obr3mTMypYQCp?usp=sharing`

#### Step 1: Identification of suitable image dataset for tree identification
- Leaves
- Plantnet
- Bing image download
--> output file/google colab with text, code, results and conclusion
#### Step 2: Initial setup of a software pipeline for deployment of a model that can be used in a browser
--> Aim building a pipeline for integration of the model into Web application on Trees website

Model training and downloading : `https://colab.research.google.com/drive/1jMnSYGrCIzSF18Y3UtdnWUTGMC2u-4ds?usp=sharing`

Model can be found here: https://raw.githubusercontent.com/Constifox/st22-active-learn-trees/main/ai-model/model.json
Classifier can be found here: https://raw.githubusercontent.com/Constifox/st22-active-learn-trees/main/ai-model/class_definitions.json
Check out the very simple leave classifying model hosted on netlify:
https://famous-pegasus-8b90b9.netlify.app/tree_identifying.html

Now integrated by the WD team with React.

## Part B) Refinement: Defining a proper set up for improvement of our image dataset and image classification model

Astrain leaves only contains 5 classes however berlin streets have 63 different spices . For better generalization we decided to decrease the number of trees to only identify the most common types with numbers > 4000. this resulted in 16 different types.



### Step 3: Creation of image dataset by downloading images from Bing and manually sort/labeling
Based on a previous analysis (see step 0) we focus on the most common trees in Berlin ( > 4000 trees).
Based on comparing different existing plant datasets (Step 1) we decided to create our own dataset by performing a bing image download.
We create here an image dataset of leaves of these most common trees in Berlin.

- a) berlin databank of trees:
berlin_trees = ['ACER', 'AESCULUS','BETULA', 'CARPINUS', 'CORYLUS','CRATAEGUS','FRAXINUS','PLATANUS','POPULUS', 'PRUNUS','QUERCUS','ROBINIA','SORBUS','TILIA', 'ULMUS']
- b) Adding genus/family present in Austrian leave set
'FAGUS'

`berlin_trees = ['ACER leaves', 'AESCULUS leaves','BETULA leaves', 'CARPINUS leaves', 'CORYLUS leaves','CRATAEGUS leaves','FRAXINUS leaves','PLATANUS leaves','POPULUS leaves', 'PRUNUS leaves','QUERCUS leaves','ROBINIA leaves','SORBUS leaves','TILIA leaves', 'ULMUS leaves', 'Fagus leaves']`

[Colab: (Step 3) - Creation of image data set: Bing image download](https://colab.research.google.com/drive/11VHklqR_TRG6QjMEuKsr6ROsesNUqGnP?usp=sharing)
[Github: (Step 3) - Creation of image data set: Bing image download](https://colab.research.google.com/drive/11VHklqR_TRG6QjMEuKsr6ROsesNUqGnP?usp=sharing)
Intial tree dataset can be found here: [trees-bing-Berlin-test12](https://github.com/TechLabs-Berlin/st22-active-learn-trees/tree/AI/DL-extension/DL-neural-network/Step3-tree-images-dataset/trees-bing-Berlin-test12)



### Step 4: Improving the dataset and model via Active learn using the python library superintend
1) species in Berlin --> image download via bing focused on LEAVES OF SPECIES
future maybe: extend the image dataset to general images of trees and classify for large(very old and high circumference) tree vs small tree (young, saplings etc), no tree --> again image download via bing

`https://colab.research.google.com/drive/1z_KAdBDlJ_TOSmyEqYUveFJwREXI9Q8f?usp=sharing`

### Step 5: Deciding on and implementing the “best" CNN model
- we implemented two different types of CNN. one was a per-trained model using [inaturalist](https://tfhub.dev/google/inaturalist/inception_v3/feature_vector/5) , while the other is self-made neural network.

  notes: 

  1- after training ~15 epoch the  val_accuracy always drops however  [inaturalist](https://tfhub.dev/google/inaturalist/inception_v3/feature_vector/5) provide a better results .

  

- How to measure successful improvement of model? - Austrian leaves dataset

  

  



