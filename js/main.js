// Main js v.6.3.0
// For navigation, themes, etc

// Settings v.1.0.0
var conf = [];
conf["confGoogleAnalyticsId"] = "G-35Y7P644PW";
conf["confSymbolForSplit"] = "SYMBOLFORSPLIT";
conf["confTagListLimit"] = 38;
conf["confDomainNameInTitle"] = "on"; // on, off
conf["confLinkExtList"] = "index.html,.html,index.php,.php";
conf["confIdEmbedScript"] = "footer";


// settings var
const confData = [
{
"confTitle":"Allow Cookies For Third Parties?",
"confDescription":`
This is necessary to improve the site.
(For Ads Services, Statistics).
- Auto: used the time zone for consent or disagreement.
- Site used Functionality cookies.
- Some services still collect visit information if cookie off.
`,
"confName":"confDataCollection",
"confValueDefault":"not selected",
"confValueVariant":["on", "off", "auto", "not selected"],
},
{
"confTitle":"Site Theme",
"confDescription":`Site Theme. More themes: <a class="brand brand" href="/theme.html">/theme.html</a>`,
"confName":"confTheme",
"confValueDefault":"auto",
"confValueVariant":["auto", "light", "dark", "auto-t-rand-all", "auto-rand-all"],
},
{
"confTitle":"Start of the day (time)",
"confDescription":"For theme if selected auto time in themes option",
"confName":"confStartDay",
"confValueDefault":"7",
"confValueVariant":["6", "7", "8", "9"],
},
{
"confTitle":"Start of the night (time)",
"confDescription":"For theme if selected auto time in themes option",
"confName":"confStartNight",
"confValueDefault":"19",
"confValueVariant":["18", "19", "20", "21"],
},
{
"confTitle":"Icons on off",
"confDescription":"Enable Disable Icons.",
"confName":"confIconStatus",
"confValueDefault":"off",
"confValueVariant":["on", "off", "random"],
},
{
"confTitle":"Ads on off",
"confDescription":`Ads options.`,
"confName":"confAdsStatus",
"confValueDefault":"off",
"confValueVariant":["on", "off", "random"],
},
{
"confTitle":"Hide link extensions",
"confDescription":"Hides extensions in links. Example: /blog.html to /blog. This is to make the PWA (Website as an App) work.",
"confName":"confHideLinkExt",
"confValueDefault":"off",
"confValueVariant":["on", "off"],
},
{
"confTitle":"Background picture",
"confDescription":"Background picture.",
"confName":"confBg",
"confValueDefault":"on",
"confValueVariant":["on", "off"],
},
{
"confTitle":"Second Navigation",
"confDescription":"Second navigation (JS) over the current navigation. To improve where it is bad",
"confName":"confMenu",
"confValueDefault":"on",
"confValueVariant":["on", "off", "random"],
},
];
//console.table(confData);

// generate var: conf['confName'];
confData.forEach((val) => {
conf[val.confName] = localStorage.getItem(val.confName);

if(conf[val.confName] == null||conf[val.confName] == undefined){
// enable hide ext
if(String(location.hostname).indexOf('.pages.dev') != -1&&val.confName == 'confHideLinkExt'){
val.confValueDefault = 'on';
}

localStorage.setItem(val.confName, val.confValueDefault);
conf[val.confName] = val.confValueDefault; 
}

});
// end generate var: conf['confName'];


if(conf["confDomainNameInTitle"] == 'on'){
// name to titile
var domainNameToTitle = (location.hostname).split('.');
domainNameToTitle = domainNameToTitle[0];
if(document.getElementsByTagName('title')[0] != null){
document.getElementsByTagName('title')[0].innerHTML += ' | ' + domainNameToTitle;
}
}

// css color fix if save page
if(String(window.location.href).slice(0, 4) != 'http'){
document.getElementById('theme').id = 'themeDisable';
}


