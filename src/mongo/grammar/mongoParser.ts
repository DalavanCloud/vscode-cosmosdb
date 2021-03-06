// Generated from ./grammar/mongo.g4 by ANTLR 4.6-SNAPSHOT


/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/*tslint:disable */


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { NotNull, Override } from 'antlr4ts/Decorators';
import * as Utils from 'antlr4ts/misc/Utils';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';
import { mongoListener } from './mongoListener';
import { mongoVisitor } from './mongoVisitor';




export class mongoParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly RegexLiteral = 9;
	public static readonly SingleLineComment = 10;
	public static readonly MultiLineComment = 11;
	public static readonly StringLiteral = 12;
	public static readonly NullLiteral = 13;
	public static readonly BooleanLiteral = 14;
	public static readonly NumericLiteral = 15;
	public static readonly DecimalLiteral = 16;
	public static readonly LineTerminator = 17;
	public static readonly SEMICOLON = 18;
	public static readonly DOT = 19;
	public static readonly DB = 20;
	public static readonly IDENTIFIER = 21;
	public static readonly DOUBLE_QUOTED_STRING_LITERAL = 22;
	public static readonly SINGLE_QUOTED_STRING_LITERAL = 23;
	public static readonly WHITESPACE = 24;
	public static readonly RULE_mongoCommands = 0;
	public static readonly RULE_commands = 1;
	public static readonly RULE_command = 2;
	public static readonly RULE_emptyCommand = 3;
	public static readonly RULE_collection = 4;
	public static readonly RULE_functionCall = 5;
	public static readonly RULE_arguments = 6;
	public static readonly RULE_argument = 7;
	public static readonly RULE_objectLiteral = 8;
	public static readonly RULE_arrayLiteral = 9;
	public static readonly RULE_elementList = 10;
	public static readonly RULE_propertyNameAndValueList = 11;
	public static readonly RULE_propertyAssignment = 12;
	public static readonly RULE_propertyValue = 13;
	public static readonly RULE_literal = 14;
	public static readonly RULE_propertyName = 15;
	public static readonly RULE_comment = 16;
	public static readonly ruleNames: string[] = [
		"mongoCommands", "commands", "command", "emptyCommand", "collection",
		"functionCall", "arguments", "argument", "objectLiteral", "arrayLiteral",
		"elementList", "propertyNameAndValueList", "propertyAssignment", "propertyValue",
		"literal", "propertyName", "comment"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'('", "','", "')'", "'{'", "'}'", "'['", "']'", "':'", undefined,
		undefined, undefined, undefined, "'null'", undefined, undefined, undefined,
		undefined, "';'", "'.'", "'db'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, "RegexLiteral", "SingleLineComment", "MultiLineComment",
		"StringLiteral", "NullLiteral", "BooleanLiteral", "NumericLiteral", "DecimalLiteral",
		"LineTerminator", "SEMICOLON", "DOT", "DB", "IDENTIFIER", "DOUBLE_QUOTED_STRING_LITERAL",
		"SINGLE_QUOTED_STRING_LITERAL", "WHITESPACE"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mongoParser._LITERAL_NAMES, mongoParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return mongoParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "mongo.g4"; }

	@Override
	public get ruleNames(): string[] { return mongoParser.ruleNames; }

	@Override
	public get serializedATN(): string { return mongoParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(mongoParser._ATN, this);
	}
	@RuleVersion(0)
	public mongoCommands(): MongoCommandsContext {
		let _localctx: MongoCommandsContext = new MongoCommandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, mongoParser.RULE_mongoCommands);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 34;
				this.commands();
				this.state = 35;
				this.match(mongoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public commands(): CommandsContext {
		let _localctx: CommandsContext = new CommandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, mongoParser.RULE_commands);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 42;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mongoParser.SingleLineComment) | (1 << mongoParser.MultiLineComment) | (1 << mongoParser.SEMICOLON) | (1 << mongoParser.DB))) !== 0)) {
					{
						this.state = 40;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
							case mongoParser.DB:
								{
									this.state = 37;
									this.command();
								}
								break;
							case mongoParser.SEMICOLON:
								{
									this.state = 38;
									this.emptyCommand();
								}
								break;
							case mongoParser.SingleLineComment:
							case mongoParser.MultiLineComment:
								{
									this.state = 39;
									this.comment();
								}
								break;
							default:
								throw new NoViableAltException(this);
						}
					}
					this.state = 44;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mongoParser.RULE_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 45;
				this.match(mongoParser.DB);
				this.state = 46;
				this.match(mongoParser.DOT);
				this.state = 52;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
					case 1:
						{
							this.state = 47;
							this.functionCall();
						}
						break;

					case 2:
						{
							{
								this.state = 48;
								this.collection();
								this.state = 49;
								this.match(mongoParser.DOT);
								this.state = 50;
								this.functionCall();
							}
						}
						break;
				}
				this.state = 55;
				this._errHandler.sync(this);
				switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
					case 1:
						{
							this.state = 54;
							this.match(mongoParser.SEMICOLON);
						}
						break;
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public emptyCommand(): EmptyCommandContext {
		let _localctx: EmptyCommandContext = new EmptyCommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, mongoParser.RULE_emptyCommand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 57;
				this.match(mongoParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public collection(): CollectionContext {
		let _localctx: CollectionContext = new CollectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, mongoParser.RULE_collection);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 59;
				this.match(mongoParser.IDENTIFIER);
				this.state = 64;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 60;
								this.match(mongoParser.DOT);
								this.state = 61;
								this.match(mongoParser.IDENTIFIER);
							}
						}
					}
					this.state = 66;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, mongoParser.RULE_functionCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 67;
				_localctx._FUNCTION_NAME = this.match(mongoParser.IDENTIFIER);
				this.state = 68;
				this.arguments();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, mongoParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 70;
				_localctx._OPEN_PARENTHESIS = this.match(mongoParser.T__0);
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mongoParser.T__3) | (1 << mongoParser.T__5) | (1 << mongoParser.RegexLiteral) | (1 << mongoParser.StringLiteral) | (1 << mongoParser.NullLiteral) | (1 << mongoParser.BooleanLiteral) | (1 << mongoParser.NumericLiteral))) !== 0)) {
					{
						this.state = 71;
						this.argument();
						this.state = 76;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === mongoParser.T__1) {
							{
								{
									this.state = 72;
									this.match(mongoParser.T__1);
									this.state = 73;
									this.argument();
								}
							}
							this.state = 78;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
					}
				}

				this.state = 81;
				_localctx._CLOSED_PARENTHESIS = this.match(mongoParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, mongoParser.RULE_argument);
		try {
			this.state = 86;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case mongoParser.RegexLiteral:
				case mongoParser.StringLiteral:
				case mongoParser.NullLiteral:
				case mongoParser.BooleanLiteral:
				case mongoParser.NumericLiteral:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 83;
						this.literal();
					}
					break;
				case mongoParser.T__3:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 84;
						this.objectLiteral();
					}
					break;
				case mongoParser.T__5:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 85;
						this.arrayLiteral();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let _localctx: ObjectLiteralContext = new ObjectLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, mongoParser.RULE_objectLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 88;
				this.match(mongoParser.T__3);
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === mongoParser.StringLiteral || _la === mongoParser.IDENTIFIER) {
					{
						this.state = 89;
						this.propertyNameAndValueList();
					}
				}

				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === mongoParser.T__1) {
					{
						this.state = 92;
						this.match(mongoParser.T__1);
					}
				}

				this.state = 95;
				this.match(mongoParser.T__4);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mongoParser.RULE_arrayLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 97;
				this.match(mongoParser.T__5);
				this.state = 99;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mongoParser.T__3) | (1 << mongoParser.T__5) | (1 << mongoParser.RegexLiteral) | (1 << mongoParser.StringLiteral) | (1 << mongoParser.NullLiteral) | (1 << mongoParser.BooleanLiteral) | (1 << mongoParser.NumericLiteral) | (1 << mongoParser.IDENTIFIER))) !== 0)) {
					{
						this.state = 98;
						this.elementList();
					}
				}

				this.state = 101;
				this.match(mongoParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, mongoParser.RULE_elementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 103;
				this.propertyValue();
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mongoParser.T__1) {
					{
						{
							this.state = 104;
							this.match(mongoParser.T__1);
							this.state = 105;
							this.propertyValue();
						}
					}
					this.state = 110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyNameAndValueList(): PropertyNameAndValueListContext {
		let _localctx: PropertyNameAndValueListContext = new PropertyNameAndValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mongoParser.RULE_propertyNameAndValueList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 111;
				this.propertyAssignment();
				this.state = 116;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
							{
								this.state = 112;
								this.match(mongoParser.T__1);
								this.state = 113;
								this.propertyAssignment();
							}
						}
					}
					this.state = 118;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyAssignment(): PropertyAssignmentContext {
		let _localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, mongoParser.RULE_propertyAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 119;
				this.propertyName();
				this.state = 120;
				this.match(mongoParser.T__7);
				this.state = 121;
				this.propertyValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyValue(): PropertyValueContext {
		let _localctx: PropertyValueContext = new PropertyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, mongoParser.RULE_propertyValue);
		try {
			this.state = 127;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case mongoParser.RegexLiteral:
				case mongoParser.StringLiteral:
				case mongoParser.NullLiteral:
				case mongoParser.BooleanLiteral:
				case mongoParser.NumericLiteral:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 123;
						this.literal();
					}
					break;
				case mongoParser.T__3:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 124;
						this.objectLiteral();
					}
					break;
				case mongoParser.T__5:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 125;
						this.arrayLiteral();
					}
					break;
				case mongoParser.IDENTIFIER:
					this.enterOuterAlt(_localctx, 4);
					{
						this.state = 126;
						this.functionCall();
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, mongoParser.RULE_literal);
		let _la: number;
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
				case mongoParser.StringLiteral:
				case mongoParser.NullLiteral:
				case mongoParser.BooleanLiteral:
					this.enterOuterAlt(_localctx, 1);
					{
						this.state = 129;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mongoParser.StringLiteral) | (1 << mongoParser.NullLiteral) | (1 << mongoParser.BooleanLiteral))) !== 0))) {
							this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
					}
					break;
				case mongoParser.RegexLiteral:
					this.enterOuterAlt(_localctx, 2);
					{
						this.state = 130;
						this.match(mongoParser.RegexLiteral);
					}
					break;
				case mongoParser.NumericLiteral:
					this.enterOuterAlt(_localctx, 3);
					{
						this.state = 131;
						this.match(mongoParser.NumericLiteral);
					}
					break;
				default:
					throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let _localctx: PropertyNameContext = new PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, mongoParser.RULE_propertyName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 134;
				_la = this._input.LA(1);
				if (!(_la === mongoParser.StringLiteral || _la === mongoParser.IDENTIFIER)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, mongoParser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
				this.state = 136;
				_la = this._input.LA(1);
				if (!(_la === mongoParser.SingleLineComment || _la === mongoParser.MultiLineComment)) {
					this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x1A\x8D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03+\n\x03\f\x03\x0E" +
		"\x03.\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x047\n\x04\x03\x04\x05\x04:\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x07\x06A\n\x06\f\x06\x0E\x06D\v\x06\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\b\x03\b\x07\bM\n\b\f\b\x0E\bP\v\b\x05\bR\n\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x05\tY\n\t\x03\n\x03\n\x05\n]\n\n\x03\n\x05\n`\n\n\x03" +
		"\n\x03\n\x03\v\x03\v\x05\vf\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x07\fm\n" +
		"\f\f\f\x0E\fp\v\f\x03\r\x03\r\x03\r\x07\ru\n\r\f\r\x0E\rx\v\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x82\n" +
		"\x0F\x03\x10\x03\x10\x03\x10\x05\x10\x87\n\x10\x03\x11\x03\x11\x03\x12" +
		"\x03\x12\x03\x12\x02\x02\x02\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02\x02\x05\x03\x02\x0E\x10\x04\x02\x0E\x0E\x17\x17\x03\x02" +
		"\f\r\x8F\x02$\x03\x02\x02\x02\x04,\x03\x02\x02\x02\x06/\x03\x02\x02\x02" +
		"\b;\x03\x02\x02\x02\n=\x03\x02\x02\x02\fE\x03\x02\x02\x02\x0EH\x03\x02" +
		"\x02\x02\x10X\x03\x02\x02\x02\x12Z\x03\x02\x02\x02\x14c\x03\x02\x02\x02" +
		"\x16i\x03\x02\x02\x02\x18q\x03\x02\x02\x02\x1Ay\x03\x02\x02\x02\x1C\x81" +
		"\x03\x02\x02\x02\x1E\x86\x03\x02\x02\x02 \x88\x03\x02\x02\x02\"\x8A\x03" +
		"\x02\x02\x02$%\x05\x04\x03\x02%&\x07\x02\x02\x03&\x03\x03\x02\x02\x02" +
		"\'+\x05\x06\x04\x02(+\x05\b\x05\x02)+\x05\"\x12\x02*\'\x03\x02\x02\x02" +
		"*(\x03\x02\x02\x02*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02" +
		",-\x03\x02\x02\x02-\x05\x03\x02\x02\x02.,\x03\x02\x02\x02/0\x07\x16\x02" +
		"\x0206\x07\x15\x02\x0217\x05\f\x07\x0223\x05\n\x06\x0234\x07\x15\x02\x02" +
		"45\x05\f\x07\x0257\x03\x02\x02\x0261\x03\x02\x02\x0262\x03\x02\x02\x02" +
		"79\x03\x02\x02\x028:\x07\x14\x02\x0298\x03\x02\x02\x029:\x03\x02\x02\x02" +
		":\x07\x03\x02\x02\x02;<\x07\x14\x02\x02<\t\x03\x02\x02\x02=B\x07\x17\x02" +
		"\x02>?\x07\x15\x02\x02?A\x07\x17\x02\x02@>\x03\x02\x02\x02AD\x03\x02\x02" +
		"\x02B@\x03\x02\x02\x02BC\x03\x02\x02\x02C\v\x03\x02\x02\x02DB\x03\x02" +
		"\x02\x02EF\x07\x17\x02\x02FG\x05\x0E\b\x02G\r\x03\x02\x02\x02HQ\x07\x03" +
		"\x02\x02IN\x05\x10\t\x02JK\x07\x04\x02\x02KM\x05\x10\t\x02LJ\x03\x02\x02" +
		"\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OR\x03\x02\x02" +
		"\x02PN\x03\x02\x02\x02QI\x03\x02\x02\x02QR\x03\x02\x02\x02RS\x03\x02\x02" +
		"\x02ST\x07\x05\x02\x02T\x0F\x03\x02\x02\x02UY\x05\x1E\x10\x02VY\x05\x12" +
		"\n\x02WY\x05\x14\v\x02XU\x03\x02\x02\x02XV\x03\x02\x02\x02XW\x03\x02\x02" +
		"\x02Y\x11\x03\x02\x02\x02Z\\\x07\x06\x02\x02[]\x05\x18\r\x02\\[\x03\x02" +
		"\x02\x02\\]\x03\x02\x02\x02]_\x03\x02\x02\x02^`\x07\x04\x02\x02_^\x03" +
		"\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x07\x07\x02\x02b\x13" +
		"\x03\x02\x02\x02ce\x07\b\x02\x02df\x05\x16\f\x02ed\x03\x02\x02\x02ef\x03" +
		"\x02\x02\x02fg\x03\x02\x02\x02gh\x07\t\x02\x02h\x15\x03\x02\x02\x02in" +
		"\x05\x1C\x0F\x02jk\x07\x04\x02\x02km\x05\x1C\x0F\x02lj\x03\x02\x02\x02" +
		"mp\x03\x02\x02\x02nl\x03\x02\x02\x02no\x03\x02\x02\x02o\x17\x03\x02\x02" +
		"\x02pn\x03\x02\x02\x02qv\x05\x1A\x0E\x02rs\x07\x04\x02\x02su\x05\x1A\x0E" +
		"\x02tr\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02" +
		"\x02w\x19\x03\x02\x02\x02xv\x03\x02\x02\x02yz\x05 \x11\x02z{\x07\n\x02" +
		"\x02{|\x05\x1C\x0F\x02|\x1B\x03\x02\x02\x02}\x82\x05\x1E\x10\x02~\x82" +
		"\x05\x12\n\x02\x7F\x82\x05\x14\v\x02\x80\x82\x05\f\x07\x02\x81}\x03\x02" +
		"\x02\x02\x81~\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x80\x03\x02" +
		"\x02\x02\x82\x1D\x03\x02\x02\x02\x83\x87\t\x02\x02\x02\x84\x87\x07\v\x02" +
		"\x02\x85\x87\x07\x11\x02\x02\x86\x83\x03\x02\x02\x02\x86\x84\x03\x02\x02" +
		"\x02\x86\x85\x03\x02\x02\x02\x87\x1F\x03\x02\x02\x02\x88\x89\t\x03\x02" +
		"\x02\x89!\x03\x02\x02\x02\x8A\x8B\t\x04\x02\x02\x8B#\x03\x02\x02\x02\x11" +
		"*,69BNQX\\_env\x81\x86";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mongoParser.__ATN) {
			mongoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mongoParser._serializedATN));
		}

		return mongoParser.__ATN;
	}

}

