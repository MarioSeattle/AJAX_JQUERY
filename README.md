AJAX — "asynchronous JavaScript and XML" — is a means of loading data from a server without
requiring a page reload. It uses a browser's built-in XMLHttpRequest (XHR) functionality to
make a request to the server and then handle the data that the server returns.

jQuery provides the $.ajax method — and several convenience methods — to make it easier to work
with XHRs across browsers (and by easier, I mean MUCH easier).

We can use the jQuery $.ajax() method in a couple of different ways: we can pass it a
configuration object as its sole argument, or we can pass it a URL and an optional
configuration object. Let's take a look at the first approach:


Let's break down the previous code. Recall in HTTP, a request is comprised of 5 values: the HTTP version,
HTTP method, the Path, any headers, and an optional body. $ajax will automatically specify the HTTP
version. We will need to specify the HTTP method, path (or url), headers, and the body. Let's look at
the code in the last example.

        $.ajax({
          url: 'https://dog.ceo/api/breeds/list',
          dataType: 'json'
        })


 A configuration object is sent to the $.ajax call. In it, we specified the URL, which in turn provides
 the path of the request. The dataType is helpful in jQuery as it specifies two things: It specifies in
 HTTP, a header that it expects the data in JSON (discussed soon). Knowing this, jQuery adds a convenience
 of parsing it for you.

 It's important to remember that JSON is a string representation of an object — the string must be
 parsed into an actual JavaScript object before working with it. When you're working with a JSON
 response to an XHR, jQuery takes care of this task for you, but it's crucial to understand the
 difference between the JSON representation of an object, and the object itself.

 Convenience methods

 If we're just making a simple request — and if we don't care about error handling — jQuery provides
 several "convenience methods" that let us use an abbreviated syntax. Each of these methods takes a URL,
  an optional data object, and an optional callback for handling a successful request.

          $.get( '/data/people.html', function( html ){
            $( '#target' ).html( html );
          });

          $.post( '/data/save', { name: 'Rebecca' }, function( resp ) {
            console.log( resp );
          });

    What data type is JSON?

    STR

    What is something to be cautious of when programming with Asynchronous commands like AJAX?

    Waiting for the command to complete to execute code further that requires the action to be completed.

    