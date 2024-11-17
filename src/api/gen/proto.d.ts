import * as $protobuf from "protobufjs";
/** Namespace dto. */
export namespace dto {

    /** Properties of a Bot. */
    interface IBot {

        /** Bot botId */
        botId?: (Long|null);

        /** Bot isOnline */
        isOnline?: (boolean|null);

        /** Bot captcha */
        captcha?: (dto.Bot.ICaptcha|null);
    }

    /** Represents a Bot. */
    class Bot implements IBot {

        /**
         * Constructs a new Bot.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IBot);

        /** Bot botId. */
        public botId: Long;

        /** Bot isOnline. */
        public isOnline: boolean;

        /** Bot captcha. */
        public captcha?: (dto.Bot.ICaptcha|null);

        /**
         * Creates a new Bot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Bot instance
         */
        public static create(properties?: dto.IBot): dto.Bot;

        /**
         * Encodes the specified Bot message. Does not implicitly {@link dto.Bot.verify|verify} messages.
         * @param message Bot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IBot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bot message, length delimited. Does not implicitly {@link dto.Bot.verify|verify} messages.
         * @param message Bot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IBot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Bot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Bot;

        /**
         * Decodes a Bot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Bot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Bot;

        /**
         * Verifies a Bot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Bot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Bot
         */
        public static fromObject(object: { [k: string]: any }): dto.Bot;

        /**
         * Creates a plain object from a Bot message. Also converts values to other types if specified.
         * @param message Bot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.Bot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Bot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Bot {

        /** Properties of a Captcha. */
        interface ICaptcha {

            /** Captcha botId */
            botId?: (Long|null);

            /** Captcha captchaType */
            captchaType?: (dto.Bot.Captcha.CaptchaType|null);

            /** Captcha url */
            url?: (string|null);

            /** Captcha image */
            image?: (Uint8Array|null);
        }

        /** Represents a Captcha. */
        class Captcha implements ICaptcha {

            /**
             * Constructs a new Captcha.
             * @param [properties] Properties to set
             */
            constructor(properties?: dto.Bot.ICaptcha);

            /** Captcha botId. */
            public botId: Long;

            /** Captcha captchaType. */
            public captchaType: dto.Bot.Captcha.CaptchaType;

            /** Captcha url. */
            public url?: (string|null);

            /** Captcha image. */
            public image?: (Uint8Array|null);

            /** Captcha data. */
            public data?: ("url"|"image");

            /**
             * Creates a new Captcha instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Captcha instance
             */
            public static create(properties?: dto.Bot.ICaptcha): dto.Bot.Captcha;

            /**
             * Encodes the specified Captcha message. Does not implicitly {@link dto.Bot.Captcha.verify|verify} messages.
             * @param message Captcha message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dto.Bot.ICaptcha, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Captcha message, length delimited. Does not implicitly {@link dto.Bot.Captcha.verify|verify} messages.
             * @param message Captcha message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dto.Bot.ICaptcha, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Captcha message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Captcha
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Bot.Captcha;

            /**
             * Decodes a Captcha message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Captcha
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Bot.Captcha;

            /**
             * Verifies a Captcha message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Captcha message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Captcha
             */
            public static fromObject(object: { [k: string]: any }): dto.Bot.Captcha;

            /**
             * Creates a plain object from a Captcha message. Also converts values to other types if specified.
             * @param message Captcha
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dto.Bot.Captcha, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Captcha to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Captcha {

            /** CaptchaType enum. */
            enum CaptchaType {
                PIC_CAPTCHA = 0,
                SLIDER_CAPTCHA = 1,
                UNSAFE_DEVICE_LOGIN_VERIFY = 2,
                SMS = 4
            }
        }
    }

    /** Properties of a CreateBotReq. */
    interface ICreateBotReq {

        /** CreateBotReq botId */
        botId?: (Long|null);

        /** CreateBotReq password */
        password?: (string|null);
    }

    /** Represents a CreateBotReq. */
    class CreateBotReq implements ICreateBotReq {

        /**
         * Constructs a new CreateBotReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ICreateBotReq);

        /** CreateBotReq botId. */
        public botId: Long;

        /** CreateBotReq password. */
        public password: string;

        /**
         * Creates a new CreateBotReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateBotReq instance
         */
        public static create(properties?: dto.ICreateBotReq): dto.CreateBotReq;

        /**
         * Encodes the specified CreateBotReq message. Does not implicitly {@link dto.CreateBotReq.verify|verify} messages.
         * @param message CreateBotReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ICreateBotReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateBotReq message, length delimited. Does not implicitly {@link dto.CreateBotReq.verify|verify} messages.
         * @param message CreateBotReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ICreateBotReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateBotReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.CreateBotReq;

        /**
         * Decodes a CreateBotReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.CreateBotReq;

        /**
         * Verifies a CreateBotReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateBotReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateBotReq
         */
        public static fromObject(object: { [k: string]: any }): dto.CreateBotReq;

        /**
         * Creates a plain object from a CreateBotReq message. Also converts values to other types if specified.
         * @param message CreateBotReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.CreateBotReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateBotReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateBotResp. */
    interface ICreateBotResp {
    }

    /** Represents a CreateBotResp. */
    class CreateBotResp implements ICreateBotResp {

        /**
         * Constructs a new CreateBotResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ICreateBotResp);

        /**
         * Creates a new CreateBotResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateBotResp instance
         */
        public static create(properties?: dto.ICreateBotResp): dto.CreateBotResp;

        /**
         * Encodes the specified CreateBotResp message. Does not implicitly {@link dto.CreateBotResp.verify|verify} messages.
         * @param message CreateBotResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ICreateBotResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateBotResp message, length delimited. Does not implicitly {@link dto.CreateBotResp.verify|verify} messages.
         * @param message CreateBotResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ICreateBotResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateBotResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.CreateBotResp;

        /**
         * Decodes a CreateBotResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.CreateBotResp;

        /**
         * Verifies a CreateBotResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateBotResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateBotResp
         */
        public static fromObject(object: { [k: string]: any }): dto.CreateBotResp;

