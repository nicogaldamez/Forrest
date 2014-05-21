Ext.application({
  name: 'Forrest',
  views: [
    'MiView'
  ],
  launch: function () {
    Ext.create('Forrest.view.MiView', {fullscreen: true});
  }
});
