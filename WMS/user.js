document.addEventListener('DOMContentLoaded', function () {
    let span2 = document.getElementById('span2');
    let div2Displayed = false; // Flag to track whether div2 has been displayed

    span2.addEventListener('click', function () {
        if (!div2Displayed) {
            ajaxCall2();
            div2Displayed = true; // Set the flag to true after displaying div2
        }
    });
});

function ajaxCall2() {
    let div1 = document.getElementById('role');
    let div3 = document.getElementById('parent');
    let div4 = document.getElementById('child');
    let div5 = document.getElementById('waza');

    div1.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';

    // Show div2 only if it has not been displayed before
    let div2 = document.getElementById('user');
    if (div2.style.display === '' || div2.style.display === 'none') {
        div2.style.display = 'block';
    }

    let URL = `Jsonfiles(WMS)/User.JSON`;
    fetch(URL).
        then((response) => {
            if (response.ok) {
                return response.text();
            }
            else {
                div2.innerHTML = "Error";
            }
        }).
        then((data1) => {
            let parsediv2 = JSON.parse(data1);

            let table = document.createElement('table');
            table.id = 'userTable';
            for (let i = 0; i < parsediv2.UserRegistration.user.length; i++) {
                let tr = document.createElement('tr');

                let tdUserId = document.createElement('td');
                let tdRoleId = document.createElement('td');
                let tdFirstName = document.createElement('td');
                let tdMiddleName = document.createElement('td');
                let tdLastName = document.createElement('td');
                let tdUserName = document.createElement('td');
                let tdPassword = document.createElement('td');
                let tdButton1 = document.createElement('td');
                let tdButton2 = document.createElement('td');
                let tdButton3 = document.createElement('td');

                //buttons
                let button1 = document.createElement('button');
                button1.innerHTML = "Save";
                let button2 = document.createElement('button');
                button2.innerHTML = "Update";
                let button3 = document.createElement('button');
                button3.innerHTML = "Delete";

                tdUserId.innerHTML = parsediv2.UserRegistration.user[i]["userId"];
                tdRoleId.innerHTML = parsediv2.UserRegistration.user[i]["roleId"];
                tdFirstName.innerHTML = parsediv2.UserRegistration.user[i]["firstName"];
                tdMiddleName.innerHTML = parsediv2.UserRegistration.user[i]["middleName"];
                tdLastName.innerHTML = parsediv2.UserRegistration.user[i]["lastName"];
                tdUserName.innerHTML = parsediv2.UserRegistration.user[i]["userName"];
                tdPassword.innerHTML = parsediv2.UserRegistration.user[i]["password"];


                if (i == 0) {
                    tdButton1.innerHTML = parsediv2.UserRegistration.user[0]["button1"];
                    tdButton2.innerHTML = parsediv2.UserRegistration.user[0]["button2"];
                    tdButton3.innerHTML = parsediv2.UserRegistration.user[0]["button3"];
                } else {
                    tdButton1.append(button1);
                    tdButton2.append(button2);
                    tdButton3.append(button3);
                }

                tr.appendChild(tdUserId);
                tr.appendChild(tdRoleId);
                tr.appendChild(tdFirstName);
                tr.appendChild(tdMiddleName);
                tr.appendChild(tdLastName);
                tr.appendChild(tdUserName);
                tr.appendChild(tdPassword);
                tr.appendChild(tdButton1);
                tr.appendChild(tdButton2);
                tr.appendChild(tdButton3);

                table.appendChild(tr);
            }
            div2.appendChild(table);

            console.log(parsediv2)
        })

}