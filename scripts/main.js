// THIS IS THE FUNCTION TO MAKE THE IMAGES CHANGE WHEN CLICKED
// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/tobias.jpg') {
//       myImage.setAttribute ('src','images/feliks.jpg');
//     } else {
//       myImage.setAttribute ('src','images/tobias.jpg');
//     }
// }

// // THIS IS THE WELCOME/NAME FUNCTION
// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');

// function setUserName() {
//   var myName = prompt('Please enter your name.');
//   localStorage.setItem('name', myName);
//   myHeading.textContent = 'Jon is cool, ' + myName;
// }

// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   var storedName = localStorage.getItem('name');
//   myHeading.textContent = 'Jon is cool, ' + storedName;
// }

// myButton.onclick = function() {
//   setUserName();
// }

// THIS IS A FUNCTION TO CREATE A HANDLE FOR SUBTITLES, SEE: https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video FOR FURTHER GUIDE. 
// var subtitles = document.getElementById('subtitles');

// for (var i = 0; i < video.textTracks.length; i++) {
//    video.textTracks[i].mode = 'hidden';
// }

// var subtitlesMenu;
// if (video.textTracks) {
//    var df = document.createDocumentFragment();
//    var subtitlesMenu = df.appendChild(document.createElement('ul'));
//    subtitlesMenu.className = 'subtitles-menu';
//    subtitlesMenu.appendChild(createMenuItem('subtitles-off', '', 'Off'));
//    for (var i = 0; i < video.textTracks.length; i++) {
//       subtitlesMenu.appendChild(createMenuItem('subtitles-' + video.textTracks[i].language, video.textTracks[i].language, video.textTracks[i].label));
//    }
//    videoContainer.appendChild(subtitlesMenu);
// }

// var captionMenuButtons = [];
// var createMenuItem = function(id, lang, label) {
//    var listItem = document.createElement('li');
//    var button = listItem.appendChild(document.createElement('button'));
//    button.setAttribute('id', id);
//    button.className = 'subtitles-button';
//    if (lang.length > 0) button.setAttribute('lang', lang);
//    button.value = label;
//    button.setAttribute('data-state', 'inactive');
//    button.appendChild(document.createTextNode(label));
//    button.addEventListener('click', function(e) {
//       // Set all buttons to inactive
//       subtitleMenuButtons.map(function(v, i, a) {
//          subtitleMenuButtons[i].setAttribute('data-state', 'inactive');
//       });
//       // Find the language to activate
//       var lang = this.getAttribute('lang');
//       for (var i = 0; i < video.textTracks.length; i++) {
//          // For the 'subtitles-off' button, the first condition will never match so all will subtitles be turned off
//          if (video.textTracks[i].language == lang) {
//             video.textTracks[i].mode = 'showing';
//             this.setAttribute('data-state', 'active');
//          }
//          else {
//             video.textTracks[i].mode = 'hidden';
//          }
//       }
//       subtitlesMenu.style.display = 'none';
//    });
//    subtitleMenuButtons.push(button);
//    return listItem;
// }

// subtitles.addEventListener('click', function(e) {
//    if (subtitlesMenu) {
//       subtitlesMenu.style.display = (subtitlesMenu.style.display == 'block' ? 'none' : 'block');
//    }
// });