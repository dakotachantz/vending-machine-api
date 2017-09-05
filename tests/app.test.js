const request = require("supertest");
const app = require("../app");

const item = [{
    description: "lays",
    cost: 100,
    quantity: 5
}]

const purchase = [{
    money_given: 100,
    money_required: 100,
    total_money: 500,
}]

describe(" /api/vendor routes ", function () {
    // write a before and after block to add and delete a specific item
    it("should GET /api/vendor/items - get an empty list of items at this point", function () {
        return request(app).get("/api/vendor/items")
            .then((response) => {
                expect(typeof (response.body)).toBe("object");
                expect(response.body.data.length).toBe(0);
                expect(response.status).toBe(200);
            });
    });
    it("should POST /api/vendor/items - add a new item not previously existing in the machine", function () {
        return request(app).post("/api/vendor/items")
            .send(item[0])
            .then((response) => {
                expect(response.status).toBe(200);
                expect(response.body.data.description).toBe("lays");
                expect(response.body.data.cost).toBe(100);
                expect(response.body.data.quantity).toBe(5);
                expect(response.body.data._id).toBeDefined();
                expect(typeof (response.body.data._id)).toBe("string");
            });
    });
    it("should GET /api/vendor/items - get a list of items", function () {
        return request(app).get("/api/vendor/items")
            .then((response) => {
                expect(typeof (response.body)).toBe("object");
                expect(response.body.data.length).toBeTruthy();
                // does an item have specific properties...name?
                expect(response.body.data[0].description).toBe("lays");
                // if you added an item in a previous test, does it exist?
            });
    });
}); //end of describe block

describe(" /api/customer routes ", function () {
    it("should GET /api/customer/items - get a list of items", function () {
        return request(app).get("/api/customer/items")
            .then((response) => {
                expect(typeof (response.body)).toBe("object");
                expect(response.body.data.length).toBeTruthy();
                expect(response.body.data[0].description).toBe("lays");
            });
    });

}); //end of describe block


