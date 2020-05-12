class DialogPage {
    // finding elements - $ short way to call find element
    get appBtn () { return $("~App")}
    get viewsBtn() { return $("~Views")}
    get alertDialogBtn() {return $("~Alert Dialogs")}
    get tabsBtn() {return $("~Tabs")}
    get contentByIdBtn() {return $("~1. Content By Id")}
    get textEntryDialogBtn()  {return $("~Text Entry dialog")}
    get userNameField () { return $("//android.widget.EditText[@resource-id='io.appium.android.apis:id/username_edit']" )}
    get passwordField() { return $("//android.widget.EditText[@resource-id='io.appium.android.apis:id/password_edit']")}
    get okBtn() { return $("//android.widget.Button[@resource-id='android:id/button1']")}
    get repeatAlarmBtn() { return $("//android.widget.Button[@content-desc='Repeat alarm']")} 
    get tabs() { return $$("android.widget.LinearLayout")} 
    get tab1Details() {return $("~tab1")}
    get tab2Details() {return $("~tab2")}
    get tab3Details() {return $("~tab3")}

   weekdayCheckbox(index){
       return $(`//android.widget.CheckedTextView[@index=${index}]`)
   }
}

module.exports = new DialogPage()