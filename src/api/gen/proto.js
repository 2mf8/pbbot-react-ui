/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.dto = (function() {

    /**
     * Namespace dto.
     * @exports dto
     * @namespace
     */
    var dto = {};

    dto.Bot = (function() {

        /**
         * Properties of a Bot.
         * @memberof dto
         * @interface IBot
         * @property {Long|null} [botId] Bot botId
         * @property {boolean|null} [isOnline] Bot isOnline
         * @property {dto.Bot.ICaptcha|null} [captcha] Bot captcha
         */

        /**
         * Constructs a new Bot.
         * @memberof dto
         * @classdesc Represents a Bot.
         * @implements IBot
         * @constructor
         * @param {dto.IBot=} [properties] Properties to set
         */
        function Bot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bot botId.
         * @member {Long} botId
         * @memberof dto.Bot
         * @instance
         */
        Bot.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Bot isOnline.
         * @member {boolean} isOnline
         * @memberof dto.Bot
         * @instance
         */
        Bot.prototype.isOnline = false;

        /**
         * Bot captcha.
         * @member {dto.Bot.ICaptcha|null|undefined} captcha
         * @memberof dto.Bot
         * @instance
         */
        Bot.prototype.captcha = null;

        /**
         * Creates a new Bot instance using the specified properties.
         * @function create
         * @memberof dto.Bot
         * @static
         * @param {dto.IBot=} [properties] Properties to set
         * @returns {dto.Bot} Bot instance
         */
        Bot.create = function create(properties) {
            return new Bot(properties);
        };

        /**
         * Encodes the specified Bot message. Does not implicitly {@link dto.Bot.verify|verify} messages.
         * @function encode
         * @memberof dto.Bot
         * @static
         * @param {dto.IBot} message Bot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.botId);
            if (message.isOnline != null && Object.hasOwnProperty.call(message, "isOnline"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isOnline);
            if (message.captcha != null && Object.hasOwnProperty.call(message, "captcha"))
                $root.dto.Bot.Captcha.encode(message.captcha, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Bot message, length delimited. Does not implicitly {@link dto.Bot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.Bot
         * @static
         * @param {dto.IBot} message Bot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bot message from the specified reader or buffer.
         * @function decode
         * @memberof dto.Bot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.Bot} Bot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Bot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.botId = reader.int64();
                    break;
                case 2:
                    message.isOnline = reader.bool();
                    break;
                case 3:
                    message.captcha = $root.dto.Bot.Captcha.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Bot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.Bot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.Bot} Bot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bot message.
         * @function verify
         * @memberof dto.Bot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                    return "botId: integer|Long expected";
            if (message.isOnline != null && message.hasOwnProperty("isOnline"))
                if (typeof message.isOnline !== "boolean")
                    return "isOnline: boolean expected";
            if (message.captcha != null && message.hasOwnProperty("captcha")) {
                var error = $root.dto.Bot.Captcha.verify(message.captcha);
                if (error)
                    return "captcha." + error;
            }
            return null;
        };

        /**
         * Creates a Bot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.Bot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.Bot} Bot
         */
        Bot.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.Bot)
                return object;
            var message = new $root.dto.Bot();
            if (object.botId != null)
                if ($util.Long)
                    (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                else if (typeof object.botId === "string")
                    message.botId = parseInt(object.botId, 10);
                else if (typeof object.botId === "number")
                    message.botId = object.botId;
                else if (typeof object.botId === "object")
                    message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
            if (object.isOnline != null)
                message.isOnline = Boolean(object.isOnline);
            if (object.captcha != null) {
                if (typeof object.captcha !== "object")
                    throw TypeError(".dto.Bot.captcha: object expected");
                message.captcha = $root.dto.Bot.Captcha.fromObject(object.captcha);
            }
            return message;
        };

        /**
         * Creates a plain object from a Bot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.Bot
         * @static
         * @param {dto.Bot} message Bot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.botId = options.longs === String ? "0" : 0;
                object.isOnline = false;
                object.captcha = null;
            }
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (typeof message.botId === "number")
                    object.botId = options.longs === String ? String(message.botId) : message.botId;
                else
                    object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
            if (message.isOnline != null && message.hasOwnProperty("isOnline"))
                object.isOnline = message.isOnline;
            if (message.captcha != null && message.hasOwnProperty("captcha"))
                object.captcha = $root.dto.Bot.Captcha.toObject(message.captcha, options);
            return object;
        };

        /**
         * Converts this Bot to JSON.
         * @function toJSON
         * @memberof dto.Bot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Bot.Captcha = (function() {

            /**
             * Properties of a Captcha.
             * @memberof dto.Bot
             * @interface ICaptcha
             * @property {Long|null} [botId] Captcha botId
             * @property {dto.Bot.Captcha.CaptchaType|null} [captchaType] Captcha captchaType
             * @property {string|null} [url] Captcha url
             * @property {Uint8Array|null} [image] Captcha image
             */

            /**
             * Constructs a new Captcha.
             * @memberof dto.Bot
             * @classdesc Represents a Captcha.
             * @implements ICaptcha
             * @constructor
             * @param {dto.Bot.ICaptcha=} [properties] Properties to set
             */
            function Captcha(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Captcha botId.
             * @member {Long} botId
             * @memberof dto.Bot.Captcha
             * @instance
             */
            Captcha.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Captcha captchaType.
             * @member {dto.Bot.Captcha.CaptchaType} captchaType
             * @memberof dto.Bot.Captcha
             * @instance
             */
            Captcha.prototype.captchaType = 0;

            /**
             * Captcha url.
             * @member {string|null|undefined} url
             * @memberof dto.Bot.Captcha
             * @instance
             */
            Captcha.prototype.url = null;

            /**
             * Captcha image.
             * @member {Uint8Array|null|undefined} image
             * @memberof dto.Bot.Captcha
             * @instance
             */
            Captcha.prototype.image = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Captcha data.
             * @member {"url"|"image"|undefined} data
             * @memberof dto.Bot.Captcha
             * @instance
             */
            Object.defineProperty(Captcha.prototype, "data", {
                get: $util.oneOfGetter($oneOfFields = ["url", "image"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Captcha instance using the specified properties.
             * @function create
             * @memberof dto.Bot.Captcha
             * @static
             * @param {dto.Bot.ICaptcha=} [properties] Properties to set
             * @returns {dto.Bot.Captcha} Captcha instance
             */
            Captcha.create = function create(properties) {
                return new Captcha(properties);
            };

            /**
             * Encodes the specified Captcha message. Does not implicitly {@link dto.Bot.Captcha.verify|verify} messages.
             * @function encode
             * @memberof dto.Bot.Captcha
             * @static
             * @param {dto.Bot.ICaptcha} message Captcha message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Captcha.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.botId);
                if (message.captchaType != null && Object.hasOwnProperty.call(message, "captchaType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.captchaType);
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
                if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.image);
                return writer;
            };

            /**
             * Encodes the specified Captcha message, length delimited. Does not implicitly {@link dto.Bot.Captcha.verify|verify} messages.
             * @function encodeDelimited
             * @memberof dto.Bot.Captcha
             * @static
             * @param {dto.Bot.ICaptcha} message Captcha message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Captcha.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Captcha message from the specified reader or buffer.
             * @function decode
             * @memberof dto.Bot.Captcha
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {dto.Bot.Captcha} Captcha
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Captcha.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Bot.Captcha();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.botId = reader.int64();
                        break;
                    case 2:
                        message.captchaType = reader.int32();
                        break;
                    case 3:
                        message.url = reader.string();
                        break;
                    case 4:
                        message.image = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Captcha message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof dto.Bot.Captcha
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {dto.Bot.Captcha} Captcha
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Captcha.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Captcha message.
             * @function verify
             * @memberof dto.Bot.Captcha
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Captcha.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.botId != null && message.hasOwnProperty("botId"))
                    if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                        return "botId: integer|Long expected";
                if (message.captchaType != null && message.hasOwnProperty("captchaType"))
                    switch (message.captchaType) {
                    default:
                        return "captchaType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 4:
                        break;
                    }
                if (message.url != null && message.hasOwnProperty("url")) {
                    properties.data = 1;
                    if (!$util.isString(message.url))
                        return "url: string expected";
                }
                if (message.image != null && message.hasOwnProperty("image")) {
                    if (properties.data === 1)
                        return "data: multiple values";
                    properties.data = 1;
                    if (!(message.image && typeof message.image.length === "number" || $util.isString(message.image)))
                        return "image: buffer expected";
                }
                return null;
            };

            /**
             * Creates a Captcha message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof dto.Bot.Captcha
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {dto.Bot.Captcha} Captcha
             */
            Captcha.fromObject = function fromObject(object) {
                if (object instanceof $root.dto.Bot.Captcha)
                    return object;
                var message = new $root.dto.Bot.Captcha();
                if (object.botId != null)
                    if ($util.Long)
                        (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                    else if (typeof object.botId === "string")
                        message.botId = parseInt(object.botId, 10);
                    else if (typeof object.botId === "number")
                        message.botId = object.botId;
                    else if (typeof object.botId === "object")
                        message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
                switch (object.captchaType) {
                case "PIC_CAPTCHA":
                case 0:
                    message.captchaType = 0;
                    break;
                case "SLIDER_CAPTCHA":
                case 1:
                    message.captchaType = 1;
                    break;
                case "UNSAFE_DEVICE_LOGIN_VERIFY":
                case 2:
                    message.captchaType = 2;
                    break;
                case "SMS":
                case 4:
                    message.captchaType = 4;
                    break;
                }
                if (object.url != null)
                    message.url = String(object.url);
                if (object.image != null)
                    if (typeof object.image === "string")
                        $util.base64.decode(object.image, message.image = $util.newBuffer($util.base64.length(object.image)), 0);
                    else if (object.image.length)
                        message.image = object.image;
                return message;
            };

            /**
             * Creates a plain object from a Captcha message. Also converts values to other types if specified.
             * @function toObject
             * @memberof dto.Bot.Captcha
             * @static
             * @param {dto.Bot.Captcha} message Captcha
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Captcha.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.botId = options.longs === String ? "0" : 0;
                    object.captchaType = options.enums === String ? "PIC_CAPTCHA" : 0;
                }
                if (message.botId != null && message.hasOwnProperty("botId"))
                    if (typeof message.botId === "number")
                        object.botId = options.longs === String ? String(message.botId) : message.botId;
                    else
                        object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
                if (message.captchaType != null && message.hasOwnProperty("captchaType"))
                    object.captchaType = options.enums === String ? $root.dto.Bot.Captcha.CaptchaType[message.captchaType] : message.captchaType;
                if (message.url != null && message.hasOwnProperty("url")) {
                    object.url = message.url;
                    if (options.oneofs)
                        object.data = "url";
                }
                if (message.image != null && message.hasOwnProperty("image")) {
                    object.image = options.bytes === String ? $util.base64.encode(message.image, 0, message.image.length) : options.bytes === Array ? Array.prototype.slice.call(message.image) : message.image;
                    if (options.oneofs)
                        object.data = "image";
                }
                return object;
            };

            /**
             * Converts this Captcha to JSON.
             * @function toJSON
             * @memberof dto.Bot.Captcha
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Captcha.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * CaptchaType enum.
             * @name dto.Bot.Captcha.CaptchaType
             * @enum {number}
             * @property {number} PIC_CAPTCHA=0 PIC_CAPTCHA value
             * @property {number} SLIDER_CAPTCHA=1 SLIDER_CAPTCHA value
             * @property {number} UNSAFE_DEVICE_LOGIN_VERIFY=2 UNSAFE_DEVICE_LOGIN_VERIFY value
             * @property {number} SMS=4 SMS value
             */
            Captcha.CaptchaType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PIC_CAPTCHA"] = 0;
                values[valuesById[1] = "SLIDER_CAPTCHA"] = 1;
                values[valuesById[2] = "UNSAFE_DEVICE_LOGIN_VERIFY"] = 2;
                values[valuesById[4] = "SMS"] = 4;
                return values;
            })();

            return Captcha;
        })();

        return Bot;
    })();

    dto.CreateBotReq = (function() {

        /**
         * Properties of a CreateBotReq.
         * @memberof dto
         * @interface ICreateBotReq
         * @property {Long|null} [botId] CreateBotReq botId
         * @property {string|null} [password] CreateBotReq password
         * @property {Long|null} [deviceSeed] CreateBotReq deviceSeed
         * @property {number|null} [clientProtocol] CreateBotReq clientProtocol
         * @property {string|null} [signServer] CreateBotReq signServer
         * @property {string|null} [signServerAuth] CreateBotReq signServerAuth
         */

        /**
         * Constructs a new CreateBotReq.
         * @memberof dto
         * @classdesc Represents a CreateBotReq.
         * @implements ICreateBotReq
         * @constructor
         * @param {dto.ICreateBotReq=} [properties] Properties to set
         */
        function CreateBotReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateBotReq botId.
         * @member {Long} botId
         * @memberof dto.CreateBotReq
         * @instance
         */
        CreateBotReq.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateBotReq password.
         * @member {string} password
         * @memberof dto.CreateBotReq
         * @instance
         */
        CreateBotReq.prototype.password = "";

        /**
         * CreateBotReq deviceSeed.
         * @member {Long} deviceSeed
         * @memberof dto.CreateBotReq
         * @instance
         */
        CreateBotReq.prototype.deviceSeed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateBotReq clientProtocol.
         * @member {number} clientProtocol
         * @memberof dto.CreateBotReq
         * @instance
         */
        CreateBotReq.prototype.clientProtocol = 0;

        /**
         * CreateBotReq signServer.
         * @member {string} signServer
         * @memberof dto.CreateBotReq
         * @instance
         */
        CreateBotReq.prototype.signServer = "";

        /**
         * CreateBotReq signServerAuth.
         * @member {string} signServerAuth
         * @memberof dto.CreateBotReq
         * @instance
         */
        CreateBotReq.prototype.signServerAuth = "";

        /**
         * Creates a new CreateBotReq instance using the specified properties.
         * @function create
         * @memberof dto.CreateBotReq
         * @static
         * @param {dto.ICreateBotReq=} [properties] Properties to set
         * @returns {dto.CreateBotReq} CreateBotReq instance
         */
        CreateBotReq.create = function create(properties) {
            return new CreateBotReq(properties);
        };

        /**
         * Encodes the specified CreateBotReq message. Does not implicitly {@link dto.CreateBotReq.verify|verify} messages.
         * @function encode
         * @memberof dto.CreateBotReq
         * @static
         * @param {dto.ICreateBotReq} message CreateBotReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.botId);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            if (message.deviceSeed != null && Object.hasOwnProperty.call(message, "deviceSeed"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.deviceSeed);
            if (message.clientProtocol != null && Object.hasOwnProperty.call(message, "clientProtocol"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.clientProtocol);
            if (message.signServer != null && Object.hasOwnProperty.call(message, "signServer"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.signServer);
            if (message.signServerAuth != null && Object.hasOwnProperty.call(message, "signServerAuth"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.signServerAuth);
            return writer;
        };

        /**
         * Encodes the specified CreateBotReq message, length delimited. Does not implicitly {@link dto.CreateBotReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.CreateBotReq
         * @static
         * @param {dto.ICreateBotReq} message CreateBotReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateBotReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.CreateBotReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.CreateBotReq} CreateBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.CreateBotReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.botId = reader.int64();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                case 3:
                    message.deviceSeed = reader.int64();
                    break;
                case 4:
                    message.clientProtocol = reader.int32();
                    break;
                case 5:
                    message.signServer = reader.string();
                    break;
                case 6:
                    message.signServerAuth = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateBotReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.CreateBotReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.CreateBotReq} CreateBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateBotReq message.
         * @function verify
         * @memberof dto.CreateBotReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateBotReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                    return "botId: integer|Long expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.deviceSeed != null && message.hasOwnProperty("deviceSeed"))
                if (!$util.isInteger(message.deviceSeed) && !(message.deviceSeed && $util.isInteger(message.deviceSeed.low) && $util.isInteger(message.deviceSeed.high)))
                    return "deviceSeed: integer|Long expected";
            if (message.clientProtocol != null && message.hasOwnProperty("clientProtocol"))
                if (!$util.isInteger(message.clientProtocol))
                    return "clientProtocol: integer expected";
            if (message.signServer != null && message.hasOwnProperty("signServer"))
                if (!$util.isString(message.signServer))
                    return "signServer: string expected";
            if (message.signServerAuth != null && message.hasOwnProperty("signServerAuth"))
                if (!$util.isString(message.signServerAuth))
                    return "signServerAuth: string expected";
            return null;
        };

        /**
         * Creates a CreateBotReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.CreateBotReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.CreateBotReq} CreateBotReq
         */
        CreateBotReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.CreateBotReq)
                return object;
            var message = new $root.dto.CreateBotReq();
            if (object.botId != null)
                if ($util.Long)
                    (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                else if (typeof object.botId === "string")
                    message.botId = parseInt(object.botId, 10);
                else if (typeof object.botId === "number")
                    message.botId = object.botId;
                else if (typeof object.botId === "object")
                    message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
            if (object.password != null)
                message.password = String(object.password);
            if (object.deviceSeed != null)
                if ($util.Long)
                    (message.deviceSeed = $util.Long.fromValue(object.deviceSeed)).unsigned = false;
                else if (typeof object.deviceSeed === "string")
                    message.deviceSeed = parseInt(object.deviceSeed, 10);
                else if (typeof object.deviceSeed === "number")
                    message.deviceSeed = object.deviceSeed;
                else if (typeof object.deviceSeed === "object")
                    message.deviceSeed = new $util.LongBits(object.deviceSeed.low >>> 0, object.deviceSeed.high >>> 0).toNumber();
            if (object.clientProtocol != null)
                message.clientProtocol = object.clientProtocol | 0;
            if (object.signServer != null)
                message.signServer = String(object.signServer);
            if (object.signServerAuth != null)
                message.signServerAuth = String(object.signServerAuth);
            return message;
        };

        /**
         * Creates a plain object from a CreateBotReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.CreateBotReq
         * @static
         * @param {dto.CreateBotReq} message CreateBotReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateBotReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.botId = options.longs === String ? "0" : 0;
                object.password = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceSeed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceSeed = options.longs === String ? "0" : 0;
                object.clientProtocol = 0;
                object.signServer = "";
                object.signServerAuth = "";
            }
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (typeof message.botId === "number")
                    object.botId = options.longs === String ? String(message.botId) : message.botId;
                else
                    object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.deviceSeed != null && message.hasOwnProperty("deviceSeed"))
                if (typeof message.deviceSeed === "number")
                    object.deviceSeed = options.longs === String ? String(message.deviceSeed) : message.deviceSeed;
                else
                    object.deviceSeed = options.longs === String ? $util.Long.prototype.toString.call(message.deviceSeed) : options.longs === Number ? new $util.LongBits(message.deviceSeed.low >>> 0, message.deviceSeed.high >>> 0).toNumber() : message.deviceSeed;
            if (message.clientProtocol != null && message.hasOwnProperty("clientProtocol"))
                object.clientProtocol = message.clientProtocol;
            if (message.signServer != null && message.hasOwnProperty("signServer"))
                object.signServer = message.signServer;
            if (message.signServerAuth != null && message.hasOwnProperty("signServerAuth"))
                object.signServerAuth = message.signServerAuth;
            return object;
        };

        /**
         * Converts this CreateBotReq to JSON.
         * @function toJSON
         * @memberof dto.CreateBotReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateBotReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateBotReq;
    })();

    dto.CreateBotResp = (function() {

        /**
         * Properties of a CreateBotResp.
         * @memberof dto
         * @interface ICreateBotResp
         */

        /**
         * Constructs a new CreateBotResp.
         * @memberof dto
         * @classdesc Represents a CreateBotResp.
         * @implements ICreateBotResp
         * @constructor
         * @param {dto.ICreateBotResp=} [properties] Properties to set
         */
        function CreateBotResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CreateBotResp instance using the specified properties.
         * @function create
         * @memberof dto.CreateBotResp
         * @static
         * @param {dto.ICreateBotResp=} [properties] Properties to set
         * @returns {dto.CreateBotResp} CreateBotResp instance
         */
        CreateBotResp.create = function create(properties) {
            return new CreateBotResp(properties);
        };

        /**
         * Encodes the specified CreateBotResp message. Does not implicitly {@link dto.CreateBotResp.verify|verify} messages.
         * @function encode
         * @memberof dto.CreateBotResp
         * @static
         * @param {dto.ICreateBotResp} message CreateBotResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CreateBotResp message, length delimited. Does not implicitly {@link dto.CreateBotResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.CreateBotResp
         * @static
         * @param {dto.ICreateBotResp} message CreateBotResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateBotResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateBotResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.CreateBotResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.CreateBotResp} CreateBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.CreateBotResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateBotResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.CreateBotResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.CreateBotResp} CreateBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateBotResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateBotResp message.
         * @function verify
         * @memberof dto.CreateBotResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateBotResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CreateBotResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.CreateBotResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.CreateBotResp} CreateBotResp
         */
        CreateBotResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.CreateBotResp)
                return object;
            return new $root.dto.CreateBotResp();
        };

        /**
         * Creates a plain object from a CreateBotResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.CreateBotResp
         * @static
         * @param {dto.CreateBotResp} message CreateBotResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateBotResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CreateBotResp to JSON.
         * @function toJSON
         * @memberof dto.CreateBotResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateBotResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateBotResp;
    })();

    dto.DeleteBotReq = (function() {

        /**
         * Properties of a DeleteBotReq.
         * @memberof dto
         * @interface IDeleteBotReq
         * @property {Long|null} [botId] DeleteBotReq botId
         */

        /**
         * Constructs a new DeleteBotReq.
         * @memberof dto
         * @classdesc Represents a DeleteBotReq.
         * @implements IDeleteBotReq
         * @constructor
         * @param {dto.IDeleteBotReq=} [properties] Properties to set
         */
        function DeleteBotReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteBotReq botId.
         * @member {Long} botId
         * @memberof dto.DeleteBotReq
         * @instance
         */
        DeleteBotReq.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new DeleteBotReq instance using the specified properties.
         * @function create
         * @memberof dto.DeleteBotReq
         * @static
         * @param {dto.IDeleteBotReq=} [properties] Properties to set
         * @returns {dto.DeleteBotReq} DeleteBotReq instance
         */
        DeleteBotReq.create = function create(properties) {
            return new DeleteBotReq(properties);
        };

        /**
         * Encodes the specified DeleteBotReq message. Does not implicitly {@link dto.DeleteBotReq.verify|verify} messages.
         * @function encode
         * @memberof dto.DeleteBotReq
         * @static
         * @param {dto.IDeleteBotReq} message DeleteBotReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteBotReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.botId);
            return writer;
        };

        /**
         * Encodes the specified DeleteBotReq message, length delimited. Does not implicitly {@link dto.DeleteBotReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.DeleteBotReq
         * @static
         * @param {dto.IDeleteBotReq} message DeleteBotReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteBotReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteBotReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.DeleteBotReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.DeleteBotReq} DeleteBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteBotReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.DeleteBotReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.botId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteBotReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.DeleteBotReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.DeleteBotReq} DeleteBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteBotReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteBotReq message.
         * @function verify
         * @memberof dto.DeleteBotReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteBotReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                    return "botId: integer|Long expected";
            return null;
        };

        /**
         * Creates a DeleteBotReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.DeleteBotReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.DeleteBotReq} DeleteBotReq
         */
        DeleteBotReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.DeleteBotReq)
                return object;
            var message = new $root.dto.DeleteBotReq();
            if (object.botId != null)
                if ($util.Long)
                    (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                else if (typeof object.botId === "string")
                    message.botId = parseInt(object.botId, 10);
                else if (typeof object.botId === "number")
                    message.botId = object.botId;
                else if (typeof object.botId === "object")
                    message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a DeleteBotReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.DeleteBotReq
         * @static
         * @param {dto.DeleteBotReq} message DeleteBotReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteBotReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.botId = options.longs === String ? "0" : 0;
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (typeof message.botId === "number")
                    object.botId = options.longs === String ? String(message.botId) : message.botId;
                else
                    object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
            return object;
        };

        /**
         * Converts this DeleteBotReq to JSON.
         * @function toJSON
         * @memberof dto.DeleteBotReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteBotReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteBotReq;
    })();

    dto.DeleteBotResp = (function() {

        /**
         * Properties of a DeleteBotResp.
         * @memberof dto
         * @interface IDeleteBotResp
         */

        /**
         * Constructs a new DeleteBotResp.
         * @memberof dto
         * @classdesc Represents a DeleteBotResp.
         * @implements IDeleteBotResp
         * @constructor
         * @param {dto.IDeleteBotResp=} [properties] Properties to set
         */
        function DeleteBotResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DeleteBotResp instance using the specified properties.
         * @function create
         * @memberof dto.DeleteBotResp
         * @static
         * @param {dto.IDeleteBotResp=} [properties] Properties to set
         * @returns {dto.DeleteBotResp} DeleteBotResp instance
         */
        DeleteBotResp.create = function create(properties) {
            return new DeleteBotResp(properties);
        };

        /**
         * Encodes the specified DeleteBotResp message. Does not implicitly {@link dto.DeleteBotResp.verify|verify} messages.
         * @function encode
         * @memberof dto.DeleteBotResp
         * @static
         * @param {dto.IDeleteBotResp} message DeleteBotResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteBotResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DeleteBotResp message, length delimited. Does not implicitly {@link dto.DeleteBotResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.DeleteBotResp
         * @static
         * @param {dto.IDeleteBotResp} message DeleteBotResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteBotResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteBotResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.DeleteBotResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.DeleteBotResp} DeleteBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteBotResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.DeleteBotResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteBotResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.DeleteBotResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.DeleteBotResp} DeleteBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteBotResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteBotResp message.
         * @function verify
         * @memberof dto.DeleteBotResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteBotResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DeleteBotResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.DeleteBotResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.DeleteBotResp} DeleteBotResp
         */
        DeleteBotResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.DeleteBotResp)
                return object;
            return new $root.dto.DeleteBotResp();
        };

        /**
         * Creates a plain object from a DeleteBotResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.DeleteBotResp
         * @static
         * @param {dto.DeleteBotResp} message DeleteBotResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteBotResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DeleteBotResp to JSON.
         * @function toJSON
         * @memberof dto.DeleteBotResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteBotResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteBotResp;
    })();

    dto.ListBotReq = (function() {

        /**
         * Properties of a ListBotReq.
         * @memberof dto
         * @interface IListBotReq
         */

        /**
         * Constructs a new ListBotReq.
         * @memberof dto
         * @classdesc Represents a ListBotReq.
         * @implements IListBotReq
         * @constructor
         * @param {dto.IListBotReq=} [properties] Properties to set
         */
        function ListBotReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListBotReq instance using the specified properties.
         * @function create
         * @memberof dto.ListBotReq
         * @static
         * @param {dto.IListBotReq=} [properties] Properties to set
         * @returns {dto.ListBotReq} ListBotReq instance
         */
        ListBotReq.create = function create(properties) {
            return new ListBotReq(properties);
        };

        /**
         * Encodes the specified ListBotReq message. Does not implicitly {@link dto.ListBotReq.verify|verify} messages.
         * @function encode
         * @memberof dto.ListBotReq
         * @static
         * @param {dto.IListBotReq} message ListBotReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBotReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListBotReq message, length delimited. Does not implicitly {@link dto.ListBotReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListBotReq
         * @static
         * @param {dto.IListBotReq} message ListBotReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBotReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListBotReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListBotReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListBotReq} ListBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBotReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListBotReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListBotReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListBotReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListBotReq} ListBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBotReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListBotReq message.
         * @function verify
         * @memberof dto.ListBotReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListBotReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListBotReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListBotReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListBotReq} ListBotReq
         */
        ListBotReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListBotReq)
                return object;
            return new $root.dto.ListBotReq();
        };

        /**
         * Creates a plain object from a ListBotReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListBotReq
         * @static
         * @param {dto.ListBotReq} message ListBotReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListBotReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListBotReq to JSON.
         * @function toJSON
         * @memberof dto.ListBotReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListBotReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListBotReq;
    })();

    dto.ListBotResp = (function() {

        /**
         * Properties of a ListBotResp.
         * @memberof dto
         * @interface IListBotResp
         * @property {Array.<dto.IBot>|null} [botList] ListBotResp botList
         */

        /**
         * Constructs a new ListBotResp.
         * @memberof dto
         * @classdesc Represents a ListBotResp.
         * @implements IListBotResp
         * @constructor
         * @param {dto.IListBotResp=} [properties] Properties to set
         */
        function ListBotResp(properties) {
            this.botList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListBotResp botList.
         * @member {Array.<dto.IBot>} botList
         * @memberof dto.ListBotResp
         * @instance
         */
        ListBotResp.prototype.botList = $util.emptyArray;

        /**
         * Creates a new ListBotResp instance using the specified properties.
         * @function create
         * @memberof dto.ListBotResp
         * @static
         * @param {dto.IListBotResp=} [properties] Properties to set
         * @returns {dto.ListBotResp} ListBotResp instance
         */
        ListBotResp.create = function create(properties) {
            return new ListBotResp(properties);
        };

        /**
         * Encodes the specified ListBotResp message. Does not implicitly {@link dto.ListBotResp.verify|verify} messages.
         * @function encode
         * @memberof dto.ListBotResp
         * @static
         * @param {dto.IListBotResp} message ListBotResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBotResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botList != null && message.botList.length)
                for (var i = 0; i < message.botList.length; ++i)
                    $root.dto.Bot.encode(message.botList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListBotResp message, length delimited. Does not implicitly {@link dto.ListBotResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListBotResp
         * @static
         * @param {dto.IListBotResp} message ListBotResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListBotResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListBotResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListBotResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListBotResp} ListBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBotResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListBotResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.botList && message.botList.length))
                        message.botList = [];
                    message.botList.push($root.dto.Bot.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListBotResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListBotResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListBotResp} ListBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListBotResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListBotResp message.
         * @function verify
         * @memberof dto.ListBotResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListBotResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botList != null && message.hasOwnProperty("botList")) {
                if (!Array.isArray(message.botList))
                    return "botList: array expected";
                for (var i = 0; i < message.botList.length; ++i) {
                    var error = $root.dto.Bot.verify(message.botList[i]);
                    if (error)
                        return "botList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListBotResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListBotResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListBotResp} ListBotResp
         */
        ListBotResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListBotResp)
                return object;
            var message = new $root.dto.ListBotResp();
            if (object.botList) {
                if (!Array.isArray(object.botList))
                    throw TypeError(".dto.ListBotResp.botList: array expected");
                message.botList = [];
                for (var i = 0; i < object.botList.length; ++i) {
                    if (typeof object.botList[i] !== "object")
                        throw TypeError(".dto.ListBotResp.botList: object expected");
                    message.botList[i] = $root.dto.Bot.fromObject(object.botList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListBotResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListBotResp
         * @static
         * @param {dto.ListBotResp} message ListBotResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListBotResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.botList = [];
            if (message.botList && message.botList.length) {
                object.botList = [];
                for (var j = 0; j < message.botList.length; ++j)
                    object.botList[j] = $root.dto.Bot.toObject(message.botList[j], options);
            }
            return object;
        };

        /**
         * Converts this ListBotResp to JSON.
         * @function toJSON
         * @memberof dto.ListBotResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListBotResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListBotResp;
    })();

    dto.SolveCaptchaReq = (function() {

        /**
         * Properties of a SolveCaptchaReq.
         * @memberof dto
         * @interface ISolveCaptchaReq
         * @property {Long|null} [botId] SolveCaptchaReq botId
         * @property {string|null} [result] SolveCaptchaReq result
         */

        /**
         * Constructs a new SolveCaptchaReq.
         * @memberof dto
         * @classdesc Represents a SolveCaptchaReq.
         * @implements ISolveCaptchaReq
         * @constructor
         * @param {dto.ISolveCaptchaReq=} [properties] Properties to set
         */
        function SolveCaptchaReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SolveCaptchaReq botId.
         * @member {Long} botId
         * @memberof dto.SolveCaptchaReq
         * @instance
         */
        SolveCaptchaReq.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SolveCaptchaReq result.
         * @member {string} result
         * @memberof dto.SolveCaptchaReq
         * @instance
         */
        SolveCaptchaReq.prototype.result = "";

        /**
         * Creates a new SolveCaptchaReq instance using the specified properties.
         * @function create
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {dto.ISolveCaptchaReq=} [properties] Properties to set
         * @returns {dto.SolveCaptchaReq} SolveCaptchaReq instance
         */
        SolveCaptchaReq.create = function create(properties) {
            return new SolveCaptchaReq(properties);
        };

        /**
         * Encodes the specified SolveCaptchaReq message. Does not implicitly {@link dto.SolveCaptchaReq.verify|verify} messages.
         * @function encode
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {dto.ISolveCaptchaReq} message SolveCaptchaReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SolveCaptchaReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.botId);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.result);
            return writer;
        };

        /**
         * Encodes the specified SolveCaptchaReq message, length delimited. Does not implicitly {@link dto.SolveCaptchaReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {dto.ISolveCaptchaReq} message SolveCaptchaReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SolveCaptchaReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SolveCaptchaReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.SolveCaptchaReq} SolveCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SolveCaptchaReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.SolveCaptchaReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.botId = reader.int64();
                    break;
                case 2:
                    message.result = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SolveCaptchaReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.SolveCaptchaReq} SolveCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SolveCaptchaReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SolveCaptchaReq message.
         * @function verify
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SolveCaptchaReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                    return "botId: integer|Long expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isString(message.result))
                    return "result: string expected";
            return null;
        };

        /**
         * Creates a SolveCaptchaReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.SolveCaptchaReq} SolveCaptchaReq
         */
        SolveCaptchaReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.SolveCaptchaReq)
                return object;
            var message = new $root.dto.SolveCaptchaReq();
            if (object.botId != null)
                if ($util.Long)
                    (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                else if (typeof object.botId === "string")
                    message.botId = parseInt(object.botId, 10);
                else if (typeof object.botId === "number")
                    message.botId = object.botId;
                else if (typeof object.botId === "object")
                    message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
            if (object.result != null)
                message.result = String(object.result);
            return message;
        };

        /**
         * Creates a plain object from a SolveCaptchaReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.SolveCaptchaReq
         * @static
         * @param {dto.SolveCaptchaReq} message SolveCaptchaReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SolveCaptchaReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.botId = options.longs === String ? "0" : 0;
                object.result = "";
            }
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (typeof message.botId === "number")
                    object.botId = options.longs === String ? String(message.botId) : message.botId;
                else
                    object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            return object;
        };

        /**
         * Converts this SolveCaptchaReq to JSON.
         * @function toJSON
         * @memberof dto.SolveCaptchaReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SolveCaptchaReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SolveCaptchaReq;
    })();

    dto.SolveCaptchaResp = (function() {

        /**
         * Properties of a SolveCaptchaResp.
         * @memberof dto
         * @interface ISolveCaptchaResp
         */

        /**
         * Constructs a new SolveCaptchaResp.
         * @memberof dto
         * @classdesc Represents a SolveCaptchaResp.
         * @implements ISolveCaptchaResp
         * @constructor
         * @param {dto.ISolveCaptchaResp=} [properties] Properties to set
         */
        function SolveCaptchaResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SolveCaptchaResp instance using the specified properties.
         * @function create
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {dto.ISolveCaptchaResp=} [properties] Properties to set
         * @returns {dto.SolveCaptchaResp} SolveCaptchaResp instance
         */
        SolveCaptchaResp.create = function create(properties) {
            return new SolveCaptchaResp(properties);
        };

        /**
         * Encodes the specified SolveCaptchaResp message. Does not implicitly {@link dto.SolveCaptchaResp.verify|verify} messages.
         * @function encode
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {dto.ISolveCaptchaResp} message SolveCaptchaResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SolveCaptchaResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SolveCaptchaResp message, length delimited. Does not implicitly {@link dto.SolveCaptchaResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {dto.ISolveCaptchaResp} message SolveCaptchaResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SolveCaptchaResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SolveCaptchaResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.SolveCaptchaResp} SolveCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SolveCaptchaResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.SolveCaptchaResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SolveCaptchaResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.SolveCaptchaResp} SolveCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SolveCaptchaResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SolveCaptchaResp message.
         * @function verify
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SolveCaptchaResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SolveCaptchaResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.SolveCaptchaResp} SolveCaptchaResp
         */
        SolveCaptchaResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.SolveCaptchaResp)
                return object;
            return new $root.dto.SolveCaptchaResp();
        };

        /**
         * Creates a plain object from a SolveCaptchaResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.SolveCaptchaResp
         * @static
         * @param {dto.SolveCaptchaResp} message SolveCaptchaResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SolveCaptchaResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SolveCaptchaResp to JSON.
         * @function toJSON
         * @memberof dto.SolveCaptchaResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SolveCaptchaResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SolveCaptchaResp;
    })();

    dto.FetchQRCodeReq = (function() {

        /**
         * Properties of a FetchQRCodeReq.
         * @memberof dto
         * @interface IFetchQRCodeReq
         * @property {Long|null} [deviceSeed] FetchQRCodeReq deviceSeed
         * @property {number|null} [clientProtocol] FetchQRCodeReq clientProtocol
         */

        /**
         * Constructs a new FetchQRCodeReq.
         * @memberof dto
         * @classdesc Represents a FetchQRCodeReq.
         * @implements IFetchQRCodeReq
         * @constructor
         * @param {dto.IFetchQRCodeReq=} [properties] Properties to set
         */
        function FetchQRCodeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FetchQRCodeReq deviceSeed.
         * @member {Long} deviceSeed
         * @memberof dto.FetchQRCodeReq
         * @instance
         */
        FetchQRCodeReq.prototype.deviceSeed = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FetchQRCodeReq clientProtocol.
         * @member {number} clientProtocol
         * @memberof dto.FetchQRCodeReq
         * @instance
         */
        FetchQRCodeReq.prototype.clientProtocol = 0;

        /**
         * Creates a new FetchQRCodeReq instance using the specified properties.
         * @function create
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {dto.IFetchQRCodeReq=} [properties] Properties to set
         * @returns {dto.FetchQRCodeReq} FetchQRCodeReq instance
         */
        FetchQRCodeReq.create = function create(properties) {
            return new FetchQRCodeReq(properties);
        };

        /**
         * Encodes the specified FetchQRCodeReq message. Does not implicitly {@link dto.FetchQRCodeReq.verify|verify} messages.
         * @function encode
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {dto.IFetchQRCodeReq} message FetchQRCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchQRCodeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceSeed != null && Object.hasOwnProperty.call(message, "deviceSeed"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.deviceSeed);
            if (message.clientProtocol != null && Object.hasOwnProperty.call(message, "clientProtocol"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.clientProtocol);
            return writer;
        };

        /**
         * Encodes the specified FetchQRCodeReq message, length delimited. Does not implicitly {@link dto.FetchQRCodeReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {dto.IFetchQRCodeReq} message FetchQRCodeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchQRCodeReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchQRCodeReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.FetchQRCodeReq} FetchQRCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchQRCodeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.FetchQRCodeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deviceSeed = reader.int64();
                    break;
                case 2:
                    message.clientProtocol = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchQRCodeReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.FetchQRCodeReq} FetchQRCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchQRCodeReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchQRCodeReq message.
         * @function verify
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchQRCodeReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceSeed != null && message.hasOwnProperty("deviceSeed"))
                if (!$util.isInteger(message.deviceSeed) && !(message.deviceSeed && $util.isInteger(message.deviceSeed.low) && $util.isInteger(message.deviceSeed.high)))
                    return "deviceSeed: integer|Long expected";
            if (message.clientProtocol != null && message.hasOwnProperty("clientProtocol"))
                if (!$util.isInteger(message.clientProtocol))
                    return "clientProtocol: integer expected";
            return null;
        };

        /**
         * Creates a FetchQRCodeReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.FetchQRCodeReq} FetchQRCodeReq
         */
        FetchQRCodeReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.FetchQRCodeReq)
                return object;
            var message = new $root.dto.FetchQRCodeReq();
            if (object.deviceSeed != null)
                if ($util.Long)
                    (message.deviceSeed = $util.Long.fromValue(object.deviceSeed)).unsigned = false;
                else if (typeof object.deviceSeed === "string")
                    message.deviceSeed = parseInt(object.deviceSeed, 10);
                else if (typeof object.deviceSeed === "number")
                    message.deviceSeed = object.deviceSeed;
                else if (typeof object.deviceSeed === "object")
                    message.deviceSeed = new $util.LongBits(object.deviceSeed.low >>> 0, object.deviceSeed.high >>> 0).toNumber();
            if (object.clientProtocol != null)
                message.clientProtocol = object.clientProtocol | 0;
            return message;
        };

        /**
         * Creates a plain object from a FetchQRCodeReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.FetchQRCodeReq
         * @static
         * @param {dto.FetchQRCodeReq} message FetchQRCodeReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchQRCodeReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.deviceSeed = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.deviceSeed = options.longs === String ? "0" : 0;
                object.clientProtocol = 0;
            }
            if (message.deviceSeed != null && message.hasOwnProperty("deviceSeed"))
                if (typeof message.deviceSeed === "number")
                    object.deviceSeed = options.longs === String ? String(message.deviceSeed) : message.deviceSeed;
                else
                    object.deviceSeed = options.longs === String ? $util.Long.prototype.toString.call(message.deviceSeed) : options.longs === Number ? new $util.LongBits(message.deviceSeed.low >>> 0, message.deviceSeed.high >>> 0).toNumber() : message.deviceSeed;
            if (message.clientProtocol != null && message.hasOwnProperty("clientProtocol"))
                object.clientProtocol = message.clientProtocol;
            return object;
        };

        /**
         * Converts this FetchQRCodeReq to JSON.
         * @function toJSON
         * @memberof dto.FetchQRCodeReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchQRCodeReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FetchQRCodeReq;
    })();

    dto.QueryQRCodeStatusReq = (function() {

        /**
         * Properties of a QueryQRCodeStatusReq.
         * @memberof dto
         * @interface IQueryQRCodeStatusReq
         * @property {Uint8Array|null} [sig] QueryQRCodeStatusReq sig
         * @property {Long|null} [botId] QueryQRCodeStatusReq botId
         */

        /**
         * Constructs a new QueryQRCodeStatusReq.
         * @memberof dto
         * @classdesc Represents a QueryQRCodeStatusReq.
         * @implements IQueryQRCodeStatusReq
         * @constructor
         * @param {dto.IQueryQRCodeStatusReq=} [properties] Properties to set
         */
        function QueryQRCodeStatusReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryQRCodeStatusReq sig.
         * @member {Uint8Array} sig
         * @memberof dto.QueryQRCodeStatusReq
         * @instance
         */
        QueryQRCodeStatusReq.prototype.sig = $util.newBuffer([]);

        /**
         * QueryQRCodeStatusReq botId.
         * @member {Long} botId
         * @memberof dto.QueryQRCodeStatusReq
         * @instance
         */
        QueryQRCodeStatusReq.prototype.botId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new QueryQRCodeStatusReq instance using the specified properties.
         * @function create
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {dto.IQueryQRCodeStatusReq=} [properties] Properties to set
         * @returns {dto.QueryQRCodeStatusReq} QueryQRCodeStatusReq instance
         */
        QueryQRCodeStatusReq.create = function create(properties) {
            return new QueryQRCodeStatusReq(properties);
        };

        /**
         * Encodes the specified QueryQRCodeStatusReq message. Does not implicitly {@link dto.QueryQRCodeStatusReq.verify|verify} messages.
         * @function encode
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {dto.IQueryQRCodeStatusReq} message QueryQRCodeStatusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryQRCodeStatusReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sig != null && Object.hasOwnProperty.call(message, "sig"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sig);
            if (message.botId != null && Object.hasOwnProperty.call(message, "botId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.botId);
            return writer;
        };

        /**
         * Encodes the specified QueryQRCodeStatusReq message, length delimited. Does not implicitly {@link dto.QueryQRCodeStatusReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {dto.IQueryQRCodeStatusReq} message QueryQRCodeStatusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryQRCodeStatusReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryQRCodeStatusReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.QueryQRCodeStatusReq} QueryQRCodeStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryQRCodeStatusReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.QueryQRCodeStatusReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sig = reader.bytes();
                    break;
                case 2:
                    message.botId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryQRCodeStatusReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.QueryQRCodeStatusReq} QueryQRCodeStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryQRCodeStatusReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryQRCodeStatusReq message.
         * @function verify
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryQRCodeStatusReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sig != null && message.hasOwnProperty("sig"))
                if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                    return "sig: buffer expected";
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (!$util.isInteger(message.botId) && !(message.botId && $util.isInteger(message.botId.low) && $util.isInteger(message.botId.high)))
                    return "botId: integer|Long expected";
            return null;
        };

        /**
         * Creates a QueryQRCodeStatusReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.QueryQRCodeStatusReq} QueryQRCodeStatusReq
         */
        QueryQRCodeStatusReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.QueryQRCodeStatusReq)
                return object;
            var message = new $root.dto.QueryQRCodeStatusReq();
            if (object.sig != null)
                if (typeof object.sig === "string")
                    $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
                else if (object.sig.length)
                    message.sig = object.sig;
            if (object.botId != null)
                if ($util.Long)
                    (message.botId = $util.Long.fromValue(object.botId)).unsigned = false;
                else if (typeof object.botId === "string")
                    message.botId = parseInt(object.botId, 10);
                else if (typeof object.botId === "number")
                    message.botId = object.botId;
                else if (typeof object.botId === "object")
                    message.botId = new $util.LongBits(object.botId.low >>> 0, object.botId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a QueryQRCodeStatusReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.QueryQRCodeStatusReq
         * @static
         * @param {dto.QueryQRCodeStatusReq} message QueryQRCodeStatusReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QueryQRCodeStatusReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.sig = "";
                else {
                    object.sig = [];
                    if (options.bytes !== Array)
                        object.sig = $util.newBuffer(object.sig);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.botId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.botId = options.longs === String ? "0" : 0;
            }
            if (message.sig != null && message.hasOwnProperty("sig"))
                object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
            if (message.botId != null && message.hasOwnProperty("botId"))
                if (typeof message.botId === "number")
                    object.botId = options.longs === String ? String(message.botId) : message.botId;
                else
                    object.botId = options.longs === String ? $util.Long.prototype.toString.call(message.botId) : options.longs === Number ? new $util.LongBits(message.botId.low >>> 0, message.botId.high >>> 0).toNumber() : message.botId;
            return object;
        };

        /**
         * Converts this QueryQRCodeStatusReq to JSON.
         * @function toJSON
         * @memberof dto.QueryQRCodeStatusReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QueryQRCodeStatusReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QueryQRCodeStatusReq;
    })();

    dto.QRCodeLoginResp = (function() {

        /**
         * Properties of a QRCodeLoginResp.
         * @memberof dto
         * @interface IQRCodeLoginResp
         * @property {dto.QRCodeLoginResp.QRCodeLoginState|null} [state] QRCodeLoginResp state
         * @property {Uint8Array|null} [imageData] QRCodeLoginResp imageData
         * @property {Uint8Array|null} [sig] QRCodeLoginResp sig
         */

        /**
         * Constructs a new QRCodeLoginResp.
         * @memberof dto
         * @classdesc Represents a QRCodeLoginResp.
         * @implements IQRCodeLoginResp
         * @constructor
         * @param {dto.IQRCodeLoginResp=} [properties] Properties to set
         */
        function QRCodeLoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QRCodeLoginResp state.
         * @member {dto.QRCodeLoginResp.QRCodeLoginState} state
         * @memberof dto.QRCodeLoginResp
         * @instance
         */
        QRCodeLoginResp.prototype.state = 0;

        /**
         * QRCodeLoginResp imageData.
         * @member {Uint8Array} imageData
         * @memberof dto.QRCodeLoginResp
         * @instance
         */
        QRCodeLoginResp.prototype.imageData = $util.newBuffer([]);

        /**
         * QRCodeLoginResp sig.
         * @member {Uint8Array} sig
         * @memberof dto.QRCodeLoginResp
         * @instance
         */
        QRCodeLoginResp.prototype.sig = $util.newBuffer([]);

        /**
         * Creates a new QRCodeLoginResp instance using the specified properties.
         * @function create
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {dto.IQRCodeLoginResp=} [properties] Properties to set
         * @returns {dto.QRCodeLoginResp} QRCodeLoginResp instance
         */
        QRCodeLoginResp.create = function create(properties) {
            return new QRCodeLoginResp(properties);
        };

        /**
         * Encodes the specified QRCodeLoginResp message. Does not implicitly {@link dto.QRCodeLoginResp.verify|verify} messages.
         * @function encode
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {dto.IQRCodeLoginResp} message QRCodeLoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QRCodeLoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            if (message.imageData != null && Object.hasOwnProperty.call(message, "imageData"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.imageData);
            if (message.sig != null && Object.hasOwnProperty.call(message, "sig"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.sig);
            return writer;
        };

        /**
         * Encodes the specified QRCodeLoginResp message, length delimited. Does not implicitly {@link dto.QRCodeLoginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {dto.IQRCodeLoginResp} message QRCodeLoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QRCodeLoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QRCodeLoginResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.QRCodeLoginResp} QRCodeLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QRCodeLoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.QRCodeLoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.imageData = reader.bytes();
                    break;
                case 3:
                    message.sig = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QRCodeLoginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.QRCodeLoginResp} QRCodeLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QRCodeLoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QRCodeLoginResp message.
         * @function verify
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QRCodeLoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.imageData != null && message.hasOwnProperty("imageData"))
                if (!(message.imageData && typeof message.imageData.length === "number" || $util.isString(message.imageData)))
                    return "imageData: buffer expected";
            if (message.sig != null && message.hasOwnProperty("sig"))
                if (!(message.sig && typeof message.sig.length === "number" || $util.isString(message.sig)))
                    return "sig: buffer expected";
            return null;
        };

        /**
         * Creates a QRCodeLoginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.QRCodeLoginResp} QRCodeLoginResp
         */
        QRCodeLoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.QRCodeLoginResp)
                return object;
            var message = new $root.dto.QRCodeLoginResp();
            switch (object.state) {
            case "Unknown":
            case 0:
                message.state = 0;
                break;
            case "QRCodeImageFetch":
            case 1:
                message.state = 1;
                break;
            case "QRCodeWaitingForScan":
            case 2:
                message.state = 2;
                break;
            case "QRCodeWaitingForConfirm":
            case 3:
                message.state = 3;
                break;
            case "QRCodeTimeout":
            case 4:
                message.state = 4;
                break;
            case "QRCodeConfirmed":
            case 5:
                message.state = 5;
                break;
            case "QRCodeCanceled":
            case 6:
                message.state = 6;
                break;
            }
            if (object.imageData != null)
                if (typeof object.imageData === "string")
                    $util.base64.decode(object.imageData, message.imageData = $util.newBuffer($util.base64.length(object.imageData)), 0);
                else if (object.imageData.length)
                    message.imageData = object.imageData;
            if (object.sig != null)
                if (typeof object.sig === "string")
                    $util.base64.decode(object.sig, message.sig = $util.newBuffer($util.base64.length(object.sig)), 0);
                else if (object.sig.length)
                    message.sig = object.sig;
            return message;
        };

        /**
         * Creates a plain object from a QRCodeLoginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.QRCodeLoginResp
         * @static
         * @param {dto.QRCodeLoginResp} message QRCodeLoginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QRCodeLoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.state = options.enums === String ? "Unknown" : 0;
                if (options.bytes === String)
                    object.imageData = "";
                else {
                    object.imageData = [];
                    if (options.bytes !== Array)
                        object.imageData = $util.newBuffer(object.imageData);
                }
                if (options.bytes === String)
                    object.sig = "";
                else {
                    object.sig = [];
                    if (options.bytes !== Array)
                        object.sig = $util.newBuffer(object.sig);
                }
            }
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.dto.QRCodeLoginResp.QRCodeLoginState[message.state] : message.state;
            if (message.imageData != null && message.hasOwnProperty("imageData"))
                object.imageData = options.bytes === String ? $util.base64.encode(message.imageData, 0, message.imageData.length) : options.bytes === Array ? Array.prototype.slice.call(message.imageData) : message.imageData;
            if (message.sig != null && message.hasOwnProperty("sig"))
                object.sig = options.bytes === String ? $util.base64.encode(message.sig, 0, message.sig.length) : options.bytes === Array ? Array.prototype.slice.call(message.sig) : message.sig;
            return object;
        };

        /**
         * Converts this QRCodeLoginResp to JSON.
         * @function toJSON
         * @memberof dto.QRCodeLoginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QRCodeLoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * QRCodeLoginState enum.
         * @name dto.QRCodeLoginResp.QRCodeLoginState
         * @enum {number}
         * @property {number} Unknown=0 Unknown value
         * @property {number} QRCodeImageFetch=1 QRCodeImageFetch value
         * @property {number} QRCodeWaitingForScan=2 QRCodeWaitingForScan value
         * @property {number} QRCodeWaitingForConfirm=3 QRCodeWaitingForConfirm value
         * @property {number} QRCodeTimeout=4 QRCodeTimeout value
         * @property {number} QRCodeConfirmed=5 QRCodeConfirmed value
         * @property {number} QRCodeCanceled=6 QRCodeCanceled value
         */
        QRCodeLoginResp.QRCodeLoginState = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unknown"] = 0;
            values[valuesById[1] = "QRCodeImageFetch"] = 1;
            values[valuesById[2] = "QRCodeWaitingForScan"] = 2;
            values[valuesById[3] = "QRCodeWaitingForConfirm"] = 3;
            values[valuesById[4] = "QRCodeTimeout"] = 4;
            values[valuesById[5] = "QRCodeConfirmed"] = 5;
            values[valuesById[6] = "QRCodeCanceled"] = 6;
            return values;
        })();

        return QRCodeLoginResp;
    })();

    dto.Plugin = (function() {

        /**
         * Properties of a Plugin.
         * @memberof dto
         * @interface IPlugin
         * @property {string|null} [name] Plugin name
         * @property {boolean|null} [disabled] Plugin disabled
         * @property {boolean|null} [json] Plugin json
         * @property {number|null} [protocol] Plugin protocol
         * @property {Array.<string>|null} [urls] Plugin urls
         * @property {Array.<number>|null} [eventFilter] Plugin eventFilter
         * @property {Array.<number>|null} [apiFilter] Plugin apiFilter
         * @property {string|null} [regexFilter] Plugin regexFilter
         * @property {string|null} [regexReplace] Plugin regexReplace
         * @property {Array.<dto.Plugin.IHeader>|null} [extraHeader] Plugin extraHeader
         */

        /**
         * Constructs a new Plugin.
         * @memberof dto
         * @classdesc Represents a Plugin.
         * @implements IPlugin
         * @constructor
         * @param {dto.IPlugin=} [properties] Properties to set
         */
        function Plugin(properties) {
            this.urls = [];
            this.eventFilter = [];
            this.apiFilter = [];
            this.extraHeader = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Plugin name.
         * @member {string} name
         * @memberof dto.Plugin
         * @instance
         */
        Plugin.prototype.name = "";

        /**
         * Plugin disabled.
         * @member {boolean} disabled
         * @memberof dto.Plugin
         * @instance
         */
        Plugin.prototype.disabled = false;

        /**
         * Plugin json.
         * @member {boolean} json
         * @memberof dto.Plugin
         * @instance
         */
        Plugin.prototype.json = false;

        /**
         * Plugin protocol.
         * @member {number} protocol
         * @memberof dto.Plugin
         * @instance
         */
        Plugin.prototype.protocol = 0;

        /**
         * Plugin urls.
         * @member {Array.<string>} urls
         * @memberof dto.Plugin
         * @instance
         */
        Plugin.prototype.urls = $util.emptyArray;

        /**
         * Plugin eventFilter.
         * @member {Array.<number>} eventFilter
         * @memberof dto.Plugin
         * @instance
         */
        Plugin.prototype.eventFilter = $util.emptyArray;

        /**
         * Plugin apiFilter.
         * @member {Array.<number>} apiFilter
         * @memberof dto.Plugin
         * @instance
         */
        Plugin.prototype.apiFilter = $util.emptyArray;

        /**
         * Plugin regexFilter.
         * @member {string} regexFilter
         * @memberof dto.Plugin
         * @instance
         */
        Plugin.prototype.regexFilter = "";

        /**
         * Plugin regexReplace.
         * @member {string} regexReplace
         * @memberof dto.Plugin
         * @instance
         */
        Plugin.prototype.regexReplace = "";

        /**
         * Plugin extraHeader.
         * @member {Array.<dto.Plugin.IHeader>} extraHeader
         * @memberof dto.Plugin
         * @instance
         */
        Plugin.prototype.extraHeader = $util.emptyArray;

        /**
         * Creates a new Plugin instance using the specified properties.
         * @function create
         * @memberof dto.Plugin
         * @static
         * @param {dto.IPlugin=} [properties] Properties to set
         * @returns {dto.Plugin} Plugin instance
         */
        Plugin.create = function create(properties) {
            return new Plugin(properties);
        };

        /**
         * Encodes the specified Plugin message. Does not implicitly {@link dto.Plugin.verify|verify} messages.
         * @function encode
         * @memberof dto.Plugin
         * @static
         * @param {dto.IPlugin} message Plugin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Plugin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.disabled != null && Object.hasOwnProperty.call(message, "disabled"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.disabled);
            if (message.json != null && Object.hasOwnProperty.call(message, "json"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.json);
            if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.protocol);
            if (message.urls != null && message.urls.length)
                for (var i = 0; i < message.urls.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.urls[i]);
            if (message.eventFilter != null && message.eventFilter.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.eventFilter.length; ++i)
                    writer.int32(message.eventFilter[i]);
                writer.ldelim();
            }
            if (message.apiFilter != null && message.apiFilter.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.apiFilter.length; ++i)
                    writer.int32(message.apiFilter[i]);
                writer.ldelim();
            }
            if (message.regexFilter != null && Object.hasOwnProperty.call(message, "regexFilter"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.regexFilter);
            if (message.regexReplace != null && Object.hasOwnProperty.call(message, "regexReplace"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.regexReplace);
            if (message.extraHeader != null && message.extraHeader.length)
                for (var i = 0; i < message.extraHeader.length; ++i)
                    $root.dto.Plugin.Header.encode(message.extraHeader[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Plugin message, length delimited. Does not implicitly {@link dto.Plugin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.Plugin
         * @static
         * @param {dto.IPlugin} message Plugin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Plugin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Plugin message from the specified reader or buffer.
         * @function decode
         * @memberof dto.Plugin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.Plugin} Plugin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Plugin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Plugin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.disabled = reader.bool();
                    break;
                case 3:
                    message.json = reader.bool();
                    break;
                case 4:
                    message.protocol = reader.int32();
                    break;
                case 5:
                    if (!(message.urls && message.urls.length))
                        message.urls = [];
                    message.urls.push(reader.string());
                    break;
                case 6:
                    if (!(message.eventFilter && message.eventFilter.length))
                        message.eventFilter = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.eventFilter.push(reader.int32());
                    } else
                        message.eventFilter.push(reader.int32());
                    break;
                case 7:
                    if (!(message.apiFilter && message.apiFilter.length))
                        message.apiFilter = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.apiFilter.push(reader.int32());
                    } else
                        message.apiFilter.push(reader.int32());
                    break;
                case 8:
                    message.regexFilter = reader.string();
                    break;
                case 9:
                    message.regexReplace = reader.string();
                    break;
                case 10:
                    if (!(message.extraHeader && message.extraHeader.length))
                        message.extraHeader = [];
                    message.extraHeader.push($root.dto.Plugin.Header.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Plugin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.Plugin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.Plugin} Plugin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Plugin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Plugin message.
         * @function verify
         * @memberof dto.Plugin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Plugin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                if (typeof message.disabled !== "boolean")
                    return "disabled: boolean expected";
            if (message.json != null && message.hasOwnProperty("json"))
                if (typeof message.json !== "boolean")
                    return "json: boolean expected";
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                if (!$util.isInteger(message.protocol))
                    return "protocol: integer expected";
            if (message.urls != null && message.hasOwnProperty("urls")) {
                if (!Array.isArray(message.urls))
                    return "urls: array expected";
                for (var i = 0; i < message.urls.length; ++i)
                    if (!$util.isString(message.urls[i]))
                        return "urls: string[] expected";
            }
            if (message.eventFilter != null && message.hasOwnProperty("eventFilter")) {
                if (!Array.isArray(message.eventFilter))
                    return "eventFilter: array expected";
                for (var i = 0; i < message.eventFilter.length; ++i)
                    if (!$util.isInteger(message.eventFilter[i]))
                        return "eventFilter: integer[] expected";
            }
            if (message.apiFilter != null && message.hasOwnProperty("apiFilter")) {
                if (!Array.isArray(message.apiFilter))
                    return "apiFilter: array expected";
                for (var i = 0; i < message.apiFilter.length; ++i)
                    if (!$util.isInteger(message.apiFilter[i]))
                        return "apiFilter: integer[] expected";
            }
            if (message.regexFilter != null && message.hasOwnProperty("regexFilter"))
                if (!$util.isString(message.regexFilter))
                    return "regexFilter: string expected";
            if (message.regexReplace != null && message.hasOwnProperty("regexReplace"))
                if (!$util.isString(message.regexReplace))
                    return "regexReplace: string expected";
            if (message.extraHeader != null && message.hasOwnProperty("extraHeader")) {
                if (!Array.isArray(message.extraHeader))
                    return "extraHeader: array expected";
                for (var i = 0; i < message.extraHeader.length; ++i) {
                    var error = $root.dto.Plugin.Header.verify(message.extraHeader[i]);
                    if (error)
                        return "extraHeader." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Plugin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.Plugin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.Plugin} Plugin
         */
        Plugin.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.Plugin)
                return object;
            var message = new $root.dto.Plugin();
            if (object.name != null)
                message.name = String(object.name);
            if (object.disabled != null)
                message.disabled = Boolean(object.disabled);
            if (object.json != null)
                message.json = Boolean(object.json);
            if (object.protocol != null)
                message.protocol = object.protocol | 0;
            if (object.urls) {
                if (!Array.isArray(object.urls))
                    throw TypeError(".dto.Plugin.urls: array expected");
                message.urls = [];
                for (var i = 0; i < object.urls.length; ++i)
                    message.urls[i] = String(object.urls[i]);
            }
            if (object.eventFilter) {
                if (!Array.isArray(object.eventFilter))
                    throw TypeError(".dto.Plugin.eventFilter: array expected");
                message.eventFilter = [];
                for (var i = 0; i < object.eventFilter.length; ++i)
                    message.eventFilter[i] = object.eventFilter[i] | 0;
            }
            if (object.apiFilter) {
                if (!Array.isArray(object.apiFilter))
                    throw TypeError(".dto.Plugin.apiFilter: array expected");
                message.apiFilter = [];
                for (var i = 0; i < object.apiFilter.length; ++i)
                    message.apiFilter[i] = object.apiFilter[i] | 0;
            }
            if (object.regexFilter != null)
                message.regexFilter = String(object.regexFilter);
            if (object.regexReplace != null)
                message.regexReplace = String(object.regexReplace);
            if (object.extraHeader) {
                if (!Array.isArray(object.extraHeader))
                    throw TypeError(".dto.Plugin.extraHeader: array expected");
                message.extraHeader = [];
                for (var i = 0; i < object.extraHeader.length; ++i) {
                    if (typeof object.extraHeader[i] !== "object")
                        throw TypeError(".dto.Plugin.extraHeader: object expected");
                    message.extraHeader[i] = $root.dto.Plugin.Header.fromObject(object.extraHeader[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Plugin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.Plugin
         * @static
         * @param {dto.Plugin} message Plugin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Plugin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.urls = [];
                object.eventFilter = [];
                object.apiFilter = [];
                object.extraHeader = [];
            }
            if (options.defaults) {
                object.name = "";
                object.disabled = false;
                object.json = false;
                object.protocol = 0;
                object.regexFilter = "";
                object.regexReplace = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                object.disabled = message.disabled;
            if (message.json != null && message.hasOwnProperty("json"))
                object.json = message.json;
            if (message.protocol != null && message.hasOwnProperty("protocol"))
                object.protocol = message.protocol;
            if (message.urls && message.urls.length) {
                object.urls = [];
                for (var j = 0; j < message.urls.length; ++j)
                    object.urls[j] = message.urls[j];
            }
            if (message.eventFilter && message.eventFilter.length) {
                object.eventFilter = [];
                for (var j = 0; j < message.eventFilter.length; ++j)
                    object.eventFilter[j] = message.eventFilter[j];
            }
            if (message.apiFilter && message.apiFilter.length) {
                object.apiFilter = [];
                for (var j = 0; j < message.apiFilter.length; ++j)
                    object.apiFilter[j] = message.apiFilter[j];
            }
            if (message.regexFilter != null && message.hasOwnProperty("regexFilter"))
                object.regexFilter = message.regexFilter;
            if (message.regexReplace != null && message.hasOwnProperty("regexReplace"))
                object.regexReplace = message.regexReplace;
            if (message.extraHeader && message.extraHeader.length) {
                object.extraHeader = [];
                for (var j = 0; j < message.extraHeader.length; ++j)
                    object.extraHeader[j] = $root.dto.Plugin.Header.toObject(message.extraHeader[j], options);
            }
            return object;
        };

        /**
         * Converts this Plugin to JSON.
         * @function toJSON
         * @memberof dto.Plugin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Plugin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Plugin.Header = (function() {

            /**
             * Properties of a Header.
             * @memberof dto.Plugin
             * @interface IHeader
             * @property {string|null} [key] Header key
             * @property {Array.<string>|null} [value] Header value
             */

            /**
             * Constructs a new Header.
             * @memberof dto.Plugin
             * @classdesc Represents a Header.
             * @implements IHeader
             * @constructor
             * @param {dto.Plugin.IHeader=} [properties] Properties to set
             */
            function Header(properties) {
                this.value = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Header key.
             * @member {string} key
             * @memberof dto.Plugin.Header
             * @instance
             */
            Header.prototype.key = "";

            /**
             * Header value.
             * @member {Array.<string>} value
             * @memberof dto.Plugin.Header
             * @instance
             */
            Header.prototype.value = $util.emptyArray;

            /**
             * Creates a new Header instance using the specified properties.
             * @function create
             * @memberof dto.Plugin.Header
             * @static
             * @param {dto.Plugin.IHeader=} [properties] Properties to set
             * @returns {dto.Plugin.Header} Header instance
             */
            Header.create = function create(properties) {
                return new Header(properties);
            };

            /**
             * Encodes the specified Header message. Does not implicitly {@link dto.Plugin.Header.verify|verify} messages.
             * @function encode
             * @memberof dto.Plugin.Header
             * @static
             * @param {dto.Plugin.IHeader} message Header message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Header.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && message.value.length)
                    for (var i = 0; i < message.value.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.value[i]);
                return writer;
            };

            /**
             * Encodes the specified Header message, length delimited. Does not implicitly {@link dto.Plugin.Header.verify|verify} messages.
             * @function encodeDelimited
             * @memberof dto.Plugin.Header
             * @static
             * @param {dto.Plugin.IHeader} message Header message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Header.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Header message from the specified reader or buffer.
             * @function decode
             * @memberof dto.Plugin.Header
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {dto.Plugin.Header} Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Header.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.Plugin.Header();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.key = reader.string();
                        break;
                    case 2:
                        if (!(message.value && message.value.length))
                            message.value = [];
                        message.value.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Header message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof dto.Plugin.Header
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {dto.Plugin.Header} Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Header.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Header message.
             * @function verify
             * @memberof dto.Plugin.Header
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Header.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.key != null && message.hasOwnProperty("key"))
                    if (!$util.isString(message.key))
                        return "key: string expected";
                if (message.value != null && message.hasOwnProperty("value")) {
                    if (!Array.isArray(message.value))
                        return "value: array expected";
                    for (var i = 0; i < message.value.length; ++i)
                        if (!$util.isString(message.value[i]))
                            return "value: string[] expected";
                }
                return null;
            };

            /**
             * Creates a Header message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof dto.Plugin.Header
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {dto.Plugin.Header} Header
             */
            Header.fromObject = function fromObject(object) {
                if (object instanceof $root.dto.Plugin.Header)
                    return object;
                var message = new $root.dto.Plugin.Header();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.value) {
                    if (!Array.isArray(object.value))
                        throw TypeError(".dto.Plugin.Header.value: array expected");
                    message.value = [];
                    for (var i = 0; i < object.value.length; ++i)
                        message.value[i] = String(object.value[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Header message. Also converts values to other types if specified.
             * @function toObject
             * @memberof dto.Plugin.Header
             * @static
             * @param {dto.Plugin.Header} message Header
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Header.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.value = [];
                if (options.defaults)
                    object.key = "";
                if (message.key != null && message.hasOwnProperty("key"))
                    object.key = message.key;
                if (message.value && message.value.length) {
                    object.value = [];
                    for (var j = 0; j < message.value.length; ++j)
                        object.value[j] = message.value[j];
                }
                return object;
            };

            /**
             * Converts this Header to JSON.
             * @function toJSON
             * @memberof dto.Plugin.Header
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Header.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Header;
        })();

        return Plugin;
    })();

    dto.ListPluginReq = (function() {

        /**
         * Properties of a ListPluginReq.
         * @memberof dto
         * @interface IListPluginReq
         */

        /**
         * Constructs a new ListPluginReq.
         * @memberof dto
         * @classdesc Represents a ListPluginReq.
         * @implements IListPluginReq
         * @constructor
         * @param {dto.IListPluginReq=} [properties] Properties to set
         */
        function ListPluginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ListPluginReq instance using the specified properties.
         * @function create
         * @memberof dto.ListPluginReq
         * @static
         * @param {dto.IListPluginReq=} [properties] Properties to set
         * @returns {dto.ListPluginReq} ListPluginReq instance
         */
        ListPluginReq.create = function create(properties) {
            return new ListPluginReq(properties);
        };

        /**
         * Encodes the specified ListPluginReq message. Does not implicitly {@link dto.ListPluginReq.verify|verify} messages.
         * @function encode
         * @memberof dto.ListPluginReq
         * @static
         * @param {dto.IListPluginReq} message ListPluginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPluginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified ListPluginReq message, length delimited. Does not implicitly {@link dto.ListPluginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListPluginReq
         * @static
         * @param {dto.IListPluginReq} message ListPluginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPluginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListPluginReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListPluginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListPluginReq} ListPluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPluginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListPluginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListPluginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListPluginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListPluginReq} ListPluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPluginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListPluginReq message.
         * @function verify
         * @memberof dto.ListPluginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListPluginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a ListPluginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListPluginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListPluginReq} ListPluginReq
         */
        ListPluginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListPluginReq)
                return object;
            return new $root.dto.ListPluginReq();
        };

        /**
         * Creates a plain object from a ListPluginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListPluginReq
         * @static
         * @param {dto.ListPluginReq} message ListPluginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListPluginReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this ListPluginReq to JSON.
         * @function toJSON
         * @memberof dto.ListPluginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListPluginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListPluginReq;
    })();

    dto.ListPluginResp = (function() {

        /**
         * Properties of a ListPluginResp.
         * @memberof dto
         * @interface IListPluginResp
         * @property {Array.<dto.IPlugin>|null} [plugins] ListPluginResp plugins
         */

        /**
         * Constructs a new ListPluginResp.
         * @memberof dto
         * @classdesc Represents a ListPluginResp.
         * @implements IListPluginResp
         * @constructor
         * @param {dto.IListPluginResp=} [properties] Properties to set
         */
        function ListPluginResp(properties) {
            this.plugins = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ListPluginResp plugins.
         * @member {Array.<dto.IPlugin>} plugins
         * @memberof dto.ListPluginResp
         * @instance
         */
        ListPluginResp.prototype.plugins = $util.emptyArray;

        /**
         * Creates a new ListPluginResp instance using the specified properties.
         * @function create
         * @memberof dto.ListPluginResp
         * @static
         * @param {dto.IListPluginResp=} [properties] Properties to set
         * @returns {dto.ListPluginResp} ListPluginResp instance
         */
        ListPluginResp.create = function create(properties) {
            return new ListPluginResp(properties);
        };

        /**
         * Encodes the specified ListPluginResp message. Does not implicitly {@link dto.ListPluginResp.verify|verify} messages.
         * @function encode
         * @memberof dto.ListPluginResp
         * @static
         * @param {dto.IListPluginResp} message ListPluginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPluginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.plugins != null && message.plugins.length)
                for (var i = 0; i < message.plugins.length; ++i)
                    $root.dto.Plugin.encode(message.plugins[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ListPluginResp message, length delimited. Does not implicitly {@link dto.ListPluginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.ListPluginResp
         * @static
         * @param {dto.IListPluginResp} message ListPluginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ListPluginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ListPluginResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.ListPluginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.ListPluginResp} ListPluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPluginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.ListPluginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.plugins && message.plugins.length))
                        message.plugins = [];
                    message.plugins.push($root.dto.Plugin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ListPluginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.ListPluginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.ListPluginResp} ListPluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ListPluginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ListPluginResp message.
         * @function verify
         * @memberof dto.ListPluginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ListPluginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.plugins != null && message.hasOwnProperty("plugins")) {
                if (!Array.isArray(message.plugins))
                    return "plugins: array expected";
                for (var i = 0; i < message.plugins.length; ++i) {
                    var error = $root.dto.Plugin.verify(message.plugins[i]);
                    if (error)
                        return "plugins." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ListPluginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.ListPluginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.ListPluginResp} ListPluginResp
         */
        ListPluginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.ListPluginResp)
                return object;
            var message = new $root.dto.ListPluginResp();
            if (object.plugins) {
                if (!Array.isArray(object.plugins))
                    throw TypeError(".dto.ListPluginResp.plugins: array expected");
                message.plugins = [];
                for (var i = 0; i < object.plugins.length; ++i) {
                    if (typeof object.plugins[i] !== "object")
                        throw TypeError(".dto.ListPluginResp.plugins: object expected");
                    message.plugins[i] = $root.dto.Plugin.fromObject(object.plugins[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ListPluginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.ListPluginResp
         * @static
         * @param {dto.ListPluginResp} message ListPluginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ListPluginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.plugins = [];
            if (message.plugins && message.plugins.length) {
                object.plugins = [];
                for (var j = 0; j < message.plugins.length; ++j)
                    object.plugins[j] = $root.dto.Plugin.toObject(message.plugins[j], options);
            }
            return object;
        };

        /**
         * Converts this ListPluginResp to JSON.
         * @function toJSON
         * @memberof dto.ListPluginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ListPluginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ListPluginResp;
    })();

    dto.SavePluginReq = (function() {

        /**
         * Properties of a SavePluginReq.
         * @memberof dto
         * @interface ISavePluginReq
         * @property {dto.IPlugin|null} [plugin] SavePluginReq plugin
         */

        /**
         * Constructs a new SavePluginReq.
         * @memberof dto
         * @classdesc Represents a SavePluginReq.
         * @implements ISavePluginReq
         * @constructor
         * @param {dto.ISavePluginReq=} [properties] Properties to set
         */
        function SavePluginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SavePluginReq plugin.
         * @member {dto.IPlugin|null|undefined} plugin
         * @memberof dto.SavePluginReq
         * @instance
         */
        SavePluginReq.prototype.plugin = null;

        /**
         * Creates a new SavePluginReq instance using the specified properties.
         * @function create
         * @memberof dto.SavePluginReq
         * @static
         * @param {dto.ISavePluginReq=} [properties] Properties to set
         * @returns {dto.SavePluginReq} SavePluginReq instance
         */
        SavePluginReq.create = function create(properties) {
            return new SavePluginReq(properties);
        };

        /**
         * Encodes the specified SavePluginReq message. Does not implicitly {@link dto.SavePluginReq.verify|verify} messages.
         * @function encode
         * @memberof dto.SavePluginReq
         * @static
         * @param {dto.ISavePluginReq} message SavePluginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SavePluginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.plugin != null && Object.hasOwnProperty.call(message, "plugin"))
                $root.dto.Plugin.encode(message.plugin, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SavePluginReq message, length delimited. Does not implicitly {@link dto.SavePluginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.SavePluginReq
         * @static
         * @param {dto.ISavePluginReq} message SavePluginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SavePluginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SavePluginReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.SavePluginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.SavePluginReq} SavePluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SavePluginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.SavePluginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.plugin = $root.dto.Plugin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SavePluginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.SavePluginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.SavePluginReq} SavePluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SavePluginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SavePluginReq message.
         * @function verify
         * @memberof dto.SavePluginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SavePluginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.plugin != null && message.hasOwnProperty("plugin")) {
                var error = $root.dto.Plugin.verify(message.plugin);
                if (error)
                    return "plugin." + error;
            }
            return null;
        };

        /**
         * Creates a SavePluginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.SavePluginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.SavePluginReq} SavePluginReq
         */
        SavePluginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.SavePluginReq)
                return object;
            var message = new $root.dto.SavePluginReq();
            if (object.plugin != null) {
                if (typeof object.plugin !== "object")
                    throw TypeError(".dto.SavePluginReq.plugin: object expected");
                message.plugin = $root.dto.Plugin.fromObject(object.plugin);
            }
            return message;
        };

        /**
         * Creates a plain object from a SavePluginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.SavePluginReq
         * @static
         * @param {dto.SavePluginReq} message SavePluginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SavePluginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.plugin = null;
            if (message.plugin != null && message.hasOwnProperty("plugin"))
                object.plugin = $root.dto.Plugin.toObject(message.plugin, options);
            return object;
        };

        /**
         * Converts this SavePluginReq to JSON.
         * @function toJSON
         * @memberof dto.SavePluginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SavePluginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SavePluginReq;
    })();

    dto.SavePluginResp = (function() {

        /**
         * Properties of a SavePluginResp.
         * @memberof dto
         * @interface ISavePluginResp
         */

        /**
         * Constructs a new SavePluginResp.
         * @memberof dto
         * @classdesc Represents a SavePluginResp.
         * @implements ISavePluginResp
         * @constructor
         * @param {dto.ISavePluginResp=} [properties] Properties to set
         */
        function SavePluginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SavePluginResp instance using the specified properties.
         * @function create
         * @memberof dto.SavePluginResp
         * @static
         * @param {dto.ISavePluginResp=} [properties] Properties to set
         * @returns {dto.SavePluginResp} SavePluginResp instance
         */
        SavePluginResp.create = function create(properties) {
            return new SavePluginResp(properties);
        };

        /**
         * Encodes the specified SavePluginResp message. Does not implicitly {@link dto.SavePluginResp.verify|verify} messages.
         * @function encode
         * @memberof dto.SavePluginResp
         * @static
         * @param {dto.ISavePluginResp} message SavePluginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SavePluginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SavePluginResp message, length delimited. Does not implicitly {@link dto.SavePluginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.SavePluginResp
         * @static
         * @param {dto.ISavePluginResp} message SavePluginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SavePluginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SavePluginResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.SavePluginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.SavePluginResp} SavePluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SavePluginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.SavePluginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SavePluginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.SavePluginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.SavePluginResp} SavePluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SavePluginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SavePluginResp message.
         * @function verify
         * @memberof dto.SavePluginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SavePluginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SavePluginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.SavePluginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.SavePluginResp} SavePluginResp
         */
        SavePluginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.SavePluginResp)
                return object;
            return new $root.dto.SavePluginResp();
        };

        /**
         * Creates a plain object from a SavePluginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.SavePluginResp
         * @static
         * @param {dto.SavePluginResp} message SavePluginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SavePluginResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SavePluginResp to JSON.
         * @function toJSON
         * @memberof dto.SavePluginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SavePluginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SavePluginResp;
    })();

    dto.DeletePluginReq = (function() {

        /**
         * Properties of a DeletePluginReq.
         * @memberof dto
         * @interface IDeletePluginReq
         * @property {string|null} [name] DeletePluginReq name
         */

        /**
         * Constructs a new DeletePluginReq.
         * @memberof dto
         * @classdesc Represents a DeletePluginReq.
         * @implements IDeletePluginReq
         * @constructor
         * @param {dto.IDeletePluginReq=} [properties] Properties to set
         */
        function DeletePluginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeletePluginReq name.
         * @member {string} name
         * @memberof dto.DeletePluginReq
         * @instance
         */
        DeletePluginReq.prototype.name = "";

        /**
         * Creates a new DeletePluginReq instance using the specified properties.
         * @function create
         * @memberof dto.DeletePluginReq
         * @static
         * @param {dto.IDeletePluginReq=} [properties] Properties to set
         * @returns {dto.DeletePluginReq} DeletePluginReq instance
         */
        DeletePluginReq.create = function create(properties) {
            return new DeletePluginReq(properties);
        };

        /**
         * Encodes the specified DeletePluginReq message. Does not implicitly {@link dto.DeletePluginReq.verify|verify} messages.
         * @function encode
         * @memberof dto.DeletePluginReq
         * @static
         * @param {dto.IDeletePluginReq} message DeletePluginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeletePluginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified DeletePluginReq message, length delimited. Does not implicitly {@link dto.DeletePluginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.DeletePluginReq
         * @static
         * @param {dto.IDeletePluginReq} message DeletePluginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeletePluginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeletePluginReq message from the specified reader or buffer.
         * @function decode
         * @memberof dto.DeletePluginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.DeletePluginReq} DeletePluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeletePluginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.DeletePluginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeletePluginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.DeletePluginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.DeletePluginReq} DeletePluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeletePluginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeletePluginReq message.
         * @function verify
         * @memberof dto.DeletePluginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeletePluginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a DeletePluginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.DeletePluginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.DeletePluginReq} DeletePluginReq
         */
        DeletePluginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.DeletePluginReq)
                return object;
            var message = new $root.dto.DeletePluginReq();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a DeletePluginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.DeletePluginReq
         * @static
         * @param {dto.DeletePluginReq} message DeletePluginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeletePluginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this DeletePluginReq to JSON.
         * @function toJSON
         * @memberof dto.DeletePluginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeletePluginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeletePluginReq;
    })();

    dto.DeletePluginResp = (function() {

        /**
         * Properties of a DeletePluginResp.
         * @memberof dto
         * @interface IDeletePluginResp
         */

        /**
         * Constructs a new DeletePluginResp.
         * @memberof dto
         * @classdesc Represents a DeletePluginResp.
         * @implements IDeletePluginResp
         * @constructor
         * @param {dto.IDeletePluginResp=} [properties] Properties to set
         */
        function DeletePluginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DeletePluginResp instance using the specified properties.
         * @function create
         * @memberof dto.DeletePluginResp
         * @static
         * @param {dto.IDeletePluginResp=} [properties] Properties to set
         * @returns {dto.DeletePluginResp} DeletePluginResp instance
         */
        DeletePluginResp.create = function create(properties) {
            return new DeletePluginResp(properties);
        };

        /**
         * Encodes the specified DeletePluginResp message. Does not implicitly {@link dto.DeletePluginResp.verify|verify} messages.
         * @function encode
         * @memberof dto.DeletePluginResp
         * @static
         * @param {dto.IDeletePluginResp} message DeletePluginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeletePluginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DeletePluginResp message, length delimited. Does not implicitly {@link dto.DeletePluginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dto.DeletePluginResp
         * @static
         * @param {dto.IDeletePluginResp} message DeletePluginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeletePluginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeletePluginResp message from the specified reader or buffer.
         * @function decode
         * @memberof dto.DeletePluginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dto.DeletePluginResp} DeletePluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeletePluginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.dto.DeletePluginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeletePluginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dto.DeletePluginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dto.DeletePluginResp} DeletePluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeletePluginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeletePluginResp message.
         * @function verify
         * @memberof dto.DeletePluginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeletePluginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DeletePluginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dto.DeletePluginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dto.DeletePluginResp} DeletePluginResp
         */
        DeletePluginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.dto.DeletePluginResp)
                return object;
            return new $root.dto.DeletePluginResp();
        };

        /**
         * Creates a plain object from a DeletePluginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dto.DeletePluginResp
         * @static
         * @param {dto.DeletePluginResp} message DeletePluginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeletePluginResp.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DeletePluginResp to JSON.
         * @function toJSON
         * @memberof dto.DeletePluginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeletePluginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeletePluginResp;
    })();

    dto.HttpService = (function() {

        /**
         * Constructs a new HttpService service.
         * @memberof dto
         * @classdesc Represents a HttpService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function HttpService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (HttpService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = HttpService;

        /**
         * Creates new HttpService service using the specified rpc implementation.
         * @function create
         * @memberof dto.HttpService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {HttpService} RPC service. Useful where requests and/or responses are streamed.
         */
        HttpService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link dto.HttpService#createBot}.
         * @memberof dto.HttpService
         * @typedef CreateBotCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.CreateBotResp} [response] CreateBotResp
         */

        /**
         * Calls CreateBot.
         * @function createBot
         * @memberof dto.HttpService
         * @instance
         * @param {dto.ICreateBotReq} request CreateBotReq message or plain object
         * @param {dto.HttpService.CreateBotCallback} callback Node-style callback called with the error, if any, and CreateBotResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.createBot = function createBot(request, callback) {
            return this.rpcCall(createBot, $root.dto.CreateBotReq, $root.dto.CreateBotResp, request, callback);
        }, "name", { value: "CreateBot" });

        /**
         * Calls CreateBot.
         * @function createBot
         * @memberof dto.HttpService
         * @instance
         * @param {dto.ICreateBotReq} request CreateBotReq message or plain object
         * @returns {Promise<dto.CreateBotResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#deleteBot}.
         * @memberof dto.HttpService
         * @typedef DeleteBotCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.DeleteBotResp} [response] DeleteBotResp
         */

        /**
         * Calls DeleteBot.
         * @function deleteBot
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IDeleteBotReq} request DeleteBotReq message or plain object
         * @param {dto.HttpService.DeleteBotCallback} callback Node-style callback called with the error, if any, and DeleteBotResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.deleteBot = function deleteBot(request, callback) {
            return this.rpcCall(deleteBot, $root.dto.DeleteBotReq, $root.dto.DeleteBotResp, request, callback);
        }, "name", { value: "DeleteBot" });

        /**
         * Calls DeleteBot.
         * @function deleteBot
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IDeleteBotReq} request DeleteBotReq message or plain object
         * @returns {Promise<dto.DeleteBotResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#listBot}.
         * @memberof dto.HttpService
         * @typedef ListBotCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.ListBotResp} [response] ListBotResp
         */

        /**
         * Calls ListBot.
         * @function listBot
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IListBotReq} request ListBotReq message or plain object
         * @param {dto.HttpService.ListBotCallback} callback Node-style callback called with the error, if any, and ListBotResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.listBot = function listBot(request, callback) {
            return this.rpcCall(listBot, $root.dto.ListBotReq, $root.dto.ListBotResp, request, callback);
        }, "name", { value: "ListBot" });

        /**
         * Calls ListBot.
         * @function listBot
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IListBotReq} request ListBotReq message or plain object
         * @returns {Promise<dto.ListBotResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#solveCaptcha}.
         * @memberof dto.HttpService
         * @typedef SolveCaptchaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.SolveCaptchaResp} [response] SolveCaptchaResp
         */

        /**
         * Calls SolveCaptcha.
         * @function solveCaptcha
         * @memberof dto.HttpService
         * @instance
         * @param {dto.ISolveCaptchaReq} request SolveCaptchaReq message or plain object
         * @param {dto.HttpService.SolveCaptchaCallback} callback Node-style callback called with the error, if any, and SolveCaptchaResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.solveCaptcha = function solveCaptcha(request, callback) {
            return this.rpcCall(solveCaptcha, $root.dto.SolveCaptchaReq, $root.dto.SolveCaptchaResp, request, callback);
        }, "name", { value: "SolveCaptcha" });

        /**
         * Calls SolveCaptcha.
         * @function solveCaptcha
         * @memberof dto.HttpService
         * @instance
         * @param {dto.ISolveCaptchaReq} request SolveCaptchaReq message or plain object
         * @returns {Promise<dto.SolveCaptchaResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#fetchQRCode}.
         * @memberof dto.HttpService
         * @typedef FetchQRCodeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.QRCodeLoginResp} [response] QRCodeLoginResp
         */

        /**
         * Calls FetchQRCode.
         * @function fetchQRCode
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IFetchQRCodeReq} request FetchQRCodeReq message or plain object
         * @param {dto.HttpService.FetchQRCodeCallback} callback Node-style callback called with the error, if any, and QRCodeLoginResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.fetchQRCode = function fetchQRCode(request, callback) {
            return this.rpcCall(fetchQRCode, $root.dto.FetchQRCodeReq, $root.dto.QRCodeLoginResp, request, callback);
        }, "name", { value: "FetchQRCode" });

        /**
         * Calls FetchQRCode.
         * @function fetchQRCode
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IFetchQRCodeReq} request FetchQRCodeReq message or plain object
         * @returns {Promise<dto.QRCodeLoginResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#queryQRCodeStatus}.
         * @memberof dto.HttpService
         * @typedef QueryQRCodeStatusCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.QRCodeLoginResp} [response] QRCodeLoginResp
         */

        /**
         * Calls QueryQRCodeStatus.
         * @function queryQRCodeStatus
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IQueryQRCodeStatusReq} request QueryQRCodeStatusReq message or plain object
         * @param {dto.HttpService.QueryQRCodeStatusCallback} callback Node-style callback called with the error, if any, and QRCodeLoginResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.queryQRCodeStatus = function queryQRCodeStatus(request, callback) {
            return this.rpcCall(queryQRCodeStatus, $root.dto.QueryQRCodeStatusReq, $root.dto.QRCodeLoginResp, request, callback);
        }, "name", { value: "QueryQRCodeStatus" });

        /**
         * Calls QueryQRCodeStatus.
         * @function queryQRCodeStatus
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IQueryQRCodeStatusReq} request QueryQRCodeStatusReq message or plain object
         * @returns {Promise<dto.QRCodeLoginResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#listPlugin}.
         * @memberof dto.HttpService
         * @typedef ListPluginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.ListPluginResp} [response] ListPluginResp
         */

        /**
         * Calls ListPlugin.
         * @function listPlugin
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IListPluginReq} request ListPluginReq message or plain object
         * @param {dto.HttpService.ListPluginCallback} callback Node-style callback called with the error, if any, and ListPluginResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.listPlugin = function listPlugin(request, callback) {
            return this.rpcCall(listPlugin, $root.dto.ListPluginReq, $root.dto.ListPluginResp, request, callback);
        }, "name", { value: "ListPlugin" });

        /**
         * Calls ListPlugin.
         * @function listPlugin
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IListPluginReq} request ListPluginReq message or plain object
         * @returns {Promise<dto.ListPluginResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#savePlugin}.
         * @memberof dto.HttpService
         * @typedef SavePluginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.SavePluginResp} [response] SavePluginResp
         */

        /**
         * Calls SavePlugin.
         * @function savePlugin
         * @memberof dto.HttpService
         * @instance
         * @param {dto.ISavePluginReq} request SavePluginReq message or plain object
         * @param {dto.HttpService.SavePluginCallback} callback Node-style callback called with the error, if any, and SavePluginResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.savePlugin = function savePlugin(request, callback) {
            return this.rpcCall(savePlugin, $root.dto.SavePluginReq, $root.dto.SavePluginResp, request, callback);
        }, "name", { value: "SavePlugin" });

        /**
         * Calls SavePlugin.
         * @function savePlugin
         * @memberof dto.HttpService
         * @instance
         * @param {dto.ISavePluginReq} request SavePluginReq message or plain object
         * @returns {Promise<dto.SavePluginResp>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link dto.HttpService#deletePlugin}.
         * @memberof dto.HttpService
         * @typedef DeletePluginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {dto.DeletePluginResp} [response] DeletePluginResp
         */

        /**
         * Calls DeletePlugin.
         * @function deletePlugin
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IDeletePluginReq} request DeletePluginReq message or plain object
         * @param {dto.HttpService.DeletePluginCallback} callback Node-style callback called with the error, if any, and DeletePluginResp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(HttpService.prototype.deletePlugin = function deletePlugin(request, callback) {
            return this.rpcCall(deletePlugin, $root.dto.DeletePluginReq, $root.dto.DeletePluginResp, request, callback);
        }, "name", { value: "DeletePlugin" });

        /**
         * Calls DeletePlugin.
         * @function deletePlugin
         * @memberof dto.HttpService
         * @instance
         * @param {dto.IDeletePluginReq} request DeletePluginReq message or plain object
         * @returns {Promise<dto.DeletePluginResp>} Promise
         * @variation 2
         */

        return HttpService;
    })();

    return dto;
})();

module.exports = $root;
