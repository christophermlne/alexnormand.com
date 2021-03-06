require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    prettify: 'libs/google-code-prettify/src/prettify',
    site: 'site'
  }
});

require(['jquery', 'prettify', 'site'], function($, prettify, site) {

  $(function() {
    window._gaq = window._gaq || [];
    window._gaq.push(['_setAccount', 'UA-27119715-3']);
    window._gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

    site.init();

  });
});



