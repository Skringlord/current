const gallBtn = document.querySelector('#one'),
      ourActBtn = document.querySelector('#two'),
      theTeamBtn = document.querySelector('#three'),
      newsBtn = document.querySelector('#four'),
      partnersBtn = document.querySelector('#five'),
      bodyMenu = document.querySelectorAll('.body-menu'),
      gallerryContainer = document.querySelector('.container'),
      teamContainter = document.querySelector('.ower-team-container'),
      ourActivContainer = document.querySelector('.activity-grid'),
      partnersContainer = document.querySelector('.partners-grid'),
      newsContainer = document.querySelector('.news-grid'),
      mGallBtn = document.querySelector('#m-one'),
      mOurActBtn = document.querySelector('#m-two'),
      mTheTeamBtn = document.querySelector('#m-three'),
      mNewsBtn = document.querySelector('#m-four'),
      mPartnersBtn = document.querySelector('#m-five'),
      mGallContainer = document.querySelector('#mobile-gall'),
      mActivContainer = document.querySelector('#mobile-activity');

var choose;


gallBtn.addEventListener('click', function(e){
    colorMenuItems();
    gallBtn.style.borderBottom = "3px solid #202833";
    gallBtn.style.color = "#202833";
    gallerryContainer.style.display = "grid";
});
ourActBtn.addEventListener('click', function(e){
    colorMenuItems();
    ourActBtn.style.color = "#202833";
    ourActBtn.style.borderBottom = "3px solid #202833";
    ourActivContainer.style.display = "grid";

});
theTeamBtn.addEventListener('click', function(e){
    colorMenuItems();
    theTeamBtn.style.color = "#202833";
    theTeamBtn.style.borderBottom = "3px solid #202833";
    teamContainter.style.display = "grid";
});
newsBtn.addEventListener('click', function(e){
    colorMenuItems();
    newsBtn.style.color = "#202833";
    newsBtn.style.borderBottom = "3px solid #202833";
    newsContainer.style.display = "grid";
});
partnersBtn.addEventListener('click', function(e){
    colorMenuItems();
    partnersBtn.style.color = "#202833";
    partnersBtn.style.borderBottom = "3px solid #202833";
    partnersContainer.style.display = "grid";
});

////////////////////MOBILE//////////////////////////////////////
mGallBtn.addEventListener('click', function(e){
    mobileColorMenuItems();
    mGallBtn.style.borderBottom = "3px solid #202833";
    mGallBtn.style.color = "#202833";
    mGallContainer.style.display = "grid";
});
mOurActBtn.addEventListener('click', function(e){
    mobileColorMenuItems();
    mOurActBtn.style.color = "#202833";
    mOurActBtn.style.borderBottom = "3px solid #202833";
    mActivContainer.style.display = "grid";

});
mTheTeamBtn.addEventListener('click', function(e){
    mobileColorMenuItems();
    mTheTeamBtn.style.color = "#202833";
    mTheTeamBtn.style.borderBottom = "3px solid #202833";
});
mNewsBtn.addEventListener('click', function(e){
    mobileColorMenuItems();
    mNewsBtn.style.color = "#202833";
    mNewsBtn.style.borderBottom = "3px solid #202833";
});
mPartnersBtn.addEventListener('click', function(e){
    mobileColorMenuItems();
    mPartnersBtn.style.color = "#202833";
    mPartnersBtn.style.borderBottom = "3px solid #202833";
});

function colorMenuItems(){
    gallerryContainer.style.display = "none";
    gallBtn.style.borderBottom = "none";
    gallBtn.style.color = "#88969c";
    ourActBtn.style.borderBottom = "none";
    ourActBtn.style.color = "#88969c";
    ourActivContainer.style.display = "none";
    teamContainter.style.display = "none";
    theTeamBtn.style.borderBottom = "none";
    theTeamBtn.style.color = "#88969c";
    newsBtn.style.borderBottom = "none";
    newsBtn.style.color = "#88969c";
    newsContainer.style.display = "none";
    partnersBtn.style.borderBottom = "none";
    partnersBtn.style.color = "#88969c";
    partnersContainer.style.display = "none";
}

function mobileColorMenuItems(){
    mGallBtn.style.borderBottom = "none";
    mGallBtn.style.color = "#88969c";
    mGallContainer.style.display = "none";
    mOurActBtn.style.borderBottom = "none";
    mOurActBtn.style.color = "#88969c";
    mTheTeamBtn.style.borderBottom = "none";
    mTheTeamBtn.style.color = "#88969c";
    mNewsBtn.style.borderBottom = "none";
    mNewsBtn.style.color = "#88969c";
    mPartnersBtn.style.borderBottom = "none";
    mPartnersBtn.style.color = "#88969c";
}