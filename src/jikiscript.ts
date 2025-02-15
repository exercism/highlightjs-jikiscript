/*
Language: JikiScript
Description: A hightlightJS Package for JikiScript
Category: scripting
Authors: @iHiD and @erikschierboom
Maintainer: @iHiD
Website: https://exericsm.org/
*/

import { type HLJSApi, type Language, type Mode } from "highlight.js";

export default function (hljs: HLJSApi): Language {

  const STRING: Mode = {
    scope: 'string',
    begin: '"', end: '"'
  }
  const COMMENT: Mode = hljs.C_LINE_COMMENT_MODE
  const KEYWORDS = {
    controlKeyword: "repeat times repeat_until_game_over repeat_forever for each in with to return",
    definitionKeyword: "function set change",
    logicalOperator: "and or is equals not",
    keyword: 'log do end for each if else function with set change to',
    literal: ['false','true'],
  }
  const ALL_KWS = Object.values(KEYWORDS).join(" ").split(" ")

  const NUMBERS: Mode = hljs.C_NUMBER_MODE

  const BOOLEANS =  ["true", "false"]
  const BOOLEAN: Mode = {
    relevance: 0,
    match: hljs.regex.either(...BOOLEANS),
    className: "bool"
  };

  const OPERATORS =  "> < >= <= == != !"
  const OPERATOR: Mode = {
    relevance: 0,
    match: hljs.regex.either(...OPERATORS),
    className: "operator"
  };

  const PARENS = [/\(/, /\)/];
  const PAREN: Mode = {
    relevance: 0,
    match: hljs.regex.either(...PARENS),
    className: "paren"
  };

  const SQUARE_BRACKETS = [/\[/, /\]/];
  const SQUARE_BRACKET: Mode = {
    relevance: 0,
    match: hljs.regex.either(...SQUARE_BRACKETS),
    className: "squareBracket"
  };

  const ARITHMETIC_OPERATORS = [/\*/, "%", /\+/, /\-/, /\//];
  const ARITHMETIC_OPERATOR: Mode = {
    relevance: 0,
    match: hljs.regex.either(...ARITHMETIC_OPERATORS),
    className: "arithmeticOperator"
  };
  const VARIABLE = {
    relevance: 0,
    match: hljs.regex.concat(
      "\\b(?!",
      ALL_KWS.join("|"),
      "\\b)",
      /[a-zA-Z_]\w*(?:[?!]|\b)/
    ),
    className: "variableName"
  };

  return {
    name: "JikiScript",
    case_insensitive: false,
    keywords: KEYWORDS,
    contains: [
      STRING,
      COMMENT,
      NUMBERS,
      OPERATOR,
      ARITHMETIC_OPERATOR,
      PAREN,
      SQUARE_BRACKET,
      BOOLEAN,
      VARIABLE,
    ],
  };
}
