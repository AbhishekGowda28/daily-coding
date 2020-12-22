import { expect } from "chai";
import server from "../../index";
const request = require("supertest");
describe("Testing /user", () => {
    it("Adding a new user", (done) => {
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
            }).catch(err => {
                done(err);
            });
    });
    it("Get list of all users", (done) => {
        request(server).get("/user").then((response) => {
            const list = response.body;
            expect(list).not.null;
            done();
        }).catch(err => {
            done(err);
        });
    });
    it("Update user", (done) => {
        request(server).put("/user").send({ _id: "2", name: "updated User Name" }).then(response => {
            const result = response.body;
            expect(result).to.true;
            done();
        }).catch(err => done(err));
    });

    it("Delete Existing User", (done) => {
        request(server).delete("/user").send({_id:"2"}).then(response => {
            const result = response.body;
            expect(result).to.true;
            done();
        }).catch(err => done(err));
    });
});