        /**
         * Creates a plain object from a CreateBotResp message. Also converts values to other types if specified.
         * @param message CreateBotResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.CreateBotResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateBotResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteBotReq. */
    interface IDeleteBotReq {

        /** DeleteBotReq botId */
        botId?: (Long|null);
    }

    /** Represents a DeleteBotReq. */
    class DeleteBotReq implements IDeleteBotReq {

        /**
         * Constructs a new DeleteBotReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IDeleteBotReq);

        /** DeleteBotReq botId. */
        public botId: Long;

        /**
         * Creates a new DeleteBotReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteBotReq instance
         */
        public static create(properties?: dto.IDeleteBotReq): dto.DeleteBotReq;

        /**
         * Encodes the specified DeleteBotReq message. Does not implicitly {@link dto.DeleteBotReq.verify|verify} messages.
         * @param message DeleteBotReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IDeleteBotReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteBotReq message, length delimited. Does not implicitly {@link dto.DeleteBotReq.verify|verify} messages.
         * @param message DeleteBotReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IDeleteBotReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteBotReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.DeleteBotReq;

        /**
         * Decodes a DeleteBotReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.DeleteBotReq;

        /**
         * Verifies a DeleteBotReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteBotReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteBotReq
         */
        public static fromObject(object: { [k: string]: any }): dto.DeleteBotReq;

        /**
         * Creates a plain object from a DeleteBotReq message. Also converts values to other types if specified.
         * @param message DeleteBotReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.DeleteBotReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteBotReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteBotResp. */
    interface IDeleteBotResp {
    }

    /** Represents a DeleteBotResp. */
    class DeleteBotResp implements IDeleteBotResp {

        /**
         * Constructs a new DeleteBotResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IDeleteBotResp);

        /**
         * Creates a new DeleteBotResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteBotResp instance
         */
        public static create(properties?: dto.IDeleteBotResp): dto.DeleteBotResp;

        /**
         * Encodes the specified DeleteBotResp message. Does not implicitly {@link dto.DeleteBotResp.verify|verify} messages.
         * @param message DeleteBotResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IDeleteBotResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteBotResp message, length delimited. Does not implicitly {@link dto.DeleteBotResp.verify|verify} messages.
         * @param message DeleteBotResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IDeleteBotResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteBotResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.DeleteBotResp;

        /**
         * Decodes a DeleteBotResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.DeleteBotResp;

        /**
         * Verifies a DeleteBotResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteBotResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteBotResp
         */
        public static fromObject(object: { [k: string]: any }): dto.DeleteBotResp;

        /**
         * Creates a plain object from a DeleteBotResp message. Also converts values to other types if specified.
         * @param message DeleteBotResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.DeleteBotResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteBotResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListBotReq. */
    interface IListBotReq {
    }

    /** Represents a ListBotReq. */
    class ListBotReq implements IListBotReq {

        /**
         * Constructs a new ListBotReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListBotReq);

        /**
         * Creates a new ListBotReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListBotReq instance
         */
        public static create(properties?: dto.IListBotReq): dto.ListBotReq;

        /**
         * Encodes the specified ListBotReq message. Does not implicitly {@link dto.ListBotReq.verify|verify} messages.
         * @param message ListBotReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListBotReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListBotReq message, length delimited. Does not implicitly {@link dto.ListBotReq.verify|verify} messages.
         * @param message ListBotReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListBotReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListBotReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListBotReq;

        /**
         * Decodes a ListBotReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListBotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListBotReq;

        /**
         * Verifies a ListBotReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListBotReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListBotReq
         */
        public static fromObject(object: { [k: string]: any }): dto.ListBotReq;

        /**
         * Creates a plain object from a ListBotReq message. Also converts values to other types if specified.
         * @param message ListBotReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListBotReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListBotReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListBotResp. */
    interface IListBotResp {

        /** ListBotResp botList */
        botList?: (dto.IBot[]|null);
    }

    /** Represents a ListBotResp. */
    class ListBotResp implements IListBotResp {

        /**
         * Constructs a new ListBotResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListBotResp);

        /** ListBotResp botList. */
        public botList: dto.IBot[];

        /**
         * Creates a new ListBotResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListBotResp instance
         */
        public static create(properties?: dto.IListBotResp): dto.ListBotResp;

        /**
         * Encodes the specified ListBotResp message. Does not implicitly {@link dto.ListBotResp.verify|verify} messages.
         * @param message ListBotResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListBotResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListBotResp message, length delimited. Does not implicitly {@link dto.ListBotResp.verify|verify} messages.
         * @param message ListBotResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListBotResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListBotResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListBotResp;

        /**
         * Decodes a ListBotResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListBotResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListBotResp;

        /**
         * Verifies a ListBotResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListBotResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListBotResp
         */
        public static fromObject(object: { [k: string]: any }): dto.ListBotResp;

        /**
         * Creates a plain object from a ListBotResp message. Also converts values to other types if specified.
         * @param message ListBotResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListBotResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListBotResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetBaseInfoReq. */
    interface ISetBaseInfoReq {

        /** SetBaseInfoReq platform */
        platform?: (string|null);

        /** SetBaseInfoReq appVersion */
        appVersion?: (string|null);

        /** SetBaseInfoReq signServer */
        signServer?: (string|null);
    }

    /** Represents a SetBaseInfoReq. */
    class SetBaseInfoReq implements ISetBaseInfoReq {

        /**
         * Constructs a new SetBaseInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISetBaseInfoReq);

        /** SetBaseInfoReq platform. */
        public platform: string;

        /** SetBaseInfoReq appVersion. */
        public appVersion: string;

