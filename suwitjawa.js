var tanya = true;

while (tanya == true) {
  // menangkap pilihan player
  var player = prompt("pilih : gajah, semut, orang");

  // menangkap pilihan komputer

  // generate bilangan random
  var com = Math.random();

  // **Kondisi
  if (com < 0.34) {
    com = "gajah";
  } else if (com >= 0.34 && com <= 0.67) {
    com = "orang";
  } else {
    com = "semut";
  }

  // variabel kosong
  var hasil = "";

  // menentukan rules
  if (player == com) {
    hasil = "SERI!";
  } else if (player == "gajah") {
    // if (com == "orang") {
    //   hasil = "MENANG!";
    // } else {
    //   hasil = "KALAH!";
    // }
    hasil = com == "orang" ? "MENANG!" : "KALAH!";
  } else if (player == "orang") {
    hasil = com == "gajah" ? "KALAH!" : "MENANG!";
  } else if (player == "semut") {
    hasil = com == "orang" ? "KALAH!" : "MENANG!";
  } else {
    hasil = "memilih pilihan yang salah!";
  }

  // output hasil
  alert("Kamu memilih : " + player + " dan Komputer memilih : " + com + "\n Maka Hasilnya : Kamu " + hasil);

  tanya = confirm("Main lagi ?");
}
alert("Terima Kasih sudah bermain !");
