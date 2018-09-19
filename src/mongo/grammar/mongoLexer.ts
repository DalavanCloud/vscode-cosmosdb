// Generated from ./grammar/mongo.g4 by ANTLR 4.6-SNAPSHOT


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

 /*tslint:disable */


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class mongoLexer extends Lexer {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly T__3=4;
	public static readonly T__4=5;
	public static readonly T__5=6;
	public static readonly T__6=7;
	public static readonly T__7=8;
	public static readonly RegexLiteral=9;
	public static readonly SingleLineComment=10;
	public static readonly MultiLineComment=11;
	public static readonly StringLiteral=12;
	public static readonly NullLiteral=13;
	public static readonly BooleanLiteral=14;
	public static readonly NumericLiteral=15;
	public static readonly DecimalLiteral=16;
	public static readonly ObjectIDLiteral=17;
	public static readonly LineTerminator=18;
	public static readonly SEMICOLON=19;
	public static readonly DOT=20;
	public static readonly DB=21;
	public static readonly IDENTIFIER=22;
	public static readonly DOUBLE_QUOTED_STRING_LITERAL=23;
	public static readonly SINGLE_QUOTED_STRING_LITERAL=24;
	public static readonly WHITESPACE=25;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "RegexLiteral", 
		"RegexFlag", "SingleLineComment", "MultiLineComment", "StringLiteral", 
		"NullLiteral", "BooleanLiteral", "NumericLiteral", "DecimalLiteral", "ObjectIDLiteral", 
		"LineTerminator", "SEMICOLON", "DOT", "DB", "IDENTIFIER", "DOUBLE_QUOTED_STRING_LITERAL", 
		"SINGLE_QUOTED_STRING_LITERAL", "STRING_ESCAPE", "DecimalIntegerLiteral", 
		"ExponentPart", "DecimalDigit", "WHITESPACE"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'('", "','", "')'", "'{'", "'}'", "'['", "']'", "':'", undefined, 
		undefined, undefined, undefined, "'null'", undefined, undefined, undefined, 
		undefined, undefined, "';'", "'.'", "'db'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "RegexLiteral", "SingleLineComment", "MultiLineComment", 
		"StringLiteral", "NullLiteral", "BooleanLiteral", "NumericLiteral", "DecimalLiteral", 
		"ObjectIDLiteral", "LineTerminator", "SEMICOLON", "DOT", "DB", "IDENTIFIER", 
		"DOUBLE_QUOTED_STRING_LITERAL", "SINGLE_QUOTED_STRING_LITERAL", "WHITESPACE"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mongoLexer._LITERAL_NAMES, mongoLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return mongoLexer.VOCABULARY;
	}


		private isExternalIdentifierText(text) {
			return text === 'db';
		}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(mongoLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "mongo.g4"; }

	@Override
	public get ruleNames(): string[] { return mongoLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return mongoLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return mongoLexer.modeNames; }

	@Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 22:
			return this.IDENTIFIER_sempred(_localctx, predIndex);
		}
		return true;
	}
	private IDENTIFIER_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return !this.isExternalIdentifierText(this.text)
				;
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x1B\u0103\b\x01"+
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06"+
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r"+
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t"+
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t"+
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t"+
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x03\x02\x03\x02\x03\x03"+
		"\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07"+
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x06\nT\n\n\r\n\x0E\n"+
		"U\x03\n\x03\n\x07\nZ\n\n\f\n\x0E\n]\v\n\x03\v\x03\v\x03\f\x03\f\x03\f"+
		"\x03\f\x07\fe\n\f\f\f\x0E\fh\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07"+
		"\rp\n\r\f\r\x0E\rs\v\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x05"+
		"\x0E|\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03"+
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\x8C\n\x10"+
		"\x03\x11\x05\x11\x8F\n\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x06"+
		"\x12\x96\n\x12\r\x12\x0E\x12\x97\x03\x12\x05\x12\x9B\n\x12\x03\x12\x03"+
		"\x12\x06\x12\x9F\n\x12\r\x12\x0E\x12\xA0\x03\x12\x05\x12\xA4\n\x12\x03"+
		"\x12\x03\x12\x05\x12\xA8\n\x12\x05\x12\xAA\n\x12\x03\x13\x03\x13\x03\x13"+
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13"+
		"\x06\x13\xB8\n\x13\r\x13\x0E\x13\xB9\x03\x13\x05\x13\xBD\n\x13\x03\x13"+
		"\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16"+
		"\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x06\x18\xCE\n\x18\r\x18\x0E\x18"+
		"\xCF\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x07\x19\xD7\n\x19\f\x19\x0E"+
		"\x19\xDA\v\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x07\x1A\xE1\n\x1A"+
		"\f\x1A\x0E\x1A\xE4\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C"+
		"\x03\x1C\x03\x1C\x07\x1C\xEE\n\x1C\f\x1C\x0E\x1C\xF1\v\x1C\x05\x1C\xF3"+
		"\n\x1C\x03\x1D\x03\x1D\x05\x1D\xF7\n\x1D\x03\x1D\x06\x1D\xFA\n\x1D\r\x1D"+
		"\x0E\x1D\xFB\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03q\x02"+
		"\x02 \x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b"+
		"\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\x02\x17\x02\f\x19\x02\r\x1B\x02"+
		"\x0E\x1D\x02\x0F\x1F\x02\x10!\x02\x11#\x02\x12%\x02\x13\'\x02\x14)\x02"+
		"\x15+\x02\x16-\x02\x17/\x02\x181\x02\x193\x02\x1A5\x02\x027\x02\x029\x02"+
		"\x02;\x02\x02=\x02\x1B\x03\x02\x0F\x03\x0211\x07\x02iikkooww{{\x05\x02"+
		"\f\f\x0F\x0F\u202A\u202B\x05\x022;CHch\f\x02\v\f\x0F\x0F\"\"$$)+.0<=]"+
		"_}}\x7F\x7F\x04\x02$$^^\x04\x02))^^\x05\x02$$))^^\x03\x023;\x04\x02GG"+
		"gg\x04\x02--//\x03\x022;\x04\x02\v\v\"\"\u0118\x02\x03\x03\x02\x02\x02"+
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02"+
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02"+
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02"+
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02"+
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03"+
		"\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02"+
		"\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x02"+
		"3\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x03?\x03\x02\x02\x02\x05A\x03\x02"+
		"\x02\x02\x07C\x03\x02\x02\x02\tE\x03\x02\x02\x02\vG\x03\x02\x02\x02\r"+
		"I\x03\x02\x02\x02\x0FK\x03\x02\x02\x02\x11M\x03\x02\x02\x02\x13O\x03\x02"+
		"\x02\x02\x15^\x03\x02\x02\x02\x17`\x03\x02\x02\x02\x19k\x03\x02\x02\x02"+
		"\x1B{\x03\x02\x02\x02\x1D}\x03\x02\x02\x02\x1F\x8B\x03\x02\x02\x02!\x8E"+
		"\x03\x02\x02\x02#\xA9\x03\x02\x02\x02%\xAB\x03\x02\x02\x02\'\xC0\x03\x02"+
		"\x02\x02)\xC4\x03\x02\x02\x02+\xC6\x03\x02\x02\x02-\xC8\x03\x02\x02\x02"+
		"/\xCD\x03\x02\x02\x021\xD3\x03\x02\x02\x023\xDD\x03\x02\x02\x025\xE7\x03"+
		"\x02\x02\x027\xF2\x03\x02\x02\x029\xF4\x03\x02\x02\x02;\xFD\x03\x02\x02"+
		"\x02=\xFF\x03\x02\x02\x02?@\x07*\x02\x02@\x04\x03\x02\x02\x02AB\x07.\x02"+
		"\x02B\x06\x03\x02\x02\x02CD\x07+\x02\x02D\b\x03\x02\x02\x02EF\x07}\x02"+
		"\x02F\n\x03\x02\x02\x02GH\x07\x7F\x02\x02H\f\x03\x02\x02\x02IJ\x07]\x02"+
		"\x02J\x0E\x03\x02\x02\x02KL\x07_\x02\x02L\x10\x03\x02\x02\x02MN\x07<\x02"+
		"\x02N\x12\x03\x02\x02\x02OS\x071\x02\x02PT\n\x02\x02\x02QR\x07^\x02\x02"+
		"RT\x071\x02\x02SP\x03\x02\x02\x02SQ\x03\x02\x02\x02TU\x03\x02\x02\x02"+
		"US\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x03\x02\x02\x02W[\x071\x02\x02"+
		"XZ\x05\x15\v\x02YX\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02"+
		"[\\\x03\x02\x02\x02\\\x14\x03\x02\x02\x02][\x03\x02\x02\x02^_\t\x03\x02"+
		"\x02_\x16\x03\x02\x02\x02`a\x071\x02\x02ab\x071\x02\x02bf\x03\x02\x02"+
		"\x02ce\n\x04\x02\x02dc\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02"+
		"\x02fg\x03\x02\x02\x02gi\x03\x02\x02\x02hf\x03\x02\x02\x02ij\b\f\x02\x02"+
		"j\x18\x03\x02\x02\x02kl\x071\x02\x02lm\x07,\x02\x02mq\x03\x02\x02\x02"+
		"np\v\x02\x02\x02on\x03\x02\x02\x02ps\x03\x02\x02\x02qr\x03\x02\x02\x02"+
		"qo\x03\x02\x02\x02rt\x03\x02\x02\x02sq\x03\x02\x02\x02tu\x07,\x02\x02"+
		"uv\x071\x02\x02vw\x03\x02\x02\x02wx\b\r\x02\x02x\x1A\x03\x02\x02\x02y"+
		"|\x053\x1A\x02z|\x051\x19\x02{y\x03\x02\x02\x02{z\x03\x02\x02\x02|\x1C"+
		"\x03\x02\x02\x02}~\x07p\x02\x02~\x7F\x07w\x02\x02\x7F\x80\x07n\x02\x02"+
		"\x80\x81\x07n\x02\x02\x81\x1E\x03\x02\x02\x02\x82\x83\x07v\x02\x02\x83"+
		"\x84\x07t\x02\x02\x84\x85\x07w\x02\x02\x85\x8C\x07g\x02\x02\x86\x87\x07"+
		"h\x02\x02\x87\x88\x07c\x02\x02\x88\x89\x07n\x02\x02\x89\x8A\x07u\x02\x02"+
		"\x8A\x8C\x07g\x02\x02\x8B\x82\x03\x02\x02\x02\x8B\x86\x03\x02\x02\x02"+
		"\x8C \x03\x02\x02\x02\x8D\x8F\x07/\x02\x02\x8E\x8D\x03\x02\x02\x02\x8E"+
		"\x8F\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x05#\x12\x02\x91"+
		"\"\x03\x02\x02\x02\x92\x93\x057\x1C\x02\x93\x95\x070\x02\x02\x94\x96\x05"+
		";\x1E\x02\x95\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x95\x03"+
		"\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x9B\x05"+
		"9\x1D\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\xAA\x03"+
		"\x02\x02\x02\x9C\x9E\x070\x02\x02\x9D\x9F\x05;\x1E\x02\x9E\x9D\x03\x02"+
		"\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02"+
		"\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA4\x059\x1D\x02\xA3\xA2\x03\x02"+
		"\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xAA\x03\x02\x02\x02\xA5\xA7\x057"+
		"\x1C\x02\xA6\xA8\x059\x1D\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02"+
		"\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\x92\x03\x02\x02\x02\xA9\x9C\x03\x02"+
		"\x02\x02\xA9\xA5\x03\x02\x02\x02\xAA$\x03\x02\x02\x02\xAB\xAC\x07Q\x02"+
		"\x02\xAC\xAD\x07d\x02\x02\xAD\xAE\x07l\x02\x02\xAE\xAF\x07g\x02\x02\xAF"+
		"\xB0\x07e\x02\x02\xB0\xB1\x07v\x02\x02\xB1\xB2\x07K\x02\x02\xB2\xB3\x07"+
		"F\x02\x02\xB3\xB4\x07*\x02\x02\xB4\xBC\x03\x02\x02\x02\xB5\xB7\x07$\x02"+
		"\x02\xB6\xB8\t\x05\x02\x02\xB7\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02"+
		"\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02"+
		"\x02\xBB\xBD\x07$\x02\x02\xBC\xB5\x03\x02\x02\x02\xBC\xBD\x03\x02\x02"+
		"\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x07+\x02\x02\xBF&\x03\x02\x02\x02"+
		"\xC0\xC1\t\x04\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\b\x14\x02\x02\xC3"+
		"(\x03\x02\x02\x02\xC4\xC5\x07=\x02\x02\xC5*\x03\x02\x02\x02\xC6\xC7\x07"+
		"0\x02\x02\xC7,\x03\x02\x02\x02\xC8\xC9\x07f\x02\x02\xC9\xCA\x07d\x02\x02"+
		"\xCA.\x03\x02\x02\x02\xCB\xCE\n\x06\x02\x02\xCC\xCE\x055\x1B\x02\xCD\xCB"+
		"\x03\x02\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xCD"+
		"\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2"+
		"\x06\x18\x02\x02\xD20\x03\x02\x02\x02\xD3\xD8\x07$\x02\x02\xD4\xD7\n\x07"+
		"\x02\x02\xD5\xD7\x055\x1B\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD5\x03\x02"+
		"\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02"+
		"\x02\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDC\x07$"+
		"\x02\x02\xDC2\x03\x02\x02\x02\xDD\xE2\x07)\x02\x02\xDE\xE1\n\b\x02\x02"+
		"\xDF\xE1\x055\x1B\x02\xE0\xDE\x03\x02\x02\x02\xE0\xDF\x03\x02\x02\x02"+
		"\xE1\xE4\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02"+
		"\xE3\xE5\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE6\x07)\x02\x02"+
		"\xE64\x03\x02\x02\x02\xE7\xE8\x07^\x02\x02\xE8\xE9\t\t\x02\x02\xE96\x03"+
		"\x02\x02\x02\xEA\xF3\x072\x02\x02\xEB\xEF\t\n\x02\x02\xEC\xEE\x05;\x1E"+
		"\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1\x03\x02\x02\x02\xEF\xED\x03\x02\x02"+
		"\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF3\x03\x02\x02\x02\xF1\xEF\x03\x02\x02"+
		"\x02\xF2\xEA\x03\x02\x02\x02\xF2\xEB\x03\x02\x02\x02\xF38\x03\x02\x02"+
		"\x02\xF4\xF6\t\v\x02\x02\xF5\xF7\t\f\x02\x02\xF6\xF5\x03\x02\x02\x02\xF6"+
		"\xF7\x03\x02\x02\x02\xF7\xF9\x03\x02\x02\x02\xF8\xFA\x05;\x1E\x02\xF9"+
		"\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB"+
		"\xFC\x03\x02\x02\x02\xFC:\x03\x02\x02\x02\xFD\xFE\t\r\x02\x02\xFE<\x03"+
		"\x02\x02\x02\xFF\u0100\t\x0E\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101"+
		"\u0102\b\x1F\x03\x02\u0102>\x03\x02\x02\x02\x1D\x02SU[fq{\x8B\x8E\x97"+
		"\x9A\xA0\xA3\xA7\xA9\xB9\xBC\xCD\xCF\xD6\xD8\xE0\xE2\xEF\xF2\xF6\xFB\x04"+
		"\x02\x03\x02\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mongoLexer.__ATN) {
			mongoLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mongoLexer._serializedATN));
		}

		return mongoLexer.__ATN;
	}

}

