'use strict';

/**
 * award-voting service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::award-voting.award-voting');
