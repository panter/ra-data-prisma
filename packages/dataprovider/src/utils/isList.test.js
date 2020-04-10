"use strict";
exports.__esModule = true;
var graphql_1 = require("graphql");
var isList_1 = require("./isList");
describe('isList', function () {
    it('returns the correct type for SCALAR types', function () {
        expect(isList_1["default"]({ name: 'foo', kind: graphql_1.TypeKind.SCALAR })).toEqual(false);
    });
    it('returns the correct type for NON_NULL types', function () {
        expect(isList_1["default"]({
            kind: graphql_1.TypeKind.NON_NULL,
            ofType: { name: 'foo', kind: graphql_1.TypeKind.SCALAR }
        })).toEqual(false);
    });
    it('returns the correct type for LIST types', function () {
        expect(isList_1["default"]({
            kind: graphql_1.TypeKind.LIST,
            ofType: { name: 'foo', kind: graphql_1.TypeKind.SCALAR }
        })).toEqual(true);
    });
    it('returns the correct type for NON_NULL LIST types', function () {
        expect(isList_1["default"]({
            kind: graphql_1.TypeKind.NON_NULL,
            ofType: {
                kind: graphql_1.TypeKind.LIST,
                ofType: { name: 'foo', kind: graphql_1.TypeKind.SCALAR }
            }
        })).toEqual(true);
    });
});