function fuMPrintText(id, text, option){
if(document.getElementById(id) != null){
if(option == 'plus'||option == '+'){
document.getElementById(id).innerHTML += text;
}else if(option == 'plutTop'||option == 'top'){
document.getElementById(id).innerHTML = text + document.getElementById(id).innerHTML;
}else{
document.getElementById(id).innerHTML = text;
}
}else{
// console.log(id+' not fount');
}
}






//<!-- Nav v.1.0.0 -->
//<!-- page, main.js, noscript.css -->
// for other pages where navigation is poor

conf["confMenuItems"] = [
{"url":"/main-list.html", "name":"Main", "title":"Main"},
{"url":"/lists.html", "name":"Lists", "title":"Lists"},
];


conf["confMenuItems2"] = '';
conf["confMenuItems"].forEach((item, index) => {

if((window.location.pathname).indexOf(item['url'].slice(0, -4)) != -1){
conf["confMenuItems2"] += `<a class="countMenuItem active" href="${item['url']}" title="${item['title']}">${item['name']}</a><br>`;
}else{
conf["confMenuItems2"] += `<a class="countMenuItem brand" href="${item['url']}" title="${item['title']}">${item['name']}</a><br>`;
}
});

conf["confMenuItems2"] += `<a class="mClassNavUp countMenuItem brand" href="../">../Up</a><br>`;


//CSS version with noscript in noscript.css -->

//<!-- nav HTML part -->
if(conf["confMenu"] == "random"){
if(fuMRandom(0, 1) == 1){ conf["confMenu"] = "on"; }
}

if(conf["confMenu"] == "on"){


//if(document.getElementsByTagName("header")[0] != null){
//document.getElementsByTagName("header")[0].innerHTML = `

if(document.getElementById("secondNav") != null){
document.getElementById("secondNav").innerHTML = `

<!-- Nav v.1.1.0 -->
<!-- page, main js, noscript.css -->
<div class="wrapper3 navTop">
<nav>
<a title="Main page (nav1)" style="padding-left: 0;" href="/"><img class="logo2 reduceLight" src="/img/logo.png" alt="logo" style="max-width: 26px;"></a>


<div class="menuTop">
${conf["confMenuItems2"]}
</div>
<!-- end menuTop -->

<!-- dropdown menu -->
<!-- https://www.w3schools.com/howto/howto_js_dropdown.asp -->
<div id="dropdownMenuCSS"><!-- CSS menu if js off -->
<button onclick="dropdownMenuFunction();" class="brand" id="dropdownMenuButton">☰ Menu</button>
<div id="dropdownMenu" class="dropdownMenuContent shadow bg2 padding2">
<div class="dropdownMenuWrapper">
<!--<div class="padding2">section</div>-->
<div class="dropdownMenuContentColumn">

<!-- menu dublicate -->
${conf["confMenuItems2"]}
<!-- //menu dublicate -->

</div>
</div>
</div>
</div>
<!--<hr />-->
<!-- // end dropdown menu -->

<form method="GET" action="/search.html" role="search" class="noscriptHide">
<!--<label for="siteSearch" class="xSmall op">search:</label>-->
<input id="siteSearch" type="search" placeholder="site search" name="q" autocomplete="off">
</form>

</nav>
</div>

`;
}
}
//<!-- end nav HTML part -->




// JS part
// Dropdown menu  v.1.3.0
// if JS off (CSS version in noscript.css)
//https://www.w3schools.com/howto/howto_js_dropdown.asp
// menu click
function dropdownMenuFunction() {
var x = document.getElementById("dropdownMenu");
  if (x.style.display === "none"||x.style.display === "") {
document.getElementById("dropdownMenuButton").innerHTML = '☶ Menu'; 
x.style.display = "block";
  } else {
x.style.display = "none";
document.getElementById("dropdownMenuButton").innerHTML = '☰ Menu'; 
  }

// out area hide
var getclick = document.getElementById('dropdownMenuButton');
document.addEventListener('click', function(event) {
// hide and make posible text selected
if (!getclick.contains(event.target)&&document.getSelection().toString() == '') {
var x = document.getElementById("dropdownMenu");
x.style.display = "none";
document.getElementById("dropdownMenuButton").innerHTML = '☰ Menu'; 
    }
});
}

