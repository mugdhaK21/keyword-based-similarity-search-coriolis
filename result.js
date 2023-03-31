$.ajax({
    url: 'https://<your-repl-name>.repl.co/query',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
        'query': 'This is the first document.'
    }),
    success: function(data) {
        var results = $('#results');
        results.empty();
        $.each(data, function(i, result) {
            var doc = $('<p>').text('Document: ' + result.document);
            var score = $('<p>').text('Score: ' + result.score);
            var text = $('<p>').text('Text: ' + result.text);
            results.append(doc, score, text);
        });
    }
});
