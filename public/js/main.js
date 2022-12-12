const dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString('default', { month: 'long', day: '2-digit', year: 'numeric'});