document.addEventListener('DOMContentLoaded', function () {
    let span3 = document.getElementById('span3');
    let div3Display = false; // Flag to track whether div3 has been displayed

    span3.addEventListener('click', function () {
        if (!div3Display) {
            ajaxCall3();
            div3Display = true; // Set the flag to true after displaying div3
        }
    });
});

function ajaxCall3() {
    let div1 = document.getElementById('role');
    let div2 = document.getElementById('user');
    let div4 = document.getElementById('child');
    let div5 = document.getElementById('waza');
    
    div1.style.display = 'none';
    div2.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    
    // Show div2 only if it has not been displayed before
    let div3 = document.getElementById('parent');
    if (div3.style.display === '' || div3.style.display === 'none') {
        div3.style.display = 'block';
    }

    let URL = `Jsonfiles(WMS)/Parent.JSON`;
    fetch(URL).
        then((response) => {
            if (response.ok) {
                return response.text();
            }
            else {
                throw new Error ('Error');
            }
        }).
        then((data3) => {
            let parsediv3 = JSON.parse(data3);

            let table = document.createElement('table');
            table.id = 'parentTable';
            for (let i = 0; i < parsediv3.Parents.parent.length; i++) {
                let tr = document.createElement('tr');

                let tdParentId = document.createElement('td');
                let tdFirstName = document.createElement('td');
                let tdMiddleName = document.createElement('td');
                let tdLastName = document.createElement('td');
                let tdParentName = document.createElement('td');
                let tdAge = document.createElement('td');
                let tdPrefix = document.createElement('td');
                let tdAddress = document.createElement('td');
                let tdDob = document.createElement('td');
                let tdPhoneNo = document.createElement('td');
                let tdLatitudeAndLongitude = document.createElement('td');    
                let tdGender = document.createElement('td');    
                let tdFamilyHead = document.createElement('td');
                let tdHouseImg = document.createElement('td');
                let tdEmail = document.createElement('td');
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

                tdParentId.innerHTML = parsediv3.Parents.parent[i]["parentId"];
                tdFirstName.innerHTML = parsediv3.Parents.parent[i]["firstName"];
                tdMiddleName.innerHTML = parsediv3.Parents.parent[i]["middleName"];
                tdLastName.innerHTML = parsediv3.Parents.parent[i]["lastName"];
                tdParentName.innerHTML = parsediv3.Parents.parent[i]["parentName"];
                tdAge.innerHTML = parsediv3.Parents.parent[i]["age"];
                tdPrefix.innerHTML = parsediv3.Parents.parent[i]["prefix"];
                tdAddress.innerHTML = parsediv3.Parents.parent[i]["address"];
                tdDob.innerHTML = parsediv3.Parents.parent[i]["dob"];
                tdPhoneNo.innerHTML = parsediv3.Parents.parent[i]["phoneNo"];
                tdLatitudeAndLongitude.innerHTML = parsediv3.Parents.parent[i]["latituteAndLongitute"]; 
                tdGender.innerHTML = parsediv3.Parents.parent[i]["gender"]; 
                tdFamilyHead.innerHTML = parsediv3.Parents.parent[i]["familyHead"];
                tdHouseImg.innerHTML = parsediv3.Parents.parent[i]["houseImg"];
                tdEmail.innerHTML = parsediv3.Parents.parent[i]["email"];


                if (i == 0) {
                    tdButton1.innerHTML = parsediv3.Parents.parent[0]["button1"];
                    tdButton2.innerHTML = parsediv3.Parents.parent[0]["button2"];
                    tdButton3.innerHTML = parsediv3.Parents.parent[0]["button3"];
                } else {
                    tdButton1.append(button1);
                    tdButton2.append(button2);
                    tdButton3.append(button3);
                }

                tr.appendChild(tdParentId);
                tr.appendChild(tdFirstName);
                tr.appendChild(tdMiddleName);
                tr.appendChild(tdLastName);
                tr.appendChild(tdParentName);
                tr.appendChild(tdAge);
                tr.appendChild(tdPrefix);
                tr.appendChild(tdAddress);
                tr.appendChild(tdDob);
                tr.appendChild(tdPhoneNo);
                tr.appendChild(tdLatitudeAndLongitude); 
                tr.appendChild(tdGender); 
                tr.appendChild(tdFamilyHead);
                tr.appendChild(tdHouseImg);
                tr.appendChild(tdEmail);
                tr.appendChild(tdButton1);
                tr.appendChild(tdButton2);
                tr.appendChild(tdButton3);

                table.appendChild(tr);
            }
            div3.appendChild(table);

            console.log(parsediv3)
        })

}