function ajaxCall1() {
    let div2 = document.getElementById('user');
    let div3 = document.getElementById('parent');
    let div4 = document.getElementById('child');
    let div5 = document.getElementById('waza');

    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    
    // show div1
    let div1 = document.getElementById('role');
    div1.style.display = 'block';

    let URL = `Jsonfiles(WMS)/Role.JSON`;
    fetch(URL).
        then((response) => {
            if (response.ok) {
                return response.text();
            }
            else {
                div1.innerHTML = "Error";
            }
        }).
        then((data1) => {
            let parseDiv1 = JSON.parse(data1);

            let table = document.createElement('table');
            for (let i = 0; i < parseDiv1.UserRole.role.length; i++) {
                let tr = document.createElement('tr');

                let tdRoleId = document.createElement('td');
                let tdRoleName = document.createElement('td');
                let tdDisplayName = document.createElement('td');
                let tdisSuperAdmin = document.createElement('td');
                let tdisAdmin = document.createElement('td');
                let tdisParent = document.createElement('td');
                let tdisChild = document.createElement('td');
                let tdisWaza = document.createElement('td');
                let tdisActive = document.createElement('td');
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

                tdRoleId.innerHTML = parseDiv1.UserRole.role[i]["roleId"];
                tdRoleName.innerHTML = parseDiv1.UserRole.role[i]["roleName"];
                tdDisplayName.innerHTML = parseDiv1.UserRole.role[i]["displayName"];
                tdisSuperAdmin.innerHTML = parseDiv1.UserRole.role[i]["isSuperAdmin"];
                tdisAdmin.innerHTML = parseDiv1.UserRole.role[i]["isAdmin"];
                tdisParent.innerHTML = parseDiv1.UserRole.role[i]["isParent"];
                tdisChild.innerHTML = parseDiv1.UserRole.role[i]["isWaza"];
                tdisWaza.innerHTML = parseDiv1.UserRole.role[i]["isChild"];
                tdisActive.innerHTML = parseDiv1.UserRole.role[i]["isActive"];


                if (i == 0) {
                    tdButton1.innerHTML = parseDiv1.UserRole.role[0]["button1"];
                    tdButton2.innerHTML = parseDiv1.UserRole.role[0]["button2"];
                    tdButton3.innerHTML = parseDiv1.UserRole.role[0]["button3"];
                } else {
                    tdButton1.append(button1);
                    tdButton2.append(button2);
                    tdButton3.append(button3);
                }

                tr.appendChild(tdRoleId);
                tr.appendChild(tdRoleName);
                tr.appendChild(tdDisplayName);
                tr.appendChild(tdisSuperAdmin);
                tr.appendChild(tdisAdmin);
                tr.appendChild(tdisParent);
                tr.appendChild(tdisChild);
                tr.appendChild(tdisWaza);
                tr.appendChild(tdisActive);
                tr.appendChild(tdButton1);
                tr.appendChild(tdButton2);
                tr.appendChild(tdButton3);

                table.appendChild(tr);
            }
            div1.appendChild(table);

            console.log(parseDiv1)
        })
}