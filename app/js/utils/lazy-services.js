define([], function () {

    var $provide;

    function setProvide(value) {
        console.log(value);
        $provide = value;
    }

    function register(service) {
        if (!$provide) {
            throw new Error("$setProvide is not set!");
        }
        $provide.value(service[0], service[1]);
    }

    return {
        setProvide:setProvide,
        register:register
    }
})
