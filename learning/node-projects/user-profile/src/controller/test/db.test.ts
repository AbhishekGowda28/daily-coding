import * as chai from 'chai';
import 'mocha';
import { server } from '../../index';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
// const expect = chai.expect;

describe('Hello API Request', () => {
    it('should return response on call', () => {
        let chaiLib = <any>chai;
        let chaiRequestLib = chaiLib.default.request;
        return chaiRequestLib(server).get('/user')
            .then(res => {
                console.log(res);
                // chai.expect(res.text).to.eql("true");
            })
    })
})