// nav v.1.1.0 // in test
// count links
var countMenuItem = document.querySelectorAll('.countMenuItem');
if((countMenuItem.length / 2) >= 4){
//if(document.getElementById("footer") != null){}

//fuMPrintText('footer', ``, '+');
if(document.getElementsByTagName("nav")[0] != null){ // not body, id not found

/*var cssMedia = '@media(max-width: 500px)';
var cssMedia2 = '@media(min-width: 500px)';
if((countMenuItem.length / 2) >= 13){
cssMedia = '@media(max-width: 1000px)';
cssMedia2 = '@media(min-width: 1000px)';
}*/

var mNavItemsAverageWidth = 75; // Average: 66
var mNavItemsCount = (countMenuItem.length / 2) + 2;
var mNavWhenDropdownW = ((mNavItemsAverageWidth  * mNavItemsCount) + (10  * mNavItemsCount)) / 2;
console.log(`menu items: ${mNavItemsCount}*70px=hide when:${mNavWhenDropdownW}px`);
var cssMedia = `@media(width <= ${mNavWhenDropdownW}px)`;
var cssMedia2 = `@media(width >= ${mNavWhenDropdownW}px)`;
// fix if .wrapper3
if((mNavWhenDropdownW) >= 900){
var cssMedia = '@media(width >= 1px)';
}
// embed style
document.getElementsByTagName("nav")[0].innerHTML += `

<style>

/* mobile dropdown menu */

${cssMedia} {
.navTop nav { display: block; }
.menuTop { display: none; }
#dropdownMenuButton { display: inline-block; }

/* dell me, dublicate in style.css
.navTop nav {
justify-content: left;
align-items: center;
display: block;
text-align: left;
}*/

}

/* fix when dynamic change */
${cssMedia2}{
.dropdownMenuContentColumn, .dropdownMenuContent {
display: none !important;
}
}
</style>

`;
}


}
//console.log(document.getElementsByTagName("header")[0]);
// end JS part
//<!-- end Nav -->









// footer

var fDesc = '';
var fDescTitle = '';
var fDescTags = '';
var fDescTagsLimit = 15;
var fDescLength = '';
if(document.getElementsByName("keywords")[0] != null){
fDescTags = document.getElementsByName("keywords")[0].content;
fDescTags = fDescTags.replaceAll("\n", " ");
fDescTags = fDescTags.replaceAll("\r", " ");
fDescTags = fDescTags.replaceAll("\r\n", " ");
fDescTags = fDescTags.replaceAll("\n\r", " ");

var fDescArr = fDescTags.split(",");
fDescArr = fDescArr.sort();
fDescTags = '';
var fDescTagsLimitCounter = 0;
fDescArr.forEach((tag) => {
if((tag.trim()) != ''&&fDescTagsLimitCounter <= fDescTagsLimit){
tag = tag.trim();
tag = tag.replaceAll(" ", "_");
fDescTags += `<a class="tag brand light border2 borderRadius2" href="/search.html?q=%23${tag}">#${tag}</a> `;
}
fDescTagsLimitCounter++;
});

fDescTags = `
<br><b class="block padding2List small">Tags (keywords):</b><div class="tagList small left">` + fDescTags + '</div>';
}

if(document.getElementsByName("description")[0] != null){
fDescLength = document.getElementsByName("description")[0].content.length;
fDesc = `<b class="block padding2List small">Description or summary:</b>` + document.getElementsByName("description")[0].content + fDescTags;

if(fDescLength > 160){
fDescTitle = `<span class="inlineBlock borderBottomRed xSmall">Description: ${fDescLength} of 160</span>`;
}else if(fDescLength < 25){
fDescTitle = `<span class="inlineBlock borderBottomOrange xSmall">Description: <span class="xSmall">${fDescLength} of 160</span>`;
}else{
fDescTitle = `<span class="inlineBlock xSmall">Description: <span class="xSmall">${fDescLength} of 160</span>`;
}
}


