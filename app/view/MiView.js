Ext.define('Forrest.view.MiView', {
      extend: 'Ext.tab.Panel',
      config: {
        layout: { animation: 'flip' },
        tabBarPosition: 'bottom',
        items: [
          {
            title: 'Poster',
            iconCls: 'home', 
            xtype: 'image', 
            src: 'http://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg', 
          }, 
          {
            title: 'Sinopsis',
            iconCls: 'info', iconMask: true,
            style: 'background-color: #e17467', 
            html: 'Forrest Gump es una novela cómico-dramática escrita por Winston Groom y publicada en 1986 por Doubleday. La novela tuvo una adaptación cinematográfica que llegó a lograr tanto éxito, que Groom creó una secuela de la novela llamada Gump & Co., que cuenta la vida de Forrest y su hijo. Forrest Gump es un joven que tiene un bajo coeficiente intelectual, pero es humilde e inocente. Los avatares de su vida le llevarán a ser un héroe nacional, un gran jugador de fútbol americano y un gran deportista. El libro relata la vida de Forrest Gump durante varios sucesos históricos como la guerra de Vietnam.'
          },
          {
            title: 'Acciones',
            iconCls: 'more', iconMask: true, style: 'background-color: #74e796', 
            xtype: 'container',
            items: [
              {
                xtype: 'button', 
                text: 'Marcar como favorita', 
                iconCls: 'favorites', 
                listeners: {
                  tap: function (button, e, eOpts) { 
                    Ext.Msg.alert('Se ha marcado como favorita'); 
                  } 
                }
              },
              {
                xtype: 'button', 
                text: 'Ver Protagonistas', 
                iconCls: 'team', 
                listeners: {
                  tap: function (button, e, eOpts) { 
                    Ext.Msg.alert('Los protagonistas son ....'); 
                  } 
                }
              }, 
              {
                xtype: 'button', 
                text: 'Voto a favor', 
                iconCls: 'arrow_up', 
                listeners: {
                  tap: function (button, e, eOpts) { 
                    Ext.Msg.alert('¡Voto positivo registrado!'); 
                  } 
                }
              },
              {
                xtype: 'button', 
                text: 'Voto en contra', 
                iconCls: 'arrow_down', 
                listeners: {
                  tap: function (button, e, eOpts) { 
                    Ext.Msg.alert('¡Voto negativo registrado!'); 
                  } 
                }
              }
            ]
          }, 
        ] 
      }
});