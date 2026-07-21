const date = document.getElementById("date");
const time = document.getElementById("time");

function updateClock(){

    const now = new Date();

    date.innerHTML = now.toDateString();

    time.innerHTML = now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

const scanBtn = document.getElementById("scanBtn");

const status = document.getElementById("status");

const table = document.getElementById("attendanceTable");

scanBtn.onclick = ()=>{

    status.innerHTML="Scanning...";

    setTimeout(()=>{

        status.innerHTML="Attendance Recorded ✅";

        const row=`
        <tr>
            <td>Juan Dela Cruz</td>
            <td>2025001</td>
            <td>${new Date().toLocaleTimeString()}</td>
            <td style="color:green;font-weight:bold;">
                Present
            </td>
        </tr>
        `;

        table.innerHTML=row+table.innerHTML;

    },2000);

};
