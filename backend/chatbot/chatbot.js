const tf = require('@tensorflow/tfjs-node');

// Load the model architecture and weights
async function loadModel() {
    const model = await tf.loadLayersModel('file://path_to_your_model/chatbot_model.json');
    await model.loadWeights('file://path_to_your_model/chatbot_weights.h5');
    return model;
}

// Use the loaded model to make predictions
async function predict(inputText) {
    const model = await loadModel();
    const vocab = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[];:,.<>?';
    const charToIndex = {};
    for (let i = 0; i < vocab.length; i++) {
        charToIndex[vocab.charAt(i)] = i;
    }
    
    const vectorizeSentence = (sentence) => {
        const vector = new Array(vocab.length).fill(0);
        for (let i = 0; i < sentence.length; i++) {
            const char = sentence.charAt(i);
            if (charToIndex[char] !== undefined) {
                vector[charToIndex[char]] = 1;
            }
        }
        return vector;
    };

    const inputVector = tf.tensor([vectorizeSentence(inputText)]);
    const prediction = model.predict(inputVector);
    const outputIndex = prediction.argMax(1).dataSync()[0];
    
    // Convert index back to character
    const outputChar = vocab.charAt(outputIndex);
    
    return outputChar;
}

// Example usage
predict("Hi").then(output => {
    console.log(output); // This will print the predicted output
});