        /** SetBaseInfoReq signServer. */
        public signServer: string;

        /**
         * Creates a new SetBaseInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetBaseInfoReq instance
         */
        public static create(properties?: dto.ISetBaseInfoReq): dto.SetBaseInfoReq;

        /**
         * Encodes the specified SetBaseInfoReq message. Does not implicitly {@link dto.SetBaseInfoReq.verify|verify} messages.
         * @param message SetBaseInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISetBaseInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetBaseInfoReq message, length delimited. Does not implicitly {@link dto.SetBaseInfoReq.verify|verify} messages.
         * @param message SetBaseInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISetBaseInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetBaseInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetBaseInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SetBaseInfoReq;

        /**
         * Decodes a SetBaseInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetBaseInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SetBaseInfoReq;

        /**
         * Verifies a SetBaseInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetBaseInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetBaseInfoReq
         */
        public static fromObject(object: { [k: string]: any }): dto.SetBaseInfoReq;

        /**
         * Creates a plain object from a SetBaseInfoReq message. Also converts values to other types if specified.
         * @param message SetBaseInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SetBaseInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetBaseInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SetBaseInfoResp. */
    interface ISetBaseInfoResp {
    }

    /** Represents a SetBaseInfoResp. */
    class SetBaseInfoResp implements ISetBaseInfoResp {

        /**
         * Constructs a new SetBaseInfoResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISetBaseInfoResp);

        /**
         * Creates a new SetBaseInfoResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SetBaseInfoResp instance
         */
        public static create(properties?: dto.ISetBaseInfoResp): dto.SetBaseInfoResp;

        /**
         * Encodes the specified SetBaseInfoResp message. Does not implicitly {@link dto.SetBaseInfoResp.verify|verify} messages.
         * @param message SetBaseInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISetBaseInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SetBaseInfoResp message, length delimited. Does not implicitly {@link dto.SetBaseInfoResp.verify|verify} messages.
         * @param message SetBaseInfoResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISetBaseInfoResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SetBaseInfoResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SetBaseInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SetBaseInfoResp;

        /**
         * Decodes a SetBaseInfoResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SetBaseInfoResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SetBaseInfoResp;

        /**
         * Verifies a SetBaseInfoResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SetBaseInfoResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SetBaseInfoResp
         */
        public static fromObject(object: { [k: string]: any }): dto.SetBaseInfoResp;

        /**
         * Creates a plain object from a SetBaseInfoResp message. Also converts values to other types if specified.
         * @param message SetBaseInfoResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SetBaseInfoResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SetBaseInfoResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAllVersionReq. */
    interface IGetAllVersionReq {
    }

    /** Represents a GetAllVersionReq. */
    class GetAllVersionReq implements IGetAllVersionReq {

        /**
         * Constructs a new GetAllVersionReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetAllVersionReq);

        /**
         * Creates a new GetAllVersionReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllVersionReq instance
         */
        public static create(properties?: dto.IGetAllVersionReq): dto.GetAllVersionReq;

        /**
         * Encodes the specified GetAllVersionReq message. Does not implicitly {@link dto.GetAllVersionReq.verify|verify} messages.
         * @param message GetAllVersionReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetAllVersionReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAllVersionReq message, length delimited. Does not implicitly {@link dto.GetAllVersionReq.verify|verify} messages.
         * @param message GetAllVersionReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetAllVersionReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllVersionReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllVersionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetAllVersionReq;

        /**
         * Decodes a GetAllVersionReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAllVersionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetAllVersionReq;

        /**
         * Verifies a GetAllVersionReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAllVersionReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAllVersionReq
         */
        public static fromObject(object: { [k: string]: any }): dto.GetAllVersionReq;

        /**
         * Creates a plain object from a GetAllVersionReq message. Also converts values to other types if specified.
         * @param message GetAllVersionReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetAllVersionReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAllVersionReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetAllVersionResp. */
    interface IGetAllVersionResp {

        /** GetAllVersionResp allVersion */
        allVersion?: (dto.GetAllVersionResp.IAllVersion[]|null);
    }

    /** Represents a GetAllVersionResp. */
    class GetAllVersionResp implements IGetAllVersionResp {

        /**
         * Constructs a new GetAllVersionResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IGetAllVersionResp);

        /** GetAllVersionResp allVersion. */
        public allVersion: dto.GetAllVersionResp.IAllVersion[];

        /**
         * Creates a new GetAllVersionResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetAllVersionResp instance
         */
        public static create(properties?: dto.IGetAllVersionResp): dto.GetAllVersionResp;

        /**
         * Encodes the specified GetAllVersionResp message. Does not implicitly {@link dto.GetAllVersionResp.verify|verify} messages.
         * @param message GetAllVersionResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IGetAllVersionResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetAllVersionResp message, length delimited. Does not implicitly {@link dto.GetAllVersionResp.verify|verify} messages.
         * @param message GetAllVersionResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IGetAllVersionResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetAllVersionResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetAllVersionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetAllVersionResp;

        /**
         * Decodes a GetAllVersionResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetAllVersionResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetAllVersionResp;

        /**
         * Verifies a GetAllVersionResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetAllVersionResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetAllVersionResp
         */
        public static fromObject(object: { [k: string]: any }): dto.GetAllVersionResp;

        /**
         * Creates a plain object from a GetAllVersionResp message. Also converts values to other types if specified.
         * @param message GetAllVersionResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.GetAllVersionResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetAllVersionResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GetAllVersionResp {

        /** Properties of an AllVersion. */
        interface IAllVersion {

            /** AllVersion platform */
            platform?: (string|null);

            /** AllVersion appVersion */
            appVersion?: (string[]|null);
        }

        /** Represents an AllVersion. */
        class AllVersion implements IAllVersion {

            /**
             * Constructs a new AllVersion.
             * @param [properties] Properties to set
             */
            constructor(properties?: dto.GetAllVersionResp.IAllVersion);

