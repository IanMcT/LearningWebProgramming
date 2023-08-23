/** 
*Displays tab container
*@param {string} tabName - The tab container to show  
*/
function displayTab(tabName) {
  let tabs = document.getElementsByClassName("ScoutTab");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";  
  }//end for loop
  document.getElementById(tabName).style.display = "block";  
}//end displayTab
