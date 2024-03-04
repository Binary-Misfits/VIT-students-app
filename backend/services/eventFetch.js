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
    const spreadsheetId = "1YcMpLEDmHEOf4MiwjqaL2wYayj5DpZM8WKpJoD_CppY"

    const getLeadName = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!A:G"
    })
    // console.log(getLeadName.data.values);
    
    var data1 = []
    var head =""
    var date = ""
    var time = ""
    var description = ""
    var regLink = ""
    var imgLink = ""

    getLeadName.data.values.forEach(element => {
        if (element[5]==4) {
            name = String(element[2]).trim()+" "+String(element[13]).trim()+" "+String(element[16]).trim()+" "+String(element[18]).trim()
            email= String(element[0]).trim()
            regNo= String(element[4]).trim()+" "+String(element[14]).trim()+" "+String(element[17]).trim()+" "+String(element[19]).trim()
            var tempObject = {
                "NumberOfMembers":element[5],
                "Name":name,
                "RegNo":regNo,
                "Email":email
            }
            data1.push(tempObject)
        }
        else if (element[5]==3) {
            name=String(element[2]).trim()+" "+String(element[6]).trim()+" "+String(element[9]).trim()
            regNo=String(element[4]).trim()+" "+String(element[7]).trim()+" "+String(element[10]).trim()
            email=String(element[0]).trim()
            var tempObject = {
                "NumberOfMembers":element[5],
                "Name":name,
                "RegNo":regNo,
                "Email":email
            }
            data1.push(tempObject)
        }
        else if (element[5]==2) {
            leadName = element[2]
            leadEmail = element[0]
            leadReg = element[4]
            teamMembers = [element[22]]
            membersREg = [element[23]]
            membersEmail = [element[24]]
            name=String(element[2]).trim()+" "+String(element[22]).trim()
            email= String(element[0]).trim()
            regNo=String(element[4]).trim()+" "+String(element[23]).trim()
            var tempObject = {
                "NumberOfMembers":element[5],
                "Name":name,
                "RegNo":regNo,
                "Email":email
            }
            data1.push(tempObject)
        }
        else if (element[5]==1) {
            name = String(element[2]).trim()
            email = String(element[0]).trim()
            regNo = String(element[4]).trim()
            var tempObject = {
                "NumberOfMembers":element[5],
                "Name":name,
                "RegNo":regNo,
                "Email":email
            }
            data1.push(tempObject)
        }
    })

    // console.log(data1);
    return data1
}
getData()
module.exports = getData