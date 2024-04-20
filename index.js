const express = require('express')
const bodyParser = require('body-parser')
const pdfToWord = require('./routes/pdf-to-word')

//const mergeRouter = require('./routes/merge');
/*
const splitRouter = require('./routes/split');
const editorRouter = require('./routes/editor');
const watermarkRouter = require('./routes/watermark');
const deleteRouter = require('./routes/delete');
const pageNoRoute = require('./routes/pageno');
const rotatePdf = require('./routes/rotate');
*/

/*
const pdfToExcel = require('./routes/pdftoexcel')
const pdfToPpt = require('./routes/pdf-to-ppt')
const pdfToPng = require('./routes/pdf-to-png')
const pdfToJpg = require('./routes/pdf-to-jpg')
const pdfToJson = require('./routes/pdf-to-json');
const pdfToTiff = require('./routes/pdf-to-tiff')
const pdfToTxt = require('./routes/pdf-to-txt')
const wordToPdf = require('./routes/word-to-pdf')
*/
const cors = require('cors');

const app = express();
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(pdfToWord);
//app.use(mergeRouter);
/*
app.use(splitRouter);
app.use(editorRouter);
app.use(watermarkRouter);
app.use(deleteRouter);
app.use(pageNoRoute);
app.use(rotatePdf);
*/

/*
app.use(pdfToExcel);
app.use(pdfToPpt);
app.use(pdfToPng);
app.use(pdfToJpg);
app.use(pdfToJson)
app.use(pdfToTiff)
app.use(pdfToTxt);
app.use(wordToPdf)
*/
app.use(express.static(path.join(__dirname, 'public')));

//route
app.get('/contact', function (req, res) {
    res.render(path.join(__dirname, 'contact'));
});

app.get('/privacy', function (req, res) {
    res.render(path.join(__dirname, 'privacy'));
});

app.get('/terms', function (req, res) {
    res.render(path.join(__dirname, 'terms'));
});

app.get('/blog', function (req, res) {
    res.render(path.join(__dirname, 'blog'));
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
        
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
