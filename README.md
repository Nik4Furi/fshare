# <h1 id="fshare"> fshare <span>![GitHub package.json version](https://img.shields.io/github/package-json/v/Nik4Furi/fshare)
</span> </h1>
### A file sharing app, using '<a href="https://ejs.co" target="_ejs">EJS templates</a>'
fshare, is a fullstack project, which is help the user to upload any file, and after sharing get the donwload file link or share with specific user who want to download.Also have the features, its automatically delete file after 24 hour.
After getting the link ,users can share via Email, whatsapp or use of other chat plateform.But didnot upload file upto 100 MB.

## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#looks" >fshare look like</a></p>
####   <p><a href="#demo" >Demo</a></p>
####   <p><a href="#stack" >Tech Stack</a></p>
####   <p><a href="#runLocally" >Run Locally</a></p>
####   <p><a href="#envVar" >Environment Variables</a></p>
####   <p><a href="#colorsRef" >Color References</a></p>
####   <p><a href="#routersRef" >Routers References</a></p>
####   <p><a href="#usages" >Usages/Examples</a></p>
####   <p><a href="#features" >Features</a></p>
####   <p><a href="#relatedProjects" >Related Projects</a></p>

## <h2 id="badges" >Badges </h2>


![GitHub Repo stars](https://img.shields.io/github/stars/Nik4Furi/fshare?style=social) ![GitHub watchers](https://img.shields.io/github/watchers/Nik4Furi/fshare?style=social)

![GitHub top language](https://img.shields.io/github/languages/top/Nik4Furi/fshare)   ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Nik4Furi/fshare?style=flat-square) ![GitHub repo file count](https://img.shields.io/github/directory-file-count/Nik4Furi/fshare) 
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Nik4Furi/fshare)   ![GitHub last commit](https://img.shields.io/github/last-commit/Nik4Furi/fshare)

## <h2 id="looks" >fshare looks like</h2>


<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/203487604-039a41aa-c4ae-4fad-b76e-1b72ce7f0f78.png" width="400" height="" alt="fshare_home"/>
  
  <img src="https://user-images.githubusercontent.com/91304976/203487609-5fe50b57-c865-4fd1-90ec-9dec2eddec73.png" width="500" height="" alt="fshare_link"/>  
 </p>
 
 <p text-align=right>
  <img src="https://user-images.githubusercontent.com/91304976/203487568-85d8befe-a0d0-4905-9910-f07505259b99.png" width="400" height="" alt="fshare_download"/>
</p>

<a href="#fshare">Go Home </a>



## <h2 id="demo" >Demo </h2>

<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/203494510-77735dad-2653-4835-8d86-8915b384abeb.gif" width="500" height="" alt="fshare_home"/>
    
    
  <img src="https://user-images.githubusercontent.com/91304976/203494536-92cc8b0e-1189-4e22-b6c0-81c07418cfcc.gif" width="500" height="" alt="fshare_download"/>  
 </p>
 


<a href="#fshare">Go Home </a>



## <h2 id="stack" >Tech Stack </h2>


**Server:** NodeJS, ExpressJS, MongoDB, EJS

<a href="#fshare">Go Home </a>



## <h2 id="runLocally" >Run Locally </h2>

Clone the project

```bash
  git clone https://github/Nik4Furi/fshare
```

Go to the project directory

```bash
  cd fshare
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start (start at only time)

  npm run dev (Run or restart, whenever you save any file(js))
```

<a href="#fshare">Go Home </a>

## <h2 id="envVar">Environment Variables </h2>

To run this project, you will need to add the following environment variables to your .env file also can see  **.env.exmaple** file

Server Configurations

`PORT` = 8000
`URL` = http://localhost

Database configurations

`DB_SERVER`   
`DB_HOST`   
`DB_PORT`   
`DB_NAME`   

Session key configurations

`SECRET_SESSION`

<a href="#fshare">Go Home </a>



## <h2 id="colorsRef">Color Reference </h2>

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color |  #0d6efd |

<a href="#fshare">Go Home </a>



## <h2 id="routersRef">Routers Reference </h2>

#### Home Page

```http
  GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | `get` | See our home page,where we upload files |

#### Upload File

```http
  POST /upload
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| -      | `POST` | **file must be required**.To upload a file into database |

#### Show File To Download

```http
  GET /show/:uuid
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `uuid`   | `GET` | **uuid must be required**.Because show the details of given uuid match file |



#### Download File

```http
  GET /download/:uuid
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `uuid`   | `GET` | **uuid must be required**.Because donwload file only uuid match |


<a href="#fshare">Go Home </a>


## <h2 id="usages" >Usages / Examples </h2>

Deleting the file,which are 24 hour delay.

```javascript
const DeleteDoc24Hour = async(Modal)=>{
    const today = new Date(Date.now());
    today.setHours(0,0,0,0);
    
    await Modal.deleteMany({createdAt : {$lt:today}});
}

module.exports =  DeleteDoc24Hour
```

Uploading the files ,using this middleware

```javascript
//---------import the dependies to uploads files
const multer = require('multer');
const path = require('path');

//Define the storage where to save our files
const Storage = multer.diskStorage({
    destination : 'uploads',
    filename : (req,file,cb)=>{
        const uniqueName = `${Date.now()}-${Math.floor(Math.random() * 1E9)}${path.extname(file.originalname)}`;
        cb(null,uniqueName);
    }
})

//Define the uploads with some limitations
const Upload = multer({
    storage : Storage,
    limits : {fileSize : 1000 * 1000 * 100}
}).single('myfile')

module.exports = Upload; 

```
<a href="#fshare"> Go Home </a>


## <h2 id="features">Features </h2>

- Delete any file which is late from 24 hour
- Upload any kind of file, but its not more than 100 MB
- Use Components
- Basec On <a href="https://en.wikipedia.com/wiki/models-view-controller" target="_mvc">MVC Architecture</a>

<a href="#fshare">Go Home </a>



## <h2 id="relatedProjects" >Related Projects </h2>

Here are some related projects

[inotes_api](https://github.com/Nik4Furi/inotes_api)

[urlShortener_api](https://github.com/Nik4Furi/urlShortener_api)

