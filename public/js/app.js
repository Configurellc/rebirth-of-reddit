console.log('my sanity here');
(function () {

  function reqListener() {
    console.log(this.responseText)

    let myParser = JSON.parse(this.responseText)
    console.log('parsed info**', myParser)

    let parser = myParser.data.children;
    console.log('description', parser)

    console.log(myParser)

    let tempObj;

    for(var k = 0; k < parser.length; k++){

      //creates a temporary obj that stores parsed info from reddit
      tempObj = {
        title: parser[k].data.title,
        links: parser[k].data.thumbnail
      }


     //creates div and appends to HTML
    let createDiv = document.createElement('div');
    createDiv.id = 'reddit-box'; //assigns the ID


    //calls the element from html and assings addToHtml
    let addToHtml = document.getElementById('animalCage');

    //creates div to store picture
    let picture = document.createElement('div')
    picture.id = 'picture-container'
    addToHtml.appendChild(picture);
    // addToHtml.appendChild(createDiv);// appends the div

    //creates children paragraphs to store redit description and appends it to pciture div
    let childElems = document.createElement('p');
    childElems.id = 'child-Elems';
    picture.appendChild(childElems)

    let imgsrc = tempObj.links;//assigns tempObj.links to the imgsrc to be inserted into html
    let link =  imgsrc;

    picture.innerHTML ='<img src = "' + link + '">' + "</br>" + '<p>' + tempObj.title + '</p>';


      console.log('sanity', tempObj.title)

    childElems.innerHTML = tempObj.title;

      console.log('hey:', link)
    }


  }

  const redditRequest = new XMLHttpRequest();
  redditRequest.addEventListener('load', reqListener);
  redditRequest.open('GET', 'https://www.reddit.com/r/cat+pictures.json');
  redditRequest.send();

})()