            /** AllVersion platform. */
            public platform: string;

            /** AllVersion appVersion. */
            public appVersion: string[];

            /**
             * Creates a new AllVersion instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AllVersion instance
             */
            public static create(properties?: dto.GetAllVersionResp.IAllVersion): dto.GetAllVersionResp.AllVersion;

            /**
             * Encodes the specified AllVersion message. Does not implicitly {@link dto.GetAllVersionResp.AllVersion.verify|verify} messages.
             * @param message AllVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dto.GetAllVersionResp.IAllVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AllVersion message, length delimited. Does not implicitly {@link dto.GetAllVersionResp.AllVersion.verify|verify} messages.
             * @param message AllVersion message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dto.GetAllVersionResp.IAllVersion, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AllVersion message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AllVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.GetAllVersionResp.AllVersion;

            /**
             * Decodes an AllVersion message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AllVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.GetAllVersionResp.AllVersion;

            /**
             * Verifies an AllVersion message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AllVersion message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AllVersion
             */
            public static fromObject(object: { [k: string]: any }): dto.GetAllVersionResp.AllVersion;

            /**
             * Creates a plain object from an AllVersion message. Also converts values to other types if specified.
             * @param message AllVersion
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dto.GetAllVersionResp.AllVersion, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AllVersion to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a SolveCaptchaReq. */
    interface ISolveCaptchaReq {

        /** SolveCaptchaReq botId */
        botId?: (Long|null);

        /** SolveCaptchaReq result */
        result?: (string|null);
    }

    /** Represents a SolveCaptchaReq. */
    class SolveCaptchaReq implements ISolveCaptchaReq {

        /**
         * Constructs a new SolveCaptchaReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISolveCaptchaReq);

        /** SolveCaptchaReq botId. */
        public botId: Long;

        /** SolveCaptchaReq result. */
        public result: string;

        /**
         * Creates a new SolveCaptchaReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SolveCaptchaReq instance
         */
        public static create(properties?: dto.ISolveCaptchaReq): dto.SolveCaptchaReq;

        /**
         * Encodes the specified SolveCaptchaReq message. Does not implicitly {@link dto.SolveCaptchaReq.verify|verify} messages.
         * @param message SolveCaptchaReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISolveCaptchaReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SolveCaptchaReq message, length delimited. Does not implicitly {@link dto.SolveCaptchaReq.verify|verify} messages.
         * @param message SolveCaptchaReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISolveCaptchaReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SolveCaptchaReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SolveCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SolveCaptchaReq;

        /**
         * Decodes a SolveCaptchaReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SolveCaptchaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SolveCaptchaReq;

        /**
         * Verifies a SolveCaptchaReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SolveCaptchaReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SolveCaptchaReq
         */
        public static fromObject(object: { [k: string]: any }): dto.SolveCaptchaReq;

        /**
         * Creates a plain object from a SolveCaptchaReq message. Also converts values to other types if specified.
         * @param message SolveCaptchaReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SolveCaptchaReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SolveCaptchaReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SolveCaptchaResp. */
    interface ISolveCaptchaResp {
    }

    /** Represents a SolveCaptchaResp. */
    class SolveCaptchaResp implements ISolveCaptchaResp {

        /**
         * Constructs a new SolveCaptchaResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISolveCaptchaResp);

        /**
         * Creates a new SolveCaptchaResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SolveCaptchaResp instance
         */
        public static create(properties?: dto.ISolveCaptchaResp): dto.SolveCaptchaResp;

        /**
         * Encodes the specified SolveCaptchaResp message. Does not implicitly {@link dto.SolveCaptchaResp.verify|verify} messages.
         * @param message SolveCaptchaResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISolveCaptchaResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SolveCaptchaResp message, length delimited. Does not implicitly {@link dto.SolveCaptchaResp.verify|verify} messages.
         * @param message SolveCaptchaResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISolveCaptchaResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SolveCaptchaResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SolveCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SolveCaptchaResp;

        /**
         * Decodes a SolveCaptchaResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SolveCaptchaResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SolveCaptchaResp;

        /**
         * Verifies a SolveCaptchaResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SolveCaptchaResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SolveCaptchaResp
         */
        public static fromObject(object: { [k: string]: any }): dto.SolveCaptchaResp;

        /**
         * Creates a plain object from a SolveCaptchaResp message. Also converts values to other types if specified.
         * @param message SolveCaptchaResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SolveCaptchaResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SolveCaptchaResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FetchQRCodeReq. */
    interface IFetchQRCodeReq {

        /** FetchQRCodeReq deviceSeed */
        deviceSeed?: (Long|null);
    }

    /** Represents a FetchQRCodeReq. */
    class FetchQRCodeReq implements IFetchQRCodeReq {

        /**
         * Constructs a new FetchQRCodeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IFetchQRCodeReq);

        /** FetchQRCodeReq deviceSeed. */
        public deviceSeed: Long;

        /**
         * Creates a new FetchQRCodeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FetchQRCodeReq instance
         */
        public static create(properties?: dto.IFetchQRCodeReq): dto.FetchQRCodeReq;

        /**
         * Encodes the specified FetchQRCodeReq message. Does not implicitly {@link dto.FetchQRCodeReq.verify|verify} messages.
         * @param message FetchQRCodeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IFetchQRCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FetchQRCodeReq message, length delimited. Does not implicitly {@link dto.FetchQRCodeReq.verify|verify} messages.
         * @param message FetchQRCodeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IFetchQRCodeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FetchQRCodeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FetchQRCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.FetchQRCodeReq;

        /**
         * Decodes a FetchQRCodeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FetchQRCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.FetchQRCodeReq;

        /**
         * Verifies a FetchQRCodeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FetchQRCodeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FetchQRCodeReq
         */
        public static fromObject(object: { [k: string]: any }): dto.FetchQRCodeReq;

