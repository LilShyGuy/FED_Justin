// JavaScript Document
console.log("hi");
var menubutton = document.querySelector("nav > ul > li > button")
var menuoptions = document.querySelector("nav>ul>li>ul")
menubutton.addEventListener('click', mendropdown)


function mendropdown(){
    console.log("geklikt");
    menuoptions.classList.toggle('hidden')
}


var shopButton = document.querySelector("nav>ul>li>ul:nth-last-child(2) button");
var shopMoreOptions =document.querySelector("nav>ul>li>ul:last-of-type")
var shopMoreOptionsBack =document.querySelector("nav>ul>li>ul:last-of-type button")




function toggleShopMoreOptions() {
    console.log("Shopping more");
    shopMoreOptions.classList.toggle('hidden')
    menuoptions.classList.toggle('hidden')
}

shopButton.addEventListener('click', toggleShopMoreOptions);
shopMoreOptionsBack.addEventListener('click',toggleShopMoreOptions)


const opties = {
  threshold: [0, 0.2, 0.5, 0.8, 1], 
};

const imgElements = document.querySelectorAll('#images img');

imgElements.forEach(imgElement => {
  const observer = new IntersectionObserver(callback, opties);

  function callback(entries, observer) {
    entries.forEach(entry => {
      console.log(`Intersectie Verhouding: ${entry.intersectionRatio}`);
      const isElementVisible = entry.intersectionRatio >= 0.5;

      if (isElementVisible && !imgElement.classList.contains('slide')) {
        imgElement.classList.add('slide');
        console.log('Class added');
      } else if (!isElementVisible && imgElement.classList.contains('slide')) {
        imgElement.classList.remove('slide');
        console.log('Class removed');
      }
    });
  }

  observer.observe(imgElement);
});
//regel 44 t/m 65 met chatGPT en https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

var explore = document.querySelector('footer button');
var explorelist = document.querySelector('footer > :nth-child(3)'); 

explore.addEventListener('click', exploredropdown);

function exploredropdown() {
  explorelist.classList.toggle('hidden');
  console.log("more");
}




var search = document.querySelector('nav img:nth-child(5)')
var searchbalk = document.querySelector('nav>form')

search.addEventListener('click', letssearch)

function letssearch(){
  searchbalk.classList.toggle('hidden')
}



var fieldset1 = document.querySelectorAll('form fieldset')[0];
var womens = document.querySelector('form fieldset:first-child :nth-child(3)');
var mens = document.querySelector('main form fieldset:first-child :nth-child(4)');
var back1 = document.querySelector('form fieldset:first-child :nth-child(5) ');
var next1 = document.querySelector('form fieldset:first-child :nth-child(6)');
var results1 = document.querySelector('form fieldset:first-child :nth-child(7)');
var WBetaAr = document.querySelector('#results article:first-child');
var WAtomHoody = document.querySelector('#results article:nth-child(2)');
var MBetaAr = document.querySelector('#results article:nth-child(3)');
var Mcerium = document.querySelector('#results article:nth-child(4)');
var MKadin = document.querySelector('#results article:nth-child(5)');
var Mnorvan = document.querySelector('#results article:nth-child(6)');
var Mnuclei = document.querySelector('#results article:nth-child(7)');
var Malphalight = document.querySelector('#results article:nth-child(8)');
var kobah = document.querySelector('#results article:nth-child(9)');

  function mensclick() {
    fieldset1.classList.add('hidden');
    fieldset2.classList.remove('hidden');
    WBetaAr.classList.add('hidden')
    WAtomHoody.classList.add('hidden')
    event.preventDefault();
  }

  if (mens) {
mens.addEventListener('click', mensclick);
womens.addEventListener('click',womensclick);
results1.addEventListener('click' ,scrollToResults);}



function womensclick() {
  fieldset1.classList.add('hidden');
  fieldset2.classList.remove('hidden');
  MBetaAr.classList.add('hidden')
  MKadin.classList.add('hidden')
  Malphalight.classList.add('hidden')
  Mcerium.classList.add('hidden')
  Mnorvan.classList.add('hidden')
  Mnuclei.classList.add('hidden')
  event.preventDefault();
}

