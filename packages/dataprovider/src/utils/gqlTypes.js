"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var graphql_1 = require("graphql");
// Functional utils to easily build GraphQL ASTs
// Inspired by https://github.com/imranolas/graphql-ast-types
exports.document = function (definitions) { return ({
    kind: graphql_1.Kind.DOCUMENT,
    definitions: definitions
}); };
exports.operationDefinition = function (operation, selectionSet, name, variableDefinitions) { return ({
    kind: graphql_1.Kind.OPERATION_DEFINITION,
    operation: operation,
    selectionSet: selectionSet,
    name: name,
    variableDefinitions: variableDefinitions
}); };
exports.selectionSet = function (selections) { return ({
    kind: graphql_1.Kind.SELECTION_SET,
    selections: selections
}); };
exports.field = function (name, optionalValues) {
    if (optionalValues === void 0) { optionalValues = {}; }
    return (__assign({ kind: graphql_1.Kind.FIELD, name: name }, optionalValues));
};
exports.listType = function (type) { return ({
    kind: graphql_1.Kind.LIST_TYPE,
    type: type
}); };
exports.nonNullType = function (type) { return ({
    kind: graphql_1.Kind.NON_NULL_TYPE,
    type: type
}); };
exports.variableDefinition = function (variable, type) { return ({
    kind: graphql_1.Kind.VARIABLE_DEFINITION,
    variable: variable,
    type: type
}); };
exports.variable = function (name) { return ({
    kind: graphql_1.Kind.VARIABLE,
    name: name
}); };
exports.name = function (value) { return ({
    kind: graphql_1.Kind.NAME,
    value: value
}); };
exports.namedType = function (name) { return ({
    kind: graphql_1.Kind.NAMED_TYPE,
    name: name
}); };
exports.argument = function (name, value) { return ({
    kind: graphql_1.Kind.ARGUMENT,
    name: name,
    value: value
}); };