fuMPrintText('footer', `

<div id="style"></div>

<div id="cookiePopup"></div>
<div id="ads2"></div>

<div class="padding2"></div>


<nav>
<div class="wrapper4 balance margin2List padding2List small">



<div class="block tRight small padding2List">
<details class="inlineBlock op">
<div id="fDesc" class="block pre tLeft wrapperL padding2 bg shadow light borderRadius2 margin2List w100" style="margin-left: 0; margin-right: 0;">${fDesc}</div>
<summary class="pointer paddingList marginList" title="Description and keywords">${fDescTitle}</summary>
</details>
</div>

<div>
<!--<a href="#goBack" onclick="history.back()">Go Back</a>-->
<span id="fTheme" class="capitalize" title="Theme settings"><a href="/theme.theme">Themes</a></span>
</div>




<!--<span style="padding-left: 0;" title="Main Page"><a href="/">Home</a></span>-->

<!--<span id="fAds" title="Advertising Settings"><a href="/settings.html#confAdsStatus">ads: ${conf["confAdsStatus"]}</a></span>-->

<span style="padding-left: 0;" title="A page in a social network"><a href="https://twitter.com/inonehp">X (Twitter)</a></span>

<span title="News"><a href="/rss.xml">RSS</a></span>

<span id="fSettings" title="Settings"><a href="/settings.html">Settings</a></span>

<span id="fPrivacy" title="Cookie Settings"><a href="/settings.html#confDataCollection">Cookie: ${conf["confDataCollection"]}</a></span>

<span title="Site Code (repository)"><a href="https://github.com/inonehp/inonehp.pages.dev">Code</a></span>

<span title="License (other on the About page)"><a rel="license" title="main license" href="https://creativecommons.org/licenses/by-sa/4.0/">License: CC BY-SA 4.0</a>
<a rel="license" title="Other on the about page" href="/about.html#license">Other Licenses *</a>
</span>

<span title="Page about"><a href="/about.html">About</a></span>

<span title="Hosting Service" style="padding-right: 0;"><a href="https://pages.cloudflare.com/">Cloudflare Pages</a></span>


</div>
</nav>


<div id="fScrollToBottom"></div>


`,'');

function fuMScrollTo(id) {
if(document.getElementById(id) != null){
document.getElementById(id).scrollIntoView();
}
}
// end footer





// Device 1.0.0
conf["confDevice"] = 'none';
/*if(conf["confDataCollection"] != 'on'){
conf["confDevice"] = '(disabled, privacy)';
}else{}*/
if(navigator.userAgent.search("iPhone|Android|Opera Mini|Mobile|Lumia|Phone") != -1){ conf["confDevice"] = 'mobile';  }
if(navigator.userAgent.search("PlayStation|Xbox|TV|Roku|SmartTV|BRAVIA") != -1){ conf["confDevice"] = 'tv';  }
if(conf["confDevice"] == 'none'){ conf["confDevice"] = 'pc'; }





// Themes changer v.1.2.0
theme = conf["confTheme"];
if(conf["confTheme"] == null||theme == undefined||theme == 'auto'){
theme = "auto";

if(window.matchMedia &&window.matchMedia('(prefers-contrast: more)').matches == true){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
theme = 'h-contrast-d'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
theme = 'h-contrast-l'; }
}

}

// confDeviceTheme
conf["confDeviceTheme"] = 'none';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { conf["confDeviceTheme"] = 'dark'; }
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) { conf["confDeviceTheme"] = 'light'; }



// top bar color theme set
//<meta name="theme-color" content="#317EFB"/>
var meta = document.createElement('meta');
meta.name = "theme-color";
if(conf["confDeviceTheme"] == 'dark'){
meta.content = "red";
}else{
meta.content = "#F0F0F0";
}
document.getElementsByTagName('head')[0].appendChild(meta);


