console.log('my sanity here');
(function () {

  function reqListener() {
    // console.log(this.responseText)

    let myParser = JSON.parse(this.responseText)
    console.log('parsed info**', myParser)

    let parser = myParser.data.children;
    console.log('description', parser)

    let tempObj;

    for(var k = 0; k < parser.length; k++){

     //creates div and appends to HTML
    let createDiv = document.createElement('div');
    createDiv.id = 'pic-container'; //assigns the ID

    //calls the element from html and assings addToHtml
    let addToHtml = document.getElementById('animalCage');
    addToHtml.appendChild(createDiv);// appends the div

    //create some children for div
    let childElems = document.createElement('p');
    childElems.id = 'child-Elems';
    document.getElementById('animalCage');
    addToHtml.appendChild(childElems)

      //creates a temporary obj that stores parsed info from reddit
      tempObj = {
        title: parser[k].data.title,
        links: parser[k].data.permalink
      }

    let imgsrc = tempObj.links;


      console.log('sanity', tempObj.title)

    createDiv.innerHTML = tempObj.title;

    //   console.log('hey:', tempObj.links)
    }


  }

  const redditRequest = new XMLHttpRequest();
  redditRequest.addEventListener('load', reqListener);
  redditRequest.open('GET', 'https://www.reddit.com/r/funnyanimal.json');
  redditRequest.send();

})()