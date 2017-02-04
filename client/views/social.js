Template.shareit.helpers({
  siteTemplates: function() {
    var i, len, ref, site, templates;
    templates = [];
    ref = ShareIt.settings.siteOrder;
		console.log ('shareIt settings', ShareIt.settings);
    for (i = 0, len = ref.length; i < len; i++) {
      site = ref[i];
      if (ShareIt.settings.sites[site] != null && ShareIt.settings.sites[site].display == true) {
        templates.push('shareit_' + site);
      }
    }
    return templates;
  }
});
