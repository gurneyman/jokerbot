const { INTENTS, SENTIMENTS } = require('../intents/constants');

/**
 * @typedef {Object} MessageAnalysis
 * @property {string} intent
 * @property {string} sentiment
 */
const MessageAnalysis = {
    intent: INTENTS.UNKNOWN,
    sentiment: SENTIMENTS.NEUTRAL
}

module.exports = MessageAnalysis;