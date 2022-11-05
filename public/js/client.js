console.log('Welcome in fshare-A FileSharing App');

//Declarations of the variables
const downloadLink = document.getElementById('downloadLink').value;
const copyClipboard = document.getElementById('copyClipboard');

//Add the listener to copy the code
copyClipboard.addEventListener('click',()=>{   
   navigator.clipboard.writeText(downloadLink)

})