        /**
         * Creates a plain object from a FetchQRCodeReq message. Also converts values to other types if specified.
         * @param message FetchQRCodeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.FetchQRCodeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FetchQRCodeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryQRCodeStatusReq. */
    interface IQueryQRCodeStatusReq {

        /** QueryQRCodeStatusReq sig */
        sig?: (Uint8Array|null);

        /** QueryQRCodeStatusReq botId */
        botId?: (Long|null);
    }

    /** Represents a QueryQRCodeStatusReq. */
    class QueryQRCodeStatusReq implements IQueryQRCodeStatusReq {

        /**
         * Constructs a new QueryQRCodeStatusReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IQueryQRCodeStatusReq);

        /** QueryQRCodeStatusReq sig. */
        public sig: Uint8Array;

        /** QueryQRCodeStatusReq botId. */
        public botId: Long;

        /**
         * Creates a new QueryQRCodeStatusReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryQRCodeStatusReq instance
         */
        public static create(properties?: dto.IQueryQRCodeStatusReq): dto.QueryQRCodeStatusReq;

        /**
         * Encodes the specified QueryQRCodeStatusReq message. Does not implicitly {@link dto.QueryQRCodeStatusReq.verify|verify} messages.
         * @param message QueryQRCodeStatusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IQueryQRCodeStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryQRCodeStatusReq message, length delimited. Does not implicitly {@link dto.QueryQRCodeStatusReq.verify|verify} messages.
         * @param message QueryQRCodeStatusReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IQueryQRCodeStatusReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryQRCodeStatusReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryQRCodeStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.QueryQRCodeStatusReq;

        /**
         * Decodes a QueryQRCodeStatusReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryQRCodeStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.QueryQRCodeStatusReq;

        /**
         * Verifies a QueryQRCodeStatusReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryQRCodeStatusReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryQRCodeStatusReq
         */
        public static fromObject(object: { [k: string]: any }): dto.QueryQRCodeStatusReq;

        /**
         * Creates a plain object from a QueryQRCodeStatusReq message. Also converts values to other types if specified.
         * @param message QueryQRCodeStatusReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.QueryQRCodeStatusReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryQRCodeStatusReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QRCodeLoginResp. */
    interface IQRCodeLoginResp {

        /** QRCodeLoginResp state */
        state?: (dto.QRCodeLoginResp.QRCodeLoginState|null);

        /** QRCodeLoginResp imageData */
        imageData?: (Uint8Array|null);

        /** QRCodeLoginResp sig */
        sig?: (Uint8Array|null);
    }

    /** Represents a QRCodeLoginResp. */
    class QRCodeLoginResp implements IQRCodeLoginResp {

        /**
         * Constructs a new QRCodeLoginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IQRCodeLoginResp);

        /** QRCodeLoginResp state. */
        public state: dto.QRCodeLoginResp.QRCodeLoginState;

        /** QRCodeLoginResp imageData. */
        public imageData: Uint8Array;

        /** QRCodeLoginResp sig. */
        public sig: Uint8Array;

        /**
         * Creates a new QRCodeLoginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QRCodeLoginResp instance
         */
        public static create(properties?: dto.IQRCodeLoginResp): dto.QRCodeLoginResp;

        /**
         * Encodes the specified QRCodeLoginResp message. Does not implicitly {@link dto.QRCodeLoginResp.verify|verify} messages.
         * @param message QRCodeLoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IQRCodeLoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QRCodeLoginResp message, length delimited. Does not implicitly {@link dto.QRCodeLoginResp.verify|verify} messages.
         * @param message QRCodeLoginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IQRCodeLoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QRCodeLoginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QRCodeLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.QRCodeLoginResp;

        /**
         * Decodes a QRCodeLoginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QRCodeLoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.QRCodeLoginResp;

        /**
         * Verifies a QRCodeLoginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QRCodeLoginResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QRCodeLoginResp
         */
        public static fromObject(object: { [k: string]: any }): dto.QRCodeLoginResp;

        /**
         * Creates a plain object from a QRCodeLoginResp message. Also converts values to other types if specified.
         * @param message QRCodeLoginResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.QRCodeLoginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QRCodeLoginResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace QRCodeLoginResp {

        /** QRCodeLoginState enum. */
        enum QRCodeLoginState {
            Unknown = 0,
            QRCodeImageFetch = 1,
            QRCodeWaitingForScan = 2,
            QRCodeWaitingForConfirm = 3,
            QRCodeTimeout = 4,
            QRCodeConfirmed = 5,
            QRCodeCanceled = 6
        }
    }

    /** Properties of a Plugin. */
    interface IPlugin {

        /** Plugin name */
        name?: (string|null);

        /** Plugin disabled */
        disabled?: (boolean|null);

        /** Plugin json */
        json?: (boolean|null);

        /** Plugin protocol */
        protocol?: (number|null);

        /** Plugin urls */
        urls?: (string[]|null);

        /** Plugin eventFilter */
        eventFilter?: (number[]|null);

        /** Plugin apiFilter */
        apiFilter?: (number[]|null);

        /** Plugin regexFilter */
        regexFilter?: (string|null);

        /** Plugin regexReplace */
        regexReplace?: (string|null);

        /** Plugin extraHeader */
        extraHeader?: (dto.Plugin.IHeader[]|null);
    }

    /** Represents a Plugin. */
    class Plugin implements IPlugin {

        /**
         * Constructs a new Plugin.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IPlugin);

        /** Plugin name. */
        public name: string;

        /** Plugin disabled. */
        public disabled: boolean;

        /** Plugin json. */
        public json: boolean;

        /** Plugin protocol. */
        public protocol: number;

        /** Plugin urls. */
        public urls: string[];

        /** Plugin eventFilter. */
        public eventFilter: number[];

        /** Plugin apiFilter. */
        public apiFilter: number[];

        /** Plugin regexFilter. */
        public regexFilter: string;

        /** Plugin regexReplace. */
        public regexReplace: string;

        /** Plugin extraHeader. */
        public extraHeader: dto.Plugin.IHeader[];

