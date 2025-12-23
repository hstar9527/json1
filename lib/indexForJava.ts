import * as json1 from "./index";
import { Doc } from "./types.js";

const op1 = json1.moveOp(["a", "x"], ["a", "y"]);

// // The easiest way to make compound operations is to just compose smaller operations
// const op2 = [
//   json1.moveOp(["a"], ["b"]),
//   json1.insertOp(["b", "z"], "hi there"),
// ].reduce(json1.type.compose, null);

// // op2 = [['a', {p:0}], ['b', {d:0}, 'x', {i: 'hi there'}]]

// const op1_ = json1.type.transform(op1, op2, "left")!;
// // op1_ now moves b.x -> b.y instead, because op2 moved 'a' to 'b'.

let doc: Doc = { a: { x: 5 } };
// doc = json1.type.apply(doc, op2)!; // doc = {b: {x: 5, z: 'hi there'}}
// console.log(doc)
// doc = json1.type.apply(doc, op1_)!; // doc = {b: {y: 5, z: 'hi there'}}
// console.log(doc)
// Using the CP1 diamond property, this is the same as:

// doc: Doc = {a: {x: 5}}
// doc = json1.type.apply(doc, op1) // doc = {a: {y: 5}}
// const op2_ = json1.type.transform(op2, op1, 'right')
// doc = json1.type.apply(doc, op2) // doc = {b: {y: 5, z: 'hi there'}}
