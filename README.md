# <h1 id="fshare"> fshare ![GitHub package.json version](https://img.shields.io/github/package-json/v/Nik4Furi/fshare) <span><img src="" width="60" alt="fshare_logo"/></span> </h1>
### A fullstack file sharing app, can help the users to upload any type of FILES.Build on <a href="https://ejs.co/" target="_blank" rel="noopener noreferrer">(EJS TEMPLATES)</a>
fshare, is fullstack app, can help the users to upload any file and get the link to download file.But they did not upload file size more than 100MB. Also did not presure on the database server, becuase have the specific functionality, can delete any files data which is 24 hours old.
  With the help of the app, any one share the files without the fear of files scam because this app automatically deleting the files in 24 hours.

## Indexing the contents
####   <p><a href="#badges" >Badges</a></p>
####   <p><a href="#looks" >fshare Looka Like</a></p>
####   <p><a href="#demos" >Demo</a></p>
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

<a href="#fshare">Go Home </a>


## <h2 id="looks" >fshare Looks Like</h2>

<p text-align=left>
  <img src="https://user-images.githubusercontent.com/91304976/205229770-b57ea733-6bd0-4856-871a-379d5fe1256a.png" width="400"   alt="fshare_home"/>
  
  <img src="https://user-images.githubusercontent.com/91304976/205229790-9b00df29-4298-46d5-897a-bee533a5a27d.png" width="500"   alt="fshare_link"/>  
 </p>
 
<a href="#fshare">Go Home </a>


## <h2 id="demos" >Demo </h2>

<p text-align=left>

  <img src="https://user-images.githubusercontent.com/91304976/205230538-c2ea2d4e-d850-41e6-af29-618fe7546032.gif" width="500"   alt="fshare_home"/>
    
    
  <img src="https://user-images.githubusercontent.com/91304976/205230554-291cb593-92ae-4399-ab03-b40aa0722a7d.gif" width="500"   alt="fshare_download"/>  
 </p>

<a href="#fshare">Go Home </a>


## <h2 id="stack" >Tech Stack </h2>

**Server:** NodeJS, ExpressJS, MongoDB,EJS templates

<a href="#fshare">Go Home </a>


## <h2 id="runLocally" >Run Locally </h2>

#### To run this project, you ensure that all basic requirements are indeed into your PC, such as mongodb, and nodejs is already install your PC. 
##### If not, plz refer this videos  <a href="https://www.youtube.com/results?search_query=install+node+js+" target="_blank" rel="noopener noreferrer">Install node js</a>,<a href="https://www.youtube.com/results?search_query=install+mongodb" target="_blank" rel="noopener noreferrer">Install mongoDB</a>  ,or you did it yourselves👍.

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
  npm run start (start for only time)

  npm run dev (Run or restart server, whenever you save any file(js))
```

<a href="#fshare">Go Home </a>

## <h2 id="envVar">Environment Variables </h2>

To run this project, you will need to add the following environment variables for basic ideas.Also you can see **.env.example** file for whole idea of environment variables.

Version Configurations
 
`VERSION` = v1

Server Configurations

`PORT` = 8000
`URL` = http://localhost

Database configurations

`DB_URI` = '<your mongodb database url/ mongodb atlas uri>'  

<a href="#fshare">Go Home </a>


## <h2 id="colorsRef">Color Reference </h2>

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color |  #dc3545 |

<a href="#urlShortener">Go Home </a>

## <h2 id="routersRef">Routers Reference </h2>

#### Home page

```http
  GET /
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| - | `get` | Home page see, where you upload file and copy the downloadable url links |

#### Post/submit the files for sharing into database

```http
  POST /upload
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| -      | `POST` | **file field required**.To post/submit the file into database |

#### Show the download page

```http
  POST /show/${uuid}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `uuid`     | `POST` | **file uuid field required**.To show the download file page |

#### Download the file

```http
  POST /download/${uuid}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `uuid`      | `POST` | **file uuid field required**.To download a file from database |


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

<a href="#fshare"> Go Home </a>


## <h2 id="features">Features </h2>

- Delete any files data which is 24 hours old
- Use Error-Handling techniques to handle errors or server requests
- Use <a href="https://en.wikipedia.org/wiki/Model-view-controller" target="_blank" rel="noopener noreferrer">MVC Architecture</a> to controlling accured in project.

<a href="#fshare">Go Home </a>


## <h2 id="relatedProjects" >Related Projects </h2>

Here are some related projects

[urlShortener](https://github.com/Nik4Furi/urlShortener)

[inotes](https://github.com/Nik4Furi/inotes)