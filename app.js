$.ajax({
    url: 'https://coriolis-reuters gui.repl.co/query',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
        'query': 'This is the first document.'
    }),
    success: function(data) {
        console.log(data);
    }
});
