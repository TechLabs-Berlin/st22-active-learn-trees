# Deep Learning Track - Development of tree identification model 
All of this originates from the idea to combine species and age of tree to estimate CO2 absorption.
And DL/AI learning: implementing transfer learning and active learning


## Project outline of CNN for tree identification
## Part A) Set-up
#### Step 0: Identification of most common tree species in Berlin 
- a) berlin databank of trees:
berlin_trees = ['ACER', 'AESCULUS','BETULA', 'CARPINUS', 'CORYLUS','CRATAEGUS','FRAXINUS','PLATANUS','POPULUS', 'PRUNUS','QUERCUS','ROBINIA','SORBUS','TILIA', 'ULMUS']

- [Colab: (Step 0) - Identification of most common tree species in Berlin]()  (update link)
- [Github: (Step 0) - Identification of most common tree species in Berlin]()  (update link)

`https://colab.research.google.com/drive/1rKc-JRlbbI8miFOavy8Obr3mTMypYQCp?usp=sharing`

#### Step 1: Identification of suitable image dataset for tree identification

There are various plant recognition apps available ([overview](https://backgarden.org/tree-identification-apps/) )like [Pl@ntNet](https://plantnet.org/) or [google image search](https://www.google.com/imghp?hl=en) , but unfortunately their image datasets are not easily publicly available. 

We identified two curated plant image datasets that we explored further: 

1. An **Austrian Tree dataset** which contains images of leaves from 5 species.
[Tree Species Identification - Paper](https://www.researchgate.net/publication/323550122_Tree_Species_Identification_from_Bark_Images_Using_Convolutional_Neural_Networks) [Dataset](https://zenodo.org/record/4446955). 

2. The publicly available **[Pl@ntNet](https://plantnet.org/) image dataset** (31GB)  "Pl@ntNet-300K: a with high label ambiguity and a long-tailed distribution". [Dataset](https://zenodo.org/record/4726653), [Github- repository](https://github.com/plantnet/PlantNet-300K/) This dataset can be used for testing of very developed models and plant species that were not the scope of our project.

Based on this we decided we would work further with leave images and limit our training datasets on leaves of images that were present in Berlin. We decided to create (**Step 3**) our own image dataset with [Bing](https://www.bing.com/) image search and curate/improve this dataset with relabeling (**Step 4**) as part of our model improvement via active learning.

- [Colab: (Step 1) - Identification of suitable image dataset for tree identification](https://colab.research.google.com/drive/1jMnSYGrCIzSF18Y3UtdnWUTGMC2u-4ds?usp=sharing)  (update link)
- [Github: (Step 1) - Identification of suitable image dataset for tree identification]()  (update link)

#### Step 2: Initial setup of a software pipeline for deployment of a model that can be used in a browser
--> Aim building a pipeline for integration of the model into Web application on Trees website

Model training and downloading : https://colab.research.google.com/drive/1jMnSYGrCIzSF18Y3UtdnWUTGMC2u-4ds?usp=sharing

- [Colab: (Step 2) -  Initial setup of a software pipeline for deployment of a model that can be used in a browser](https://colab.research.google.com/drive/1jMnSYGrCIzSF18Y3UtdnWUTGMC2u-4ds?usp=sharing)  (update link)
- [Github: (Step 2) -  Initial setup of a software pipeline for deployment of a model that can be used in a browser]()  (update link)

The exploration of downloading an intial model with tensorflow.js resulted in an intial  html page accessing the [model weights](https://raw.githubusercontent.com/Constifox/st22-active-learn-trees/main/ai-model/model.json) and [categories](https://raw.githubusercontent.com/Constifox/st22-active-learn-trees/main/ai-model/class_definitions.json), which allows for browser side classification. This can be found hosted on netlify: (https://famous-pegasus-8b90b9.netlify.app/tree_identifying.html).


The final model weights can be found [here - DL-neural-network/ai-model](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main//DL-neural-network/ai-model)
The Categories/Classifier can be found [[here - DL-neural-network/ai-model/class_definitions.json](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/ai-model/class_definitions.json) ]
The browser side implementation of the model is realised in an [html page -  (tree_identifying-update-links.html) ](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/Step2-browserside-model-integration/tree_identifying-update-links.html) which shows how to upload an image, access the modelweights, classify the image and return the results, this api is now integrated by the WD team with React in our final web application.
When downloading the model weights with tensorflow.js not all types of NN layers are supproted, therefore the current model on web application is a very striped down version of the inital NN and therefore not giving accurate predictions. This should definetly be  improved but we thought it was more important to identify a solution to access the model on the browser side, without the need to fully set up a backend. 

The NN model will be improved in the following steps but still experimentally in a google colab environment. To be able to deploy an updated NN the difficutlties with tensorflow.js would need to be overcome in the future.

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

- [Colab: (Step 3) - Creation of image data set: Bing image download](https://colab.research.google.com/drive/11VHklqR_TRG6QjMEuKsr6ROsesNUqGnP?usp=sharing)
- [Github: (Step 3) - Creation of image data set: Bing image download](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/AI/DL-extension/DL-neural-network/Step3-tree-images-dataset/(Step_3)_Creation_of_image_data_set_Bing_image_download.ipynb)

Intial tree dataset can be found here: [trees-bing-Berlin-test12](https://github.com/TechLabs-Berlin/st22-active-learn-trees/tree/AI/DL-extension/DL-neural-network/Step3-tree-images-dataset/trees-bing-Berlin-test12)



### Step 4: Improving the dataset and model via Active learn using the python library superintend
1) species in Berlin --> image download via bing focused on LEAVES OF SPECIES
future maybe: extend the image dataset to general images of trees and classify for large(very old and high circumference) tree vs small tree (young, saplings etc), no tree --> again image download via bing

- [Colab: (Step 4) - Improving the dataset and model via Active learn using the python library superintend]()  (update link)
- [Github: (Step 4) - Improving the dataset and model via Active learn using the python library superintend]()  (update link)

`https://colab.research.google.com/drive/1z_KAdBDlJ_TOSmyEqYUveFJwREXI9Q8f?usp=sharing`

### Step 5: Deciding on and implementing the “best" CNN model

- [Colab: (Step 5) - Deciding on and implementing the “best" CNN model]()  (update link)
- [Github: (Step 5) - Deciding on and implementing the “best" CNN model]()  (update link)
- 
- we implemented two different types of CNN. one was a per-trained model using [inaturalist](https://tfhub.dev/google/inaturalist/inception_v3/feature_vector/5) , while the other is self-made neural network.

  notes: 

  1- after training ~15 epoch the  val_accuracy always drops however  [inaturalist](https://tfhub.dev/google/inaturalist/inception_v3/feature_vector/5) provide a better results .

  

- How to measure successful improvement of model? - Austrian leaves dataset

  

  



