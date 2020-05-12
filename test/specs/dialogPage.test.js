const  dialogPage = require( "../../pageObjects/dialogPage")
const expect = require("chai").expect



describe("sample test", async() =>{
    it("verify scrolling ", async() => {
        await driver.touchAction([
            {action : "press", x: 500, y: 1000},
            { action: "moveTo", x: 200, y:500 },
            'release'
        ])
        const viewbtnSelector = await dialogPage.viewsBtn
        await viewbtnSelector.click()

  
        })

    it("verify input texts in dialog are editable ", () =>{   
        dialogPage.appBtn.click()
        // click alert btn
        dialogPage.alertDialogBtn.click()
        dialogPage.textEntryDialogBtn.click()
        dialogPage.userNameField.addValue("betsy")
        dialogPage.passwordField.addValue("betsy")
        dialogPage.okBtn.click()
        
        
        
    }) 
    
    it("verify the app adjust when the orientation is switched", () => {
        
        driver.getOrientation()
        driver.setOrientation("LANDSCAPE")
        driver.saveScreenshot("./screenshots/landscape.png")

        dialogPage.appBtn.click()
        driver.setOrientation("PORTRAIT")
        driver.back()
        driver.saveScreenshot("./screenshots/portrait.png")
    })

    it("verify the repeat alarm options has attributes checked when selected", () => {
        dialogPage.appBtn.click()
        dialogPage.alertDialogBtn.click()

        dialogPage.repeatAlarmBtn.click()
        console.log("yooh",dialogPage.weekdayCheckbox(0).getText())
        isChecked = dialogPage.weekdayCheckbox(0).getAttribute("checked")
        expect(isChecked).equal('false')

        dialogPage.weekdayCheckbox(0).click()
        driver.setImplicitTimeout(1000)
        isChecked = dialogPage.weekdayCheckbox(0).getAttribute("checked")
        expect(isChecked).equal('true')
    })
    it("verify selected, displayed and enabled elements", () =>{
        driver.touchAction([
            {action : "press", x: 500, y: 1000},
            { action: "moveTo", x: 200, y:500 },
            'release'
        ])
        dialogPage.viewsBtn.click()
        driver.touchAction([
            {action : "press", x: 500, y: 1100},
            { action: "moveTo", x: 500, y:300 },
            'release',
            {action : "press", x: 500, y: 1100},
            { action: "moveTo", x: 500, y:300 },
            'release',
            {action : "press", x: 500, y: 1100},
            { action: "moveTo", x: 500, y:300 },
            'release',
            {action : "press", x: 500, y: 1100},
            { action: "moveTo", x: 500, y:300 },
            'release',
        ])
        dialogPage.tabsBtn.click()
        dialogPage.contentByIdBtn.click()
        driver.setImplicitTimeout(1000)
        let isEnable, isSelected, isDisplayed
        for(i=0; i<=3; i++){
            isEnable = dialogPage.tabs[i].isEnabled()
            isSelected = dialogPage.tabs[i].isSelected()
            isDisplayed = dialogPage.tabs[i].isDisplayed()
        }
        
    } )

    afterEach(() =>{
        driver.reset()
    })
})