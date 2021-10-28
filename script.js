function mulai() {
    ulang=true;
    // Pilihan Player
    while(ulang){
        let p=prompt("Pilih Salah Satu:\n=> Kertas\n=> Batu\n=> Gunting");

            
        // Pilihan Komputer
        let comp=Math.random();

        if(comp<0.34){
            comp="Kertas";
        }else if(comp>=0.34&&comp<0.67){
            comp="Batu";
        }else{
            comp="Gunting";
        }
        console.log(comp);

        // Aturan
        let hasil="";
        if(p==comp){
            hasil="SERI!";
        }else if(p=="Kertas"){
            if(comp=="Batu"){
                hasil="KAMU MENANG!!";
            }else{
                hasil="KAMU KALAH!!";
            }
        }else if(p=="Batu"){
            if(comp=="Kertas"){
                hasil="KAMU KALAH!!";
            }else{
                hasil="KAMU MENANG!!";
            }
        }else if(p=="Gunting"){
            if(comp=="Kertas"){
                hasil="KAMU MENANG!!";
            }else{
                hasil="KAMU KALAH!!";
            }
        }else if(p=="Kertas"){
            if(comp=="Gunting"){
                hasil="KAMU KALAH!!";
            }else{
                hasil="KAMU MENANG!!";
            }
        }else if(p==""){
            hasil="Pilihanmu Kosong!!";
        }else{
            hasil="Pilih Yang Benar!!";
        }

        alert("Kamu Memilih : "+p+"\nKomputer Memilih : "+comp+"\nHasilnya : "+hasil);

        ulang=confirm("Coba Lagi?");
    }
}