// _______________________Header Creation___________________________
function createHeader() {
  var header = document.querySelector('header')
  var headerTitle = document.createElement('h1')
  var headerText = document.createTextNode('International currency transfers')
  var subTitle = document.createElement('h2')
  var subTitleText1 = document.createTextNode('Fast and simple')
  var subTitleText2 = document.createTextNode('World class service')
  var subTitleText3 = document.createTextNode('Bank beating rates')
  var converterBox = document.createElement('div')
  headerTitle.appendChild(headerText)
  header.appendChild(headerTitle)
  subTitle.appendChild(subTitleText1)
  subTitle.appendChild(document.createElement("br"))
  subTitle.appendChild(subTitleText2)
  subTitle.appendChild(document.createElement("br"))
  subTitle.appendChild(subTitleText3)
  header.appendChild(subTitle)
};

// ___________________________Nav Bar Creation_________________________
// auto create nav bar for each page
function createNav() {
  var navDiv = document.querySelector('#navDiv');
  logoLink = document.createElement('a');
  logoLink.setAttribute("href",'index.html')
  logo = document.createElement('img');
  logo.setAttribute('src', 'resources/3030Logo-fullColor.png')
  logoLink.appendChild(logo)
  navDiv.appendChild(logoLink)
  var navBar = document.querySelector("#navBar");
  var navItems = [
    {name: "Register",url: "https://us.ofx.com/registration?pid=5161"},
    {name: "Tools",url: "tools.html"},
    {name: "Learn More",url: "https://www.ofx.com/en-us/?pid=5161"}

  ]
  for (i = 0; i < navItems.length; i++) {
    navItem = document.createElement('a');
    navItem.setAttribute("class", "nav-item nav-link");
    navItem.setAttribute("href", navItems[i]['url']);
    navItem.innerHTML=navItems[i]['name'];
    navBar.appendChild(navItem);
  }
  navDiv.appendChild(navBar);
};

// ___________________________Footer Creation_________________________
// autocreate footer for each page
function createFooter() {
  var footer = document.querySelector('#footer');
  var footerItems = [
    {src: "resources/FB-logo.png",href: "https://www.facebook.com/3030Company"},
  ]
  column = document.createElement('div')
  column.setAttribute("class", "col-12");

  column.innerHTML = "Designed and maintained by 3030";
  column.appendChild(document.createElement('br'));
  for (i = 0; i < footerItems.length; i++) {
    footerItem = document.createElement('a');
    footerImg = document.createElement('img');
    footerItem.setAttribute("href", footerItems[i]['href']);
    footerItem.setAttribute("target", "-blank");
    footerImg.setAttribute("class", "socialLogo");
    footerImg.setAttribute("src", footerItems[i]['src']);
    footerImg.setAttribute("alt", '');
    footerItem.appendChild(footerImg);
    column.appendChild(footerItem);
  }

  footerEmail = document.createElement('a');
  emailImg = document.createElement('img');
  footerEmail.setAttribute("href", "mailto:info@threethousandthirty.com");
  footerItem.setAttribute("target", "-blank");
  emailImg.setAttribute("class", "socialLogo");
  emailImg.setAttribute("src", "resources/email.png");
  emailImg.setAttribute("alt", "");
  footerEmail.appendChild(emailImg);
  column.appendChild(footerEmail);
  column.appendChild(document.createElement('br'));

  footerPhone = document.createElement('a');
  footerPhone.setAttribute("href", "tel:313-451-4224");
  footerPhone.innerHTML="313-451-4224"
  column.appendChild(footerPhone);

  footer.appendChild(column);

};





// createHeader();
createNav();
// createFooter();
