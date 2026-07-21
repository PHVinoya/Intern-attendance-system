
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Poppins,sans-serif;
}

body{

    background:#f4f7fb;
    color:#333;
}

header{

    background:#1565C0;
    color:white;

    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:20px 50px;

    box-shadow:0 5px 15px rgba(0,0,0,.15);

}

main{

    max-width:1200px;
    margin:40px auto;
    padding:20px;

    display:grid;
    grid-template-columns:350px 1fr;
    gap:25px;

}

.scanner-card,
.status-card,
.table-card{

    background:white;
    border-radius:15px;
    padding:25px;
    box-shadow:0 10px 25px rgba(0,0,0,.08);

}

.status-card{

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

}

.scanner{

    margin:25px 0;
    height:250px;
    border:3px dashed #1565C0;

    border-radius:12px;

    display:flex;
    align-items:center;
    justify-content:center;

}

.camera-placeholder{

    font-size:90px;

}

button{

    width:100%;
    padding:15px;

    border:none;
    border-radius:10px;

    background:#1565C0;
    color:white;

    font-size:17px;
    cursor:pointer;

}

button:hover{

    background:#0D47A1;

}

#status{

    font-size:20px;
    color:#1565C0;
    font-weight:600;

}

.table-card{

    grid-column:span 2;

}

table{

    width:100%;
    border-collapse:collapse;
    margin-top:20px;

}

th{

    background:#1565C0;
    color:white;
    padding:15px;

}

td{

    padding:14px;
    text-align:center;
    border-bottom:1px solid #eee;

}

tr:hover{

    background:#f8f9fa;

}

@media(max-width:900px){

    main{

        grid-template-columns:1fr;

    }

    .table-card{

        grid-column:span 1;

    }

    header{

        flex-direction:column;
        gap:10px;
        text-align:center;

    }

      }
