let btnconfirm = document.getElementsByTagName('input')[1];
btnconfirm.addEventListener('click', (e) => {
    e.preventDefault();
    var usernamevalue = document.getElementsByTagName('input')[0].value;
    //create report objects
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    //check late 
    if (time < "9:15")
        var lateflag = 0;
    else
        lateflag = 1;

    let late = lateflag;

    //check absence

    if (time > "10:00")
        var absenceflag = 1;
    else
        absenceflag = 0;

    let absence = absenceflag;

    let empreport = {
        usernamevalue,
        date,
        time,
        late,
        absence
    }

    async function getalldata() {
        let alldatajson = await fetch("http://localhost:3000/data");
        let alldata = await alldatajson.json();
        // console.log(alldatajson);
        // console.log(alldata);
        alldata.forEach((data) => {
            if (usernamevalue == data.username) {
                async function postReport() {
                    await fetch(`http://localhost:3000/reports`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(empreport),
                    });
                }
                postReport();
                // close attend form
                document.forms[0].style.display = "none";
                //display info about this employee
                document.querySelector('.empinfo').style.display = "block";
                document.getElementById('empfullname').innerHTML = `${data.firstName} ${data.lastName}`;
                document.getElementById('attendtime').innerHTML = new Date().toLocaleTimeString();;

            }
            else {
                document.getElementsByTagName('input')[0].focus();
                document.querySelector('.errorstyle').display = "block";
            }
        });
    }
    getalldata();
    document.forms[0].reset();

});//end of confirm 

let btnok = document.getElementsByTagName('button')[0];
btnok.addEventListener('click', (e) => {
    e.preventDefault();
    document.forms[0].style.display = "block";
    //close info about this employee
    document.querySelector('.empinfo').style.display = "none"

});//end of confirm 
