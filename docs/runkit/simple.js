let { ServiceBroker, Service} = require("servicer");

// Create a broker
let broker = new ServiceBroker();

// Create a service
new Service(broker, {
    name: "math",    
    actions: {
        add(ctx) {
            return ctx.params.a + ctx.params.b
        }
    }
});

// Call the service action
let result = await broker.call("math.add", { a: 5, b: 3});
console.log("5 + 3 = " + result);

