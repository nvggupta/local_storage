const Fname = document.getElementById("Fname");
        const Lname = document.getElementById("Lname");
        const country = document.getElementById("country");
        const PnO = document.getElementById("Pnumber");
        const state = document.getElementById("state");
        const city = document.getElementById("city");
        const village = document.getElementById("village");

       document.addEventListener('DOMContentLoaded',()=>{
            if (!localStorage.getItem("First name")) {
                let F = prompt("Enter First Name");
                let L = prompt("Enter Last Name");
                let c = prompt("Enter Country");
                let pn = prompt("Enter Phone Number");
                let s = prompt("Enter State");
                let ci = prompt("Enter City");
                let v = prompt("Enter Village");

                localStorage.setItem("First name", F);
                localStorage.setItem("Last name", L);
                localStorage.setItem("country", c);
                localStorage.setItem("phone-number", pn);
                localStorage.setItem("state", s);
                localStorage.setItem("city", ci);
                localStorage.setItem("Village", v);
            }
        })
            Fname.textContent = localStorage.getItem("First name");
            Lname.textContent = localStorage.getItem("Last name");
            country.textContent = localStorage.getItem("country");
            PnO.textContent = localStorage.getItem("phone-number");
            state.textContent = localStorage.getItem("state");
            city.textContent = localStorage.getItem("city");
            village.textContent = localStorage.getItem("Village");