// insert color-theme.css in header
function fuMPrintTheme(theme){

if(document.getElementById('theme') != null){

//https://stackoverflow.com/questions/36641137/how-exactly-does-link-rel-preload-work
let cssEmbed = document.createElement("link");
cssEmbed.rel = "preload";
cssEmbed.as = "style";
cssEmbed.href = '/css/'+theme+'.css';
document.head.appendChild(cssEmbed);


document.getElementById('theme').href = '/css/' + theme + '.css';
}


// print theme mode and name in footer
if(document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = '<a href="/theme.html">theme: ' + conf["confTheme"] + ' (' + theme + ')</a>';
}

// fix and dynamic
fuMThemeEmbed();
fuMBg();

// fix
if(conf["confThemeEmbed"] == 'dark'){
fuMPrintText('style', `
<style>
.reduceLight { filter: brightness(70%); }
</style>
`, 'plus');
}else{
fuMPrintText('style', `
<style>
.reduceLight { filter: brightness(100%); }
</style>
`, 'plus');
}

}


//var theme = conf["confThemeMain"];
var themeListLight = [
"light",
"l-blue",
"l-green",
"l-olive",
"l-orange",
"l-pink",
"l-purple",
"l-plum",
"l-red",
"l-sea",
"l-seashell",
"l-violet",
"l-yellow"
];

var themeListOther = [
"o-blue",
"o-green",
"o-lime",
"o-mint",
"o-olive",
"o-orange",
"o-pink",
"o-plum",
"o-purple",
"o-sea",
"o-silver",
"o-violet",
"o-yellow"
];

var themeListDark = [
"dark",
"d-green",
"d-blue",
"d-orange",
"d-pink",
"d-plum",
"d-red",
"d-sea",
"d-violet",
"d-yellow"
];

var themeListOtherDark = [
"od-blue",
"od-brown",
"od-green",
"od-gray",
"od-forest",
"od-pink",
"od-plum",
"od-purple",
"od-red",
"od-olive",
"od-sea",
"od-slate",
"od-violet",
"od-yellow",
];

var themeListHContrast = [
"h-contrast-l",
"h-contrast-d"
];

// fav from others
var themeListBest = [
"light",
"l-green",
"l-olive",
"l-orange",
"l-yellow",

"dark",
"d-blue",
"d-green",
"d-sea",
"d-violet",

"o-yellow",
"o-lime",
"o-orange",
"o-olive",
"o-silver",

"od-blue",
"od-green",
"od-gray",
"od-sea",
"od-slate",
"od-violet"
];



var themeListOption2 = [
"rand-l",
"rand-o",
"rand-d",
"rand-od",
//"rand-h-contrast",
"rand-best",

"rand-all-l",
"rand-all-d",
"rand-all",

"auto-time",
"auto-t-h-contrast",
"auto-t-rand",
"auto-t-rand-all",

"auto",
"auto-h-contrast",
"auto-rand",
"auto-rand-all",

];

// all light theme
var themeListAllLight = [];
themeListAllLight.push(...themeListLight);
themeListAllLight.push(...themeListOther);
themeListAllLight.push("h-contrast-l");

// all dark theme
var themeListAllDark = [];
themeListAllDark.push(...themeListDark);
themeListAllDark.push(...themeListOtherDark);
themeListAllDark.push("h-contrast-d");

// all theme
var themeList = [];
themeList.push(...themeListLight);
themeList.push(...themeListOther);
themeList.push(...themeListDark);
themeList.push(...themeListOtherDark);
themeList.push(...themeListHContrast);



var themeListOption = [];
themeListOption.push(...themeList);
themeListOption.push(...themeListOption2);




