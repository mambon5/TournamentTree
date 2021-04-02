/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var cytoscape = require('cytoscape');
var sbgnStylesheet = require('cytoscape-sbgn-stylesheet');

var cy = cytoscape({
  container: container,
  style: sbgnStylesheet(cytoscape)
  // other arguments here
});