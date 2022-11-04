console.log('Welcome in fshare-A FileSharing App');

//Declarations of the variables
const downloadLink = document.getElementById('downloadLink').value;
const copyClipboard = document.getElementById('copyClipboard');

//Add the listener to copy the code
copyClipboard.addEventListener('click',()=>{   
    if (downloadLink) {        
        copyClipboard.select();
        copyClipboard.setSelectionRange(0, 99999); // For mobile devices      
      
        navigator.clipboard.writeText(downloadLink);
    }

})