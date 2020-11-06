$().ready(() =>
{
    var users;

    const baseurl = "http://localhost:8080/api";

    const getAll = () =>
    {
        $.getJSON(`${baseurl}/users/`)
            .done(users => 
            {
                display(users);
                console.log(users);
            })       
    }


    const displayUserById = () =>
    {
        let userId = $("#userId").val();
        console.log(userId);
        $.getJSON(`${baseurl}/users/${userId}`)
            .done(u =>
            {
                $("#firstName").val(u.firstName);
                $("#lastName").val(u.lastName);
                $("#username").val(u.username);
                $("#password").val("****");
                $("#email").val(u.email);
                $("#phoneNumber").val(u.phoneNumber);
                $("#admin").val(u.admin);
                $("#reviewer").val(u.reviewer);
            })
    }

    const display = (users) =>
    {
        let tbody = $("tbody");
        tbody.empty();
        for(let u of users)
        {
                    
            let tr = $("<tr></tr>");
            let td = $(`<td>${u.id}</td>
                        <td>${u.firstName}</td>
                        <td>${u.lastName}</td>
                         <td>${u.username}</td>
                        <td>****</td>
                        <td>${u.email}</td>
                        <td>${u.phoneNumber}</td>
                        <td>${u.admin}</td>
                        <td>${u.reviewer}</td>`);
            tr.append(td);
            tbody.append(tr);
        }  
    }

    $("#userIdButton").on("click", () =>
    {
        displayUserById();
    })
 //   getAll();
});