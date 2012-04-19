Ext.Loader.setConfig({
    enabled: true
});

Ext.define('LeagueHome', {
    extend: 'Ext.container.Container',
    alias: 'widget.leaguehome',

    initComponent: function() {
        var me = this,
            leaguehomebuttons = {
                xtype: 'button',
                height: 40,
                width: 130,
                listeners: {
                    click: function() {
                        // this == the button, as we are in the local scope
                        this.setText('I was clicked!');
                    }
                }
            },
            defaultpanelconfig = {
                xtype: 'panel',
                layout: {align: 'stretch'},
                flex: 1
            };

        me.layout = {
            type: 'anchor',
            align: 'stretch'
        };

        me.defaults = {
            xtype: 'container',
            layout: {type: 'hbox', align: 'stretch'},
            flex: 1
        };

        me.items = [{
            title: 'Top Row',
            anchor: '100% 12%',
            defaults: defaultpanelconfig,
            items: [{
                title: 'Team Logo and Name',
                html: 'team logo and name'
            },{
                title: 'Current Matchup',
                html: 'current matchup',
                flex: 5
            },{
                title: 'LM Note',
                html: 'lm note',
                flex: 2
            }]
        },{
            title: 'Middle Row',
            anchor: '100% 68%',
            defaults: defaultpanelconfig,
            items: [{
                title: 'League and Player Navigation',
                html: 'league and player navigation'
            },{
                title: 'Action Frame',
                html: 'action frame',
                flex: 7
            }]
        },{
            title: 'Bottom Row',
            anchor: '100% 20%',
            defaults: defaultpanelconfig,
            items: [{
                title: 'Chat',
                html: 'chat'
            },{
                title: 'Recent League Activity',
                html: 'recent league activity'
            },{
                title: 'Message Board',
                html: 'message board'
            }]
        }];

        me.callParent(arguments);
    }
});

Ext.onReady(function () {

    Ext.create('Ext.container.Viewport', {
        title: 'League Home',
        layout: 'fit',
        items: [{
            xtype: 'leaguehome'
        }]
    });
});