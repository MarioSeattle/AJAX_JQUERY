$('button').click(function(event) {
    $.ajax({
        url: 'https://dog.ceo/api/breeds/list',
        dataType: 'json'
    }).then(function (resp) {
        console.log(resp.message.join('\n'))
    })
        .catch(function (err) {
            console.error( 'something went wrong', err );
        });
});