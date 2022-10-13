setInterval(()=>{
let d = new Date()
htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();

hrotation = 30*htime + mtime/2;
mrotation = 6*mtime;
srotation = 6*stime;

hour.style.transform = `rotate(${hrotation}deg)`;
min.style.transform = `rotate(${mrotation}deg)`;
sec.style.transform = `rotate(${srotation}deg)`;

if(htime<10 && mtime<10 && stime)
{
    htime = '0'+htime; 
    mtime = '0'+mtime;
    stime = '0'+stime;
}
else if(htime<10 && mtime<10 )
{
    htime = '0'+htime; 
    mtime = '0'+mtime;
  
}
else if(htime<10 && stime<10)
{
    htime = '0'+htime; 
    stime = '0'+stime;
}
else if(htime<10)
{
    htime = '0'+htime; 
    
}
else if(stime<10)
{
    
    stime = '0'+stime;
}
else if(mtime<10)
{
    mtime = '0'+mtime; 
}

document.getElementById('dighour').innerText = htime;
document.getElementById('digmin').innerText = mtime;
document.getElementById('digsec').innerText = stime;
},1000)
