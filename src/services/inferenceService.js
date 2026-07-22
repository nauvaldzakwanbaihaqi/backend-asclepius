const tf = require('@tensorflow/tfjs-node');

async function predictClassification(model, imageBuffer) {
    const tensor = tf.node
        .decodeImage(imageBuffer, 3)
        .resizeNearestNeighbor([224, 224])
        .expandDims()
        .toFloat();

    const prediction = model.predict(tensor);
    const score = await prediction.data();
    const confidenceScore = score[0];

    let result, suggestion;

    if (confidenceScore > 0.5) {
        result = 'Cancer';
        suggestion = 'Segera periksa ke dokter!';
    } else {
        result = 'Non-cancer';
        suggestion = 'Penyakit kanker tidak terdeteksi.';
    }

    return { result, suggestion };
}

module.exports = { predictClassification };
