/// <reference types="node" />
declare const app: import("express-serve-static-core").Express;
export declare const Server: import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
export default app;
