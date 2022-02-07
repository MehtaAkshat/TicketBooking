//script for scrren 1
function request() {
    var a = document.getElementById("xyz").value;
    var b = document.getElementById("abc").value;
    let fetchRes = fetch("https://jsonplaceholder.typicode.com/users")
    fetchRes.then((response) => {
        return response.json()
    }).then((data) => {
        data.find((x) => {
            if (x.name === a && x.email == b) {
                document.getElementById("two").style.display = "block";
                document.getElementById("one").style.display = "none";
            } else {
                document.getElementById("demo").innerHTML = "please enter valid name and email";

            }
        })
    }).catch((e) => {
        console.log("ERROR");
    })
}



// script for screen 2
class passanger {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
var c, d, e, g = 0, limit = 0, mm = 0, ff = 0;
var list = [];
function add() {
    var c = document.getElementById("acc").value;
    var d = document.getElementById("add").value;
    var e = document.getElementById("aee").value;
    if (c === "" || d === "") {
        document.getElementById("demo1").innerHTML = "you have to enter name , age and gender";
    } else {
        let person = new passanger(c, d, e);
        list.push(person);
        limit++;
        if (list[g].gender == "female") {
            ff++;
            g++;
        } else {
            mm++;
            g++;
        }
        document.getElementById("demo1").innerHTML = `YOU Added ${limit} Passangers `;
        document.getElementById("acc").value = "";
        document.getElementById("add").value = "";
    }
}
function last() {
    if (limit == 0) {
        document.getElementById("demo1").innerHTML = "Please Add Passangers Details";
    } else {
        document.getElementById("thr").style.display = "block";
        document.getElementById("two").style.display = "none";
    }
}



//script for screen3
var no, yes;
var seats = [
    {
        "number": 1,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 2,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 3,
        "booked": "yes",
        "female": "no"
    },
    {
        "number": 4,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 5,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 6,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 7,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 8,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 9,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 10,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 11,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 12,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 13,
        "booked": "yes",
        "female": "no"
    },
    {
        "number": 14,
        "booked": "yes",
        "female": "yes"
    },
    {
        "number": 15,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 16,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 17,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 18,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 19,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 20,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 21,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 22,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 23,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 24,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 25,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 26,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 27,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 28,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 29,
        "booked": "no",
        "female": "no"
    },
    {
        "number": 30,
        "booked": "no",
        "female": "no"
    },
]

let count = 0, j = 0, m = 0, f = 0;

function change(a) {
    if (a ===1 || a === 4 || a === 7 || a === 10 || a === 16 || a === 19 || a === 22 || a === 25 || a === 28) {
        if (seats[a - 1].booked == "yes") {
            count--;
            if (document.getElementById(a).className == "seat1") {
                mm++;
                m--;
                seats[a - 1].booked = "no";
                document.getElementById(a).className = "seat";
            } else {
                ff++;
                f--;
                seats[a - 1].booked = "no";
                document.getElementById(a).className = "seat";
            }
        } else {
            if (m + f < limit) {


                if (ff > 0) {
                    document.getElementById(a).className = "seat2";
                    ff--;
                    f++;
                    count++;
                    seats[a - 1].booked = "yes";
                } else {
                    document.getElementById(a).className = "seat1";
                    mm--;
                    m++;
                    count++;
                    seats[a - 1].booked = "yes";
                }
            } else { document.getElementById("demo4").innerHTML = ` please select ${limit} seats`; }
        }
    }
    else {
        if (seats[a - 1].booked == "yes") {
            if (document.getElementById(a).className == "seat1") {
                mm++;
                m--;
                count--;
                seats[a - 1].booked = "no";
                document.getElementById(a).className = "seat";
            } else {
                ff++;
                f--;
                count--;
                seats[a - 1].booked = "no";
                document.getElementById(a).className = "seat";
            }
        } else {

            if (m + f < limit) {


                if (ff > 0) {
                    document.getElementById(a).className = "seat2";
                    ff--;
                    f++;
                    count++;
                    seats[a - 1].booked = "yes";
                } else {
                    if (seats[a - 2].female == "yes" || seats[a].female == "yes") {
                        document.getElementById("demo4").innerHTML = "reserved for female passanger";
                    }
                    else {
                        document.getElementById(a).className = "seat1";
                        mm--;
                        m++;
                        count++;
                        seats[a - 1].booked = "yes";
                    }
                }
            } else { document.getElementById("demo4").innerHTML = ` only select ${limit} seats`; }
        }
    }
}
function finish() {
    if (limit === count) {
        document.getElementById("thr").style.display = "none";
        document.getElementById("four").style.display = "block";
    } else {
        document.getElementById("demo4").innerHTML = ` please select ${limit} seats`;
    }
}




