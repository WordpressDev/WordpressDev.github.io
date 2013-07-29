(function($){
    var mainViewModel = {
        siteTitle: ko.observable("Built with KnockoutJS"),
        welcomeTitle: ko.observable("This is my github profile page.")
    }

    ko.applyBindings(mainViewModel);
})(jQuery);