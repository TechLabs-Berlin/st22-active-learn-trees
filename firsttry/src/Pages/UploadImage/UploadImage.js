import React, { Component } from "react";
import Navbar from "../../Components/Navbar";
// import axios from 'axios';
import './UploadImage.css';
import * as tf from '@tensorflow/tfjs';


let model;

class UploadImage extends Component {
    
    async loadModel() {
        model = await tf.loadLayersModel('https://raw.githubusercontent.com/Constifox/st22-active-learn-trees/main/ai-model/model.json');
        console.log("model=" + model);
        const classifier_json = new URL('https://raw.githubusercontent.com/Constifox/st22-active-learn-trees/main/ai-model/class_definitions.json');
        const response = await fetch(classifier_json);
        // console.log(names);
        return  await response.json();
    }
    
    openFile = function (file) {
        var input = file.target;
        var reader = new FileReader();
        reader.onload = function () {
            var dataURL = reader.result;
            var output = document.getElementById('image1');
            output.src = dataURL;
        };
        reader.readAsDataURL(input.files[0]);
    };
    preprocess(imgData) {
        return tf.tidy(() => {
            //convert the image data to a tensor 
            let tensor = tf.browser.fromPixels(imgData)
            //resize to 256 x 256
            const resized = tf.image.resizeBilinear(tensor, [256, 256]).toFloat()
            // Normalize the image 
            const offset = tf.scalar(1.0); // important will depend on the model (eg rescale 255)
            const normalized = resized.div(offset);
            //We add a dimension to get a batch shape
            return normalized.expandDims(0)
        });
    }

    async classifyImage(names) {
        console.log('im starting!!!!!')
       
        let imageTensor = this.preprocess(document.getElementById('image1'));
        let result = tf.softmax(model.predict([imageTensor]));
        let resultId = result.argMax(1); // 1 - refers to the axis 
        console.log(resultId.dataSync());
        // console.log(NAMES)
        names.then(labels => {
            let species = labels[resultId.dataSync()[0]];
        console.log(result.dataSync());
        console.log(species);
        let elm = document.getElementById('caption');
        elm.innerText = 'This is a ' + species ;
        let elm1 = document.getElementById('caption1');
        elm1.innerText =  (100 * result.dataSync()[resultId.dataSync()]).toFixed(2) + '% certain ... ';
        }) 
        
    }
    
    render() {
        
        let names = this.loadModel()
        return (
            <>
                <div onLoad={this.loadModel} className="district-body">
                    <div id='output_field'></div>
                    <Navbar />
                    <h1 className="district-header">Active_Learn_Trees</h1>
                
                    <div className="district1-container">
                            <div >
                                <img id='image1'  className="image1-column" crossOrigin="anonymous"  />
                            </div>
                            <div className="">
                                <input type='file' accept='image/*' onChange={this.openFile}/>
                                <button onClick={() => this.classifyImage(names)}>classify!</button>
                            </div>
                    </div>
                    <h1 className="second-header">Results</h1>


                    <div className="info-section">
                            <div class="ui black left aligned inverted segment">
                                <h2> Name :</h2>
                                <h3 id="caption"></h3>
                            </div>
                            <div className="ui black left aligned inverted segment">
                                <h2> Certainity :</h2>
                                <h3 id="caption1"></h3>
                            </div>
                    </div>        
                </div>
            </>
        );

    };
}



export default UploadImage;