// Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    
    var lat='';
    var lon='';
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position,buttonIndex) {
      
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          + position.timestamp                    + '<br />' +
                            'position: '           + position                              + '<br />' +
                            'buttonIndex: '        + buttonIndex                           + '<br />';
                            
                            lat = position.coords.latitude ;
                            lon = position.coords.longitude;
        
        //alert('Latitude :'+buttonIndex+'xxx'+ position.coords.latitude);
        

    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        
        
        if(buttonIndex==1)
        {
            alert('Latitude : ' + lat);
        }
        else
        {
            alert('Longitude : ' + lon);
        }
        
    }
    function callback() { var x = '';}

    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'GeoLocation', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Select GeoLocation',           // title
            'Latitude,Longitude'         // buttonLabels
        );
    }