function scrollToResults() {
  const resultsSection = document.getElementById('results');
  resultsSection.scrollIntoView({ behavior: 'smooth' });
  event.preventDefault();
}



var fieldset2 = document.querySelectorAll('form fieldset')[1];
var Ins = document.querySelector('form fieldset:nth-child(2) :nth-child(2)');
var Shell = document.querySelector('form fieldset:nth-child(2) :nth-child(3)');
var InSh = document.querySelector('form fieldset:nth-child(2) :nth-child(4)');
var back2 = document.querySelector('form fieldset:nth-child(2) :nth-child(5)');
var next2 = document.querySelector('form fieldset:nth-child(2) :nth-child(6)');
var results2 = document.querySelector('form fieldset:nth-child(2) :nth-child(7)');

if(back2){
back2.addEventListener('click', backto1);
Ins.addEventListener('click',Insulatedjackets)
Shell.addEventListener('click',Shelljackets)
InSh.addEventListener('click',InShelljackets)
results2.addEventListener('click', scrollToResults)}

function backto1() {
  fieldset2.classList.add('hidden');
  fieldset1.classList.remove('hidden');
  WBetaAr.classList.remove('hidden')
  WAtomHoody.classList.remove('hidden')
  MBetaAr.classList.remove('hidden')
  MBetaAr.classList.remove('hidden');
MKadin.classList.remove('hidden');
Malphalight.classList.remove('hidden');
Mcerium.classList.remove('hidden');
Mnorvan.classList.remove('hidden');
Mnuclei.classList.remove('hidden');

  event.preventDefault();
}

function Insulatedjackets() {
  fieldset2.classList.add('hidden');
  fieldset3.classList.remove('hidden');
  Mnorvan.classList.add('hidden')
  MKadin.classList.add('hidden')
  event.preventDefault();
}
function Shelljackets() {
  fieldset2.classList.add('hidden');
  fieldset3.classList.remove('hidden');
  Mcerium.classList.add('hidden')
  Mnuclei.classList.add('hidden')
  event.preventDefault();
}

function InShelljackets() {
  fieldset2.classList.add('hidden');
  fieldset3.classList.remove('hidden');
  event.preventDefault();
}



var fieldset3 = document.querySelectorAll('form fieldset')[2];
var Multi = document.querySelector('form fieldset:nth-child(3) :nth-child(3)');
var selectionButtons = document.querySelectorAll('form fieldset:nth-child(3) button:not(:nth-last-child(-n+3))');
var back3 = document.querySelector('form fieldset:nth-child(3) :nth-child(8)');
var next3 = document.querySelector('form fieldset:nth-child(3) :nth-child(9)');
var results3 = document.querySelector('form fieldset:nth-child(3) :nth-child(10)');

if(next3){
selectionButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Toggle the 'selected' class on the clicked button
    button.classList.toggle('active');

    // Check if at least one button is selected
    var atLeastOneSelected = Array.from(selectionButtons).some(function(btn) {
      return btn.classList.contains('active'); // Removed the dot (.)
    });

    // Enable or disable the 'Next' button based on the selection
    next3.disabled = !atLeastOneSelected;
    event.preventDefault();
  });
});

next3.addEventListener('click', NextTo4);
results3.addEventListener('click', scrollToResults);
back3.addEventListener('click', BackTo2);
results3.addEventListener('click' ,scrollToResults)

function NextTo4() {
  fieldset3.classList.add('hidden');
  fieldset4.classList.remove('hidden');
  event.preventDefault();
}

function BackTo2() {
  fieldset3.classList.add('hidden');
  fieldset2.classList.remove('hidden');
  MBetaAr.classList.remove('hidden');
MKadin.classList.remove('hidden');
Malphalight.classList.remove('hidden');
Mcerium.classList.remove('hidden');
Mnorvan.classList.remove('hidden');
Mnuclei.classList.remove('hidden');
  event.preventDefault();
}
}