conf["confRealTmpTheme"] = '';
conf["confThemeEmbed"] = '';

    
function themeAuto(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = 'dark';
fuMPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"] = 'light';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoHContrast(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = 'h-contrast-d';
fuMPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"] = 'h-contrast-l';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function themeAutoRandom(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"] = themeListDark[Math.floor(Math.random()*themeListDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"]  = themeListLight[Math.floor(Math.random()*themeListLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}


function themeAutoRandomAll(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
conf["confRealTmpTheme"]  = themeListAllDark[Math.floor(Math.random() * themeListAllDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"]  = themeListAllLight[Math.floor(Math.random() * themeListAllLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
}
}

function fuMSetTheme(mode){

/*if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.cookie = "theme=dark; SameSite=None; Secure; path=/";
}else{
document.cookie = "theme=light; SameSite=None; Secure; path=/";
}*/

/*themeList.forEach((element) => {
if(mode == element){
//document.getElementById('theme').href = '/css/'+mode+'.css';
fuMPrintTheme(conf["confRealTmpTheme"] );
}
})*/

var themeSelect;
if(themeList.includes(mode) == true){ themeSelect = mode; }


switch (mode) {

case 'auto-time':
if(new Date().getHours() <= Number(conf["confStartDay"]) - 1||new Date().getHours() >= conf["confStartNight"]){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]   = 'dark';
fuMPrintTheme(conf["confRealTmpTheme"]);
}else{
conf["confRealTmpTheme"]   = 'light';
fuMPrintTheme(conf["confRealTmpTheme"]);
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-h-contrast':
themeAutoHContrast();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAutoHContrast();
});
break;

case 'auto-t-h-contrast':
if(new Date().getHours() <= Number(conf["confStartDay"]) - 1|new Date().getHours() >= conf["confStartNight"]){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]   = 'h-contrast-d';
fuMPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]   = 'h-contrast-l';
fuMPrintTheme(conf["confRealTmpTheme"] );
}
//var interval1 = setInterval(themeAutoTime, 60000);
break;

case 'auto-t-rand':
if(new Date().getHours() <= Number(conf["confStartDay"]) - 1||new Date().getHours() >= conf["confStartNight"]){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]  = themeListDark[Math.floor(Math.random()*themeListDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]  = themeListLight[Math.floor(Math.random()*themeListLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}
break;

case 'auto-t-rand-all':
if(new Date().getHours() <= Number(conf["confStartDay"]) - 1||new Date().getHours() >= conf["confStartNight"]){
//if(new Date().getSeconds() % 2 == 0){
conf["confRealTmpTheme"]  = themeListAllDark[Math.floor(Math.random() * themeListAllDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}else{
conf["confRealTmpTheme"]  = themeListAllLight[Math.floor(Math.random() * themeListAllLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"] );
}
break;


/*case 'rand-all-blink':
themeRandomAllBlink();
//var interval2 = setInterval(themeRandomAllBlink, 4000);
break;*/

case 'auto-rand':
themeAutoRandom();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAutoRandom();
});
break;

case 'auto-rand-all':
themeAutoRandomAll();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAutoRandomAll();
});
break;

case 'rand-l':
conf["confRealTmpTheme"] = themeListLight[Math.floor(Math.random()*themeListLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-d':
conf["confRealTmpTheme"] = themeListDark[Math.floor(Math.random()*themeListDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-o':
conf["confRealTmpTheme"] = themeListOther[Math.floor(Math.random()*themeListOther.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-od':
conf["confRealTmpTheme"] = themeListOtherDark[Math.floor(Math.random() * themeListOtherDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all-l':
conf["confRealTmpTheme"] = themeListAllLight[Math.floor(Math.random() * themeListAllLight.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all-d':
conf["confRealTmpTheme"] = themeListAllDark[Math.floor(Math.random() * themeListAllDark.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-h-contrast':
conf["confRealTmpTheme"] = themeListHContrast[Math.floor(Math.random() * themeListHContrast.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-best':
conf["confRealTmpTheme"] = themeListBest[Math.floor(Math.random()*themeListBest.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'rand-all':
conf["confRealTmpTheme"] = themeList[Math.floor(Math.random()*themeList.length)];
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case 'none':
case 'empty':
conf["confRealTmpTheme"] = 'empty';
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

case themeSelect:
conf["confRealTmpTheme"] = mode;
fuMPrintTheme(conf["confRealTmpTheme"]);
break;

// auto  
default:
themeAuto();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAuto();
});
break;
}

let mForseStatus = '';
if(conf["confTheme"] != mode){ mForseStatus = "[force] "; }

// print theme mode and name in footer
if(document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = `<a href="/theme.html">theme: ${mForseStatus}${mode} (${conf["confRealTmpTheme"]})</a>`;
}


}

fuMSetTheme(theme);

function fuMThemeEmbed(){
if(conf["confRealTmpTheme"].search("dark|d-|-d") != -1){
conf["confThemeEmbed"] = 'dark';
}else{
conf["confThemeEmbed"] = 'light';
}
}


/* // disabled for if not theme, Unexpected behavior
window.addEventListener('storage', () => {
if(theme != conf["confTheme"]){
fuMSetTheme(conf["confTheme"]);
}
});
*/
// end theme

/* in test, delme (now in function: setTheme)
// print theme mode and name in footer
if(document.getElementById('fTheme') != null){
document.getElementById("fTheme").innerHTML = '<a href="/theme.html">theme: ' + theme + ' (' + conf["confRealTmpTheme"] + ')</a>';
}*/


function fuMReload(){ location.reload(true); }
function fuReload(){ location.reload(true); }
function reload(){ location.reload(true); }















































//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function fuMRandom(min, max) {
return Math.round(Math.random() * (max - min) + min);
}


// CSS
// bg image (background img with random position)
function fuMBg(val){
if(conf["confBg"] == 'on'||val == 'on'){
let mRandBgPos = fuMRandom(0, 100);
let mRandBgPos2 = fuMRandom(0, 100);
if(conf["confThemeEmbed"] == 'light'){
fuMPrintText('style', `
<style>
body{
background-image: url("/img/bg-light.svg");
background-repeat: repeat;
background-position: ${mRandBgPos}% ${mRandBgPos2}%;
background-attachment: fixed;
}
</style>
`, 'plus');
}else{
fuMPrintText('style', `
<style>
body{
background-image: url("/img/bg-dark.svg");
background-repeat: repeat;
background-position: ${mRandBgPos}% ${mRandBgPos2}%;
background-attachment: fixed;
}
</style>
`, 'plus');
}



}
}
// end bg image
// end CSS













// Cookie (auto) v.1.0.0

// Auto select (timezone) v.1.2.0
//https://www.termsfeed.com/blog/cookie-consent-outside-eu/
//https://stackoverflow.com/questions/38399465/how-to-get-list-of-all-timezones-in-javascript
if(conf["confDataCollection"] == 'auto'){
var timeZone = (Intl.DateTimeFormat().resolvedOptions().timeZone).toLowerCase();
if(
timeZone.indexOf('UTC'.toLowerCase()) != -1||
timeZone.indexOf('europe'.toLowerCase()) != -1||
timeZone.indexOf('mexico_city'.toLowerCase()) != -1||
timeZone.indexOf('argentina'.toLowerCase()) != -1||
timeZone.indexOf('brazil'.toLowerCase()) != -1||
timeZone.indexOf('lagos'.toLowerCase()) != -1||
timeZone.indexOf('japan'.toLowerCase()) != -1
){
conf["confDataCollection"] = 'off';
}else{
conf["confDataCollection"] = 'on';
}

fuMPrintText('fPrivacy', `<a href="/settings.html#confDataCollection">Cookie: auto (${conf["confDataCollection"]})</a>`); 
}
// End Auto












/*
//fix
function hideFileNameExt(url){
document.addEventListener("DOMContentLoaded", (event) => {
return url;
});

}
*/

// Hide page extenstion v.1.0.0
function hideFileNameExt(url){
var newUrl = url;
if(conf["confHideLinkExt"] == "on"){
if(newUrl != null&&newUrl != undefined){
if(newUrl[0] == "/"||newUrl[0] == "."||newUrl.indexOf(location.hostname) != -1){
var arr = (conf["confLinkExtList"]).split(',');
arr.forEach((element) => {
newUrl = (newUrl).replaceAll(element, '');
});
return newUrl;
}else{ return url; }
}else{ return url; }
}else{ return url; }
}
// end fu hide file ext



function hideFileNameExt2(){

if(conf["confHideLinkExt"] == "on"){
//document.addEventListener("DOMContentLoaded", (event) => {});
var newUrl = '';


// all links
var allLinks = document.querySelectorAll("a");
allLinks.forEach((item, index) => {
if(item != ""){

try{
var url = new URL(item);
newUrl = item.href;
if(url.hostname == location.hostname){
//console.log(newUrl);
var arr = (conf["confLinkExtList"]).split(',');
arr.forEach((element) => {
newUrl = newUrl.replaceAll(element, "");
});
return document.querySelectorAll("a")[index].href = newUrl;
}
}catch(error){ console.log(error + ":" + item); }

}
});

// all form
var allForm = document.querySelectorAll("form");
allForm.forEach((item, index) => {
if(item != ""){

try{
var url = new URL(item.action);
newUrl = item.action;
if(url.hostname == location.hostname){
//console.log(newUrl);
var arr = conf["confLinkExtList"].split(',');
arr.forEach((element) => {
newUrl = newUrl.replaceAll(element, "");
});
return document.querySelectorAll("form")[index].action = newUrl;
}
}catch(error){ console.log(error + ":" + item); }

}
});

// all ifarame
var allForm = document.querySelectorAll("iframe");
allForm.forEach((item, index) => {
if(item != ""){

try{
var url = new URL(item.src);
newUrl = item.src;
if(url.hostname == location.hostname){
//console.log(newUrl);
var arr = conf["confLinkExtList"].split(',');
arr.forEach((element) => {
newUrl = newUrl.replaceAll(element, "");
});
return document.querySelectorAll("iframe")[index].src = newUrl;
}
}catch(error){ console.log(error + ":" + item); }

}
});



}
}

// in embed
//hideFileNameExt2();



















// Embed script list v.1.0.0
if(document.getElementById(conf["confIdEmbedScript"]) != null){

function fuMEmbedScript(embedUrl, embedId){

/*
//https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
var link = document.createElement("link");
link.rel = "preload";
link.as = "script";
link.href = embedUrl;
document.head.appendChild(link);*/

let script = document.createElement('script');
script.type='text/javascript';
//script.async = true;
//script.defer = true;
script.charset = 'utf-8';
script.src = embedUrl;

if(document.getElementById(embedId) != null){
document.getElementById(embedId).appendChild(script);
//document.getElementsByTagName('head')[0].appendChild(script); 
}
}

// Embed script and run:

if(conf["confIconStatus"] != "off"){
fuMEmbedScript("/projects/insert-icon-17/script.js", conf["confIdEmbedScript"]);
}

if(conf["confAdsStatus"] != "off"){
fuMEmbedScript(`/data/adsJsonVar.js`, conf["confIdEmbedScript"]);
fuMEmbedScript(`/js/ad.js`, conf["confIdEmbedScript"]);
}

if(conf["confDataCollection"] == 'not selected'){
fuMEmbedScript(`/js/cookieAgreePopup.js`, conf["confIdEmbedScript"]);
}

if(conf["confDataCollection"] == 'on'){
fuMEmbedScript(`https://www.googletagmanager.com/gtag/js?id=${conf["confGoogleAnalyticsId"]}`, conf["confIdEmbedScript"]);
}



///////////////////////////
// Run:

onload = (event) => {
//document.body.onload = function(){}
//document.addEventListener("DOMContentLoaded", (event) => {})


if(conf["confIconStatus"] != "off"){
insertIcon('insertIcon', 'strict');
}

if(conf["confAdsStatus"] != "off"){
fuAds('', 'ads2', '');
}

if(conf["confDataCollection"] == 'on'){
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', conf["confGoogleAnalyticsId"]);
}



// fix fu hide
hideFileNameExt2();

}


}
// end Embed script list




// fix fu hide
hideFileNameExt2();

