define([], function () {

    var $provide;

    function setProvide(value) {
        $provide = value;
    }

    function register(service) {
        if (service) {
            if (!$provide) {
                throw new Error("$setProvide is not set!");
            }
            $provide.value(service[0], service[1]);
        } else {
            $provide.value = null;
        }

    }


    return {
        setProvide: setProvide,
        register: register
    }
})