        /**
         * Creates a new Plugin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Plugin instance
         */
        public static create(properties?: dto.IPlugin): dto.Plugin;

        /**
         * Encodes the specified Plugin message. Does not implicitly {@link dto.Plugin.verify|verify} messages.
         * @param message Plugin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IPlugin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Plugin message, length delimited. Does not implicitly {@link dto.Plugin.verify|verify} messages.
         * @param message Plugin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IPlugin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Plugin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Plugin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Plugin;

        /**
         * Decodes a Plugin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Plugin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Plugin;

        /**
         * Verifies a Plugin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Plugin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Plugin
         */
        public static fromObject(object: { [k: string]: any }): dto.Plugin;

        /**
         * Creates a plain object from a Plugin message. Also converts values to other types if specified.
         * @param message Plugin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.Plugin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Plugin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Plugin {

        /** Properties of a Header. */
        interface IHeader {

            /** Header key */
            key?: (string|null);

            /** Header value */
            value?: (string[]|null);
        }

        /** Represents a Header. */
        class Header implements IHeader {

            /**
             * Constructs a new Header.
             * @param [properties] Properties to set
             */
            constructor(properties?: dto.Plugin.IHeader);

            /** Header key. */
            public key: string;

            /** Header value. */
            public value: string[];

            /**
             * Creates a new Header instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Header instance
             */
            public static create(properties?: dto.Plugin.IHeader): dto.Plugin.Header;

            /**
             * Encodes the specified Header message. Does not implicitly {@link dto.Plugin.Header.verify|verify} messages.
             * @param message Header message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: dto.Plugin.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Header message, length delimited. Does not implicitly {@link dto.Plugin.Header.verify|verify} messages.
             * @param message Header message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: dto.Plugin.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Header message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.Plugin.Header;

            /**
             * Decodes a Header message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Header
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.Plugin.Header;

            /**
             * Verifies a Header message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Header message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Header
             */
            public static fromObject(object: { [k: string]: any }): dto.Plugin.Header;

            /**
             * Creates a plain object from a Header message. Also converts values to other types if specified.
             * @param message Header
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: dto.Plugin.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Header to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ListPluginReq. */
    interface IListPluginReq {
    }

    /** Represents a ListPluginReq. */
    class ListPluginReq implements IListPluginReq {

        /**
         * Constructs a new ListPluginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListPluginReq);

        /**
         * Creates a new ListPluginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListPluginReq instance
         */
        public static create(properties?: dto.IListPluginReq): dto.ListPluginReq;

        /**
         * Encodes the specified ListPluginReq message. Does not implicitly {@link dto.ListPluginReq.verify|verify} messages.
         * @param message ListPluginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListPluginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListPluginReq message, length delimited. Does not implicitly {@link dto.ListPluginReq.verify|verify} messages.
         * @param message ListPluginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListPluginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListPluginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListPluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListPluginReq;

        /**
         * Decodes a ListPluginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListPluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListPluginReq;

        /**
         * Verifies a ListPluginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListPluginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListPluginReq
         */
        public static fromObject(object: { [k: string]: any }): dto.ListPluginReq;

        /**
         * Creates a plain object from a ListPluginReq message. Also converts values to other types if specified.
         * @param message ListPluginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListPluginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListPluginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListPluginResp. */
    interface IListPluginResp {

        /** ListPluginResp plugins */
        plugins?: (dto.IPlugin[]|null);
    }

    /** Represents a ListPluginResp. */
    class ListPluginResp implements IListPluginResp {

        /**
         * Constructs a new ListPluginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IListPluginResp);

        /** ListPluginResp plugins. */
        public plugins: dto.IPlugin[];

        /**
         * Creates a new ListPluginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListPluginResp instance
         */
        public static create(properties?: dto.IListPluginResp): dto.ListPluginResp;

        /**
         * Encodes the specified ListPluginResp message. Does not implicitly {@link dto.ListPluginResp.verify|verify} messages.
         * @param message ListPluginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IListPluginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListPluginResp message, length delimited. Does not implicitly {@link dto.ListPluginResp.verify|verify} messages.
         * @param message ListPluginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IListPluginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListPluginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListPluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.ListPluginResp;

        /**
         * Decodes a ListPluginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListPluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.ListPluginResp;

        /**
         * Verifies a ListPluginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListPluginResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListPluginResp
         */
        public static fromObject(object: { [k: string]: any }): dto.ListPluginResp;

        /**
         * Creates a plain object from a ListPluginResp message. Also converts values to other types if specified.
         * @param message ListPluginResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.ListPluginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListPluginResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SavePluginReq. */
    interface ISavePluginReq {

        /** SavePluginReq plugin */
        plugin?: (dto.IPlugin|null);
    }

    /** Represents a SavePluginReq. */
    class SavePluginReq implements ISavePluginReq {

        /**
         * Constructs a new SavePluginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISavePluginReq);

        /** SavePluginReq plugin. */
        public plugin?: (dto.IPlugin|null);

        /**
         * Creates a new SavePluginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SavePluginReq instance
         */
        public static create(properties?: dto.ISavePluginReq): dto.SavePluginReq;

        /**
         * Encodes the specified SavePluginReq message. Does not implicitly {@link dto.SavePluginReq.verify|verify} messages.
         * @param message SavePluginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISavePluginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SavePluginReq message, length delimited. Does not implicitly {@link dto.SavePluginReq.verify|verify} messages.
         * @param message SavePluginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISavePluginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SavePluginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SavePluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SavePluginReq;

        /**
         * Decodes a SavePluginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SavePluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SavePluginReq;

        /**
         * Verifies a SavePluginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SavePluginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SavePluginReq
         */
        public static fromObject(object: { [k: string]: any }): dto.SavePluginReq;

