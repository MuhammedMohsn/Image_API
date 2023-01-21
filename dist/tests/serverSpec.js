"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("../server");
it('test port is 3000 or not', function () {
    expect(server_1.port).toEqual(3000);
});
