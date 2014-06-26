define('app/views/popup', ['app/views/controlled', 'ember'],
    //
    //  Popup View
    //
    //  @returns Class
    //
    function (ControlledView) {

        'use strict';

        return ControlledView.extend({


            //
            //
            //  Properties
            //
            //


            popupId: null,


            //
            //
            //  Initialization
            //
            //


            init: function () {
                this._super();
                this.set('popupId', '#' +
                    Mist.decapitalizeArray(
                        Mist.splitWords(
                            Mist.getViewName(this)
                        )
                    ).join('-')
                );
            },


            //
            //
            //  Methods
            //
            //


            open: function () {
                $(this.popupId).popup('open');
            },


            close: function () {
                $(this.popupId).popup('close');
            }
        });
    }
);
