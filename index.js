function tampil() {
    let tampilkandi = document.getElementById("form1").tampilkandi.value
    let pilihbintang = document.getElementById("form1").pilihbintang.value;
    let parseBintang = document.getElementById("parseBintang");
    let t = document.getElementById("form1").tinggi.value;
    let c = ''
    let s = ''
    if (pilihbintang == 1) {
        // perulangan 5 bintang 10 baris
        for (let i = 0; i < t; i++) {
            for (let a = 0; a < t; a++) {
                c += '*'
                s += "*"
            }
            c += '<br/>'
            s += "\n"
        }
    }
    if (pilihbintang == 2) {
        //perulangan semakin ke bawah semakin besar
        // seperti ini contohnya
        // *
        // **
        // ***
        // ****
        // *****
        // ******
        for (let i = 0; i < t; i++) {
            for (let a = 0; a <= i; a++) {
                s += "*"
                c += "*"
            }
            c += '<br/>'
            s += "\n"
        }
    }
    if (pilihbintang == 3) {
        //perulangan semakin ke bawah semakin besar
        // seperti ini contohnya
        // ******
        // *****
        // ****
        // ***
        // **
        // *
        for (let i = t; i > 0; i--) {
            for (let a = 0; a < i; a++) {
                c += "*"
                s += "*"
            }
            c += '<br/>'
            s += "\n"
        }
    }
    if (pilihbintang == 4) {
        // Soal : Buat perulangan seperti contoh
        //      *
        //     **
        //    ***
        //   ****
        //  *****
        // ******
        // Jawab:
        for (let i = t; i >= 0; i--) {
            for (let a = 0; a < i; a++) {
                c += '&nbsp&nbsp'
                s += " "
            }
            for (let a = t; a >= i; a--) {
                c += "*"
                s += "*"
            }
            c += '<br/>'
            s += "\n"
        }
    }
    if (pilihbintang == 5) {
        // Soal : Buat perulangan seperti contoh
        // ******
        //  *****
        //   ****
        //    ***
        //     **
        //      *
        // Jawab:
        for (let i = t; i >= 0; i--) {
            for (let a = t; a >= i; a--) {
                c += '&nbsp&nbsp'
                s += " "
            }
            for (let a = 0; a < i; a++) {
                c += "*"
                s += "*"
            }
            c += '<br/>'
            s += "\n"
        }
        // clear
    }
    if (pilihbintang == 6) {
        // Soal : Buat perulangan seperti contoh
        //      *
        //     **
        //    ***
        //   ****
        //  *****
        // ******
        //  *****
        //   ****
        //    ***
        //     **
        //      *
        // Jawab:
        for (let i = t; i >= 0; i--) {
            for (let a = 0; a < i; a++) {
                c += '&nbsp&nbsp'
                s += " "
            }
            for (let a = t; a >= i; a--) {
                c += "*"
                s += "*"
            }
            c += '<br/>'
            s += "\n"
        }
        for (let i = t; i >= 0; i--) {
            for (let a = t; a >= i; a--) {
                c += '&nbsp&nbsp'
                s += " "
            }
            for (let a = 0; a < i; a++) {
                c += "*"
                s += "*"
            }
            c += '<br/>'
            s += "\n"
        }
        // clear
    }
    if (pilihbintang == 7) {
        // Soal : Buat perulangan seperti contoh
        // *
        // **
        // ***
        // ****
        // *****
        // ******
        // *****
        // ****
        // ***
        // **
        // *
        // Jawab:
        for (let i = 0; i < 10; i++) {
            for (let a = 0; a <= i; a++) {
                c += "*"
                s += "*"
            }
            c += '<br/>'
            s += "\n"
        }
        for (let i = 10; i > 0; i--) {
            for (let a = 1; a < i; a++) {
                c += "*"
                s += "*"
            }
            c += '<br/>'
            s += "\n"
        }
        // clear
    }
    if (pilihbintang == 8) {
        // Soal : Buat perulangan seperti contoh
        //     *
        //    ***
        //   *****
        //  *******
        // *********
        // Jawab:
        for (let b = 0; b <= t; b++) {
            for (let i = 1; i <= (t - b); i++) {
                c += '&nbsp&nbsp'
                s += " "
            }
            for (let i = 1; i < 2 * b; i++) {
                c += "*"
                s += "*"
            }
            c += '<br/>'
            s += "\n"
        }
        // clear
    }
    if (pilihbintang == 9) {
        // Soal : Buat perulangan seperti contoh
        // *********
        //  *******
        //   *****
        //    ***
        //     *
        // Jawab:
        for (let b = 0; b <= t; b++) {
            for (let i = 0; i <= b; i++) {
                c += '&nbsp&nbsp'
                s += " "
            }
            for (let k = b; k <= t; k++) {
                c += "*"
                s += "*"
            }
            for (let l = b + 1; l <= t; l++) {
                c += "*"
                s += "*"
            }
            c += '<br/>'
            s += "\n"
        }
        // clear
    }
    if (pilihbintang == 10) {
        // Soal : Buat perulangan seperti contoh
        //     *
        //    ***
        //   *****
        //  *******
        // *********
        //  *******
        //   *****
        //    ***
        //     *
        // Jawab:
        for (let b = 0; b <= t; b++) {
            for (let i = 1; i <= (t - b); i++) {
                c += '&nbsp&nbsp'
                s += " "
            }
            for (let i = 1; i < (2 * b); i++) {
                s += "*"
                c += '*'
            }
            c += '<br/>'
            s += "\n"
        }
        for (let b = 1; b <= t; b++) {
            for (let i = 0; i < b; i++) {
                s += " "
                c += '&nbsp&nbsp'
            }
            for (let k = b; k < t; k++) {
                s += "*"
                c += "*"
            }
            for (let l = b + 1; l < t; l++) {
                s += "*"
                c += '*'
            }
            c += '<br/>'
            s += "\n"
        }
        //clear
    }
    if (pilihbintang == 11) {
        // Soal : Buat perulangan seperti contoh
        // # # # # #
        //  # # # # #
        // # # # # #
        //  # # # # #
        // # # # # #
        //  # # # # #
        // # # # # #
        //  # # # # #
        // # # # # #
        //  # # # # #
        // Jawab:
        for (let i = 0; i < 10; i++) {
            if (i % 2) {
                for (let a = 0; a < 10; a++) {
                    if (a % 2) {
                        s += "#"
                        c += "#"
                    } else {
                        s += ' '
                        c += '&nbsp&nbsp'
                    }
                }
            } else {
                for (let a = 0; a < 10; a++) {
                    if (a % 2) {
                        s += ' '
                        c += '&nbsp&nbsp'
                    } else {
                        s += '#'
                        c += "#"
                    }
                }
            }
            s += "\n"
            c += '<br/>'
        }
        // clear
    }
    if (tampilkandi == 1) {
        parseBintang.innerHTML = c;
    }
    if (tampilkandi == 2) {
        console.log(s)
    }
}