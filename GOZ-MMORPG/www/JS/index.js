// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.






var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

        $(document).ready(function () {
            AppRouter.start();
            AppRouter.navigate("", { trigger: true })
        })
    }
};

app.initialize();



var META = {
    Login: {
        Title: 'Log on Gods of Zushin!'
    }
};

var TEXT = {
    Login: {
        Title: "Ready to start play GOZ?",
        Subtitle: "Awesome MMORPG",
        LogButton: "Log"
    }
};




var LoginView = Backbone.View.extend({
    // ASSIGN THE TEMPLATE
    template: function () {
        return _.template(TEMPLATES.LOGIN)(TEXT);
    },
    // INIT START
    initialize: function () {
    },
    // RENDER
    render: function (renderOn) {
        console.log("Applying Login Template")
        $(renderOn).html(this.template);
    }
});






// CREATE ROUTER 
var AppRouter = new (Backbone.Router.extend({
    // 
    routes: {
        // LOGIN PAGE
        "": "login"
    },

    // INIT 
    initialize: function () {
        console.log("Init Router");
    },

    /// START THE ROUTER
    start: function () {
        Backbone.history.start({ pushState: true });
    },
    // RENDER LOGIN
    login: function () {
        var loginView = new LoginView();
        loginView.render("#renderResult");
        console.log("Done setting up login page configurations")
    }
}));