var fieldset4 = document.querySelectorAll('form fieldset')[3];
var Mild = document.querySelector('form fieldset:nth-child(4) :nth-child(3)');
var Variable = document.querySelector('form fieldset:nth-child(4) :nth-child(4)');
var Severe = document.querySelector('form fieldset:nth-child(4) :nth-child(5)');
var Cold = document.querySelector('form fieldset:nth-child(4) :nth-child(6)');
var back4 = document.querySelector('form fieldset:nth-child(4) :nth-child(7)');
var next4 = document.querySelector('form fieldset:nth-child(4) :nth-child(8)');
var results4 = document.querySelector('form fieldset:nth-child(4) :nth-child(9)');
var weatherButtons = document.querySelectorAll('form fieldset:nth-child(4) button:not(:nth-last-child(-n+3))');

weatherButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Toggle the 'selected' class on the clicked button
    button.classList.toggle('active');

    // Check if at least one button is selected
    var atLeastOneSelected = Array.from(weatherButtons).some(function(btn) {
      return btn.classList.contains('active'); // Removed the dot (.)
    });

    // Enable or disable the 'Next' button based on the selection
    next4.disabled = !atLeastOneSelected;
    event.preventDefault();
  });
});
if(next4){
next4.addEventListener('click', NextTo5);
results4.addEventListener('click', scrollToResults);
back4.addEventListener('click', BackTo3);
results4.addEventListener('click' ,scrollToResults)}

function NextTo5() {
  fieldset4.classList.add('hidden');
  fieldset5.classList.remove('hidden');
  event.preventDefault();
}

function BackTo3() {
  fieldset4.classList.add('hidden');
  fieldset3.classList.remove('hidden');
  event.preventDefault();
}




var fieldset5 = document.querySelectorAll('form fieldset')[4];
var Breathable = document.querySelector('form fieldset:nth-child(5) :nth-child(2)');
var NotSure = document.querySelector('form fieldset:nth-child(5) :nth-child(3)');
var back5 = document.querySelector('form fieldset:nth-child(5) :nth-child(4)');
var next5 = document.querySelector('form fieldset:nth-child(5) :nth-child(5)');
var results5 = document.querySelector('form fieldset:nth-child(5) :nth-child(6)');

      if(back5){
        back5.addEventListener('click', backto4);
        Breathable.addEventListener('click', LetItBreathe)
        NotSure.addEventListener('click', ImNotSure)
        results5.addEventListener('click' ,scrollToResults)}

        function backto4() {
          fieldset5.classList.add('hidden');
          fieldset4.classList.remove('hidden');
          event.preventDefault();
        }

        function LetItBreathe() {
          fieldset5.classList.add('hidden');
          fieldset6.classList.remove('hidden');
          kobah.classList.add('hidden')
          event.preventDefault();
        }
        function ImNotSure() {
          fieldset5.classList.add('hidden');
          fieldset6.classList.remove('hidden');
          event.preventDefault();
        }

var fieldset6 = document.querySelectorAll('form fieldset')[5];
var NoHood = document.querySelector('form fieldset:nth-child(6) :nth-child(2)');
var NoHelmet = document.querySelector('form fieldset:nth-child(6) :nth-child(3)');
var Helmet = document.querySelector('form fieldset:nth-child(6) :nth-child(4)');
var Dontmind = document.querySelector('form fieldset:nth-child(6) :nth-child(5)');
var back6 = document.querySelector('form fieldset:nth-child(6) :nth-child(6)');
var next6 = document.querySelector('form fieldset:nth-child(6) :nth-child(7)');
var results6 = document.querySelector('form fieldset:nth-child(6) :nth-child(8)');

if(back6){
back6.addEventListener('click', backto5);
NoHood.addEventListener('click', NoHo)
NoHelmet.addEventListener('click', NoHe)
Helmet.addEventListener('click', he)
Dontmind.addEventListener('click', idm)
results6.addEventListener('click' ,scrollToResults)}

function backto5() {
  fieldset6.classList.add('hidden');
  fieldset5.classList.remove('hidden');
  event.preventDefault();
}

