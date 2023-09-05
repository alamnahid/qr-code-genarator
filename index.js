let imgbox = document.getElementById('img-box');
let qrImage =document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
function generateQR(){
    if(qrText.value.length>0){
        
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgbox.classList = `max-h-[300px] my-[10px] mx-auto border-2 border-[#d1d1d1]`;
    }
    else{
        alert('Please enter a text or link first');
    }
    

}