export class MongoCommandsContext extends ParserRuleContext {
	public commands(): CommandsContext {
		return this.getRuleContext(0, CommandsContext);
	}
	public EOF(): TerminalNode { return this.getToken(mongoParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_mongoCommands; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterMongoCommands) listener.enterMongoCommands(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitMongoCommands) listener.exitMongoCommands(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitMongoCommands) return visitor.visitMongoCommands(this);
		else return visitor.visitChildren(this);
	}
}


export class CommandsContext extends ParserRuleContext {
	public command(): CommandContext[];
	public command(i: number): CommandContext;
	public command(i?: number): CommandContext | CommandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandContext);
		} else {
			return this.getRuleContext(i, CommandContext);
		}
	}
	public emptyCommand(): EmptyCommandContext[];
	public emptyCommand(i: number): EmptyCommandContext;
	public emptyCommand(i?: number): EmptyCommandContext | EmptyCommandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyCommandContext);
		} else {
			return this.getRuleContext(i, EmptyCommandContext);
		}
	}
	public comment(): CommentContext[];
	public comment(i: number): CommentContext;
	public comment(i?: number): CommentContext | CommentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommentContext);
		} else {
			return this.getRuleContext(i, CommentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_commands; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterCommands) listener.enterCommands(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitCommands) listener.exitCommands(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitCommands) return visitor.visitCommands(this);
		else return visitor.visitChildren(this);
	}
}


