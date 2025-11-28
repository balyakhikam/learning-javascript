//contoh penggunaan kondisi if else 
//menggunakan operator perbandingan

var angka = 1;
if (angka == 1) {
    console.log ("angka adalah satu");

}else {
    console.log ("angka bukan satu");
}

var angka2 = 5;
if (angka2 < 5) {
    console.log ("angka di bawah lima");
    }else if (angka2 > 5) {
        console.log ("angka di atas lima");
    }else {
        console.log ("angka sama dengan lima");
    }

//menggunakan operator logika
var buah = ['apel', 'mangga', 'jeruk'];
if (buah.length > 3) {
    console.log ("buah lebih dari 3");
}else {
        console.log ("buah kurang dari atau sama dengan 3");
    }

//menggunakan tipe data string
var nama = "balyakhikam";
if (nama === "balyakhikam") {
    console.log ("nama sesuai")
}else {
    console.log ("nama tidak sesuai");
}

//menggunakan tipe data boolean
var benar = true;
if (benar) {
    console.log ("nilai benar adalah true");
}else {
    console.log ("nilai benar adalah false");
}

//nested if
var umur = 17;
var tinggi = 160;
if (umur < 17) {
    if (tinggi < 150) {
        console.log ("anda boleh tidak boleh masuk");
    } else {
            console.log ("anda boleh masuk");
    } 
}else {
    console.log ("anda boleh masuk");

        }        