        /**
         * Creates a plain object from a SavePluginReq message. Also converts values to other types if specified.
         * @param message SavePluginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SavePluginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SavePluginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SavePluginResp. */
    interface ISavePluginResp {
    }

    /** Represents a SavePluginResp. */
    class SavePluginResp implements ISavePluginResp {

        /**
         * Constructs a new SavePluginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.ISavePluginResp);

        /**
         * Creates a new SavePluginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SavePluginResp instance
         */
        public static create(properties?: dto.ISavePluginResp): dto.SavePluginResp;

        /**
         * Encodes the specified SavePluginResp message. Does not implicitly {@link dto.SavePluginResp.verify|verify} messages.
         * @param message SavePluginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.ISavePluginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SavePluginResp message, length delimited. Does not implicitly {@link dto.SavePluginResp.verify|verify} messages.
         * @param message SavePluginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.ISavePluginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SavePluginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SavePluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.SavePluginResp;

        /**
         * Decodes a SavePluginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SavePluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.SavePluginResp;

        /**
         * Verifies a SavePluginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SavePluginResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SavePluginResp
         */
        public static fromObject(object: { [k: string]: any }): dto.SavePluginResp;

        /**
         * Creates a plain object from a SavePluginResp message. Also converts values to other types if specified.
         * @param message SavePluginResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.SavePluginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SavePluginResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeletePluginReq. */
    interface IDeletePluginReq {

        /** DeletePluginReq name */
        name?: (string|null);
    }

    /** Represents a DeletePluginReq. */
    class DeletePluginReq implements IDeletePluginReq {

        /**
         * Constructs a new DeletePluginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IDeletePluginReq);

        /** DeletePluginReq name. */
        public name: string;

        /**
         * Creates a new DeletePluginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeletePluginReq instance
         */
        public static create(properties?: dto.IDeletePluginReq): dto.DeletePluginReq;

        /**
         * Encodes the specified DeletePluginReq message. Does not implicitly {@link dto.DeletePluginReq.verify|verify} messages.
         * @param message DeletePluginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IDeletePluginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeletePluginReq message, length delimited. Does not implicitly {@link dto.DeletePluginReq.verify|verify} messages.
         * @param message DeletePluginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IDeletePluginReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeletePluginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeletePluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.DeletePluginReq;

        /**
         * Decodes a DeletePluginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeletePluginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.DeletePluginReq;

        /**
         * Verifies a DeletePluginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeletePluginReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeletePluginReq
         */
        public static fromObject(object: { [k: string]: any }): dto.DeletePluginReq;

        /**
         * Creates a plain object from a DeletePluginReq message. Also converts values to other types if specified.
         * @param message DeletePluginReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.DeletePluginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeletePluginReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeletePluginResp. */
    interface IDeletePluginResp {
    }

    /** Represents a DeletePluginResp. */
    class DeletePluginResp implements IDeletePluginResp {

        /**
         * Constructs a new DeletePluginResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: dto.IDeletePluginResp);

        /**
         * Creates a new DeletePluginResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeletePluginResp instance
         */
        public static create(properties?: dto.IDeletePluginResp): dto.DeletePluginResp;

        /**
         * Encodes the specified DeletePluginResp message. Does not implicitly {@link dto.DeletePluginResp.verify|verify} messages.
         * @param message DeletePluginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dto.IDeletePluginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeletePluginResp message, length delimited. Does not implicitly {@link dto.DeletePluginResp.verify|verify} messages.
         * @param message DeletePluginResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dto.IDeletePluginResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeletePluginResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeletePluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dto.DeletePluginResp;

        /**
         * Decodes a DeletePluginResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeletePluginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dto.DeletePluginResp;

        /**
         * Verifies a DeletePluginResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeletePluginResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeletePluginResp
         */
        public static fromObject(object: { [k: string]: any }): dto.DeletePluginResp;

        /**
         * Creates a plain object from a DeletePluginResp message. Also converts values to other types if specified.
         * @param message DeletePluginResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dto.DeletePluginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeletePluginResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a HttpService */
    class HttpService extends $protobuf.rpc.Service {

        /**
         * Constructs a new HttpService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new HttpService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): HttpService;

        /**
         * Calls CreateBot.
         * @param request CreateBotReq message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateBotResp
         */
        public createBot(request: dto.ICreateBotReq, callback: dto.HttpService.CreateBotCallback): void;

        /**
         * Calls CreateBot.
         * @param request CreateBotReq message or plain object
         * @returns Promise
         */
        public createBot(request: dto.ICreateBotReq): Promise<dto.CreateBotResp>;

        /**
         * Calls DeleteBot.
         * @param request DeleteBotReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteBotResp
         */
        public deleteBot(request: dto.IDeleteBotReq, callback: dto.HttpService.DeleteBotCallback): void;

        /**
         * Calls DeleteBot.
         * @param request DeleteBotReq message or plain object
         * @returns Promise
         */
        public deleteBot(request: dto.IDeleteBotReq): Promise<dto.DeleteBotResp>;

        /**
         * Calls ListBot.
         * @param request ListBotReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListBotResp
         */
        public listBot(request: dto.IListBotReq, callback: dto.HttpService.ListBotCallback): void;

        /**
         * Calls ListBot.
         * @param request ListBotReq message or plain object
         * @returns Promise
         */
        public listBot(request: dto.IListBotReq): Promise<dto.ListBotResp>;

        /**
         * Calls SolveCaptcha.
         * @param request SolveCaptchaReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SolveCaptchaResp
         */
        public solveCaptcha(request: dto.ISolveCaptchaReq, callback: dto.HttpService.SolveCaptchaCallback): void;

        /**
         * Calls SolveCaptcha.
         * @param request SolveCaptchaReq message or plain object
         * @returns Promise
         */
        public solveCaptcha(request: dto.ISolveCaptchaReq): Promise<dto.SolveCaptchaResp>;

