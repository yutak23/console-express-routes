import { Application } from 'express';

/**
 * @param {Application} app
 * @returns {void}
 * @description
 * This function will print all the routes of your express app.
 */
declare function consoleExpressRoutes(app: Application): void;

export = consoleExpressRoutes;
