var fullrep = $('a:eq(4)');
var laterep = $('a:eq(5)');
var excuserep = $('a:eq(6)');
var absencerep = $('a:eq(7)');
var priefrep = $('a:eq(8)');
fullrep.on('click', () => {
    $('table:eq(0)').show().siblings().hide();
});
laterep.on('click', () => {
    $('table:eq(1)').show().siblings().hide();
});
excuserep.on('click', () => {
    $('table:eq(2)').show().siblings().hide();
});
absencerep.on('click', () => {
    $('table:eq(3)').show().siblings().hide();
});
priefrep.on('click', () => {
    $('table:eq(4)').show().siblings().hide();
});

async function getalldata() {
    let alldatajson = await fetch("./empdata.json");
    let alldata = await alldatajson.json();
    // console.log(alldatajson);
    // console.log(alldata);
    alldata.forEach((data) => {
        let createdtr = document.createElement('tr');
        let createdtd = document.createElement('td');
        createdtd.innerHTML = `${data.firstName} ${data.lastName}`;
        createdtr.appendChild(createdtd);
    });
}
getalldata();



async function getallreports() {
    let allreportsjson = await fetch("./empreport.json");
    let allreportsdata = await allreportsjson.json();
    // console.log(allreportsjson);
    // console.log(allreportsdata);
    allreportsdata.forEach((data) => {
        // console.log(data.reports)
    });
}
getallreports();