        /**
         * Calls FetchQRCode.
         * @param request FetchQRCodeReq message or plain object
         * @param callback Node-style callback called with the error, if any, and QRCodeLoginResp
         */
        public fetchQRCode(request: dto.IFetchQRCodeReq, callback: dto.HttpService.FetchQRCodeCallback): void;

        /**
         * Calls FetchQRCode.
         * @param request FetchQRCodeReq message or plain object
         * @returns Promise
         */
        public fetchQRCode(request: dto.IFetchQRCodeReq): Promise<dto.QRCodeLoginResp>;

        /**
         * Calls QueryQRCodeStatus.
         * @param request QueryQRCodeStatusReq message or plain object
         * @param callback Node-style callback called with the error, if any, and QRCodeLoginResp
         */
        public queryQRCodeStatus(request: dto.IQueryQRCodeStatusReq, callback: dto.HttpService.QueryQRCodeStatusCallback): void;

        /**
         * Calls QueryQRCodeStatus.
         * @param request QueryQRCodeStatusReq message or plain object
         * @returns Promise
         */
        public queryQRCodeStatus(request: dto.IQueryQRCodeStatusReq): Promise<dto.QRCodeLoginResp>;

        /**
         * Calls ListPlugin.
         * @param request ListPluginReq message or plain object
         * @param callback Node-style callback called with the error, if any, and ListPluginResp
         */
        public listPlugin(request: dto.IListPluginReq, callback: dto.HttpService.ListPluginCallback): void;

        /**
         * Calls ListPlugin.
         * @param request ListPluginReq message or plain object
         * @returns Promise
         */
        public listPlugin(request: dto.IListPluginReq): Promise<dto.ListPluginResp>;

        /**
         * Calls SavePlugin.
         * @param request SavePluginReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SavePluginResp
         */
        public savePlugin(request: dto.ISavePluginReq, callback: dto.HttpService.SavePluginCallback): void;

        /**
         * Calls SavePlugin.
         * @param request SavePluginReq message or plain object
         * @returns Promise
         */
        public savePlugin(request: dto.ISavePluginReq): Promise<dto.SavePluginResp>;

        /**
         * Calls DeletePlugin.
         * @param request DeletePluginReq message or plain object
         * @param callback Node-style callback called with the error, if any, and DeletePluginResp
         */
        public deletePlugin(request: dto.IDeletePluginReq, callback: dto.HttpService.DeletePluginCallback): void;

        /**
         * Calls DeletePlugin.
         * @param request DeletePluginReq message or plain object
         * @returns Promise
         */
        public deletePlugin(request: dto.IDeletePluginReq): Promise<dto.DeletePluginResp>;

        /**
         * Calls SetBaseInfo.
         * @param request SetBaseInfoReq message or plain object
         * @param callback Node-style callback called with the error, if any, and SetBaseInfoResp
         */
        public setBaseInfo(request: dto.ISetBaseInfoReq, callback: dto.HttpService.SetBaseInfoCallback): void;

        /**
         * Calls SetBaseInfo.
         * @param request SetBaseInfoReq message or plain object
         * @returns Promise
         */
        public setBaseInfo(request: dto.ISetBaseInfoReq): Promise<dto.SetBaseInfoResp>;

        /**
         * Calls GetAllVersion.
         * @param request GetAllVersionReq message or plain object
         * @param callback Node-style callback called with the error, if any, and GetAllVersionResp
         */
        public getAllVersion(request: dto.IGetAllVersionReq, callback: dto.HttpService.GetAllVersionCallback): void;

        /**
         * Calls GetAllVersion.
         * @param request GetAllVersionReq message or plain object
         * @returns Promise
         */
        public getAllVersion(request: dto.IGetAllVersionReq): Promise<dto.GetAllVersionResp>;
    }

    namespace HttpService {

        /**
         * Callback as used by {@link dto.HttpService#createBot}.
         * @param error Error, if any
         * @param [response] CreateBotResp
         */
        type CreateBotCallback = (error: (Error|null), response?: dto.CreateBotResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#deleteBot}.
         * @param error Error, if any
         * @param [response] DeleteBotResp
         */
        type DeleteBotCallback = (error: (Error|null), response?: dto.DeleteBotResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#listBot}.
         * @param error Error, if any
         * @param [response] ListBotResp
         */
        type ListBotCallback = (error: (Error|null), response?: dto.ListBotResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#solveCaptcha}.
         * @param error Error, if any
         * @param [response] SolveCaptchaResp
         */
        type SolveCaptchaCallback = (error: (Error|null), response?: dto.SolveCaptchaResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#fetchQRCode}.
         * @param error Error, if any
         * @param [response] QRCodeLoginResp
         */
        type FetchQRCodeCallback = (error: (Error|null), response?: dto.QRCodeLoginResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#queryQRCodeStatus}.
         * @param error Error, if any
         * @param [response] QRCodeLoginResp
         */
        type QueryQRCodeStatusCallback = (error: (Error|null), response?: dto.QRCodeLoginResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#listPlugin}.
         * @param error Error, if any
         * @param [response] ListPluginResp
         */
        type ListPluginCallback = (error: (Error|null), response?: dto.ListPluginResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#savePlugin}.
         * @param error Error, if any
         * @param [response] SavePluginResp
         */
        type SavePluginCallback = (error: (Error|null), response?: dto.SavePluginResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#deletePlugin}.
         * @param error Error, if any
         * @param [response] DeletePluginResp
         */
        type DeletePluginCallback = (error: (Error|null), response?: dto.DeletePluginResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#setBaseInfo}.
         * @param error Error, if any
         * @param [response] SetBaseInfoResp
         */
        type SetBaseInfoCallback = (error: (Error|null), response?: dto.SetBaseInfoResp) => void;

        /**
         * Callback as used by {@link dto.HttpService#getAllVersion}.
         * @param error Error, if any
         * @param [response] GetAllVersionResp
         */
        type GetAllVersionCallback = (error: (Error|null), response?: dto.GetAllVersionResp) => void;
    }
}
