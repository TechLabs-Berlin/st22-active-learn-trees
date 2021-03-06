# Deep Learning Track - Development of tree identification model 
The Deep Learning Track was given the task to deevelop a model that would allow for tree identification based on a picture.
This originates from the idea to combine species and age of tree to estimate their CO2 absorption. But for this knowing the species of a tree is crucial and we wanted to aid this by allowing the user to identify a tree based on a picture. For the improvement of the training dataset we started implementing active learning and for the improvement of the neural network transfer learning.

<p align="center">
    <img alt="Project overview" src="https://raw.githubusercontent.com/TechLabs-Berlin/st22-active-learn-trees/main/DL-neural-network/trees-project-outline.png" width="600" />
</p>


### Part A) **Inital** exploration of image datasets, testing of possible CNN models and implementation in the web application.
### Step 0: Identification of most common tree species in Berlin 
A excel file (based on fbinter.stadt-berlin.de) containing all trees in Berlin was analysed (<6000 plants). The inital analysis gave 63 different Genus, which were reduced to further only include the most common species ( > 4000 trees).


- [Colab: (Step 0) - Identification of most common tree species in Berlin](https://colab.research.google.com/drive/1rKc-JRlbbI8miFOavy8Obr3mTMypYQCp?usp=sharing)
- [Github: (Step 0) - Identification of most common tree species in Berlin](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/Step0%20-%20quick%20berlin%20tree%20analysis/(Step_0)_Identification_of_most_common_tree_species_in_Berlin.ipynb) 

The databank of trees in Berlin resulted in the following most 15 common species: `'ACER', 'AESCULUS','BETULA', 'CARPINUS', 'CORYLUS','CRATAEGUS','FRAXINUS','PLATANUS','POPULUS', 'PRUNUS','QUERCUS','ROBINIA','SORBUS','TILIA', 'ULMUS'`, for which out aim is to build an image classification CNN which allows the user to upload an image and get a predicition of the tree species.

### Step 1: Identification of suitable image dataset for tree identification

There are various plant recognition apps available ([overview](https://backgarden.org/tree-identification-apps/) )like [Pl@ntNet](https://plantnet.org/) or [google image search](https://www.google.com/imghp?hl=en), but unfortunately their image datasets are not easily publicly available. 

We identified two curated plant image datasets that we explored further and trained some intial neural network models: 

#### 1.**Austrian Tree dataset**
<p align="center">
    <img alt="Austrian Tree dataset" src="https://raw.githubusercontent.com/TechLabs-Berlin/st22-active-learn-trees/main/DL-neural-network/Step1-exploring-datasets/leaves.png" width="220" />
</p>

This **Austrian Tree image dataset** contains images of leaves from 5 species mainly found in Austria.
[Tree Species Identification - Paper](https://www.researchgate.net/publication/323550122_Tree_Species_Identification_from_Bark_Images_Using_Convolutional_Neural_Networks) [Dataset](https://zenodo.org/record/4446955). 

- [Colab: (Step_1)_Exploring_image_dataset_Austrian-Leaves](https://colab.research.google.com/drive/15h5ILbqYFrsKk3sYKz5-e4Ln4zJs7HuS?usp=sharing)
- [Github: (Step_1)_Exploring_image_dataset_Austrian-Leaves](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/Step1-exploring-datasets/(Step_1)_Exploring_image_dataset_Austrian_Leaves.ipynb) (update link to main)


Here we explored training a from scratch build sequential CNN (with MaxPooling2D and data augmentation) and and a pretrained model using Fast AI (resnet18). Unfortunately any trained model on this leave data set required images with a neutral background, and is limited to the 5 tree species represented in the training dataset.


#### 2.**Pl@ntNet300K**
<p align="center">
    <img alt="Pl@ntNet300K" src="https://raw.githubusercontent.com/TechLabs-Berlin/st22-active-learn-trees/main/DL-neural-network/Step1-exploring-datasets/plantnet300.png" width="220" />
</p>

Furthermore we looked at the publicly available **[Pl@ntNet](https://plantnet.org/) image dataset** (31GB)  "Pl@ntNet-300K: a with high label ambiguity and a long-tailed distribution". [Dataset](https://zenodo.org/record/4726653), [Github- repository](https://github.com/plantnet/PlantNet-300K/).
- [Colab: (Step_1)_Exploring_image_dataset_PlanetNet300](https://colab.research.google.com/drive/1qevPr0FedxPefi2OcmymUWOoFzhus9Lu?usp=sharing)
- [Github: (Step_1)_Exploring_image_dataset_PlanetNet300](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/Step1-exploring-datasets/(Step_1)_Exploring_image_dataset_PlanetNet300.ipynb)


The training set contained 3812 images and the validation set 487. The PlantNet-300K github repository (https://github.com/plantnet/PlantNet-300K) proposed using the pretrained "resnet50" NN. In order to make this work on the large dataset we had to modify the batch size to 64. But unfortunately the limited resource of google colab did not allow for more than 2 epochs to train at once. Therefore the results were not satisfactory and we decided to not use this the dataset or pathway futher. This dataset can be used for testing of very developed models and plant species but this were not the scope of our project.

Based on this we decided we would work further with leave images and limit our training datasets on leaves of images that were present in Berlin. We decided to create (**Step 3**) our own image dataset with [Bing](https://www.bing.com/) image search and curate/improve this dataset with relabeling (**Step 4**) as part of our model improvement via active learning.

### Step 2: Initial setup of a software pipeline for deployment of a model that can be used in a browser
Our aim was to identify a way to integrate our model into the web application build by the rest of the team. The exploration of downloading an intial model with tensorflow.js resulted in an intial html page accessing the [model weights](https://raw.githubusercontent.com/Constifox/st22-active-learn-trees/main/ai-model/model.json) and [categories](https://raw.githubusercontent.com/Constifox/st22-active-learn-trees/main/ai-model/class_definitions.json), which allows for browser side classification. This can be found hosted on netlify: (https://famous-pegasus-8b90b9.netlify.app/tree_identifying.html).

- [Colab: (Step 2) -  Initial setup of a software pipeline for deployment of a model that can be used in a browser](https://colab.research.google.com/drive/1sdLsT-1BegKSGNcIBnlpglhNsNsGFdKu?usp=sharing)
- [Github: (Step 2) -  Initial setup of a software pipeline for deployment of a model that can be used in a browser](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/Step2-browserside-model-integration/(Step_2)_Initial_setup_of_a_software_pipeline_for_deployment_of_a_model_that_can_be_used_in_a_browser.ipynb)


The final model weights ([DL-neural-network/ai-model](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main//DL-neural-network/ai-model)), and a json file with the categories ([DL-neural-network/ai-model/class_definitions.json](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/ai-model/class_definitions.json)) are stored on github and can be  accessed for browser side classification. 
The browser side implementation of the model is realised in an [html page -  (tree_identifying-update-links.html) ](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/Step2-browserside-model-integration/tree_identifying-update-links.html) which shows how to upload an image, access the modelweights, classify the image and return the results, this api is now integrated by the WD team with React in our final web application.
When downloading the model weights with tensorflow.js not all types of NN layers are supproted, therefore the current model on web application is a very striped down version of the inital NN and therefore not giving accurate predictions. This should definetly be  improved but we thought it was more important to identify a solution to access the model on the browser side, without the need to fully set up a backend. 

The NN model will be improved in the following steps but still experimentally in a google colab environment. To be able to deploy an updated NN the difficutlties with tensorflow.js would need to be overcome in the future.

### Part B) Refinement of the image dataset and image classification model

Austrain leaves only contains 5 classes however berlin streets have 63 different spices . For better generalization we decided to decrease the number of trees to only identify the most common types with numbers > 4000 with the addition of `FAGUS` this resulted in 16 different types.

### Step 3: Creation of image dataset by downloading images from Bing and manually sort/labeling
Based on a previous analysis (see step 0) we focus on the most common trees in Berlin ( > 4000 trees). Based on comparing different existing plant datasets (Step 1) we decided to create our own dataset by performing a bing image download. We create here an image dataset of leaves of these most common trees in Berlin.
`berlin_trees = ['ACER leaves', 'AESCULUS leaves','BETULA leaves', 'CARPINUS leaves', 'CORYLUS leaves','CRATAEGUS leaves','FRAXINUS leaves','PLATANUS leaves','POPULUS leaves', 'PRUNUS leaves','QUERCUS leaves','ROBINIA leaves','SORBUS leaves','TILIA leaves', 'ULMUS leaves', 'Fagus leaves']`
Note: `'FAGUS'` was added as a genus/family present in Austrian leave set.

<p align="center">
    <img alt="Bing leaves images " src="https://raw.githubusercontent.com/TechLabs-Berlin/st22-active-learn-trees/main/DL-neural-network/Step3-tree-images-dataset/Bing-images.png" width="220" />
</p>

- [Colab: (Step 3) - Creation of image data set: Bing image download](https://colab.research.google.com/drive/11VHklqR_TRG6QjMEuKsr6ROsesNUqGnP?usp=sharing)
- [Github: (Step 3) - Creation of image data set: Bing image download](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/Step3-tree-images-dataset/(Step_3)_Creation_of_image_data_set_Bing_image_download.ipynb)

This intial tree dataset can be found here: [trees-bing-Berlin-test12](https://github.com/TechLabs-Berlin/st22-active-learn-trees/tree/main/DL-neural-network/Step3-tree-images-dataset/trees-bing-Berlin-test12)


### Step 4: Improving the dataset and model via Active learn using the python library superintend

<p align="center">
    <img alt="Active Learning loop" src="https://raw.githubusercontent.com/TechLabs-Berlin/st22-active-learn-trees/main/DL-neural-network/Step4-Active-Learning/Activelearn-Researchgate.png" width="220" />
</p>

[Active learning loop - Image source](https://www.researchgate.net/figure/The-process-of-active-learning-Ambiguous-uncertain-samples-are-selected-for-oracle-to_fig1_326264220)

1) species in Berlin --> image download via bing focused on LEAVES OF SPECIES
future maybe: extend the image dataset to general images of trees and classify for large(very old and high circumference) tree vs small tree (young, saplings etc), no tree --> again image download via bing

- [Colab: (Step 4) - Improving the dataset and model via Active learn using the python library superintend](https://colab.research.google.com/drive/1z_KAdBDlJ_TOSmyEqYUveFJwREXI9Q8f?usp=sharing)
- [Github: (Step 4) - Improving the dataset and model via Active learn using the python library superintend](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/Step4-Active-Learning/(Step_4)_Active_Learning_(superintend)_on_tree_leaves_.ipynb) 
### Step 5: Deciding on and implementing the ???best" CNN model

- [Colab: (Step 5) - Deciding on and implementing the ???best" CNN model](https://colab.research.google.com/drive/19oaWKU-4LV409M2fAWPgOI_ym8D-TM9p?usp=sharing)  (update Colab), 
- [Github: (Step 5) - Deciding on and implementing the ???best" CNN model](https://github.com/TechLabs-Berlin/st22-active-learn-trees/blob/main/DL-neural-network/Step5-improvement-CNN-model/(Step_5)_Deciding_on_and_implementing_the_%E2%80%9Cbest__CNN_model.ipynb)  (update Notebook)


We implemented two different types of CNN. one was a per-trained model using [inaturalist](https://tfhub.dev/google/inaturalist/inception_v3/feature_vector/5) , while the other is self-made neural network.
After training ~15 epoch the val_accuracy always drops however [inaturalist](https://tfhub.dev/google/inaturalist/inception_v3/feature_vector/5) provide a better results .




## Final remarks

For the future, any model that was trained with the improved dataset (via active learning), could be tested to the austrian leaves dataset, since it provides a well curated set of images.

Our technical setup overview:
<p align="center">
    <img alt="Technical statistics" src="https://raw.githubusercontent.com/TechLabs-Berlin/st22-active-learn-trees/main/DL-neural-network/Techstats.png" width="600" />
</p>

- [Pytorch](https://pytorch.org/)
- [FastAI](https://www.fast.ai/)
- [TensorFlow](https://www.tensorflow.org/)
- [Keras](https://keras.io/)
- [Superintendent](https://superintendent.readthedocs.io/en/latest/active-learning.html) (Active learning)



  