export class CommandContext extends ParserRuleContext {
	public DB(): TerminalNode { return this.getToken(mongoParser.DB, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mongoParser.DOT);
		} else {
			return this.getToken(mongoParser.DOT, i);
		}
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(mongoParser.SEMICOLON, 0); }
	public collection(): CollectionContext | undefined {
		return this.tryGetRuleContext(0, CollectionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_command; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterCommand) listener.enterCommand(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitCommand) listener.exitCommand(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitCommand) return visitor.visitCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class EmptyCommandContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(mongoParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_emptyCommand; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterEmptyCommand) listener.enterEmptyCommand(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitEmptyCommand) listener.exitEmptyCommand(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitEmptyCommand) return visitor.visitEmptyCommand(this);
		else return visitor.visitChildren(this);
	}
}


export class CollectionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mongoParser.IDENTIFIER);
		} else {
			return this.getToken(mongoParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mongoParser.DOT);
		} else {
			return this.getToken(mongoParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_collection; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterCollection) listener.enterCollection(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitCollection) listener.exitCollection(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitCollection) return visitor.visitCollection(this);
		else return visitor.visitChildren(this);
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public _FUNCTION_NAME: Token;
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(mongoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_functionCall; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterFunctionCall) listener.enterFunctionCall(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitFunctionCall) listener.exitFunctionCall(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitFunctionCall) return visitor.visitFunctionCall(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public _OPEN_PARENTHESIS: Token;
	public _CLOSED_PARENTHESIS: Token;
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_arguments; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterArguments) listener.enterArguments(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitArguments) listener.exitArguments(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitArguments) return visitor.visitArguments(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgumentContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_argument; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterArgument) listener.enterArgument(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitArgument) listener.exitArgument(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitArgument) return visitor.visitArgument(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	public propertyNameAndValueList(): PropertyNameAndValueListContext | undefined {
		return this.tryGetRuleContext(0, PropertyNameAndValueListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_objectLiteral; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterObjectLiteral) listener.enterObjectLiteral(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitObjectLiteral) listener.exitObjectLiteral(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitObjectLiteral) return visitor.visitObjectLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_arrayLiteral; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterArrayLiteral) listener.enterArrayLiteral(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitArrayLiteral) listener.exitArrayLiteral(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) return visitor.visitArrayLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class ElementListContext extends ParserRuleContext {
	public propertyValue(): PropertyValueContext[];
	public propertyValue(i: number): PropertyValueContext;
	public propertyValue(i?: number): PropertyValueContext | PropertyValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyValueContext);
		} else {
			return this.getRuleContext(i, PropertyValueContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_elementList; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterElementList) listener.enterElementList(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitElementList) listener.exitElementList(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitElementList) return visitor.visitElementList(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyNameAndValueListContext extends ParserRuleContext {
	public propertyAssignment(): PropertyAssignmentContext[];
	public propertyAssignment(i: number): PropertyAssignmentContext;
	public propertyAssignment(i?: number): PropertyAssignmentContext | PropertyAssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyAssignmentContext);
		} else {
			return this.getRuleContext(i, PropertyAssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_propertyNameAndValueList; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterPropertyNameAndValueList) listener.enterPropertyNameAndValueList(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitPropertyNameAndValueList) listener.exitPropertyNameAndValueList(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitPropertyNameAndValueList) return visitor.visitPropertyNameAndValueList(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	public propertyName(): PropertyNameContext {
		return this.getRuleContext(0, PropertyNameContext);
	}
	public propertyValue(): PropertyValueContext {
		return this.getRuleContext(0, PropertyValueContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_propertyAssignment; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterPropertyAssignment) listener.enterPropertyAssignment(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitPropertyAssignment) listener.exitPropertyAssignment(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitPropertyAssignment) return visitor.visitPropertyAssignment(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyValueContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public objectLiteral(): ObjectLiteralContext | undefined {
		return this.tryGetRuleContext(0, ObjectLiteralContext);
	}
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_propertyValue; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterPropertyValue) listener.enterPropertyValue(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitPropertyValue) listener.exitPropertyValue(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitPropertyValue) return visitor.visitPropertyValue(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(mongoParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(mongoParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(mongoParser.StringLiteral, 0); }
	public RegexLiteral(): TerminalNode | undefined { return this.tryGetToken(mongoParser.RegexLiteral, 0); }
	public NumericLiteral(): TerminalNode | undefined { return this.tryGetToken(mongoParser.NumericLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_literal; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterLiteral) listener.enterLiteral(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitLiteral) listener.exitLiteral(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitLiteral) return visitor.visitLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyNameContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(mongoParser.StringLiteral, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(mongoParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_propertyName; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterPropertyName) listener.enterPropertyName(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitPropertyName) listener.exitPropertyName(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitPropertyName) return visitor.visitPropertyName(this);
		else return visitor.visitChildren(this);
	}
}


export class CommentContext extends ParserRuleContext {
	public SingleLineComment(): TerminalNode | undefined { return this.tryGetToken(mongoParser.SingleLineComment, 0); }
	public MultiLineComment(): TerminalNode | undefined { return this.tryGetToken(mongoParser.MultiLineComment, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return mongoParser.RULE_comment; }
	@Override
	public enterRule(listener: mongoListener): void {
		if (listener.enterComment) listener.enterComment(this);
	}
	@Override
	public exitRule(listener: mongoListener): void {
		if (listener.exitComment) listener.exitComment(this);
	}
	@Override
	public accept<Result>(visitor: mongoVisitor<Result>): Result {
		if (visitor.visitComment) return visitor.visitComment(this);
		else return visitor.visitChildren(this);
	}
}


