/*global chrome sendResponse:true*/
window.onload = function(){
 chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
   console.log(request);
   if(!sender.tab){
     sendResponse('received');
   }
   return true;
 });
};

