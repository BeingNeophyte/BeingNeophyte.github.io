$(document).ready(function(){
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('ccd964ce00d1d6c1430e', {
        cluster: 'ap2',
        encrypted: false
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', onMessageAdded);

    $('#btn-chat').click(function(){
        const message = $("#message").val();
        $("#message").val("");

        //send message
        $.post( "https://neophyte.cf/src/message", { message } );
    });

    function onMessageAdded(data) {
        let template = $("#new-message").html();
        template = template.replace("{{body}}", data.message);

        $(".chat").append(template);
    }
});
