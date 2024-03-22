// Settings print page v.1.2.2
// var config in main.js

function printFunctionLocal(comSettings){
var print = '';
var printBody = '';
var confValueVariantPrint = '';
var carrentValue33 = '';
var style = '';

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
confData.forEach((val, index) => {

carrentValue33 = localStorage.getItem(val.confName);

// interactive
if(val.confName == 'confTheme'){ fuMSetTheme(carrentValue33); }
if(val.confName == 'confDataCollection'&&carrentValue33 == 'not selected'){
if(document.getElementById("cookiePopup") != null){
document.getElementById("cookiePopup").style.display = "block";
}
}


val.confValueVariant.forEach((val2) => {

if(val2 == carrentValue33){
confValueVariantPrint += `
<button class="button margin highlight bold borderRadius2 borderBottomOrange" onclick="setSeting('${val.confName}', '${val2}')">${val2}</button>
`;
}else{
confValueVariantPrint += `
<button class="button margin light2 borderRadius2" onclick="setSeting('${val.confName}', '${val2}')">${val2}</button>
`;
}

});


if(comSettings == "reset"){
setSeting(`${val.confName}`, `${val.confValueDefault}`);

// enable hide ext / main.js, settings page
if(String(location.hostname).indexOf('.pages.dev') != -1&&val.confName == 'confHideLinkExt'){
setSeting(`${val.confName}`, `on`);
}

}


style += `
#${val.confName}:target,

`;

printBody += `

<div class="padding block" style="background: var(--d2);"></div>

<div id="${val.confName}" class="settingsGrid borderList small padding light">
<div class="padding2 border"><span class="bold">${val.confTitle} <!--<div class="op block tRight padding placeholder normal x-small">conf["${val.confName}"]</div>--></span></div>
<div class="padding2 border pre">${val.confDescription}</div>
<div class="padding2 border">${confValueVariantPrint}</div>
<div class="padding2 border break2"><span class="bold">${carrentValue33}</span></div>
</div>


`;
confValueVariantPrint = '';




});


print = `

<div class="wrapper small">

<div class="settingsGrid borderList op small padding light">
<div class="padding2 border">Title</div>
<div class="padding2 border">Description</div>
<div class="padding2 border">Option</div>
<div class="padding2 border">Status (value)</div>
</div>

${printBody}


<div class="margin2 padding2"></div>

<div class="w100 shadow button padding3 light2 bold pointer borderBottomOrange" onclick="settingOptionReset();">Reset settings</div>

<div class="margin2 padding2"></div>

<div class="padding block right">
<div class="shadow button padding3 light2 bold pointer borderBottomRed" onclick="settingOptionClearData();">Clear local storage</div>

<div class="shadow button padding3 light2 bold pointer borderBottomRed" onclick="settingOptionClearDataIndexdDb();">Clear IndexedDB</div>
</div>


</div>

<style>

.settingsGrid {
display: grid;
grid-template-columns: minmax(120px, 1fr) minmax(120px, 1fr);
grid-gap: 0;
margin: 0 auto;
justify-content: center;
align-items: center;
}

@media(max-width: 240px) {
.settingsGrid {grid-template-columns: repeat(auto-fill, minmax(100%, 1fr)); }
}

.settingsGrid div {
display: inline-flex;
height: 100%;
justify-content: left;
align-items: center;
flex-wrap: wrap;
max-width: 100%;
}

</style>



<style>
/*https://stackoverflow.com/questions/11142125/css-highlight-a-div-when-the-id-is-linked-to-using-an-anchor#*/

${style}
#none:target {
border-bottom: 4px solid var(--orange);
min-height: auto;
}




</style>

`;


return document.getElementsByClassName("result33")[0].innerHTML = print;

}

printFunctionLocal();




function setSeting(confName, confValue){
settingValue = localStorage.setItem(confName, confValue);

if(confName == "confBg"||confName == "confAdsStatus"||confName == "confDataCollection"){ // interactive
return printFunctionLocal(confValue), fuMReload();
}else{
return printFunctionLocal();
}

}




function settingOptionReset(){

if(confirm(`Are you sure? Set all options to default values.`) == true){
printFunctionLocal("reset");
return reload();
}

}




function settingOptionClearData(){

if(confirm(`Are you sure? All local storage data will be deleted (theme settings, etc).`) == true){
//https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear
localStorage.clear();
return reload();
}

}




function settingOptionClearDataIndexdDb(){

if(confirm(`Are you sure? All IndexedDB data will be deleted: ${conf["confDbList"]}`) == true){

/*//https://stackoverflow.com/questions/46040005/delete-all-indexeddb
window.indexedDB.databases().then((r) => {
    for (var i = 0; i < r.length; i++) window.indexedDB.deleteDatabase(r[i].name);
}).then(() => {
alert('All data cleared.');
});*/



(conf["confDbList"].split(",")).forEach((dbVal) => {

//https://stackoverflow.com/questions/15861630/how-can-i-remove-a-whole-indexeddb-database-from-javascript
dbVal = dbVal.trim();
var req = indexedDB.deleteDatabase(dbVal);
req.onsuccess = function () {
    console.log("Deleted database successfully");
};
req.onerror = function () {
    console.log("Couldn't delete database");
};
req.onblocked = function () {
    console.log("Couldn't delete database due to the operation being blocked");
};

//window.indexedDB.deleteDatabase(dbVal);

});

return reload();
}

}






