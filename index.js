const express = require('express');
const bodyParser = require('body-parser');
const pdfToWord = require('./routes/pdf-to-word');
const editorRouter = require('./routes/editor');
const ytmate = require('./routes/ytmate');
//const { Gemini } = require('@google-ai/generativeai');
//const fs = require('fs');
/*
const pdfToExcel = require('./routes/pdftoexcel');
const splitRouter = require('./routes/split');
const deleteRouter = require('./routes/delete');
const pageNoRoute = require('./routes/pageno');
const pdfToPpt = require('./routes/pdf-to-ppt');
const pdfToPng = require('./routes/pdf-to-png');
const pdfToTiff = require('./routes/pdf-to-tiff');
//const pdfToTxt = require('./routes/pdf-to-txt');
const pdfToJpg = require('./routes/pdf-to-jpg')
//const pdfToJson = require('./routes/pdf-to-json');
//const wordToPdf = require('./routes/word-to-pdf');
//const watermarkRouter = require('./routes/watermark');
//const rotatePdf = require('./routes/rotate');
//const mergeRouter = require('./routes/merge');*/
/*



*/


/*

*/
const cors = require('cors');

const app = express();
const path = require('path');

app.use(cors());

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(pdfToWord);
app.use(editorRouter);
app.use(ytmate);





/*
app.use(pdfToExcel);
app.use(splitRouter);
app.use(pdfToPng);
app.use(pageNoRoute);
app.use(deleteRouter);
app.use(pdfToTiff)
//app.use(pdfToTxt);
app.use(pdfToPpt);
app.use(pdfToJpg);
//app.use(pdfToJson);
//app.use(wordToPdf);
//app.use(rotatePdf);
//app.use(watermarkRouter);
//app.use(mergeRouter);
*/
/*
*/

/*


*/
app.use(express.static(path.join(__dirname, 'public')));

//route
app.get('/contact', function (req, res) {
    res.render(path.join(__dirname, 'contact.ejs'));
});

app.get('/privacy', function (req, res) {
    res.render(path.join(__dirname, 'privacy.ejs'));
});
/*
app.get('/getResponse', function (req, res) {
    res.render(path.join(__dirname, 'GetResponse.ejs'));
});
*/
app.get('/meilleures', function (req, res) {
    res.render(path.join(__dirname, 'Meilleures.ejs'));
});

app.get('/terms', function (req, res) {
    res.render(path.join(__dirname, 'terms.ejs'));
});

app.get('/blog', function (req, res) {
    res.render(path.join(__dirname, 'blog.ejs'));
});

app.get('/sitemap.xml', function (req, res) {
    res.sendFile(path.join(__dirname, 'sitemap.xml'));
});

app.get('/ads.txt', function (req, res) {
    res.sendFile(path.join(__dirname, 'ads.txt'));
});

    app.get('/ads', function (req, res) {
    res.sendFile(path.join(__dirname, 'ads.txt'));
});
//end


app.get('/gemini', function (req, res) {
    

res.send(333);

});



//files
app.get('/pdftoword.svg', function (req, res) {
    res.sendFile(path.join(__dirname, 'pdftoword.svg'));
});
app.get('/pdftoword.ico', function (req, res) {
    res.sendFile(path.join(__dirname, 'pdftoword.ico'));
});
app.get('/pdftoword.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'pdftoword.png'));
});
app.get('/loading.gif', function (req, res) {
    res.sendFile(path.join(__dirname, 'loading.gif'));
});
        

app.get('/controll.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'controll.js'));
});
        
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
