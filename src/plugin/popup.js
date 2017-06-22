/*global chrome:true*/
import $ from 'jquery';
import toastr from 'toastr';
window.onload = function () {
  // alert('window onload');
  // chrome.tabs.executeScript(null, { file: "dist/index.js" });
};

$(document).ready(function () {
  $('#btn').on('click', function () {
    toastr.info('button clicked');
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'test data', function (response) {
        console.log(response);
      });
    });
  });
});

