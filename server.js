'use strict';

const express = require('express');
const serveSpa = require('serve-spa');
const path = require('path');
const PORT = process.env.PORT || 8000;

const app = express();

serveSpa(app, path.resolve(__dirname, './bin'));

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});