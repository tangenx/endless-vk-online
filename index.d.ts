class VKOnline {
    /**
     * @param token VK Token
     */
    constructor(token: string);

    /**
     * Start endless online
     */
    async start(): Promise<void>;
};

export = VKOnline;