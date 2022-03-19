﻿import { spParserArgs } from "./spParser";
import { DefineItem } from "../Backend/Items/spDefineItem";
import { ParsedID, ParserLocation } from "./interfaces";
import { parsedLocToRange } from "./utils";

/**
 * Callback for a parsed define.
 * @param  {spParserArgs} parserArgs  The parserArgs objects passed to the parser.
 * @param  {ParsedID} id  The id of the define.
 * @param  {ParserLocation} loc  The location of the define.
 * @param  {string|null} value  The value of the define, if it exists.
 * @param  {string} docstring  The documentation of the define.
 * @returns void
 */
export function readDefine(
  parserArgs: spParserArgs,
  id: ParsedID,
  loc: ParserLocation,
  value: string | null,
  docstring: string
): void {
  const range = parsedLocToRange(id.loc);
  const fullRange = parsedLocToRange(loc);
  const defineItem = new DefineItem(
    id.id,
    value,
    docstring,
    parserArgs.filePath,
    range,
    parserArgs.IsBuiltIn,
    fullRange
  );
  parserArgs.fileItems.set(id.id, defineItem);
}
