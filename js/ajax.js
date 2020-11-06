$(() => 
{
    $.getJSON("http://localhost:8080/api/users/")
        .done(users => 
        {
            console.log(users);
        })       

    console.log("After the getJSON call");        

})