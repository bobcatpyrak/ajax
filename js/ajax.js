$(() => 
{
    var user = {admin: false,
        email: "ajax@email.com",
        firstName: "Ajax",
        id: 0,
        lastName: "Ajax",
        password: "password",
        phoneNumber: "543-555-5855",
        reviewer: true,
        username: "ajaxuser2"};

    // this is an ajax call, where you pass in a JSON object
    $.ajax({
        method: "POST", 
        url: "http://localhost:8080/api/users/",
        data: JSON.stringify(user),
        contentType: "application/json"
    }).done(res => {
        console.log(res);
        getAll();
    }).fail(err => {
        console.error(err);
    });

    const getAll = () =>
    {
        $.getJSON("http://localhost:8080/api/users/")
            .done(users => 
            {
                console.log(users);
            })       
    }
    console.log("After the getJSON call");        

})