function NoHo() {
  fieldset6.classList.add('hidden');
  fieldset7.classList.remove('hidden');
  event.preventDefault();
  Mnorvan.classList.remove('hidden')
  MKadin.classList.remove('hidden')
  MBetaAr.classList.add('hidden')
  Malphalight.classList.add('hidden')
  Mcerium.classList.add('hidden')
  Mnuclei.classList.add('hidden')
}
function NoHe() {
  fieldset6.classList.add('hidden');
  fieldset7.classList.remove('hidden');
  event.preventDefault();
}
function he() {
  fieldset6.classList.add('hidden');
  fieldset7.classList.remove('hidden');
  event.preventDefault();
}
function idm() {
  fieldset6.classList.add('hidden');
  fieldset7.classList.remove('hidden');
  event.preventDefault();
}

var fieldset7 = document.querySelectorAll('form fieldset')[6];
var Hip = document.querySelector('form fieldset:nth-child(7) :nth-child(3)');
var Thigh = document.querySelector('form fieldset:nth-child(7) :nth-child(4)');
var Fitted = document.querySelector('form fieldset:nth-child(7) :nth-child(6)');
var Regular = document.querySelector('form fieldset:nth-child(7) :nth-child(7)');
var Relaxed = document.querySelector('form fieldset:nth-child(7) :nth-child(8)');
var back7 = document.querySelector('form fieldset:nth-child(7) :nth-child(9)');
var next7 = document.querySelector('form fieldset:nth-child(7) :nth-child(10)');
var results7 = document.querySelector('form fieldset:nth-child(7) :nth-child(11)');
var fitButtons = document.querySelectorAll('form fieldset:nth-child(7) button:not(:nth-last-child(-n+3))');

fitButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Toggle the 'selected' class on the clicked button
    button.classList.toggle('active');

    // Check if at least one button is selected
    var atLeastOneSelected = Array.from(fitButtons).some(function(btn) {
      return btn.classList.contains('active'); // Removed the dot (.)
    });

    // Enable or disable the 'Next' button based on the selection
    next7.disabled = !atLeastOneSelected;
    event.preventDefault();
  });
});

if(next7){
next7.addEventListener('click', scrollToResults);
back7.addEventListener('click', BackTo6);
results7.addEventListener('click' ,scrollToResults)
results3.addEventListener('click' ,scrollToResults)}

function NextTo4() {
  fieldset3.classList.add('hidden');
  fieldset4.classList.remove('hidden');
  event.preventDefault();
}

function BackTo6() {
  fieldset7.classList.add('hidden');
  fieldset6.classList.remove('hidden');
  event.preventDefault();
}


if(myImage){
var myImage = document.querySelector('#results article:nth-child(2)>img')

// Store the original source and hover source in variables
var originalSrc = myImage.src;
var hoverSrc = "https://images.arcteryx.com/sizingCharts/womens-tops/arcteryx_fitguide_womens_jacket_fitted_01_conform_v02.gif";

// Add a mouseover event listener to change the image source on hover
myImage.addEventListener("mouseover", function() {
  myImage.src = hoverSrc;
});

// Add a mouseout event listener to revert to the original image source when not hovered
myImage.addEventListener("mouseout", function() {
  myImage.src = originalSrc;
});
}
var feedbackb = document.querySelector('body>button')
var feedbmessage = document.querySelector('body>article')
var feedbclose =  document.querySelector('body>article>button')
var feedbanswers =  document.querySelectorAll('body>article>ul>li')
var feedbAnswL =  document.querySelector('body>article>ul')
var feedbtitle =  document.querySelector('body>article>h2')

function openfeedb(){
  console.log('gimme feedback')
  feedbmessage.classList.toggle('hidden')
  feedbackb.classList.toggle('hidden') 
}

function gaveFeedb(){
  console.log('thanks 4 feedback')
  feedbackb.classList.remove('hidden') 
  feedbAnswL.classList.add('hidden') 
  feedbtitle.textContent = 'Thank you for your feedback'
}
if(feedbackb){
feedbackb.addEventListener('click',openfeedb)
feedbclose.addEventListener('click',openfeedb)}

feedbanswers.forEach(function(answer) {
  answer.addEventListener('click', gaveFeedb);
});

let count = 0;
var cartitems = document.querySelector('nav section:nth-child(6) p');
var addtocartButtons = document.querySelectorAll('#results article button');

addtocartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        count++;
        cartitems.textContent = count;
        console.log('Added to cart:', count);
        alert(count + ' item(s) in your cart')
    });
});
