(function() {
    console.log("two way data binding implementation");
    var elements = document.querySelectorAll('[gr2]');
    var dbRepo = {};
    elements.forEach((element) => {
        if (element.type === 'text') {
            var bindingProperty = element.getAttribute('gr2');
            addToScope();
            element.onkeyup = () => {
                dbRepo[bindingProperty] = element.value;
            }
        }

        function addToScope() {
            if (!dbRepo.hasOwnProperty(bindingProperty)) {
                let value;
                Object.defineProperty(dbRepo, bindingProperty, {
                    configurable: true,
                    enumerable: true,
                    set: function(newValue) {
                        value = newValue;
                        elements.forEach(e => {
                            if (e.getAttribute('gr2') === bindingProperty) {
                                if (e.type === 'text') {
                                    e.value = newValue;
                                } else if (!e.type) {
                                    e.innerHTML = newValue;
                                }
                            }
                        })
                    },
                    get: function() {
                        return value;
                    }
                })

            }
        }
    });
})();