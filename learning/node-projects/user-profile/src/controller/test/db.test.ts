const expect = require("chai").expect;
const request = require("supertest");
import server from "../../index";
describe("Test Post /user", () => {
    it("Posting a new user", (done) => {
        request(server).
            post("/user").
            send({
                _id: "2",
                name: "test name"
            }).
            then((response) => {
                const body = response.body;
                expect(body).to.true;
                done();
            });
    });
});
