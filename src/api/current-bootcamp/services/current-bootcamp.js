'use strict';

/**
 * current-bootcamp service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::current-bootcamp.current-bootcamp');
