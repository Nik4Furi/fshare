// console.log('Welcome in fshare-A file sharing app');
// //---------------Declarations the variables---------------X
// const inputFile = document.getElementById('file');
// const previewContainer = document.querySelector('.previewContainer');
// const previewImg = document.getElementById('previewImg');

// // console.log(inputFile, previewContainer, previewImg);

// //------------------Declarations the functions------------X
// //handle the preview file 
// const handlePreviewFile = (e) => {
//     // console.log(e);
//     // const file = e[0];
// }

// //Add the event listener onto file uploadations
// inputFile.addEventListener('change', function () {
//     const file = this.files[0];
//     // console.log(file)
//     const name = file.name;
//     const size = file.size;
//     const img = file.name;

//     console.log(name, size, img);


//     //Check the file is choose or not
//     if (file) {
//         const reader = new FileReader();
//         reader.addEventListener('load', function () {
//            let result = reader.readAsDataURL(file)[1];
//            console.log(result)
//             previewImg.setAttribute('src', result);
//         })


//         //Adding the file preview into container 
//         previewContainer.innerHTML = `           

//             <!-- name of the file,with size  -->
//                 <h5 class="fs-5">File Name: <span class="text-primary fw-bold">${name}</span> </h5>
//                 <h6 class="fs-6">Size: <span class="text-primary fw-bold">${size}</span> KB</h6>       

//             <!-- download button to download the file  -->
//             <div>
//                 <a href="/downloadFile"><button class="btn btn-primary">Upload File</button></a>
//             </div>`
//     }
// });