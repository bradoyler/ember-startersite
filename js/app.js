App = Ember.Application.create();

App.Router.map(function() {
  this.route("ourwork", { path: "/ourwork" });
  this.route("about", { path: "/about" });
  this.route("contact", { path: "/contact" });

  __device__ = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);
      
});

App.OurworkRoute = Ember.Route.extend({
  model: function() {
    return [
    {www:'http://www.pitchswap.co', name:'pitchswap',image:'http://placehold.it/350x60&text=CLIENT+LOGO+1', desc:'Where ideas come to get pitched!'}, 
    {www:'http://fundingworks.org', name:'fundingworks',image:'http://placehold.it/350x60&text=CLIENT+LOGO+2', desc:'Helping Non-Profits utilize crowd-funding.'}, 
    {www:'http://www.bridesview.com', name:'bridesview',image:'http://placehold.it/350x60&text=CLIENT+LOGO+3', desc:'Helping Brides TO-BE create their dream wedding.'},
    {www:'http://mealtik.com', name:'mealtik',image:'http://placehold.it/350x60&text=CLIENT+LOGO+4', desc:' Your local homemade meal network.'},
    {www:'http://www.W3portals.com', name:'W3portals',image:'http://placehold.it/350x60&text=CLIENT+LOGO+5', desc:' Web development shop'}
           ];
  }
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return ['Practice Agile methodologies and Behavior driven development.',
            'Focus on customer development (Lean Startups)',
            'Help startups & entrepreneurs build innovative products. (checkout: StartupDigest & StartupWeekend)',
            'Realize your apps should be device-agnostic and strive to develop cross-platform & responsive web apps.',
            'Focus on open-source: Javascript, Nodejs, Express, Ember.js, jQuery, Cordova, MongoDb, C#, RavenDB & ASP.Net MVC (yes, it is open) ',
            'Utilize the cloud: AppHarbor, Azure, Heroku, Amazon Web Services, RavenHQ, CloudMine'    
            ];
  }
});

App.IndexView = Em.View.extend({
});

App.OurworkView = Em.View.extend({
});

App.AboutView = Em.View.extend({
});

App.ContactView = Em.View.extend({
});

App.RebelMouseView = Em.View.extend({
    didInsertElement: function() {
       if(!__device__){
          this.$().hide().fadeIn(800);
          var widgetEmbedCode = '<div class="form-header"><h1>Social feed</h1></div><script type="text/javascript" class="rebelmouse-embed-script" src="https://www.rebelmouse.com/static/js-build/embed/embed.js?site=W3portals&height=900&flexible=1"></script>';
         this.$().append(widgetEmbedCode);
      }
    }
});

//desktop-only amimations
if (!__device__) {

    App.IndexView.reopen({
      didInsertElement: function() {
        this.$('#sidecontent').hide().fadeIn(500);
      }
    });

     App.OurworkView.reopen({
      didInsertElement: function() {
         this.$('h1').hide().fadeIn(400);
         this.$('.form-content').hide().slideDown(300);
      }
    });

      App.AboutView.reopen({
      didInsertElement: function() {
         this.$('h1').hide().fadeIn(400);
         this.$('.form-content').hide().slideDown(300);
      }
    });

     App.ContactView.reopen({
      didInsertElement: function() {
         this.$('h1').hide().fadeIn(400);
         this.$('.form-content').hide().slideDown(300);
      }
    });    

}

