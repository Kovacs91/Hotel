let ar=5000*1;
function Foglalas()
{
    let kiír=document.getElementById("kiír")
    let megadott_datum=document.getElementById("napok").value;
    let megadott_fő=document.getElementById("szemelyek").value;
    kiír.innerHTML=megadott_datum*megadott_fő*ar+ "Ft";
}
function elert()
{
    alert("A foglalás sikeres")
}