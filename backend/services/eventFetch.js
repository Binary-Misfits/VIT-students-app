const { google } = require("googleapis")
async function getData() {
    const auth = new google.auth.GoogleAuth({
        keyFile: "services/credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })
    const client = await auth.getClient()
    const googleSheets = google.sheets({
        version: "v4",
        auth: client
    })
    const spreadsheetId = "1GqIrp5Vg3T82o6ft7mIkfwDwvibNpv76IGhXNOAvUf0"

    const getLeadName = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Form responses 1!B:H"
    })
    // console.log();


    var data1 = []
    var head = ""
    var date = ""
    var venue = ""
    var time = ""
    var description = ""
    var regLink = ""
    var imgLink = ""

    getLeadName.data.values.filter((val, idx) => { return !idx == 0 }).forEach(element => {
        // console.log(element);
        head = String(element[0]).trim()
        date = String(element[1]).trim()
        venue = String(element[2]).trim()
        time = String(element[3]).trim()
        description = String(element[4]).trim()
        regLink = String(element[5]).trim()
        imgLink = String(element[6]).trim()
        var tempObject = {
            "heading": head,
            "date": date,
            "time": time,
            "description": description,
            "regLink": regLink,
            "imgLink": imgLink,
        }
        data1.push(tempObject)
    })

    console.log(data1);
    return data1
}
getData()
module.exports = getData